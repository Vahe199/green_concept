import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Checkbox, TextField, Paper, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import { TrashIcon } from "../../../../IMG/SVG/TrashIcon";
import { UseActions } from "../../../../redux/type_redux_hook/ useAction";
import { CheckSquareUnChecked } from "../../../../IMG/SVG/CheckSquareUnChecked";
import { CheckSquareChecked } from "../../../../IMG/SVG/CheckSquareChecked";

const validationSchema = yup.object({
  phone: yup
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
      marginBottom: 10,
      fontWeight: 500,
    },
    addItem: {
      marginBottom: 8,
      cursor: "pointer",
    },
    saveButton: {
      textTransform: "none",
      textDecoration: "underline",
    },
  })
);
type Props = {
  // change: boolean;
  setChangeContacts: (val: boolean) => void;
};
export const FormCompanyContacts: React.FC<Props> = ({ setChangeContacts }) => {
  const classes = useStyles();
  const { changeAuthorContactInfoData, recoveryAuthorDataState } = UseActions();
  const { AuthorData, error, isChange, errorMsg } = useTypedSelector(
    (state) => state.author
  );
  const {
    id,
    legal_registration_address,
    actual_address,
    post_address,
    emails,
    phones,
  }: any = AuthorData;

  const [site1, setSite1] = React.useState("");
  const [site2, setSite2] = React.useState("");
  const [phone1, setPhone1] = React.useState("");
  const [phone2, setPhone2] = React.useState("");
  const [email1, setEmail1] = React.useState("");
  const [email2, setEmail2] = React.useState("");
  let errorMessage: string = "ContactInfo";
  useEffect(() => {
    if (error) {
      setChangeContacts(true);
      setTimeout(() => {
        recoveryAuthorDataState();
      }, 4000);
    }
    if (isChange) {
      setChangeContacts(false);
      recoveryAuthorDataState();
    }
  }, [error, isChange]);
  const formik = useFormik({
    initialValues: {
      LegalAddress: legal_registration_address,
      ActualAddress: actual_address,
      MatchesAddressActualAddress: false,
      MailingAddress: post_address,
      MatchesAddressMailingAddress: false,
      SiteCompany: "",
      SiteCompany1: "",
      SiteCompany2: "",
      phone: phones[0].phone,
      phone1: phone1,
      phone2: phone2,
      email: emails[0].email,
      email1: email1,
      email2: email2,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      changeAuthorContactInfoData(
        {
          legal_registration_address: values.LegalAddress,
          actual_address: values.ActualAddress,
          post_address: values.MailingAddress,
          phones: [
            { phone: values.phone },
            { phone: phone1 },
            { phone: phone2 },
          ].filter((phon) => phon.phone.length > 0),
          emails: [
            { email: values.email },
            { email: email1 },
            { email: email2 },
          ].filter((mail) => mail.email.length > 0),
          sites: [
            { url: values.SiteCompany },
            { url: site1 },
            { url: site2 },
          ].filter((url) => url.url.length > 0),
        },
        id,
        errorMessage
      );
    },
  });
  const addSiteCompany = () => {
    if (!site1) {
      setSite1("1");
    }
    if (!site2 && site1) {
      setSite2("1");
    }
  };
  const addPhone = () => {
    if (!phone1) {
      setPhone1("1");
    }
    if (!phone2 && phone1) {
      setPhone2("1");
    }
  };
  const addEmail = () => {
    if (!email1) {
      setEmail1("1");
    }
    if (!email2 && email1) {
      setEmail2("1");
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
            width: "101%",
          }}
        >
          <span style={{ fontWeight: 500 }}>Контакты компании</span>
          <Button color="primary" type="submit" className={classes.saveButton}>
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          {errorMsg === "ContactInfo" && (
            <div style={{ color: "red" }}>{error}</div>
          )}
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
              icon={<CheckSquareChecked color="#5B6770" />}
              checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
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
              icon={<CheckSquareChecked color="#5B6770" />}
              checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
            <span>Совпадает с юридическим адресом</span>
          </div>
          <div className={classes.label} style={{ alignItems: "flex-start" }}>
            <span>Сайт компании</span>
            <span style={{ width: "60%", flexDirection: "column" }}>
              <div style={{ marginBottom: 15 }}>
                <TextField
                  style={{ width: "100%" }}
                  variant={"outlined"}
                  name="SiteCompany"
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
              {site1 && (
                <div style={{ marginBottom: 15 }}>
                  <TextField
                    style={{ width: "90%" }}
                    variant={"outlined"}
                    name="SiteCompany1"
                    placeholder={"www.сайткомпании.ru"}
                    value={site1}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSite1(e.target.value)
                    }
                    helperText={
                      formik.touched.SiteCompany && formik.errors.SiteCompany
                    }
                  />
                  <span onClick={() => setSite1("")}>
                    <TrashIcon />
                  </span>
                </div>
              )}
              {site2 && (
                <div style={{ marginBottom: 15 }}>
                  <TextField
                    style={{ width: "90%" }}
                    variant={"outlined"}
                    name="SiteCompany2"
                    placeholder={"www.сайткомпании.ru"}
                    value={site2}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSite2(e.target.value)
                    }
                    helperText={
                      formik.touched.SiteCompany && formik.errors.SiteCompany
                    }
                  />
                  <span onClick={() => setSite2("")}>
                    <TrashIcon />
                  </span>
                </div>
              )}
              {site1 && site2 ? (
                <span></span>
              ) : (
                <div className={classes.addItem} onClick={addSiteCompany}>
                  + Добавить сайт
                </div>
              )}
            </span>
          </div>

          <div className={classes.label} style={{ alignItems: "flex-start" }}>
            <span>Телефон</span>
            <span style={{ width: "60%", flexDirection: "column" }}>
              <div style={{ marginBottom: 15 }}>
                <TextField
                  style={{ width: "100%" }}
                  variant={"outlined"}
                  name="phone"
                  placeholder={"+79991234567"}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </div>
              <div>
                {phone1 && (
                  <div style={{ marginBottom: 15 }}>
                    <TextField
                      style={{ width: "90%" }}
                      variant={"outlined"}
                      name="phone1"
                      placeholder={"+79991234567"}
                      value={phone1}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPhone1(e.target.value)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <span onClick={() => setPhone1("")}>
                      <TrashIcon />
                    </span>
                  </div>
                )}
                <div>
                  {phone2 && (
                    <div style={{ marginBottom: 15 }}>
                      <TextField
                        style={{ width: "90%" }}
                        variant={"outlined"}
                        name="phone2"
                        placeholder={"+79991234567"}
                        value={phone2}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPhone2(e.target.value)
                        }
                        helperText={formik.touched.phone && formik.errors.phone}
                      />
                      <span onClick={() => setPhone2("")}>
                        <TrashIcon />
                      </span>
                    </div>
                  )}
                  {phone1 && phone2 ? (
                    <span></span>
                  ) : (
                    <div className={classes.addItem} onClick={addPhone}>
                      + Добавить телефон
                    </div>
                  )}
                </div>
              </div>
            </span>
          </div>

          <div className={classes.label} style={{ alignItems: "flex-start" }}>
            <span>E-mail</span>
            <span style={{ width: "60%", flexDirection: "column" }}>
              <div>
                <div style={{ marginBottom: 15 }}>
                  <TextField
                    style={{ width: "100%" }}
                    variant={"outlined"}
                    name="email"
                    placeholder={"email@email.ru"}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </div>
              </div>
              <div>
                {email1 && (
                  <div style={{ marginBottom: 15 }}>
                    <TextField
                      style={{ width: "90%" }}
                      variant={"outlined"}
                      name="email1"
                      placeholder={"email@email.ru"}
                      value={email1}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail1(e.target.value)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <span onClick={() => setEmail1("")}>
                      <TrashIcon />
                    </span>
                  </div>
                )}
              </div>
              <div>
                {email2 && (
                  <div style={{ marginBottom: 15 }}>
                    <TextField
                      style={{ width: "90%" }}
                      variant={"outlined"}
                      name="email2"
                      placeholder={"email@email.ru"}
                      value={email2}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail2(e.target.value)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <span onClick={() => setEmail2("")}>
                      <TrashIcon />
                    </span>
                  </div>
                )}
              </div>
              {email1 && email2 ? (
                <span></span>
              ) : (
                <div className={classes.addItem} onClick={addEmail}>
                  + Добавить email
                </div>
              )}
            </span>
          </div>
        </Paper>
      </form>
    </div>
  );
};
