import React from "react";
import { makeStyles,createStyles ,Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {WithMaterialUI} from "../Forms/GeneralInformation/FormGeneralInformation";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding:'1%',
        '& > *': {
           margin: theme.spacing(1),
        },
      },
    }),
);

export const GeneralInformation = () => {
  const classes = useStyles();
  return <div className={classes.root}>
    <Paper style={{width:'23%',padding:10}}>
        <WithMaterialUI/>
    </Paper>
      <Paper style={{width:'38%',padding:10}}>
          <WithMaterialUI/>
      </Paper>
      <Paper style={{width:'33%',padding:10}}>
          <WithMaterialUI/>
      </Paper>


  </div>;
};
