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
    textArea: {
      marginBottom: "6%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "200px",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 4,
        textAlign: "start",
        height: "200px",
        backgroundColor: "transparent",
        fontSize: 13,
      },
      "& .MuiOutlinedInput-multiline": {
        padding: "7.5px 14px",
      },
    },
    paper: {
      padding: 10,
      border: "1px solid #3ab994",
      height: 350,
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 12,
    },
    btnSubmit: {
      textTransform: "none",
      textDecoration: "underline",
    },
  })
);

export const FormContactsFromGreen = () => {
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
          }}
        >
          <span>Контакты со стороны Грин</span>
          <Button
            color="primary"
            type="submit"
            className={classes.btnSubmit}
          >
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span>Направление</span>
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
            <span>Контактное лицо</span>
            <TextField
              variant={"outlined"}
              name="CounterpartyType"
              placeholder={"Введите слово или часть слова"}
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
            <span>Дополнительная информация</span>

            <TextField
              variant={"outlined"}
              className={classes.textArea}
              multiline
              rows={8}
              name="FullCompanyName"
              placeholder={"Введите текст"}
              value={formik.values.OGPN}
              onChange={formik.handleChange}
              error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
              helperText={formik.touched.OGPN && formik.errors.OGPN}
            />
          </div>
          <div>
            <Link color="inherit">+ Новый контакт</Link>
          </div>
        </Paper>
      </form>
    </div>
  );
};
