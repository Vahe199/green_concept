import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {Avatar, Button, Typography} from "@material-ui/core";
import { green} from '@material-ui/core/colors';
import XLS from "../../IMG/icons/XLS.png"
const useStyles = makeStyles({
    container:{
        height:'100vh',
        width:'100%',
        paddingTop:67,
        margin:0,
        paddingLeft:0,
        paddingRight:0
    },
    root: {
        flexGrow: 1,
        width: "100%",
        height: 100,
        margin: 0,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingTop: "2%"
    },
    typography:{
        color:"#3B4750",
        fontSize:20
    },
    btn:{
        color:"#fff",
        fontSize:12,
        paddingBottom:4,
        backgroundColor:"#3AB994",
        '&:hover': {
            backgroundColor: green[300],
        },
         },
    button:{
        fontSize:12,
        backgroundColor:"#F2F3F4",
        width:"165px",
        height:"30px",
        marginRight:"10px",
        padding:0,
        paddingTop:2
    },
    icon:{
         width:25,
    },
});

export const Counterparty = () =>{
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return(
        <div className={classes.container}>
            <Paper square className={classes.root}>
                <Typography variant="subtitle1" noWrap className={classes.typography}>
                    Контрагенты
                </Typography>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Button variant="contained" color="primary" startIcon={<AddIcon />} className={classes.btn} >
                        Новый контрагент
                    </Button>
                    <span>
                    <Button variant="contained" startIcon={<AddIcon />} className={classes.button}>
                        Новый контакт
                    </Button>
                    <Button variant="contained"  className={classes.button}>
                        Все контактные лица
                    </Button>
                          <Button variant="outlined" style={{minWidth:28, padding:0,height:"30px"}}>
                            <img src={XLS} className={classes.icon}/>
                          </Button>
                        </span>
                </div>
            </Paper>
        </div>
    )
}
