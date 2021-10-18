import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { FormCompanyContacts } from "../Forms/GeneralInformation/FormCompanyContacts";
import { FormCompanyDetails } from "../Forms/GeneralInformation/FormCompanyDetails";
import { FormGeneralInformation } from "../Forms/GeneralInformation/FormGeneralInformation";
import { CompanyContactsForUser } from "./ InformationData/CompanyContactsForUser";
import { CompanyDetailsForUser } from "./ InformationData/CompanyDetailsForUser";
import { GeneralInformationForUser } from "./ InformationData/GeneralInformationForUser";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      paddingTop: "1%",
      paddingRight: "2%",
      justifyContent: "space-between",
    },
    paper: {
      padding: 16,
      color: "#3B4750",
      borderRadius: 4,
      boxShadow: "none",
    },
  })
);
export const InformationUserData = () => {
  const classes = useStyles();

  const [changeGeneralInformation, setChangeGeneralInformation] =
    useState<boolean>(false);
  const [changeCompanyDetails, setChangeCompanyDetails] =
    useState<boolean>(false);
  const [changeContacts, setChangeContacts] = useState<boolean>(false);

  return (
    <div className={classes.root}>
      <div style={{ width: "32%" }}>
        <div>
          {changeGeneralInformation ? (
            <FormGeneralInformation
              setChangeGeneralInformation={setChangeGeneralInformation}
            />
          ) : (
            <GeneralInformationForUser
              setChangeGeneralInformation={setChangeGeneralInformation}
            />
          )}
        </div>
      </div>
      <div style={{ width: "35%" }}>
        <div>
          {changeCompanyDetails ? (
            <FormCompanyDetails
              setChangeCompanyDetails={setChangeCompanyDetails}
            />
          ) : (
            <CompanyDetailsForUser
              setChangeCompanyDetails={setChangeCompanyDetails}
            />
          )}
        </div>
      </div>
      <div style={{ width: "32%" }}>
        <div>
          {changeContacts ? (
            <FormCompanyContacts setChangeContacts={setChangeContacts} />
          ) : (
            <CompanyContactsForUser setChangeContacts={setChangeContacts} />
          )}
        </div>
      </div>
    </div>
  );
};
