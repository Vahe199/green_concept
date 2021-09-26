import { Button, Checkbox, Paper, Radio, TextField } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useFormik } from "formik";
import React from "react";
import { CheckSquareChecked } from "../../../IMG/SVG/CheckSquareChecked";
import { CheckSquareUnChecked } from "../../../IMG/SVG/CheckSquareUnChecked";
import { TrashIcon } from "../../../IMG/SVG/TrashIcon";
import InputFilterSelectedBranches from "../../Counterparty/Core/FilterInputs/InputFilterSelectedBranches";
import {
  InputFilterSelectedCongratulationsType,
  InputFilterSelectedDirection,
} from "../../Counterparty/Core/FilterInputs/InputFilterSelectedDirection";
import InputFilterSelectedRoles from "../../Counterparty/Core/FilterInputs/InputFilterSelectedRoles";
import InputFilterSelectedServicesType from "../../Counterparty/Core/FilterInputs/InputFilterSelectedServicesType";
import InputFilterSelectedStatus from "../../Counterparty/Core/FilterInputs/InputFilterSelectedStatus";
import InputFilterSelectedType from "../../Counterparty/Core/FilterInputs/InputFilterSelectedType";

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
        paddingLeft: 12,
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
      fontSize: 14,
      paddingBottom: 4,
      textTransform: "none",
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
        textAlign: "start",
        height: "40px",
        backgroundColor: "transparent",
        fontSize: 13,
      },
      "& .MuiOutlinedInput-multiline": {
        padding: "7.5px 12px",
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
      fontWeight: 500,
    },
    addItem: {
      marginLeft: "40%",
      textDecoration: "none",
      marginBottom: "2%",
      cursor: "pointer",
      fontSize: "12px",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    addContact: {
      textDecoration: "none",
      cursor: "pointer",
      fontSize: "12px",
      "&:hover": {
        textDecoration: "underline",
      },
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
      alignItems: "center",
    },
    rightDivider: {
      marginLeft: "3%",
      marginTop: "1%",
      cursor: "pointer",
      width: "10%",
    },
    selectListItem: {
      marginLeft: "3%",
    },
    addListItem: {
      fontSize: 23,
      border: "none",
      background: "none",
      color: "#3AB994",
    },
    selectItem: {
      fontSize: 16,
      textDecoration: "underline",
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
  const [status, setStatus] = React.useState("1");
  const [congrats, setCongrats] = React.useState("1");
  const [directionValue, setDirectionValue] = React.useState("1");
  const [rolesValue, setRolesValue] = React.useState("1");
  const [branchValue, setBranchValue] = React.useState("1");
  const [service, setService] = React.useState("1");
  const [CounterpartyType, setCounterpartyType] = React.useState("1");
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => console.log("button")}
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Сохранить карточку
          </Button>
          <span className={classes.selectListItem}>
            <span className={classes.addListItem}>
              <span style={{ fontSize: 17, marginTop: 15 }}> + </span>
              <span className={classes.selectItem} style={{ marginTop: 15 }}>
                Выбрать из списка
              </span>
            </span>
          </span>
        </div>
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
                  <span style={{ width: "20%" }}>
                    <Checkbox
                      name="main_contact_person"
                      icon={<CheckSquareChecked color="#5B6770" />}
                      checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                      inputProps={{
                        "aria-label": "checkbox with default color",
                      }}
                    />
                  </span>
                  <div style={{ display: "flex", width: "30%" }}>
                    <span className={classes.statusText}>Статус</span>
                    <InputFilterSelectedStatus
                      handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setStatus(e.target.value)
                      }
                      value={status}
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
                      size="medium"
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
                      size="medium"
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
                <InputFilterSelectedRoles
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRolesValue(e.target.value)
                  }
                  value={rolesValue}
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
                <span style={{ width: "60%" }}>
                  <InputFilterSelectedType
                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCounterpartyType(e.target.value)
                    }
                    value={CounterpartyType}
                  />
                </span>
              </div>
              <div className={classes.label}>
                <span>Тип услуг</span>
                <span style={{ width: "60%" }}>
                  <InputFilterSelectedServicesType
                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setService(e.target.value)
                    }
                    value={service}
                  />
                </span>
              </div>
              <div className={classes.label}>
                <span>Отрасль</span>
                <span style={{ width: "60%" }}>
                  <InputFilterSelectedBranches
                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setBranchValue(e.target.value)
                    }
                    value={branchValue}
                  />
                </span>
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
                      {phoneMob === 2 ? (
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
                      {email === 2 ? (
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
                    <InputFilterSelectedDirection
                      handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDirectionValue(e.target.value)
                      }
                      value={directionValue}
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
                      onChange={formik.handleChange}
                      error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                      helperText={formik.touched.OGPN && formik.errors.OGPN}
                    />
                  </div>
                  <div>
                    {multipleContactsFromGreen! < 3 ? (
                      <div
                        className={classes.addContact}
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
                          <div
                            style={{ fontSize: "12px" }}
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
                  <InputFilterSelectedCongratulationsType
                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCongrats(e.target.value)
                    }
                    value={congrats}
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
