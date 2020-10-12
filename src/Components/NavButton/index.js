import React from 'react';
import { useHistory } from "react-router-dom"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { Button } from '@material-ui/core';
import classes from "./NavButton.module.css"

export default (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const openView = (viewName) =>  {
        let historyPush;
        switch(viewName) {
            case "mobile":
                historyPush = "/mobile"           
                break;
            case "desktop":
                historyPush = "/"
                break;
            default:
                historyPush = "/"
                break;
        }
        history.push(historyPush);
        handleMenuClose();
    }

    const handleMobile = () => {openView("mobile")};
    const handleDesktop = () => {openView("desktop")};

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
                  <MenuItem onClick={handleDesktop}>Desktop View</MenuItem>
                  <MenuItem onClick={handleMobile}>Car Rider View</MenuItem>
                </Menu>
            </div>
        
        
    )
}