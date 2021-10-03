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
  // const initial = {
  //   firstname: "",
  //   middlename: "",
  //   surname: "",
  //   contractor_type_id: "",
  //   sex: "",
  //   birthdate: "",
  //   delivery_address: "",
  //   emails: [
  //     {
  //       email: "",
  //     },
  //   ],
  //   phones: [
  //     {
  //       phone: "",
  //       phone_type: "",
  //     },
  //   ],
  //   contact_contractors: {
  //     main: "",
  //     role_id: "",
  //     position: "",
  //     contractor_id: "",
  //   },
  //   contact_employees: [
  //     {
  //       direction_id: "",
  //       employee_id: "",
  //       info: "",
  //     },
  //     {
  //       employee_id: "",
  //     },
  //   ],
  //   contact_congratulations: [
  //     {
  //       name: "",
  //       congratulation_type_id: "",
  //       other: "",
  //     },
  //     {
  //       other: "",
  //     },
  //   ],
  //   status_id: "",
  //   service_type_id: "",
  //   branches: [],
  // };

  const [changeBasicInformation, setChangeBasicInformation] =
    useState<boolean>(true);
  const [changeContactsFromGreen, setChangeContactsFromGreen] =
    useState<boolean>(true);
  const [changeCongratulations, setChangeCongratulations] =
    useState<boolean>(true);
  console.log(898098);
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
