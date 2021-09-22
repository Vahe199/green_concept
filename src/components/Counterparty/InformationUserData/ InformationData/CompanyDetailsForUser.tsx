import React from "react";
import { makeStyles,createStyles ,Theme} from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import {Paper} from "@material-ui/core";
import pencil from "../../../../IMG/icons/pencil.png";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection:'row',
            padding:'1%',

        },
        paper:{
            width:'100%',
            color: "#3B4750",
            padding: 16,
            borderRadius:4
        },
        div:{
            display:'flex',
            marginBottom:10
        }
    }),
);
type Props = {
    // change: boolean;
    setChangeCompanyDetails: (val: boolean) => void;
};
export const CompanyDetailsForUser:React.FC<Props> = ({setChangeCompanyDetails}) => {
    const {AuthorData} = useTypedSelector(state => state.author)
    const {full_name,short_name,group,branches}:any = AuthorData;
    const classes = useStyles();
    return <div className={classes.root}>
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom:10
            }}
        >
            <Typography variant={'subtitle2'}>Сведения  о компании </Typography>
            <div onClick={()=>setChangeCompanyDetails(true)}>
                <img src={pencil} alt="Pencil" style={{width:15,height:15}}/>
            </div>
        </div>
        <Paper className={classes.paper}>
            <div className={classes.div}>
                <Typography variant={'button'} style={{width:'50%',flexWrap:'wrap'}}>
                    Полное наименование компании
                </Typography>
                <Typography variant={'body2'}>
                    {full_name}
                </Typography>
            </div>
            <div className={classes.div}>
                <Typography variant={'button'} style={{width:'50%',flexWrap:'wrap'}}>
                    Краткое наименование компании
                </Typography>
                <Typography variant={'body2'}>
                    {short_name}
                </Typography>
            </div>
            <div className={classes.div}>
                <Typography variant={'button'} style={{width:'50%',flexWrap:'wrap'}}>
                    Группа компаний (при наличии)
                </Typography>
                <Typography variant={'body2'}>
                    {group ? group.full_name: '-----------------------' }
                </Typography>
            </div>
            <div className={classes.div}>
                <Typography variant={'button'} style={{width:'50%',flexWrap:'wrap'}}>
                    Отрасль
                </Typography>
                <Typography variant={'body2'}>
                    {branches.length >0 ? branches.map((branch:any)=><div key={branch.id}>{branch.name}</div>):''}
                </Typography>
            </div>
        </Paper>
    </div>;
};
