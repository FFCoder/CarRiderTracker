import { Card, CardContent, Grid, Paper, Typography, Container, List, ListItem } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';

export default (props) => (
    <React.Fragment>
        <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={6}>
                    <Paper elevation={3}>
                        <CardContent>
                        <Typography variant="h3">
                            436
                        </Typography>
                        <Typography variant="h6">
                            Jonathon Chambers
                        </Typography>
                        </CardContent>
                    </Paper>
            </Grid>
            <Grid item xs={6}>
                <List style={{maxHeight: "30rem", overflowY: "scroll"}}>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] .map(number => <ListItem>
                    <PersonIcon /><Typography variant="h6">Test {number.toString()}</Typography>
                    </ListItem>)}
                </List>
            </Grid>
        </Grid>
    </React.Fragment>
);