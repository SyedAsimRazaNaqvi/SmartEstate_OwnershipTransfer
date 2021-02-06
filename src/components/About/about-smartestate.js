import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import icon1 from '../images/SmartEstateLogo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>ABOUT PROJECT</h3>
            <Grid container spacing={3} style={{padding:'50px'}}>

                <Grid item xs={6}>
                        <div style={{ textAlign: 'justify', paddingTop:'20px',paddingBottom:'20px',color:'black'}}>

                            <h3>Smart Estate</h3>
                            <p>
                                Smart Estate is blockchain based real estate application which allow user to sell and purchase property on blockchain environment
                            </p>
                            <p>
                                securing ownership and  remove third-party dependency, Fast tracking the process and providing safe environment to transfer ownership with distributed ledger.
                            </p>
                            <p>
                                Project is focused on removing third party dependency (Notary, Bank etc..) from the ownership transfer process and to remove fraudulent and illegal from property ownership

                            </p>
                        </div>
                    
                </Grid>
                <Grid item xs={6}>
                        <div className="center">
                            <img src={icon1} width="300px" height="320px" />
                        </div>
                    
                </Grid>

            </Grid>
        </div>
    );
}
