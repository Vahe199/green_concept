import TextField from "@material-ui/core/TextField";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { url } from "inspector";
const imgURL: string =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 120,
    },

  })
);

export default function InputFilterDate(props: any): any {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        style={{ width: 130 }}
        id="date"
        variant="outlined"
        type="date"
        defaultValue="2021-01-01"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
