import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { FormMainInformation } from "../Forms/ContactPersons/FormGeneralInformation";
import { ContactsFromGreen } from "../Forms/ContactPersons/FormContactsFromGreen";
import { CongratsInfo } from "../Forms/ContactPersons/FormCongratsInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      height: "100vh",
    },
    generalInfo: {
      // marginTop: -40,
      marginLeft: "2%",
      marginRight: "2%",
      width: "47%",
      height: "82vh",
    },
    rightCont: {
      width: "47%",
      height: "80vh",
    },
    contactsFromGreen: {
      marginRight: "2%",
      width: "100%",
      height: "50vh",
      overflow: "hidden",
    },
    congratsInfo: {
      width: "100%",
      marginTop: 50,
      height: "30vh",
      overflow: "hidden",
    },
  })
);

export const ContactPerson = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.generalInfo}>
        <FormMainInformation />
      </div>
      <div className={classes.rightCont}>
        <div className={classes.contactsFromGreen}>
          <ContactsFromGreen />
        </div>
        <div className={classes.congratsInfo}>
          <CongratsInfo />
        </div>
      </div>
    </div>
  );
};
