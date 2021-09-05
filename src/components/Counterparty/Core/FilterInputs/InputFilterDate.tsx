import TextField from '@material-ui/core/TextField';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width:'100%',

        },
    }),
);

export default function InputFilterDate(props:any):any {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                id="date"
                variant="outlined"
                type="date"
                defaultValue="2021-01-01"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e)=>console.log(e.target.value)}
            />
        </div>
    );
}
