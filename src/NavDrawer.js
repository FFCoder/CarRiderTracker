import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem"
import { Drawer, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default (props) => {
    const [drawerState, setdrawerState] = React.useState(false);

    return (
        <React.Fragment>
            <Button onClick={()=>{setdrawerState(!drawerState)}}>
                <MenuIcon />
            </Button>
            <Drawer open={drawerState}>
                <p>Test</p>
            </Drawer>
        </React.Fragment>
    )

}