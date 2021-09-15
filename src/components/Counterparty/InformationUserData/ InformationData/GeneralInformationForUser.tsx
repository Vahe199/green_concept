import React from "react";
import { makeStyles,createStyles ,Theme} from "@material-ui/core/styles";
import {Checkbox, Typography} from '@material-ui/core';
import {Paper} from "@material-ui/core";
import pencil from "../../../../IMG/icons/pencil.png"
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {DataType} from "../../../../redux/types/conterpart_author_data";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: "7%",
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection:'column',
            padding:'1%',
        },
        paper:{
            width:'100%',
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
    setChangeGeneralInformation: (val: boolean) => void;
};
export const GeneralInformationForUser:React.FC<Props> = ({setChangeGeneralInformation}) => {
    const {AuthorData} = useTypedSelector(state => state.author)
    const {crms,org_type,inn,kpp,ogrn,nda,type}:any = AuthorData;
    const classes = useStyles();
    return <div className={classes.root}>

        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Typography variant={'subtitle2'}>Общие сведения</Typography>
         <div onClick={()=>setChangeGeneralInformation(true)}>
             <img src={pencil} style={{width:15,height:15}}/>
         </div>
        </div>
        <Paper className={classes.paper}>
            <Typography variant={'subtitle2'}> {org_type}</Typography>
            <div className={classes.div}>
                <Typography variant={'button'} style={{width:'40%'}}>
                    CRM
                </Typography>
                <Typography variant={'body2'}>
                    {crms?.map((crm:any,index:number)=><div key={index}>{crm.surname +' '+ crm.firstname}</div>)}
                </Typography>
            </div>
                <div className={classes.div}>
                    <Typography variant={'button'} style={{width:'40%',flexWrap:'wrap'}}>
                        Тип контрагента
                    </Typography>
                    <Typography variant={'body2'}>
                        {type? type.name:'-----------------'}
                    </Typography>
                </div>
                <div className={classes.div}>
                    <Typography variant={'button'} style={{width:'40%',flexWrap:'wrap'}}>
                        ИНН
                    </Typography>
                    <Typography variant={'body2'}>
                        {inn}
                    </Typography>
                </div>
                <div className={classes.div}>
                    <Typography variant={'button'} style={{width:'40%',flexWrap:'wrap'}}>
                        КПП
                    </Typography>
                    <Typography variant={'body2'}>
                        {kpp}
                    </Typography>
                </div>
                <div className={classes.div}>
                    <Typography variant={'button'} style={{width:'40%',flexWrap:'wrap'}}>
                        ОГРН
                    </Typography>
                    <Typography variant={'body2'}>
                        {ogrn}
                    </Typography>
                </div>
            <div className={classes.div}>
                <Typography variant={'button'} style={{width:'40%',flexWrap:'wrap'}}>
                    NDA
                </Typography>
                <Typography variant={'body2'}>
                    <Checkbox disabled checked={nda} inputProps={{ 'aria-label': 'disabled checked checkbox' }} />

                </Typography>
            </div>
        </Paper>
    </div>;
};
