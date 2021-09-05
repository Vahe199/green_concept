import React from "react";
import { makeStyles,createStyles ,Theme} from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
          flexDirection:'row',
        padding:'1%',
        '& > *': {
           margin: theme.spacing(1),
        },
      },
        paper:{
          padding: 16,
            borderRadius:4
        }
    }),
);

export const BankDetails = () => {
    const data = [
        {id:1,item:'БИК',value:'123456789'},
        {id:2,item:'Наименование банка',value:'ПАО “Сбербанк”'},
        {id:3,item:'Город',value:'Консультирование'},
        {id:4,item:'К/с',value:'123456789101112'},
        {id:5,item:'Р/с',value:'123456789101112'},
    ]
  const classes = useStyles();
    const Details = (props:any) =>{
        return(<div style={{display:'flex'}}>
            <Typography variant={'button'} style={{width:'40%',flexWrap:'wrap'}}>
                {props.item}
            </Typography>
            <Typography variant={'body2'}>
                {props.value}
            </Typography>
        </div>)
    }
  return <div className={classes.root}>
    <div style={{width:'40%'}}>
        <div>
            <Typography variant={'subtitle2'}>Основной банковский счет</Typography>
            <Paper className={classes.paper}>
                {data.map(data=><Details item={data.item}value={data.value}/>)}
            </Paper>
        </div>
    </div>
      <div style={{width:'40%'}}>
          <div>
              <Typography variant={'subtitle2'}>Дополнительный банковский счет</Typography>
              <Paper className={classes.paper}>
                  {data.map(data=><Details item={data.item}value={data.value}/>)}
              </Paper>
          </div>
      </div>


  </div>;
};
