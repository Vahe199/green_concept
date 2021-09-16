import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { FormCompanyDetails } from "../Forms/GeneralInformation/FormCompanyDetails";
import { FormGeneralInformation } from "../Forms/GeneralInformation/FormGeneralInformation";
import { FormCompanyContacts } from "../Forms/GeneralInformation/FormCompanyContacts";
import { TrashIcon } from "../../../IMG/SVG/TrashIcon";
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
    textArea: {
      marginBottom: "2%",
      width: "100%",
      "& .MuiOutlinedInput-multiline": {
        padding: 7,
      },
    },
    textAreaCN: {
      marginBottom: "2%",
      width: "60%",
      "& .MuiOutlinedInput-multiline": {
        padding: 1,
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
    root: {
      display: "flex",
      marginRight: "2%",
      width: "100%",
      height: "20%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: "white",
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
    addItem: {
      marginLeft: "40%",
      marginBottom: 8,
      cursor: "pointer",
    },
    addItemCRM: {
      marginLeft: "40%",
      marginBottom: 8,
      cursor: "pointer",
    },
    paper: {
      padding: 10,
      border: "1px solid #3ab994",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 12,
    },
  })
);

export const GeneralInformationForCreating = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState("a");
  const [branch, setBranch] = React.useState(1);
  const [CRMs, setCRMs] = React.useState(1);
  const [site, setSite] = React.useState(1);
  const [phone, setPhone] = React.useState(1);
  const [email, setEmail] = React.useState(1);
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
      FullCompanyName: "",
      ShortNameCompany: "",
      CompanyGroup: "",
      Industry: "",
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
          <div style={{ width: "24%", marginLeft: "2%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "101%",
              }}
            >
              <span>Общие сведения</span>
            </div>
            <Paper className={classes.paper}>
              <div style={{ marginBottom: "2%", display: "flex" }}>
                <div>
                  <span style={{ fontSize: 10 }}>Физическое лицо</span>
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
                  <span style={{ fontSize: 10 }}>Юридическое лицо</span>
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
              <div className={classes.label}>
                <span>CRM</span>
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant={"outlined"}
                    className={classes.textArea}
                    multiline
                    rows={2}
                    name="CRM"
                    placeholder={"Фамилия Имя"}
                    value={formik.values.CRM}
                    onChange={formik.handleChange}
                    error={formik.touched.CRM && Boolean(formik.errors.CRM)}
                    helperText={formik.touched.CRM && formik.errors.CRM}
                  />
                </div>
              </div>
              {CRMs > 1 ? (
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "40%",
                    marginTop: "3%",
                    marginBottom: "5%",
                  }}
                >
                  <TextField
                    variant={"outlined"}
                    className={classes.textArea}
                    multiline
                    rows={2}
                    name="CRM"
                    placeholder={"Фамилия Имя"}
                    value={formik.values.CRM}
                    onChange={formik.handleChange}
                    error={formik.touched.CRM && Boolean(formik.errors.CRM)}
                    helperText={formik.touched.CRM && formik.errors.CRM}
                  />
                  <div
                    style={{
                      marginLeft: "3%",
                      marginTop: "5%",
                      cursor: "pointer",
                    }}
                    onClick={() => (CRMs > 1 ? setCRMs(CRMs - 1) : null)}
                  >
                    {CRMs === 2 ? <TrashIcon /> : ""}
                  </div>
                </div>
              ) : (
                ""
              )}
              {CRMs > 2 ? (
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "40%",
                    marginBottom: "5%",
                  }}
                >
                  <TextField
                    variant={"outlined"}
                    className={classes.textArea}
                    multiline
                    rows={2}
                    name="CRM"
                    placeholder={"Фамилия Имя"}
                    value={formik.values.CRM}
                    onChange={formik.handleChange}
                    error={formik.touched.CRM && Boolean(formik.errors.CRM)}
                    helperText={formik.touched.CRM && formik.errors.CRM}
                  />
                  <div
                    style={{
                      marginLeft: "3%",
                      marginTop: "5%",
                      cursor: "pointer",
                    }}
                    onClick={() => (CRMs > 1 ? setCRMs(CRMs - 1) : null)}
                  >
                    <TrashIcon />
                  </div>
                </div>
              ) : (
                ""
              )}
              {CRMs! < 3 ? (
                <div
                  className={classes.addItemCRM}
                  onClick={() => (CRMs < 3 ? setCRMs(CRMs + 1) : null)}
                >
                  + Добавить еще CRM
                </div>
              ) : (
                ""
              )}
              <div className={classes.label}>
                <span>Тип контрагента</span>
                <TextField
                  variant={"outlined"}
                  name="CounterpartyType"
                  placeholder={"Поставщик"}
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
                <span>Тип услуг</span>
                <TextField
                  variant={"outlined"}
                  name="ServiceType"
                  placeholder={"Другое"}
                  value={formik.values.ServiceType}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.ServiceType &&
                    Boolean(formik.errors.ServiceType)
                  }
                  helperText={
                    formik.touched.ServiceType && formik.errors.ServiceType
                  }
                />
              </div>
              <div className={classes.label}>
                <span>ИНН</span>
                <TextField
                  variant={"outlined"}
                  name="INN"
                  placeholder={"1234556789101112"}
                  value={formik.values.INN}
                  onChange={formik.handleChange}
                  error={formik.touched.INN && Boolean(formik.errors.INN)}
                  helperText={formik.touched.INN && formik.errors.INN}
                />
              </div>
              <div className={classes.label}>
                <span>КПП</span>
                <TextField
                  variant={"outlined"}
                  name="KPP"
                  placeholder={"1234556789101112"}
                  value={formik.values.KPP}
                  onChange={formik.handleChange}
                  error={formik.touched.KPP && Boolean(formik.errors.KPP)}
                  helperText={formik.touched.KPP && formik.errors.KPP}
                />
              </div>
              <div className={classes.label}>
                <span>ОГРН</span>
                <TextField
                  variant={"outlined"}
                  name="OGPN"
                  placeholder={"1234556789101112"}
                  value={formik.values.OGPN}
                  onChange={formik.handleChange}
                  error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                  helperText={formik.touched.OGPN && formik.errors.OGPN}
                />
              </div>
              <div className={classes.label}>
                <span>NDA</span>
                <span style={{ width: "62%" }}>
                  <Checkbox
                    defaultChecked
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                  />
                </span>
              </div>
            </Paper>
          </div>
          <div style={{ width: "34%", marginLeft: "2%", marginRight: "2%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "101%",
              }}
            >
              <span>Сведения о компании</span>
            </div>
            <Paper className={classes.paper}>
              <div className={classes.label}>
                <span>Полное наименование компании</span>

                <TextField
                  variant={"outlined"}
                  multiline
                  className={classes.textAreaCN}
                  rows={4}
                  name="FullCompanyName"
                  placeholder={'ООО "Северо-Западная компания”'}
                  value={formik.values.FullCompanyName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.FullCompanyName &&
                    Boolean(formik.errors.FullCompanyName)
                  }
                  helperText={
                    formik.touched.FullCompanyName &&
                    formik.errors.FullCompanyName
                  }
                />
              </div>
              <div className={classes.label}>
                <span>Краткое наименование компании</span>
                <TextField
                  variant={"outlined"}
                  name="ShortNameCompany"
                  placeholder={"Краткое наименование компании"}
                  value={formik.values.ShortNameCompany}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.ShortNameCompany &&
                    Boolean(formik.errors.ShortNameCompany)
                  }
                  helperText={
                    formik.touched.ShortNameCompany &&
                    formik.errors.ShortNameCompany
                  }
                />
              </div>
              <div className={classes.label}>
                <span>Группа компаний (при наличии)</span>
                <TextField
                  variant={"outlined"}
                  name="CompanyGroup"
                  placeholder={"Группа компаний"}
                  value={formik.values.CompanyGroup}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.CompanyGroup &&
                    Boolean(formik.errors.CompanyGroup)
                  }
                  helperText={
                    formik.touched.CompanyGroup && formik.errors.CompanyGroup
                  }
                />
              </div>
              <div className={classes.label}>
                <span>Отрасль</span>
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant={"outlined"}
                    name="Industry"
                    style={{ width: "85%" }}
                    placeholder={"Выберите отрасль"}
                    value={formik.values.Industry}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.Industry && Boolean(formik.errors.Industry)
                    }
                    helperText={
                      formik.touched.Industry && formik.errors.Industry
                    }
                  />
                </div>
              </div>
              {branch > 1 ? (
                <div className={classes.label}>
                  <span></span>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="Industry"
                      style={{ width: "85%" }}
                      placeholder={"Выберите отрасль"}
                      value={formik.values.Industry}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.Industry &&
                        Boolean(formik.errors.Industry)
                      }
                      helperText={
                        formik.touched.Industry && formik.errors.Industry
                      }
                    />
                    <div
                      style={{
                        marginRight: "2%",
                        marginTop: 3,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        branch > 1 ? setBranch(branch - 1) : null
                      }
                    >
                      {branch === 2 ? <TrashIcon /> : ""}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {branch > 2 ? (
                <div className={classes.label}>
                  <span></span>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="Industry"
                      style={{ width: "85%" }}
                      placeholder={"Выберите отрасль"}
                      value={formik.values.Industry}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.Industry &&
                        Boolean(formik.errors.Industry)
                      }
                      helperText={
                        formik.touched.Industry && formik.errors.Industry
                      }
                    />
                    <div
                      style={{
                        marginRight: "2%",
                        marginTop: 3,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        branch > 1 ? setBranch(branch - 1) : null
                      }
                    >
                      <TrashIcon />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {branch! < 3 ? (
                <div
                  className={classes.addItemCRM}
                  onClick={() => (branch < 3 ? setBranch(branch + 1) : null)}
                >
                  + Добавить отрасль
                </div>
              ) : (
                ""
              )}
            </Paper>
          </div>
          <div style={{ width: "34%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "101%",
              }}
            >
              <span>Контакты компании</span>
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
                    formik.touched.MailingAddress &&
                    formik.errors.MailingAddress
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
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant={"outlined"}
                    name="SiteCompany1"
                    style={{ width: "85%" }}
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
              </div>
              {site > 1 ? (
                <div className={classes.label}>
                  <>&nbsp;</>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="SiteCompany2"
                      style={{ width: "85%" }}
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
                    <div
                      style={{
                        marginRight: "2%",
                        marginTop: 3,
                        cursor: "pointer",
                      }}
                      onClick={() => (site > 1 ? setSite(site - 1) : null)}
                    >
                      {site === 2 ? <TrashIcon /> : ""}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {site > 2 ? (
                <div className={classes.label}>
                  <>&nbsp;</>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="SiteCompany3"
                      style={{ width: "85%" }}
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
                    <div
                      style={{
                        marginRight: "2%",
                        marginTop: 3,
                        cursor: "pointer",
                      }}
                      onClick={() => (site > 1 ? setSite(site - 1) : null)}
                    >
                      <TrashIcon />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {site! < 3 ? (
                <div
                  className={classes.addItem}
                  onClick={() => (site < 3 ? setSite(site + 1) : null)}
                >
                  + Добавить сайт
                </div>
              ) : (
                ""
              )}
              <div className={classes.label}>
                <span>Телефон</span>
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant={"outlined"}
                    name="Phone"
                    placeholder={"+79991234567"}
                    style={{ width: "85%" }}
                    value={formik.values.Phone}
                    onChange={formik.handleChange}
                    error={formik.touched.Phone && Boolean(formik.errors.Phone)}
                    helperText={formik.touched.Phone && formik.errors.Phone}
                  />
                </div>
              </div>
              {phone > 1 ? (
                <div className={classes.label}>
                  <>&nbsp;</>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="Phone"
                      style={{ width: "85%" }}
                      placeholder={"+79991234567"}
                      value={formik.values.Phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.Phone && Boolean(formik.errors.Phone)
                      }
                      helperText={formik.touched.Phone && formik.errors.Phone}
                    />
                    <div
                      style={{ marginRight: "2%", cursor: "pointer" }}
                      onClick={() => (phone > 1 ? setPhone(phone - 1) : null)}
                    >
                      {phone === 2 ? <TrashIcon /> : ""}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {phone > 2 ? (
                <div className={classes.label}>
                  <>&nbsp;</>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="Phone"
                      style={{ width: "85%" }}
                      placeholder={"+79991234567"}
                      value={formik.values.Phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.Phone && Boolean(formik.errors.Phone)
                      }
                      helperText={formik.touched.Phone && formik.errors.Phone}
                    />
                    <div
                      style={{ marginRight: "2%", cursor: "pointer" }}
                      onClick={() => (phone > 1 ? setPhone(phone - 1) : null)}
                    >
                      <TrashIcon />
                    </div>
                  </div>
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
                <span>E-mail</span>
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  onClick={() => (email < 3 ? setEmail(email + 1) : null)}
                >
                  <TextField
                    variant={"outlined"}
                    name="email"
                    style={{ width: "85%" }}
                    placeholder={"email@email.ru"}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </div>
              </div>
              {email > 1 ? (
                <div className={classes.label}>
                  <>&nbsp;</>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="email"
                      placeholder={"email@email.ru"}
                      style={{ width: "85%" }}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <div
                      style={{ marginRight: "2%", cursor: "pointer" }}
                      onClick={() => (email > 1 ? setEmail(email - 1) : null)}
                    >
                      {email === 2 ? <TrashIcon /> : ""}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {email > 2 ? (
                <div className={classes.label}>
                  <>&nbsp;</>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="email"
                      placeholder={"email@email.ru"}
                      value={formik.values.email}
                      style={{ width: "85%" }}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <div
                      style={{ marginRight: "2%", cursor: "pointer" }}
                      onClick={() => (email > 1 ? setEmail(email - 1) : null)}
                    >
                      <TrashIcon />
                    </div>
                  </div>
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
            </Paper>
          </div>
        </div>
      </form>
    </>
  );
};
