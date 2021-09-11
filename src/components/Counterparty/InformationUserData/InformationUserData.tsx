import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {Typography} from '@material-ui/core';
import {Paper} from "@material-ui/core";
import {GeneralInformationForUser} from "./ InformationData/GeneralInformationForUser";
import {CompanyDetailsForUser} from "./ InformationData/CompanyDetailsForUser";
import {CompanyContactsForUser} from "./ InformationData/CompanyContactsForUser";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            padding: '1%',
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

    return (
        <div className={classes.root}>
            <div style={{width: '28%'}}>
                <div>
                    <GeneralInformationForUser/>
                </div>
            </div>
            <div style={{width: '37%'}}>
                <div>
                    <CompanyDetailsForUser/>
                </div>
            </div>
            <div style={{width: '32%'}}>
                <div>
                    <CompanyContactsForUser/>
                </div>
            </div>
        </div>

    )
}
