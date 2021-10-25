import React, { useEffect, useState } from "react";
import { FieldArray, Form, Formik, getIn } from "formik";
import { Button, Checkbox, Paper, TextField } from "@material-ui/core";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import { TrashIcon } from "../../../../IMG/SVG/TrashIcon";
import { useActions } from "../../../../redux/type_redux_hook/useAction";
import { CheckSquareUnChecked } from "../../../../IMG/SVG/CheckSquareUnChecked";
import { CheckSquareChecked } from "../../../../IMG/SVG/CheckSquareChecked";
import { useStylesCompanyContacts } from "./GeneralInformationStyles";
import { validationSchemaCompanyContacts } from "./GeneralInformationValidationSchema";
import ValidationErrorWrapper from "../../../Utils/utils_options/ValidationErrorWrapper";
import { Input } from "antd";
import MaskedInput from "antd-mask-input";

type Props = {
  // change: boolean;
  setChangeContacts: (val: boolean) => void;
};
export const FormCompanyContacts: React.FC<Props> = ({ setChangeContacts }) => {
  const classes = useStylesCompanyContacts();
  const { changeAuthorContactInfoData, recoveryAuthorDataState } = useActions();
  const { AuthorData, error, isChange, errorMsg } = useTypedSelector(
    (state) => state.author
  );
  const {
    id,
    legal_registration_address,
    actual_address,
    post_address,
    emails = [],
    sites = [],
    phones = [],
  }: any = AuthorData;

  const [matchesAddressActualAddress, setMatchesAddressActualAddress] =
    React.useState<boolean>(true);
  const [matchesAddressMailingAddress, setMatchesAddressMailingAddress] =
    React.useState<boolean>(true);

  const { contractor }: any = AuthorData;
  const { org_type }: any = contractor;

  const [validateValue, setValidateValue] = useState<any>(org_type);

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
  const initialValues = {
    legal_registration_address: legal_registration_address,
    actual_address: actual_address,
    post_address: post_address,
    phones: [{ phone: phones.length > 0 ? phones[0]?.phone : "" }],
    emails: [{ email: emails.length > 0 ? emails[0]?.email : "" }],
    sites: [{ url: sites.length > 0 ? sites[0]?.url : "" }],
  };
  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={() => validationSchemaCompanyContacts(validateValue)}
        onSubmit={async (values, action) => {
          console.log(values, "values");
          changeAuthorContactInfoData(values, id, errorMessage);
        }}
      >
        {({ values, touched, handleChange, errors, setFieldValue }) => (
          <Form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "101%",
                marginBottom: 8,
              }}
            >
              <span style={{ fontWeight: 500, fontSize: 16 }}>
                Контакты компании
              </span>
              <Button
                color="primary"
                type="submit"
                className={classes.saveButton}
              >
                Сохранить
              </Button>
            </div>
            <Paper className={classes.paper}>
              {errorMsg === "ContactInfo" && (
                <div style={{ color: "red" }}>{error}</div>
              )}
              <div className={classes.label}>
                <span>{org_type === "ЮЛ" ? "Юридический адрес" : "Адрес регистрации"}</span>
                <div style={{ width: "60%" }}>
                  <ValidationErrorWrapper
                    inputClassName="ant-input"
                    error={
                      touched.legal_registration_address &&
                      Boolean(errors.legal_registration_address)
                    }
                    helperText={
                      touched.legal_registration_address &&
                      errors.legal_registration_address
                    }
                  >
                    <Input
                      name="legal_registration_address"
                      value={values.legal_registration_address}
                      onChange={handleChange}
                      className={classes.input2}
                      autoComplete={"off"}
                      placeholder={"123456 город улица строени дом офис"}
                    />
                  </ValidationErrorWrapper>
                </div>
                {/*<TextField*/}
                {/*  variant={"outlined"}*/}
                {/*  name="legal_registration_address"*/}
                {/*  placeholder={"123456 город улица строени дом офис"}*/}
                {/*  value={values.legal_registration_address}*/}
                {/*  onChange={handleChange}*/}
                {/*  error={touched.legal_registration_address && Boolean(errors.legal_registration_address)}*/}
                {/*  helperText={touched.legal_registration_address && errors.legal_registration_address}*/}
                {/*/>*/}
              </div>
              <div className={classes.label}>
                <span>Фактический адрес</span>
                <div style={{ width: "60%" }}>
                  <ValidationErrorWrapper
                    inputClassName="ant-input"
                    error={
                      touched.actual_address && Boolean(errors.actual_address)
                    }
                    helperText={touched.actual_address && errors.actual_address}
                  >
                    <Input
                      name="actual_address"
                      value={values.actual_address}
                      onChange={handleChange}
                      className={classes.input2}
                      autoComplete={"off"}
                      placeholder={"123456 город улица строени дом офис"}
                    />
                  </ValidationErrorWrapper>
                </div>
                {/*<TextField*/}
                {/*  variant={"outlined"}*/}
                {/*  name="actual_address"*/}
                {/*  placeholder={"123456 город улица строени дом офис"}*/}
                {/*  value={values.actual_address}*/}
                {/*  onChange={handleChange}*/}
                {/*  error={touched.actual_address && Boolean(errors.actual_address)}*/}
                {/*  helperText={touched.actual_address && errors.actual_address}*/}
                {/*/>*/}
              </div>
              <div>
                <Checkbox
                  name="MatchesAddressActualAddress"
                  color="default"
                  icon={<CheckSquareChecked color="#5B6770" />}
                  checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                  checked={matchesAddressActualAddress}
                  value={matchesAddressActualAddress}
                  onChange={() => {
                    setFieldValue(
                      "actual_address",
                      `${
                        matchesAddressActualAddress
                          ? values.legal_registration_address
                          : ""
                      }`
                    );
                    setMatchesAddressActualAddress(
                      !matchesAddressActualAddress
                    );
                  }}
                  inputProps={{ "aria-label": "checkbox with default color" }}
                />
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                  {org_type === "ЮЛ" ? "Совпадает с юридическим адресом" : "Совпадает с адресом регистрации"}
                </span>
              </div>
              <div className={classes.label}>
                <span>Почтовый адрес</span>
                <div style={{ width: "60%" }}>
                  <ValidationErrorWrapper
                    inputClassName="ant-input"
                    error={touched.post_address && Boolean(errors.post_address)}
                    helperText={touched.post_address && errors.post_address}
                  >
                    <Input
                      name="post_address"
                      value={values.post_address}
                      onChange={handleChange}
                      className={classes.input2}
                      autoComplete={"off"}
                      placeholder={"123456 город улица строени дом офис"}
                    />
                  </ValidationErrorWrapper>
                </div>
                {/*<TextField*/}
                {/*  variant={"outlined"}*/}
                {/*  name="post_address"*/}
                {/*  placeholder={"123456 город улица строени дом офис"}*/}
                {/*  value={values.post_address}*/}
                {/*  onChange={handleChange}*/}
                {/*  error={touched.post_address && Boolean(errors.post_address)}*/}
                {/*  helperText={touched.post_address && errors.post_address}*/}
                {/*/>*/}
              </div>
              <div>
                <Checkbox
                  name="MatchesAddressMailingAddress"
                  color="default"
                  icon={<CheckSquareChecked color="#5B6770" />}
                  checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                  checked={matchesAddressMailingAddress}
                  value={matchesAddressMailingAddress}
                  onChange={() => {
                    setFieldValue(
                      "post_address",
                      `${
                        matchesAddressMailingAddress
                          ? values.legal_registration_address
                          : ""
                      }`
                    );
                    setMatchesAddressMailingAddress(
                      !matchesAddressMailingAddress
                    );
                  }}
                  inputProps={{ "aria-label": "checkbox with default color" }}
                />
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                 {org_type === "ЮЛ" ? "Совпадает с юридическим адресом" : "Совпадает с адресом регистрации"}
                </span>
              </div>
              <div
                className={classes.label}
                style={{ alignItems: "flex-start" }}
              >
                {org_type === "ЮЛ" ? "Сайт компании" : "Сайт"}
                <span style={{ width: "60%", flexDirection: "column" }}>
                  <FieldArray name="sites">
                    {({ insert, remove, push }) => (
                      <div style={{ width: "100%" }}>
                        {values.sites.length > 0 &&
                          values.sites.map((url, index) => {
                            const fieldName = `sites[${index}].url`;
                            const touchedFieldName = getIn(touched, fieldName);
                            const errorFieldName = getIn(errors, fieldName);
                            return (
                              <div
                                key={index}
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <div style={{ width: "80%", marginBottom: 16 }}>
                                  <ValidationErrorWrapper
                                    inputClassName="ant-input"
                                    error={Boolean(
                                      touchedFieldName && errorFieldName
                                    )}
                                    helperText={
                                      touchedFieldName && errorFieldName
                                        ? errorFieldName
                                        : ""
                                    }
                                  >
                                    <Input
                                      name={fieldName}
                                      className={classes.input2}
                                      value={url.url}
                                      onChange={handleChange}
                                      autoComplete={"off"}
                                      placeholder={"www.сайткомпании.ru"}
                                    />
                                  </ValidationErrorWrapper>
                                </div>
                                {/*<TextField style={index > 0 ? {width: "90%"} : {width: "100%"}}*/}
                                {/*           variant={"outlined"}*/}
                                {/*           className={classes.input}*/}
                                {/*           name={fieldName}*/}
                                {/*           value={url.url}*/}
                                {/*           placeholder={"www.сайткомпании.ru"}*/}
                                {/*           onChange={handleChange}*/}
                                {/*           error={Boolean(touchedFieldName && errorFieldName)}*/}
                                {/*           helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}*/}
                                {/*/>*/}

                                {index == 0 ? (
                                  ""
                                ) : (
                                  <div
                                    style={{ marginLeft: 16 }}
                                    onClick={() => remove(index)}
                                  >
                                    <TrashIcon />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        <div
                          className={classes.addItemCRM}
                          onClick={() => push({ url: "" })}
                        >
                          + Добавить сайт
                        </div>
                      </div>
                    )}
                  </FieldArray>
                </span>
              </div>

              <div
                className={classes.label}
                style={{ alignItems: "flex-start" }}
              >
                <span>Телефон</span>
                <span style={{ width: "60%", flexDirection: "column" }}>
                  <FieldArray name="phones">
                    {({ insert, remove, push }) => (
                      <div>
                        {values.phones.length > 0 &&
                          values.phones.map((phone, index) => {
                            const fieldName = `phones[${index}].phone`;
                            const touchedFieldName = getIn(touched, fieldName);
                            const errorFieldName = getIn(errors, fieldName);
                            return (
                              <div
                                key={index}
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <div style={{ width: "80%", marginBottom: 16 }}>
                                  <ValidationErrorWrapper
                                    inputClassName="ant-input"
                                    error={Boolean(
                                      touchedFieldName && errorFieldName
                                    )}
                                    helperText={
                                      touchedFieldName && errorFieldName
                                        ? errorFieldName
                                        : ""
                                    }
                                  >
                                    <MaskedInput
                                      name={fieldName}
                                      value={phone.phone}
                                      style={{
                                        width: "100%",
                                      }}
                                      onChange={handleChange}
                                      className={classes.input2}
                                      placeholder={"7 999 999 99 99"}
                                      mask="1 111 111 11 11"
                                      prefix={<>+</>}
                                    />
                                  </ValidationErrorWrapper>
                                </div>
                                {/*<TextField*/}
                                {/*    fullWidth*/}
                                {/*    style={{ width: "100%", marginBottom:16}}*/}
                                {/*    placeholder={"+79991234567"}*/}
                                {/*    variant={"outlined"}*/}
                                {/*    name={fieldName}*/}
                                {/*    value={phone.phone}*/}
                                {/*    onChange={handleChange}*/}
                                {/*    error={Boolean(touchedFieldName && errorFieldName)}*/}
                                {/*    helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}*/}
                                {/*/>*/}
                                {index == 0 ? (
                                  ""
                                ) : (
                                  <div
                                    style={{ marginLeft: 16 }}
                                    onClick={() => remove(index)}
                                  >
                                    <TrashIcon />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        <div
                          className={classes.addItemCRM}
                          onClick={() => push({ phone: "" })}
                        >
                          + Добавить телефон
                        </div>
                      </div>
                    )}
                  </FieldArray>
                  <div></div>
                </span>
              </div>

              <div
                className={classes.label}
                style={{ alignItems: "flex-start" }}
              >
                <span>E-mail</span>
                <span style={{ width: "60%", flexDirection: "column" }}>
                  <FieldArray name="emails">
                    {({ remove, push }) => (
                      <div>
                        {values.emails.length > 0 &&
                          values.emails.map((email, index) => {
                            const fieldName = `emails[${index}].email`;
                            const touchedFieldName = getIn(touched, fieldName);
                            const errorFieldName = getIn(errors, fieldName);
                            return (
                              <div
                                key={index}
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <div style={{ width: "80%", marginBottom: 16 }}>
                                  <ValidationErrorWrapper
                                    inputClassName="ant-input"
                                    error={Boolean(
                                      touchedFieldName && errorFieldName
                                    )}
                                    helperText={
                                      touchedFieldName && errorFieldName
                                        ? errorFieldName
                                        : ""
                                    }
                                  >
                                    <Input
                                      name={fieldName}
                                      className={classes.input2}
                                      //className={classes.input}
                                      value={email.email}
                                      style={{ width: "100%" }}
                                      onChange={handleChange}
                                      autoComplete={"off"}
                                      type="email"
                                      placeholder={`email${
                                        index + 1
                                      }@email.com`}
                                    />
                                  </ValidationErrorWrapper>
                                </div>
                                {/*<TextField*/}
                                {/*    fullWidth*/}
                                {/*    style={{ width: "100%", marginBottom:16}}*/}
                                {/*    placeholder={`email${index + 1}@email.com`}*/}
                                {/*    variant={"outlined"}*/}
                                {/*    name={fieldName}*/}
                                {/*    type="email"*/}
                                {/*    value={email.email}*/}
                                {/*    onChange={handleChange}*/}
                                {/*    error={Boolean(touchedFieldName && errorFieldName)}*/}
                                {/*    helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}*/}
                                {/*/>*/}
                                {index == 0 ? (
                                  ""
                                ) : (
                                  <div
                                    style={{ marginLeft: 16 }}
                                    onClick={() => remove(index)}
                                  >
                                    <TrashIcon />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        <div
                          className={classes.addItemCRM}
                          onClick={() => push({ email: "" })}
                        >
                          + Добавить email
                        </div>
                      </div>
                    )}
                  </FieldArray>
                </span>
              </div>
            </Paper>
          </Form>
        )}
      </Formik>
    </div>
  );
};
