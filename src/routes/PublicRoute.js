import React from 'react';
import { Redirect, Route } from 'react-router-dom';




export default function PublicRoute({component : Component, ...res }) {
    const loginUser = localStorage.getItem("loginUser");
    
    return (
            <>
               <Route {...res}>
                    {loginUser !== null ?
                        <Redirect to={{ pathname: '/home' }} />
                        :
                        <Component />
                    }
               </Route>
            </>
    )
}
