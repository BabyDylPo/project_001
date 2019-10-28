import React from 'react';
import { Route, withRouter } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, exact }) => (
    <Route path={ path } exact={ exact } render={(props) => (
        <Component { ...props } />
    )} />
);

export const AuthRoute = withRouter(Auth);