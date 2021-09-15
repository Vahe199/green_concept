import React, {useState} from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {Typography} from '@material-ui/core';
import {Paper} from "@material-ui/core";
import {GeneralInformationForUser} from "./ InformationData/GeneralInformationForUser";
import {CompanyDetailsForUser} from "./ InformationData/CompanyDetailsForUser";
import {CompanyContactsForUser} from "./ InformationData/CompanyContactsForUser";
import {FormGeneralInformation} from "../Forms/GeneralInformation/FormGeneralInformation";
import {FormCompanyDetails} from "../Forms/GeneralInformation/FormCompanyDetails";
import {FormCompanyContacts} from "../Forms/GeneralInformation/FormCompanyContacts";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
             paddingTop: '1%',
            paddingRight:'2%',
            justifyContent: 'space-between'
        },
        paper: {
            padding: 16,
            borderRadius: 4
        }
    }),
);
export const InformationUserData = () => {
    const classes = useStyles();

const [changeGeneralInformation , setChangeGeneralInformation] = useState<boolean>(false)
const [changeCompanyDetails , setChangeCompanyDetails] = useState<boolean>(false)
const [changeContacts , setChangeContacts] = useState<boolean>(false)

    return (
        <div className={classes.root}>
            <div style={{width: '28%'}}>
                <div>
                    {changeGeneralInformation ?<FormGeneralInformation setChangeGeneralInformation={setChangeGeneralInformation}/> :
                        <GeneralInformationForUser setChangeGeneralInformation={setChangeGeneralInformation}/>
                        }
                </div>
            </div>
            <div style={{width: '37%'}}>
                <div>
                    {changeCompanyDetails ?<FormCompanyDetails setChangeCompanyDetails={setChangeCompanyDetails}/>
                    :<CompanyDetailsForUser setChangeCompanyDetails={setChangeCompanyDetails}/>}
                </div>
            </div>
            <div style={{width: '32%'}}>
                <div>
                    {changeContacts ? <FormCompanyContacts setChangeContacts={setChangeContacts}/>
                        :<CompanyContactsForUser setChangeContacts={setChangeContacts}/>}
                </div>
            </div>
        </div>

    )
}
