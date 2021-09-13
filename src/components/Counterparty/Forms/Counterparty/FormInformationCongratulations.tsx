import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import AddIcon from "@material-ui/icons/Add";
import {
  Checkbox,
  FormControlLabel,
  Radio,
  TextField,
  Paper,
  Button,
  Link,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

type Data = {
  CRM: string | null;
  CounterpartyType: string | null;
  ServiceType: string | null;
  INN: string | null;
  KPP: string | null;
  OGPN: string | null;
};
const validationSchema: yup.SchemaOf<Data> = yup.object({
  CRM: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  CounterpartyType: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  ServiceType: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  INN: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  KPP: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  OGPN: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: "4%",
      marginRight: "4%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 4,
        textAlign: "start",
        height: "30px",
        backgroundColor: "transparent",
        fontSize: 13,
      },
      "& .MuiFormHelperText-root": {
        fontSize: 9,
        marginTop: -2,
        marginLeft: 0,
      },
      "& .MuiFormControlLabel-root": {
        fontSize: 10,
      },
    },
    paper: {
      padding: 10,
      border: "1px solid #3ab994",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
      fontSize: 12,
    },
  })
);

export const FormInformationCongratulations = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      CRM: "",
      CounterpartyType: "",
      ServiceType: "",
      INN: "",
      KPP: "",
      OGPN: "",
      NDA: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "101%",
            marginTop: "2%",
          }}
        >
          <span>Сведения о поздравлениях</span>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span>Праздник</span>
            <TextField
              variant={"outlined"}
              name="CounterpartyType"
              placeholder={"Название праздника"}
              value={formik.values.CounterpartyType}
              onChange={formik.handleChange}
              error={
                formik.touched.CounterpartyType &&
                Boolean(formik.errors.CounterpartyType)
              }
              helperText={
                formik.touched.CounterpartyType &&
                formik.errors.CounterpartyType
              }
            />
          </div>
          <div className={classes.label}>
            <span></span>
            <Link color="inherit">+ Новый праздник</Link>
          </div>
          <div className={classes.label}>
            <span>Тип поздравления</span>
            <TextField
              variant={"outlined"}
              name="CounterpartyType"
              placeholder={"Выберите"}
              value={formik.values.CounterpartyType}
              onChange={formik.handleChange}
              error={
                formik.touched.CounterpartyType &&
                Boolean(formik.errors.CounterpartyType)
              }
              helperText={
                formik.touched.CounterpartyType &&
                formik.errors.CounterpartyType
              }
            />
          </div>
          <div className={classes.label}>
            <span>Другое</span>
            <TextField
              variant={"outlined"}
              name="CounterpartyType"
              placeholder={"Другое"}
              value={formik.values.CounterpartyType}
              onChange={formik.handleChange}
              error={
                formik.touched.CounterpartyType &&
                Boolean(formik.errors.CounterpartyType)
              }
              helperText={
                formik.touched.CounterpartyType &&
                formik.errors.CounterpartyType
              }
            />
          </div>
          <div className={classes.label}>
            <span>Статус контактного лица</span>
            <TextField
              variant={"outlined"}
              name="CounterpartyType"
              placeholder={"Выберите"}
              value={formik.values.CounterpartyType}
              onChange={formik.handleChange}
              error={
                formik.touched.CounterpartyType &&
                Boolean(formik.errors.CounterpartyType)
              }
              helperText={
                formik.touched.CounterpartyType &&
                formik.errors.CounterpartyType
              }
            />
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span>Праздник</span>
            <TextField
              variant={"outlined"}
              name="CounterpartyType"
              placeholder={"Название праздника"}
              value={formik.values.CounterpartyType}
              onChange={formik.handleChange}
              error={
                formik.touched.CounterpartyType &&
                Boolean(formik.errors.CounterpartyType)
              }
              helperText={
                formik.touched.CounterpartyType &&
                formik.errors.CounterpartyType
              }
            />
          </div>
          <div className={classes.label}>
            <span></span>
            <Link color="inherit">+ Новый праздник</Link>
          </div>
          <div className={classes.label}>
            <span>Тип поздравления</span>
            <TextField
              variant={"outlined"}
              name="CounterpartyType"
              placeholder={"Выберите"}
              value={formik.values.CounterpartyType}
              onChange={formik.handleChange}
              error={
                formik.touched.CounterpartyType &&
                Boolean(formik.errors.CounterpartyType)
              }
              helperText={
                formik.touched.CounterpartyType &&
                formik.errors.CounterpartyType
              }
            />
          </div>
          <div className={classes.label}>
            <span>Другое</span>
            <TextField
              variant={"outlined"}
              name="CounterpartyType"
              placeholder={"Другое"}
              value={formik.values.CounterpartyType}
              onChange={formik.handleChange}
              error={
                formik.touched.CounterpartyType &&
                Boolean(formik.errors.CounterpartyType)
              }
              helperText={
                formik.touched.CounterpartyType &&
                formik.errors.CounterpartyType
              }
            />
          </div>
          <div className={classes.label}>
            <span>Статус контактного лица</span>
            <TextField
              variant={"outlined"}
              name="CounterpartyType"
              placeholder={"Выберите"}
              value={formik.values.CounterpartyType}
              onChange={formik.handleChange}
              error={
                formik.touched.CounterpartyType &&
                Boolean(formik.errors.CounterpartyType)
              }
              helperText={
                formik.touched.CounterpartyType &&
                formik.errors.CounterpartyType
              }
            />
          </div>
        </Paper>
      </form>
    </div>
  );
};
