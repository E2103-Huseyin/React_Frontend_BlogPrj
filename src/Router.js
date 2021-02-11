import React from 'react'
import App from "./App"
import Detail from "./pages/Detail"
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
                <Route path="/" component={Mainpage}/>
            </Switch>
            </BrowserRouter>
            
        </>
    )
}

export default MyRouter
