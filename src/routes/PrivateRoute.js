import React from 'react'
import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute({component : Component, ...res }) {
    const loginUser = localStorage.getItem("loginUser");

    return (
        <>
            <Route {...res}>
                {loginUser !== null ?
                    <Component />
                    :
                    <Redirect to={{ pathname: '/login' }} />
                }
            </Route>
        </>
    )
}
