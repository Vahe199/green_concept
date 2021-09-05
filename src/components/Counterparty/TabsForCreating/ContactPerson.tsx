import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {FormBasicInformation} from "../Forms/Counterparty/FormBasicInformation";
import {FormContactsFromGreen} from "../Forms/Counterparty/FormContactsFromGreen";
import {FormInformationCongratulations} from "../Forms/Counterparty/FormInformationCongratulations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
    flexDirection:'row'
  },
}));

export const ContactPerson = () => {
  const classes = useStyles();
  return <div className={classes.root}>
    <div style={{width:'45%'}}>
      <FormBasicInformation/>
    </div>
    <div style={{width:'45%'}}>
      <div>
      <FormContactsFromGreen/>
      </div>
      <div>
       < FormInformationCongratulations/>
      </div>
    </div>
  </div>;
};
