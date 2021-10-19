import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Input } from "antd";

import { MagnifyingGlass } from "../../../IMG/SVG/MagnifyingGlass";
import { useState } from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "40px !important",
      fontSize: 20,
      paddingLeft: 8,
    },

    icon: {
      fontSize: "16px",
    },
  })
);

export default function InputFilterSearch(props: any): any {
  const classes = useStyles();

  return (
    <Input
      className={classes.root + " " + props.className}
      prefix={<MagnifyingGlass className={classes.icon} />}
      value={props.value}
      onChange={props.handleChange}
    />
  );
}
