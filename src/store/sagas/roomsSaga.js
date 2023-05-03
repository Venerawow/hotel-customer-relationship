import { call, put, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../../constants/actionTypes';
import { getRoomsFirebase } from '../../firebase';
import { getRoomsSuccess } from '../actions/roomsActions';
import { showNotification } from '../actions/notificationsActions';
import { NOTIFICATION_MESSAGE, NOTIFICATION_STATUS } from '../../constants/notifications';

//получить данные комнаты и записать их в хранилище
function* getRooms() {   //будет вызываться при монтировании MainLayout
    try {
        const rooms = yield call(getRoomsFirebase);
        yield put(getRoomsSuccess(rooms)); //будет вызываться при успешном извлечении данных
    } catch (err) {
        yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.GET_ROOMS_ERROR));  //будет вызываться при извлечении данных
    }
}

export default function* watchRoomsSaga() {
    yield takeEvery(ACTION_TYPES.GET_ROOMS, getRooms);
}