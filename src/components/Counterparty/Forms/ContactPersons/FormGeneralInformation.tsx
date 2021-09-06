import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

type Data = {
  email: string | null;
  password: string | null;
};
const validationSchema: yup.SchemaOf<Data> = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      height: "100vh",
    },
    heading: {
      width: "100",
      marginTop: 10,
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
    },
    heading1: {
      width: "99%",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
    },
    generalInfo: {
      // marginTop: -40,
      width: "100%",
      height: "82vh",
      border: "1px solid #3AB994",
    },
    btnSubmit: {
      textTransform: "none",
    },
  })
);
export const FormMainInformation = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.heading}>
          <section className={classes.heading1}>
            <span>Основные сведения</span>
            <Button
              color="primary"
              size="small"
              type="submit"
              className={classes.btnSubmit}
            >
              Сохронить
            </Button>
          </section>
        </div>
        <Paper className={classes.generalInfo}>
          <TextField
            variant={"outlined"}
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Paper>
      </form>
    </div>
  );
};
