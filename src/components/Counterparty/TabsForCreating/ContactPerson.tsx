import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormBasicInformation } from "../Forms/Counterparty/FormBasicInformation";
import { FormContactsFromGreen } from "../Forms/Counterparty/FormContactsFromGreen";
import { FormInformationCongratulations } from "../Forms/Counterparty/FormInformationCongratulations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },
}));

export const ContactPerson = () => {
  const [changeBasicInformation, setChangeBasicInformation] =
    useState<boolean>(true);
  const [changeContactsFromGreen, setChangeContactsFromGreen] =
    useState<boolean>(true);
  const [changeCongratulations, setChangeCongratulations] =
    useState<boolean>(true);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ width: "50%" }}>
        <FormBasicInformation
          setChangeBasicInformation={setChangeBasicInformation}
        />
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <FormContactsFromGreen
            setChangeContactsFromGreen={setChangeContactsFromGreen}
          />
        </div>
        <div>
          <FormInformationCongratulations
            setChangeCongratulations={setChangeCongratulations}
          />
        </div>
      </div>
    </div>
  );
};
