import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import logo from "../../IMG/Green_Logo.png"
import {AppBar, Avatar, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            display: 'flex',
             // zIndex: theme.zIndex.drawer + 1,
            backgroundColor: '#F2F3F4',
        },
        typography:{
            color:'#56626b'
        },
        avatarLogo: {
             width: theme.spacing(10),
            height: theme.spacing(4),
        },
    }),
);
export const HeaderPage = () => {
    const classes = useStyles();
    return(    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <img alt="Logo GREEN" src={logo} className={classes.avatarLogo}/>
            <Typography variant="h6" noWrap className={classes.typography}>
                GREEN
            </Typography>
        </Toolbar>
    </AppBar>)
}
