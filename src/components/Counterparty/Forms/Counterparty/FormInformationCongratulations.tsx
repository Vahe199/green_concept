import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Paper, Link, Divider, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { TrashIcon } from "../../../../IMG/SVG/TrashIcon";
import {InputFilterSelectedCongratulationsType} from "../../Core/FilterInputs/InputFilterSelectedDirection";

const validationSchema = yup.object({
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
        paddingLeft: 7,
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
      color: "#3B4750",
      border: "1px solid #3ab994",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
      fontSize: 12,
    },
    spanTitle: {
      fontSize: 16,
    },
    btnSubmit: {
      textTransform: "none",
      textDecoration: "underline",
    },
  })
);
type InfoCongratulations = {
  // change: boolean;
  setChangeCongratulations: (val: boolean) => void;
};

export const FormInformationCongratulations: React.FC<InfoCongratulations> = ({
  setChangeCongratulations,
}) => {
  const classes = useStyles();
  const [congratulations, setCongratulations] = React.useState("");
  const [congratulations1, setCongratulations1] = React.useState("");

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
  const addCongratulations = () => {
    if (!congratulations) {
      setCongratulations("1");
    }
    if (!congratulations1 && congratulations) {
      setCongratulations1("1");
    }
  };
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className={classes.spanTitle}>Сведения о поздравлениях</span>
          <Button
            color="primary"
            onClick={() => setChangeCongratulations(true)}
            type="submit"
            style={{ textTransform: "none" }}
          >
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span className={classes.spanTitle}>Праздник</span>
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
            <span className={classes.spanTitle}>Тип поздравления</span>
            <InputFilterSelectedCongratulationsType />
          </div>
          <div className={classes.label}>
            <span className={classes.spanTitle}> Другое</span>
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
            <span className={classes.spanTitle}>Статус контактного лица</span>
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
            <span></span>
            <span style={{ width: "60%", marginTop: 10 }}>
              <Link color="inherit" onClick={addCongratulations}>
                + Новый праздник
              </Link>
            </span>
          </div>
          {congratulations1 && (
            <div>
              <Divider variant="middle" style={{ margin: 15 }} />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "100%" }}>
                  <div className={classes.label}>
                    <span className={classes.spanTitle}> Тип поздравления</span>
                    <InputFilterSelectedCongratulationsType />
                  </div>
                  <div className={classes.label}>
                    <span className={classes.spanTitle}>Другое</span>
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
                    <span className={classes.spanTitle}>
                      Статус контактного лица
                    </span>
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
                </div>
                <span onClick={() => setCongratulations1("")}>
                  <TrashIcon />
                </span>
              </div>
            </div>
          )}
          {congratulations && (
            <div>
              <Divider variant="middle" style={{ margin: 15 }} />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "100%" }}>
                  <div className={classes.label}>
                    <span className={classes.spanTitle}>Тип поздравления</span>
                    <InputFilterSelectedCongratulationsType />
                  </div>
                  <div className={classes.label}>
                    <span className={classes.spanTitle}>Другое</span>
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
                    <span className={classes.spanTitle}>
                      Статус контактного лица
                    </span>
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
                </div>
                <span onClick={() => setCongratulations("")}>
                  <TrashIcon />
                </span>
              </div>
            </div>
          )}
        </Paper>
      </form>
    </div>
  );
};
