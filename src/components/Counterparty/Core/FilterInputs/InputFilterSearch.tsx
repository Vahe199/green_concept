import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& .MuiOutlinedInput-adornedStart": {
        paddingLeft: 16,
      },
    },

    icon: {
      width: 18,
      height: 18,
      marginRight: -6,
      marginLeft: -11,
      marginBottom: -4,
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
    <div className={classes.root}>
      <TextField
        id="input-with-icon-textfield"
        variant={"outlined"}
        value={value}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize={"small"} className={classes.icon} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
