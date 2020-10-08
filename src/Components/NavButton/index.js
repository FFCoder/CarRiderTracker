import React from 'react';
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Paper from "@material-ui/core/Paper"
import { Button } from '@material-ui/core';
import DesktopView from "../../Pages/DesktopView"
import classes from "./NavButton.module.css"

export default (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        
            <div className={classes.menuNav}>
                <Button aria-controls="navigation-menu" aria-haspopup="true" onClick={handleMenuOpen} color="default" variant="contained"> 
                  Menu
                  </Button>
                
                <Menu
                  id="navigation-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Desktop View</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Car Rider View</MenuItem>
                </Menu>
            </div>
        
        
    )
}