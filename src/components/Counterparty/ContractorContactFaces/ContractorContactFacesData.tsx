import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormBasicInformation } from "../Forms/Counterparty/FormBasicInformation";
import { FormContactsFromGreen } from "../Forms/Counterparty/FormContactsFromGreen";
import { FormInformationCongratulations } from "../Forms/Counterparty/FormInformationCongratulations";
import { InformationContactFacesData } from "./InformationContactFaces/InformationContactFacesData";
import { InformationContactsFromGreen } from "./InformationContactFaces/InformationContactsFromGreen";
import { InformationContactCongratulations } from "./InformationContactFaces/InformationContactCongratulations";
import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import { useActions } from "../../../redux/type_redux_hook/useAction";
import BackToAddress from "../../Utils/BackToAddress";
import {withRouter} from "react-router-dom";
import TableForContact from "../Core/TableForContact";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },
}));

 const ContractorContactFacesData = (props:any) => {

  const classes = useStyles();
  const [changeBasicInformation, setChangeBasicInformation] =
    useState<boolean>(true);
  const [changeContactsFromGreen, setChangeContactsFromGreen] =
    useState<boolean>(true);
  const [changeCongratulations, setChangeCongratulations] =
    useState<boolean>(true);
  return (
    <>
      <BackToAddress address="/counterparties" title="списку" />
        {props.match.params.tab == "Контактные лица" ? <TableForContact/>:
            <div className={classes.root}>
            <div style={{width: "50%"}}>
        {changeBasicInformation ? (
            <InformationContactFacesData
            setChangeBasicInformation={setChangeBasicInformation}
            />
            ) : (
            <FormBasicInformation
            setChangeBasicInformation={setChangeBasicInformation}
            />
            )}
            </div>
            <div style={{width: "50%"}}>
            <div>
        {changeContactsFromGreen ? (
            <InformationContactsFromGreen
            setChangeContactsFromGreen={setChangeContactsFromGreen}
            />
            ) : (
            <FormContactsFromGreen
            setChangeContactsFromGreen={setChangeContactsFromGreen}
            />
            )}
            </div>
            <div>
        {changeCongratulations ? (
            <InformationContactCongratulations
            setChangeCongratulations={setChangeCongratulations}
            />
            ) : (
            <FormInformationCongratulations
            setChangeCongratulations={setChangeCongratulations}
            />
            )}
            </div>
            </div>
            </div>}
    </>
  );
};
export default withRouter(ContractorContactFacesData)
