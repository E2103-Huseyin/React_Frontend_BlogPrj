import React from 'react'
import Detail from "./pages/Detail"
import Login from "./pages/Login"
import Mainpage from "./pages/Mainpage"
import {BrowserRouter ,Route, Switch} from "react-router-dom";
import PrimarySearchAppBar from "./components/Navbar/index";

const MyRouter = () => {
    return (
        <>
            <BrowserRouter >
            <PrimarySearchAppBar/> 
            <Switch>
                <Route path="/detail/:slug" component={Detail} exect/>
                <Route path="/auth/login" component={Login} exect/>
                <Route path="/" component={Mainpage}/>
            </Switch>
            </BrowserRouter>
            
        </>
    )
}

export default MyRouter
