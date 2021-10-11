import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";

import { MagnifyingGlass } from "../../../../IMG/SVG/MagnifyingGlass";
import { useState } from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& .MuiOutlinedInput-adornedStart": {
        paddingLeft: 8,
      },
    },

    icon: {
      fontSize: "16px",
    },
  })
);

export default function InputFilterSearch(props: any): any {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <TextField
      className={classes.root}
      id="input-with-icon-textfield"
      variant={"outlined"}
      value={value}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MagnifyingGlass className={classes.icon} />
          </InputAdornment>
        ),
      }}
    />
  );
}
