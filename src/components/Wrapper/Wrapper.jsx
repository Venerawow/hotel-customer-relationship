import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../MainLayout';
import AuthPage from '../../pages/AuthPage/AuthPage';
import { getIsAuthorized } from '../../store/selectors/usersSelectors';
import { getNotificationData } from '../../store/selectors/notificationsSelectors';
import { getAccounts, logIn } from '../../store/actions/usersActions';
import { clearNotifications } from '../../store/actions/notificationsActions';

const Wrapper = () => {
    const isAuthorized = useSelector(getIsAuthorized);
    const notification = useSelector(getNotificationData);
    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(getAccounts());
        const authData = localStorage.getItem('authData');

        if (!authData) return;

        setTimeout(() => {
            dispatch(logIn(JSON.parse(authData)));
        }, 1000);
    }, []);

    useEffect(() => {
        if (!notification) return;

        const { status, message: content, isShow } = notification;

        if (isShow) {
            message[status](content).then(dispatch(clearNotifications()));
        }
    }, [notification]);

    return (
        <Switch>
            <Route exact path="/" component={isAuthorized ? MainLayout : AuthPage} />
        </Switch>
    );
};

export default Wrapper;