import React from 'react'
import PrivateRoute from './PrivateRoute';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import PublicRoute from './PublicRoute';
import {
    AboutUs,
    Homepage,
    Careers,
    ContactUs,
    OurService,
    Portfolio,
    Login,
    Registration
} from '../components'


export default function Routers() {

    return (
        <>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/home" component={Homepage} />
                <PublicRoute path="/login" component={Login} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/aboutUs" component={AboutUs} />
                <PublicRoute path="/registration" component={Registration} />
                <Route path="/ourservices" component={OurService} />
                <PrivateRoute path="/portfolio" component={Portfolio} />
                <PrivateRoute path="/careers" component={Careers} />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}


