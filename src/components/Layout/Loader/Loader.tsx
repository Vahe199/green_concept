import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Space, Spin} from 'antd'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "10%",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Space size="middle">
        <Spin />
      </Space>
    </div>
  );
}
