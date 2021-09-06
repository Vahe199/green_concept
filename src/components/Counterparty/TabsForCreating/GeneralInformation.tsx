import React from "react";
import { makeStyles,createStyles ,Theme} from "@material-ui/core/styles";
import {FormCompanyDetails} from "../Forms/GeneralInformation/FormCompanyDetails";
import {FormGeneralInformation} from "../Forms/GeneralInformation/FormGeneralInformation";
import {FormCompanyContacts} from "../Forms/GeneralInformation/FormCompanyContacts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      padding: "1%",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export const GeneralInformation = () => {
  const classes = useStyles();
  return (<div className={classes.root}>
    <div style={{width:'25%'}}>
        <FormGeneralInformation/>
    </div>
      <div style={{width:'38%'}}>
         <FormCompanyDetails/>
      </div>
      <div style={{width:'31%'}}>
          <FormCompanyContacts/>
      </div>
    </div>
  );
};
