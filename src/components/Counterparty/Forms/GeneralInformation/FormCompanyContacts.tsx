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
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

type Data = {
  LegalAddress: string | null;
  ActualAddress: string | null;
  MailingAddress: string | null;
  Phone: string | number | null;
  email: string | null;
};
const validationSchema: yup.SchemaOf<Data> = yup.object({
  LegalAddress: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  ActualAddress: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  MailingAddress: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  SiteCompany: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  Phone: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
      marginBottom: 10,
    },
    addItem: {
      marginLeft: "40%",
      marginBottom: 8,
      cursor: "pointer",
    },
    saveButton: {
      textTransform: "none",
      textDecoration: "underline",
    },
  })
);

export const FormCompanyContacts = () => {
  const classes = useStyles();
  const [site, setSite] = React.useState(1);
  const [phone, setPhone] = React.useState(1);
  const [email, setEmail] = React.useState(1);
  const [checked, setChecked] = React.useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      LegalAddress: "",
      ActualAddress: "",
      MatchesAddressActualAddress: false,
      MailingAddress: "",
      MatchesAddressMailingAddress: false,
      SiteCompany: "",
      Phone: "",
      email: "",
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
          <span>Контакты компании</span>
          <Button
            color="primary"
            type="submit"
            className={classes.saveButton}
          >
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span>Юридический адрес </span>
            <TextField
              variant={"outlined"}
              name="LegalAddress"
              placeholder={"123456 город улица строени дом офис"}
              value={formik.values.LegalAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.LegalAddress &&
                Boolean(formik.errors.LegalAddress)
              }
              helperText={
                formik.touched.LegalAddress && formik.errors.LegalAddress
              }
            />
          </div>
          <div className={classes.label}>
            <span>Фактический адрес</span>
            <TextField
              variant={"outlined"}
              name="ActualAddress"
              placeholder={"123456 город улица строени дом офис"}
              value={formik.values.ActualAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.ActualAddress &&
                Boolean(formik.errors.ActualAddress)
              }
              helperText={
                formik.touched.ActualAddress && formik.errors.ActualAddress
              }
            />
          </div>
          <div>
            <Checkbox
              name="MatchesAddressActualAddress"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
            <span>Совпадает с юридическим адресом</span>
          </div>
          <div className={classes.label}>
            <span>Почтовый адрес</span>
            <TextField
              variant={"outlined"}
              name="MailingAddress"
              placeholder={"123456 город улица строени дом офис"}
              value={formik.values.MailingAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.MailingAddress &&
                Boolean(formik.errors.MailingAddress)
              }
              helperText={
                formik.touched.MailingAddress && formik.errors.MailingAddress
              }
            />
          </div>
          <div>
            <Checkbox
              name="MatchesAddressMailingAddress"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
            <span>Совпадает с юридическим адресом</span>
          </div>
          <div className={classes.label}>
            <span>Сайт компании</span>
            <TextField
              variant={"outlined"}
              name="SiteCompany1"
              placeholder={"www.сайткомпании.ru"}
              value={formik.values.SiteCompany}
              onChange={formik.handleChange}
              error={
                formik.touched.SiteCompany && Boolean(formik.errors.SiteCompany)
              }
              helperText={
                formik.touched.SiteCompany && formik.errors.SiteCompany
              }
            />
          </div>
          {site > 1 ? (
            <div className={classes.label}>
              <>&nbsp;</>
              <TextField
                variant={"outlined"}
                name="SiteCompany2"
                placeholder={"www.сайткомпании.ru"}
                value={formik.values.SiteCompany}
                onChange={formik.handleChange}
                error={
                  formik.touched.SiteCompany &&
                  Boolean(formik.errors.SiteCompany)
                }
                helperText={
                  formik.touched.SiteCompany && formik.errors.SiteCompany
                }
              />
            </div>
          ) : (
            ""
          )}
          {site > 2 ? (
            <div className={classes.label}>
              <>&nbsp;</>
              <TextField
                variant={"outlined"}
                name="SiteCompany3"
                placeholder={"www.сайткомпании.ru"}
                value={formik.values.SiteCompany}
                onChange={formik.handleChange}
                error={
                  formik.touched.SiteCompany &&
                  Boolean(formik.errors.SiteCompany)
                }
                helperText={
                  formik.touched.SiteCompany && formik.errors.SiteCompany
                }
              />
            </div>
          ) : (
            ""
          )}

          <div
            className={classes.addItem}
            onClick={() => (site < 3 ? setSite(site + 1) : null)}
          >
            + Добавить сайт
          </div>
          <div className={classes.label}>
            <span>Телефон</span>
            <TextField
              variant={"outlined"}
              name="Phone"
              placeholder={"+79991234567"}
              value={formik.values.Phone}
              onChange={formik.handleChange}
              error={formik.touched.Phone && Boolean(formik.errors.Phone)}
              helperText={formik.touched.Phone && formik.errors.Phone}
            />
          </div>
          {phone > 1 ? (
            <div className={classes.label}>
              <>&nbsp;</>
              <TextField
                variant={"outlined"}
                name="Phone"
                placeholder={"+79991234567"}
                value={formik.values.Phone}
                onChange={formik.handleChange}
                error={formik.touched.Phone && Boolean(formik.errors.Phone)}
                helperText={formik.touched.Phone && formik.errors.Phone}
              />
            </div>
          ) : (
            ""
          )}
          {phone > 2 ? (
            <div className={classes.label}>
              <>&nbsp;</>
              <TextField
                variant={"outlined"}
                name="Phone"
                placeholder={"+79991234567"}
                value={formik.values.Phone}
                onChange={formik.handleChange}
                error={formik.touched.Phone && Boolean(formik.errors.Phone)}
                helperText={formik.touched.Phone && formik.errors.Phone}
              />
            </div>
          ) : (
            ""
          )}
          <div
            className={classes.addItem}
            onClick={() => (phone < 3 ? setPhone(phone + 1) : null)}
          >
            {" "}
            + Добавить телефон
          </div>
          <div className={classes.label}>
            <span>E-mail</span>
            <TextField
              variant={"outlined"}
              name="email"
              placeholder={"email@email.ru"}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          {email > 1 ? (
            <div className={classes.label}>
              <>&nbsp;</>
              <TextField
                variant={"outlined"}
                name="email"
                placeholder={"email@email.ru"}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
          ) : (
            ""
          )}
          {email > 2 ? (
            <div className={classes.label}>
              <>&nbsp;</>
              <TextField
                variant={"outlined"}
                name="email"
                placeholder={"email@email.ru"}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
          ) : (
            ""
          )}
          <div
            className={classes.addItem}
            onClick={() => (email < 3 ? setEmail(email + 1) : null)}
          >
            {" "}
            + Добавить email
          </div>
        </Paper>
      </form>
    </div>
  );
};
