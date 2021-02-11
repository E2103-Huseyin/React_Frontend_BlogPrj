import React from 'react'
import App from "./App"
import Detail from "./pages/Detail"
import Mainpage from "./pages/Mainpage"
import {BrowserRouter ,Route, Switch} from "react-router-dom"

const MyRouter = () => {
    return (
        <>
            <BrowserRouter >
            <Switch>
                <Route path="/detail/:slug" component={Detail} exect/>
                <Route path="/" component={Mainpage}/>
            </Switch>
            </BrowserRouter>
            
        </>
    )
}

export default MyRouter
