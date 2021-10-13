import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Input } from "antd";

import { MagnifyingGlass } from "../../../../IMG/SVG/MagnifyingGlass";
import { useState } from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "40px !important",
        fontSize:20,
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
    <Input
      className={classes.root + " " + props.className}
      prefix={<MagnifyingGlass className={classes.icon} />}
      value={value}
      onChange={handleChange}
    />
  );
}
