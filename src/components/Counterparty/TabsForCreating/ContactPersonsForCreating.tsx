import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { FormCompanyDetails } from "../Forms/GeneralInformation/FormCompanyDetails";
import { FormGeneralInformation } from "../Forms/GeneralInformation/FormGeneralInformation";
import { FormCompanyContacts } from "../Forms/GeneralInformation/FormCompanyContacts";
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

type Data = {
  Surname: string | null;
  Name: string | null;
  middle_name: string | null;
  Gender: string | null;
  date_of_birth: string | null;
  Role: string | null;
  Position: string | null;
  counterparty_type: string | null;
  service_type: string | null;
  Industry: string | null;
  work_phone: string | null;
  mobile_phone: string | null;
  Email: string | null;
  delivery_address: string | null;
};
const validationSchema = yup.object({
  Surname: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  Name: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  middle_name: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  date_of_birth: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  Position: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  counterparty_type: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  service_type: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  Industry: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  work_phone: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  mobile_phone: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  Email: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  delivery_address: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
});
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      BasicInformation: {
        marginLeft: "3%",
        "& .MuiTextField-root": {
          minWidth: "10%",
        },
      },
      "& .MuiOutlinedInput-input": {
        textAlign: "start",
        height: "30px",
        backgroundColor: "transparent",
        fontSize: 13,
        padding: 0,
      },
      "& .MuiFormHelperText-root": {
        fontSize: 9,
        padding: "0 34px",
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
        height: "20px",
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 4,
        textAlign: "start",
        height: "20px",
        backgroundColor: "transparent",
        fontSize: 13,
      },
      "& .MuiOutlinedInput-multiline": {
        padding: "1px 1px",
      },
    },
    paper: {
      padding: 10,
      marginLeft: "4%",
      height: "60vh",
      border: "1px solid #3ab994",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12,
      fontSize: 12,
    },
  })
);

export const ContactPersonsForCreating = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      main_contact_person: false,
      Surname: "",
      Name: "",
      middle_name: "",
      Gender: checked,
      date_of_birth: "",
      Role: "",
      Position: "",
      counterparty_type: "",
      service_type: "",
      Industry: "",
      work_phone: "",
      mobile_phone: "",
      Email: "",
      delivery_address: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={classes.root}>
      <div style={{ width: "42%" }} className="BasicInformation">
        <form onSubmit={formik.handleSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "98%",
              marginLeft: "4%",
            }}
          >
            <span>Основные сведения</span>
            <Button
              color="primary"
              type="submit"
              style={{ textTransform: "none" }}
            >
              Сохранить
            </Button>
          </div>
          <Paper className={classes.paper}>
            <div className={classes.label}>
              <span>Основное контактное лицо </span>
              <span style={{ width: "61%" }}>
                <Checkbox
                  name="main_contact_person"
                  color="default"
                  inputProps={{ "aria-label": "checkbox with default color" }}
                />
              </span>
            </div>
            <div className={classes.label}>
              <span>Фамилия:</span>
              <TextField
                variant={"outlined"}
                name="Surname"
                placeholder={"Фамилия"}
                value={formik.values.Surname}
                onChange={formik.handleChange}
                error={formik.touched.Surname && Boolean(formik.errors.Surname)}
                helperText={formik.touched.Surname && formik.errors.Surname}
              />
            </div>
            <div className={classes.label}>
              <span>Имя</span>
              <TextField
                variant={"outlined"}
                name="Name"
                placeholder={"Имя"}
                value={formik.values.Name}
                onChange={formik.handleChange}
                error={formik.touched.Name && Boolean(formik.errors.Name)}
                helperText={formik.touched.Name && formik.errors.Name}
              />
            </div>
            <div className={classes.label}>
              <span>Отчество</span>
              <TextField
                variant={"outlined"}
                name="middle_name"
                placeholder={"Отчество"}
                value={formik.values.middle_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.middle_name &&
                  Boolean(formik.errors.middle_name)
                }
                helperText={
                  formik.touched.middle_name && formik.errors.middle_name
                }
              />
            </div>
            <div className={classes.label}>
              <span>Пол</span>
              <div style={{ width: "60%", display: "flex" }}>
                <div>
                  <span>Мужчина</span>
                  <Radio
                    checked={checked === "a"}
                    onChange={handleChange}
                    value="a"
                    color="default"
                    name="radio-button-demo"
                    size="small"
                    inputProps={{ "aria-label": "A" }}
                  />
                </div>
                <div>
                  <span>Женщина</span>
                  <Radio
                    checked={checked === "b"}
                    onChange={handleChange}
                    value="b"
                    color="default"
                    name="radio-button-demo"
                    size="small"
                    inputProps={{ "aria-label": "B" }}
                  />
                </div>
              </div>
            </div>
            <div className={classes.label}>
              <span>Дата рождения</span>
              <div style={{ width: "60%", display: "flex" }}>
                <TextField
                  id="date"
                  name="date_of_birth"
                  variant="outlined"
                  type="date"
                  defaultValue="2021-01-01"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className={classes.label}>
              <span>Роль</span>
              <TextField
                variant={"outlined"}
                name="Role"
                placeholder={"Выберите"}
                value={formik.values.Role}
                onChange={formik.handleChange}
                error={formik.touched.Role && Boolean(formik.errors.Role)}
                helperText={formik.touched.Role && formik.errors.Role}
              />
            </div>
            <div className={classes.label}>
              <span>Должность</span>
              <TextField
                variant={"outlined"}
                name="Position"
                placeholder={"Должность"}
                value={formik.values.Position}
                onChange={formik.handleChange}
                error={
                  formik.touched.Position && Boolean(formik.errors.Position)
                }
                helperText={formik.touched.Position && formik.errors.Position}
              />
            </div>
            <div className={classes.label}>
              <span>Тип контрагента</span>
              <TextField
                variant={"outlined"}
                name="counterparty_type"
                placeholder={"Выберите"}
                value={formik.values.counterparty_type}
                onChange={formik.handleChange}
                error={
                  formik.touched.counterparty_type &&
                  Boolean(formik.errors.counterparty_type)
                }
                helperText={
                  formik.touched.counterparty_type &&
                  formik.errors.counterparty_type
                }
              />
            </div>
            <div className={classes.label}>
              <span>Тип услуг</span>
              <TextField
                variant={"outlined"}
                name="service_type"
                placeholder={"Выберите"}
                value={formik.values.service_type}
                onChange={formik.handleChange}
                error={
                  formik.touched.service_type &&
                  Boolean(formik.errors.service_type)
                }
                helperText={
                  formik.touched.service_type && formik.errors.service_type
                }
              />
            </div>
            <div className={classes.label}>
              <span>Отрасль</span>
              <TextField
                variant={"outlined"}
                name="Industry"
                placeholder={"Выберите"}
                value={formik.values.Industry}
                onChange={formik.handleChange}
                error={
                  formik.touched.Industry && Boolean(formik.errors.Industry)
                }
                helperText={formik.touched.Industry && formik.errors.Industry}
              />
            </div>
            <div className={classes.label}>
              <span>Телефон рабочий</span>
              <span style={{ width: "60%" }}>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <TextField
                    variant={"outlined"}
                    name="work_phone"
                    placeholder={"+79999999999"}
                    value={formik.values.work_phone}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.work_phone &&
                      Boolean(formik.errors.work_phone)
                    }
                    helperText={
                      formik.touched.work_phone && formik.errors.work_phone
                    }
                  />
                  <Link color="inherit">+ Добавить телефон</Link>
                </div>
              </span>
            </div>
            <div className={classes.label}>
              <span>Телефон мобильный</span>
              <span style={{ width: "60%" }}>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <TextField
                    variant={"outlined"}
                    name="mobile_phone"
                    placeholder={"+79999999999"}
                    value={formik.values.mobile_phone}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.mobile_phone &&
                      Boolean(formik.errors.mobile_phone)
                    }
                    helperText={
                      formik.touched.mobile_phone && formik.errors.mobile_phone
                    }
                  />
                  <Link color="inherit">+ Добавить телефон</Link>
                </div>
              </span>
            </div>
            <div className={classes.label}>
              <span>E-mail</span>
              <span style={{ width: "60%" }}>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <TextField
                    variant={"outlined"}
                    name="Email"
                    placeholder={"email@email.com"}
                    value={formik.values.Email}
                    onChange={formik.handleChange}
                    error={formik.touched.Email && Boolean(formik.errors.Email)}
                    helperText={formik.touched.Email && formik.errors.Email}
                  />
                  <Link color="inherit">+ Добавить email</Link>
                </div>
              </span>
            </div>
            <div className={classes.label}>
              <span>Адрес доставки</span>

              <TextField
                variant={"outlined"}
                className={classes.textArea}
                multiline
                rows={3}
                name="delivery_address"
                placeholder={"Адрес доставки адрес вторая линия"}
                value={formik.values.delivery_address}
                onChange={formik.handleChange}
                error={
                  formik.touched.delivery_address &&
                  Boolean(formik.errors.delivery_address)
                }
                helperText={
                  formik.touched.delivery_address &&
                  formik.errors.delivery_address
                }
              />
            </div>
          </Paper>
        </form>
      </div>
      {/*<div style={{ width: "38%" }}>
        <FormCompanyDetails />
      </div>
      <div style={{ width: "35%" }}>
        <FormCompanyContacts />
      </div> */}
    </div>
  );
};
