import React from 'react';
import { Paper } from '@material-ui/core';
import classes from "./desktopView.module.css"

export default (props) => (
    <React.Fragment>
        <Paper className={classes.Paper} elevation={3}>
            <h2>Desktop View</h2>
        </Paper>
    </React.Fragment>
);