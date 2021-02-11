import React from 'react'
import { Button } from '@material-ui/core';
import Cardlist from "../components/CardList/index";
import PrimarySearchAppBar from "../components/Navbar/index";

const Mainpage = () => {
    return (
        <div>
            <PrimarySearchAppBar/>         
            <h1>hello word</h1>
            hello word
            <Button color="primary">Hello World</Button>;
            <Cardlist/>
        </div>
    )
}

export default Mainpage
