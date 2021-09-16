import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
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
import { TrashIcon } from "../../../IMG/SVG/TrashIcon";
import Divider from "@material-ui/core/Divider";
import { SpaRounded } from "@material-ui/icons";

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
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginLeft: "2%",
      marginRight: "2%",
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
        marginLeft: 0,
      },
      "& .MuiFormControlLabel-root": {
        fontSize: 10,
      },
    },
    btn: {
      marginLeft: "2%",
      marginTop: 10,
      marginBottom: 10,
      color: "#fff",
      fontSize: 12,
      paddingBottom: 4,
      backgroundColor: "#3AB994",
      "&:hover": {
        backgroundColor: "#36AD8B",
      },
      "&:active": {
        backgroundColor: "#32A886",
      },
    },
    textArea: {
      marginBottom: "6%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "50px",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 4,
        textAlign: "start",
        height: "40px",
        backgroundColor: "transparent",
        fontSize: 13,
      },
      "& .MuiOutlinedInput-multiline": {
        padding: "7.5px 14px",
      },
    },
    paper: {
      padding: 10,
      marginBottom: "1%",
      border: "1px solid #3ab994",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
      fontSize: "13px",
    },
    addItem: {
      marginLeft: "40%",
      textDecoration: "none",
      marginBottom: "2%",
      cursor: "pointer",
      fontSize: "12px",
    },
    BasicInformation: {
      width: "52%",
      paddingRight: "2%",
    },
    ContactsFromGreen: {
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: theme.palette.common.white,
      },
    },
    rightPanel: {
      width: "57%",
    },
    statusText: {
      fontSize: 15,
      marginTop: "3%",
      marginRight: "10%",
    },
    topDiv: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    rightDivider: {
      marginLeft: "3%",
      marginTop: "1%",
      cursor: "pointer",
      width: "10%",
    },
  })
);

export const ContactPersonsForCreating = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState("a");
  const [phoneMob, setPhoneMob] = React.useState(1);
  const [multipleContactsFromGreen, setMultipleContactsFromGreen] =
    React.useState(1);
  const [congratsPart, setCongratsPart] = React.useState(1);
  const [phone, setPhone] = React.useState(1);
  const [email, setEmail] = React.useState(1);
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
      CRM: "",
      CounterpartyType: "",
      ServiceType: "",
      INN: "",
      KPP: "",
      OGPN: "",
      NDA: false,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Button
          onClick={() => console.log("button")}
          variant="contained"
          color="primary"
          className={classes.btn}
        >
          Сохранить карточку
        </Button>
        <div className={classes.root}>
          <div className={classes.BasicInformation}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Основные сведения</span>
            </div>
            <Paper className={classes.paper}>
              <div className={classes.label}>
                <div className={classes.topDiv}>
                  <span>Основное контактное лицо </span>
                  <span style={{ width: "61%" }}>
                    <Checkbox
                      name="main_contact_person"
                      color="default"
                      inputProps={{
                        "aria-label": "checkbox with default color",
                      }}
                    />
                  </span>
                  <div style={{ display: "flex" }}>
                    <span className={classes.statusText}>Статус</span>
                    <TextField
                      variant={"outlined"}
                      name="Status"
                      placeholder={"Active"}
                      value={formik.values.Name}
                      onChange={formik.handleChange}
                      error={formik.touched.Name && Boolean(formik.errors.Name)}
                      helperText={formik.touched.Name && formik.errors.Name}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.label}>
                <span>Фамилия:</span>
                <TextField
                  variant={"outlined"}
                  name="Surname"
                  placeholder={"Фамилия"}
                  value={formik.values.Surname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.Surname && Boolean(formik.errors.Surname)
                  }
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
                      width: "80%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="work_phone"
                      style={{ width: "85%" }}
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
                  </div>
                </span>
              </div>
              {phone > 1 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="work_phone"
                        style={{ width: "85%" }}
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
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                        }}
                        onClick={() => (phone > 1 ? setPhone(phone - 1) : null)}
                      >
                        {phone === 2 ? <TrashIcon /> : ""}
                      </div>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {phone > 2 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="work_phone"
                        style={{ width: "85%" }}
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
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                        }}
                        onClick={() => (phone > 1 ? setPhone(phone - 1) : null)}
                      >
                        {phone === 3 ? <TrashIcon /> : ""}
                      </div>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {phone! < 3 ? (
                <div
                  className={classes.addItem}
                  onClick={() => (phone < 3 ? setPhone(phone + 1) : null)}
                >
                  + Добавить телефон
                </div>
              ) : (
                ""
              )}
              <div className={classes.label}>
                <span>Телефон мобильный</span>
                <span style={{ width: "60%" }}>
                  <div
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="mobile_phone"
                      style={{ width: "85%" }}
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
                  </div>
                </span>
              </div>
              {phoneMob > 1 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="mobile_phone"
                        style={{ width: "85%" }}
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
                      {phoneMob == 2 ? (
                        <div
                          style={{
                            marginLeft: "3%",
                            marginTop: "1%",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            phoneMob > 1 ? setPhoneMob(phoneMob - 1) : null
                          }
                        >
                          <TrashIcon />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {phoneMob > 2 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="mobile_phone"
                        style={{ width: "85%" }}
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
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          phoneMob > 1 ? setPhoneMob(phoneMob - 1) : null
                        }
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {phoneMob! < 3 ? (
                <div
                  className={classes.addItem}
                  onClick={() =>
                    phoneMob < 3 ? setPhoneMob(phoneMob + 1) : null
                  }
                >
                  + Добавить телефон
                </div>
              ) : (
                ""
              )}
              <div className={classes.label}>
                <span>E-mail</span>
                <span style={{ width: "60%" }}>
                  <div
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="Email"
                      placeholder={"email@email.com"}
                      style={{ width: "85%" }}
                      value={formik.values.Email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.Email && Boolean(formik.errors.Email)
                      }
                      helperText={formik.touched.Email && formik.errors.Email}
                    />
                  </div>
                </span>
              </div>
              {email > 1 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="Email"
                        placeholder={"email@email.com"}
                        style={{ width: "85%" }}
                        value={formik.values.Email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Email && Boolean(formik.errors.Email)
                        }
                        helperText={formik.touched.Email && formik.errors.Email}
                      />
                      {email == 2 ? (
                        <div
                          style={{
                            marginLeft: "3%",
                            marginTop: "1%",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            email > 1 ? setEmail(email - 1) : null
                          }
                        >
                          <TrashIcon />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {email > 2 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="Email"
                        placeholder={"email@email.com"}
                        style={{ width: "85%" }}
                        value={formik.values.Email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Email && Boolean(formik.errors.Email)
                        }
                        helperText={formik.touched.Email && formik.errors.Email}
                      />
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                        }}
                        onClick={() => (email > 1 ? setEmail(email - 1) : null)}
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {email! < 3 ? (
                <div
                  className={classes.addItem}
                  onClick={() => (email < 3 ? setEmail(email + 1) : null)}
                >
                  + Добавить email
                </div>
              ) : (
                ""
              )}
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
          </div>
          <div className={classes.rightPanel}>
            <div style={{ width: "100%" }}>
              <div className={classes.ContactsFromGreen}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <span>Контакты со стороны Грин</span>
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
                      value={"esi mecacra vonc vor dizaynuma"}
                      onChange={formik.handleChange}
                      error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                      helperText={formik.touched.OGPN && formik.errors.OGPN}
                    />
                  </div>
                  <div>
                    {multipleContactsFromGreen! < 3 ? (
                      <div style={{fontSize: "12px"}}
                        onClick={() =>
                          multipleContactsFromGreen < 3
                            ? setMultipleContactsFromGreen(
                                multipleContactsFromGreen + 1
                              )
                            : null
                        }
                      >
                        + Новый контакт
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  {multipleContactsFromGreen > 1 ? (
                    <>
                      <Divider style={{ marginBottom: "9px" }} />
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>Направление</span>
                        <TextField
                          variant={"outlined"}
                          name="CounterpartyType"
                          style={{ minWidth: "50%" }}
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
                        <div
                          className={classes.rightDivider}
                          onClick={() =>
                            setMultipleContactsFromGreen(
                              multipleContactsFromGreen - 1
                            )
                          }
                        >
                          {multipleContactsFromGreen === 2 ? <TrashIcon /> : ""}
                        </div>
                      </div>
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>Контактное лицо</span>
                        <TextField
                          variant={"outlined"}
                          name="CounterpartyType"
                          style={{ minWidth: "50%" }}
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
                        <div className={classes.rightDivider}></div>
                      </div>
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>
                          Дополнительная информация
                        </span>
                        <TextField
                          variant={"outlined"}
                          className={classes.textArea}
                          multiline
                          rows={8}
                          name="FullCompanyName"
                          style={{ minWidth: "50%" }}
                          placeholder={"Введите текст"}
                          value={formik.values.OGPN}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.OGPN && Boolean(formik.errors.OGPN)
                          }
                          helperText={formik.touched.OGPN && formik.errors.OGPN}
                        />
                        <div className={classes.rightDivider}></div>
                      </div>
                      <div>
                        {multipleContactsFromGreen! < 3 ? (
                          <div style={{fontSize: "12px"}}
                            onClick={() =>
                              multipleContactsFromGreen < 3
                                ? setMultipleContactsFromGreen(
                                    multipleContactsFromGreen + 1
                                  )
                                : null
                            }
                          >
                            + Новый контакт
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {multipleContactsFromGreen > 2 ? (
                    <>
                      <Divider style={{ marginBottom: "9px" }} />
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>Направление</span>
                        <TextField
                          variant={"outlined"}
                          name="CounterpartyType"
                          style={{ minWidth: "50%" }}
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
                        <div
                          className={classes.rightDivider}
                          onClick={() =>
                            setMultipleContactsFromGreen(
                              multipleContactsFromGreen - 1
                            )
                          }
                        >
                          <TrashIcon />
                        </div>
                      </div>
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>Контактное лицо</span>
                        <TextField
                          variant={"outlined"}
                          name="CounterpartyType"
                          style={{ minWidth: "50%" }}
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
                        <div className={classes.rightDivider}></div>
                      </div>
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>
                          Дополнительная информация
                        </span>

                        <TextField
                          variant={"outlined"}
                          className={classes.textArea}
                          multiline
                          rows={8}
                          name="FullCompanyName"
                          style={{ minWidth: "50%" }}
                          placeholder={"Введите текст"}
                          value={formik.values.OGPN}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.OGPN && Boolean(formik.errors.OGPN)
                          }
                          helperText={formik.touched.OGPN && formik.errors.OGPN}
                        />
                        <div className={classes.rightDivider}></div>
                      </div>
                      <div>
                        {multipleContactsFromGreen! < 3 ? (
                          <div
                            onClick={() =>
                              multipleContactsFromGreen < 3
                                ? setMultipleContactsFromGreen(
                                    multipleContactsFromGreen + 1
                                  )
                                : null
                            }
                          >
                            + Новый контакт
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </Paper>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
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
                {congratsPart! < 3 ? (
                  <div
                    className={classes.addItem}
                    onClick={() =>
                      congratsPart < 3
                        ? setCongratsPart(congratsPart + 1)
                        : null
                    }
                  >
                    + Новый праздник
                  </div>
                ) : (
                  ""
                )}

                {congratsPart > 1 ? (
                  <>
                    <Divider style={{ marginBottom: "9px" }} />
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Праздник</span>
                      <TextField
                        variant={"outlined"}
                        name="CounterpartyType"
                        style={{ minWidth: "50%" }}
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
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                          width: "10%",
                        }}
                        onClick={() =>
                          congratsPart > 1
                            ? setCongratsPart(congratsPart - 1)
                            : null
                        }
                      >
                        {congratsPart === 2 ? <TrashIcon /> : ""}
                      </div>
                    </div>
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Тип поздравления</span>
                      <TextField
                        variant={"outlined"}
                        name="CounterpartyType"
                        style={{ minWidth: "50%" }}
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
                      <div className={classes.rightDivider}></div>
                    </div>
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Другое</span>
                      <TextField
                        variant={"outlined"}
                        name="CounterpartyType"
                        style={{ minWidth: "50%" }}
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
                      <div className={classes.rightDivider}></div>
                    </div>
                  </>
                ) : null}
                {congratsPart > 2 ? (
                  <>
                    <Divider style={{ marginBottom: "9px" }} />
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Праздник</span>
                      <TextField
                        variant={"outlined"}
                        name="CounterpartyType"
                        style={{ minWidth: "50%" }}
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
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                          width: "10%",
                        }}
                        onClick={() =>
                          congratsPart > 1
                            ? setCongratsPart(congratsPart - 1)
                            : null
                        }
                      >
                        <TrashIcon />
                      </div>
                    </div>
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Тип поздравления</span>
                      <TextField
                        variant={"outlined"}
                        name="CounterpartyType"
                        style={{ minWidth: "50%" }}
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
                      <div className={classes.rightDivider}></div>
                    </div>
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Другое</span>
                      <TextField
                        variant={"outlined"}
                        name="CounterpartyType"
                        style={{ minWidth: "50%" }}
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
                      <div className={classes.rightDivider}></div>
                    </div>
                  </>
                ) : null}
              </Paper>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
