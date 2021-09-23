import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Paper, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import pencil from "../../../IMG/icons/pencil.png";
import { PencilSimpleIcon } from "../../../IMG/SVG/PencilSimpleIcon";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      padding: "1%",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: 16,
      color: "#3B4750",
      borderRadius: 4,
    },
    btn: {
      textTransform: "none",
      color: "#fff",
      fontSize: 14,
      paddingBottom: 4,
      backgroundColor: "#3AB994",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#36AD8B",
        boxShadow: "none",
      },
      "&:active": {
        backgroundColor: "#32A886",
      },
    },
  })
);
type BankProps = {
  // change: boolean;
  setEdit: (val: boolean) => void;
};
export const BankDetails: React.FC<BankProps> = ({ setEdit }) => {
  const data = [
    { id: 1, item: "БИК", value: "123456789" },
    { id: 2, item: "Наименование банка", value: "ПАО “Сбербанк”" },
    { id: 3, item: "Город", value: "Консультирование" },
    { id: 4, item: "К/с", value: "123456789101112" },
    { id: 5, item: "Р/с", value: "123456789101112" },
  ];
  const classes = useStyles();
  const Details = (props: any) => {
    return (
      <div style={{ display: "flex" }}>
        <Typography
          variant={"button"}
          style={{ width: "40%", flexWrap: "wrap", textTransform: "none" }}
        >
          {props.item}
        </Typography>
        <Typography variant={"body2"}>{props.value}</Typography>
      </div>
    );
  };
  return (
    <div className={classes.root}>
      <div style={{ width: "100%" }}>
        <Button
          onClick={() => console.log("button")}
          variant="contained"
          color="primary"
          className={classes.btn}
          startIcon={<AddIcon />}
        >
          Добавить банковские реквизиты
        </Button>
      </div>
      <div style={{ width: "40%" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant={"subtitle2"}>
              Основной банковский счет
            </Typography>
            <div onClick={() => setEdit(false)}>
              <PencilSimpleIcon color="#3B4750"/>
            </div>
          </div>

          <Paper className={classes.paper}>
            {data.map((data) => (
              <Details item={data.item} value={data.value} />
            ))}
          </Paper>
        </div>
      </div>
      <div style={{ width: "40%" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant={"subtitle2"}>
              Дополнительный банковский счет
            </Typography>
            <div onClick={() => setEdit(false)}>
            <PencilSimpleIcon color="#3B4750"/>
            </div>
          </div>
          <Paper className={classes.paper}>
            {data.map((data) => (
              <Details item={data.item} value={data.value} />
            ))}
          </Paper>
        </div>
      </div>
    </div>
  );
};
