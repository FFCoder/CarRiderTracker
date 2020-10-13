import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

export default (props) => (
    <React.Fragment>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper style={{padding: "3rem", textAlign: "center"}}>
                    <Typography variant="h3">
                        436
                    </Typography>
                    <Typography variant="h6">
                        Jonathon Chambers
                    </Typography>

                </Paper>
            </Grid>
        </Grid>
    </React.Fragment>
);