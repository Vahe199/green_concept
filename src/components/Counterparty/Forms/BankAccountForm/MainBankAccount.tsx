import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Checkbox, TextField, Paper, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { UseActions } from "../../../../redux/type_redux_hook/ useAction";
import InputFilterSelectedCrm from "../../Core/FilterInputs/InputFilterSelectedCRM";

const validationSchema = yup.object({
  BNK: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  name_bank: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  cities: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  k_c: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  R_r: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "4%",
      // marginRight: "7%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 12,
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
      "& .MuiOutlinedInput-adornedEnd ": {
        paddingRight: 0,
      },
    },
    paper: {
      padding: 10,
      color: "#3B4750",
      border: "1px solid #3ab994",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 12,
      textTransform: "none"
    },
    saveButton: {
      textTransform: "none",
      textDecoration: "underline",
    },
    btn: {
      color: "#fff",
      fontSize: 10,
      paddingBottom: 0,
      padding: 4,
      boxShadow: "none",
      backgroundColor: "#3AB994",
      textTransform: "none",
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
const MainBankAccount: React.FC<BankProps> = ({ setEdit }) => {
  const { changeAuthorGeneralData, recoveryAuthorDataState } = UseActions();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      BNK: "",
      name_bank: "",
      cities: "",
      k_c: "",
      R_r: "",
      account_active: false,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
          <span>Основной банковский счет</span>
          <Button
            onClick={() => setEdit(true)}
            color="primary"
            type="submit"
            className={classes.saveButton}
          >
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span>БИК</span>
            <div
              style={{
                width: "75%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                name="BNK"
                style={{ width: "75%" }}
                variant={"outlined"}
                placeholder={"1234556789101112"}
                value={formik.values.BNK}
                onChange={formik.handleChange}
                error={formik.touched.BNK && Boolean(formik.errors.BNK)}
                helperText={formik.touched.BNK && formik.errors.BNK}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                Заполнить по БИК
              </Button>
            </div>
          </div>
          <div className={classes.label}>
            <span>Наименование банка</span>
            <TextField
              style={{ width: "75%" }}
              variant={"outlined"}
              name="name_bank"
              placeholder={"Наименование банка"}
              value={formik.values.name_bank}
              onChange={formik.handleChange}
              error={
                formik.touched.name_bank && Boolean(formik.errors.name_bank)
              }
              helperText={formik.touched.name_bank && formik.errors.name_bank}
            />
          </div>
          <div className={classes.label}>
            <span>Город</span>
            <TextField
              style={{ width: "75%" }}
              variant={"outlined"}
              name="cities"
              placeholder={"Город"}
              value={formik.values.cities}
              onChange={formik.handleChange}
              error={formik.touched.cities && Boolean(formik.errors.cities)}
              helperText={formik.touched.cities && formik.errors.cities}
            />
          </div>
          <div className={classes.label}>
            <span>К/c</span>
            <TextField
              style={{ width: "75%" }}
              variant={"outlined"}
              name="k_c"
              placeholder={"123456789101112"}
              value={formik.values.k_c}
              onChange={formik.handleChange}
              error={formik.touched.k_c && Boolean(formik.errors.k_c)}
              helperText={formik.touched.k_c && formik.errors.k_c}
            />
          </div>
          <div className={classes.label}>
            <span>Р/c</span>
            <TextField
              style={{ width: "75%" }}
              variant={"outlined"}
              name="R_r"
              placeholder={"123456789101112"}
              value={formik.values.R_r}
              onChange={formik.handleChange}
              error={formik.touched.R_r && Boolean(formik.errors.R_r)}
              helperText={formik.touched.R_r && formik.errors.R_r}
            />
          </div>
          <div className={classes.label}>
            <span>Счет активный</span>
            <span style={{ width: "75%" }}>
              <Checkbox
                name="account_active"
                defaultChecked
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
            </span>
          </div>
        </Paper>
      </form>
    </div>
  );
};

export default MainBankAccount;
