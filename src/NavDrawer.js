import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem"
import { Drawer, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default (props) => {
    var drawerState = props.drawerState;
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        drawerState = true;
    }

    return (
        <React.Fragment>
            <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </Button>
            <Drawer open={drawerState} anchor="left" onClose={toggleDrawer(drawerState, false)}>
                <p>Test</p>
                <p>{drawerState}</p>
            </Drawer>
        </React.Fragment>
    )

}