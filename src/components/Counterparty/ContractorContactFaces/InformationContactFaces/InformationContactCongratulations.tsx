import { Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "4% 4% 4% 0",
     
    },
    paper: {
      padding: 16, //10
      color: "#3B4750",
      boxShadow: "none",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
      fontSize: 16,
    },
    spanTitle: {
      fontSize: 16,
      fontWeight: 500,
    },
    btnSubmit: {
      textTransform: "none",
      textDecoration: "underline",
    },
  })
);
type InfoCongratulations = {
  // change: boolean;
  setChangeCongratulations: (val: boolean) => void;
};

export const InformationContactCongratulations: React.FC<InfoCongratulations> =
  ({ setChangeCongratulations }) => {
    const congratulationsState = {
        congratulations:[{name:'',other:"",congratulation_type:{name:""}}]
    }
    const classes = useStyles();
      const { contractor_contacts }:any = useTypedSelector((state) => state.contactPerson);
      const {congratulations}:any = contractor_contacts  && contractor_contacts?.congratulations?.length > 0 ?contractor_contacts : congratulationsState

    return (
      <div className={classes.root}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <span className={classes.spanTitle}>Сведения о поздравлениях</span>
          <span onClick={() => setChangeCongratulations(false)}>
            <PencilSimpleIcon color="#3B4750" />
          </span>
        </div>
        <Paper className={classes.paper}>
            {congratulations?.map((cong:any,index:number) => (<div>
                {index != 0 && <div
                    style={{backgroundColor:"#ADB3B8", width:"100%",height:1,opacity:0.5,
                        marginTop: 16, marginBottom: 16}}/>}
                <div className={classes.label}>
                    <span className={classes.spanTitle}>Праздник</span>
                    <span style={{width: "60%"}}>{cong.name}</span>
                </div>
                <div className={classes.label}>
                    <span className={classes.spanTitle}>Тип поздравления</span>
                    <span style={{width: "60%"}}>{cong?.congratulation_type?.name}</span>
                </div>
                <div className={classes.label}>
                    <span className={classes.spanTitle}> Другое</span>
                    <span style={{width: "60%"}}>{cong.other}</span>
                </div>
            </div>))}
        </Paper>
      </div>
    );
  };
