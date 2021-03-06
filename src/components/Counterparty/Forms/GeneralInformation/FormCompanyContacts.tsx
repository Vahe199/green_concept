import React, { useEffect, useState } from "react";
import { FieldArray, Form, Formik, getIn } from "formik";
import { Button, Checkbox, Paper} from "@material-ui/core";
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
import pick from "lodash/pick";
import get from "lodash/get";

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
  const { contractor }: any = AuthorData;

  const {
    id,
    org_type
  }: any = contractor;

  const [matchesAddressActualAddress, setMatchesAddressActualAddress] =
    React.useState<boolean>(true);
  const [matchesAddressMailingAddress, setMatchesAddressMailingAddress] =
    React.useState<boolean>(true);


  const [validateValue] = useState<any>(org_type);

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
    ...pick(contractor, [
      "legal_registration_address",
      "actual_address",
      "post_address",
    ]),
    sites: get(contractor, "sites", []).map((site: any) =>
        pick(site, ["url"])
    ),
    emails: get(contractor, "emails", []).map((email: any) =>
        pick(email, ["email"])
    ),
    phones: get(contractor, "phones", []).map((phone: any) =>
        pick(phone, ["phone"])
    ),

  };
  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={() => validationSchemaCompanyContacts(validateValue)}
        onSubmit={async (values) => {
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
                ???????????????? ????????????????
              </span>
              <Button
                color="primary"
                type="submit"
                className={classes.saveButton}
              >
                ??????????????????
              </Button>
            </div>
            <Paper className={classes.paper}>
              {errorMsg === "ContactInfo" && (
                <div style={{ color: "red" }}>{error}</div>
              )}
              <div className={classes.label}>
                <span>{org_type === "????" ? "?????????????????????? ??????????" : "?????????? ??????????????????????"}</span>
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
                      placeholder={"123456 ?????????? ?????????? ?????????????? ?????? ????????"}
                    />
                  </ValidationErrorWrapper>
                </div>
              </div>
              <div className={classes.label}>
                <span>?????????????????????? ??????????</span>
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
                      placeholder={"123456 ?????????? ?????????? ?????????????? ?????? ????????"}
                    />
                  </ValidationErrorWrapper>
                </div>
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
                  {org_type === "????" ? "?????????????????? ?? ?????????????????????? ??????????????" : "?????????????????? ?? ?????????????? ??????????????????????"}
                </span>
              </div>
              <div className={classes.label}>
                <span>???????????????? ??????????</span>
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
                      placeholder={"123456 ?????????? ?????????? ?????????????? ?????? ????????"}
                    />
                  </ValidationErrorWrapper>
                </div>
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
                 {org_type === "????" ? "?????????????????? ?? ?????????????????????? ??????????????" : "?????????????????? ?? ?????????????? ??????????????????????"}
                </span>
              </div>
              <div
                className={classes.label}
                style={{ alignItems: "flex-start" }}
              >
                <span className={classes.contactsCompany}>
                  {org_type === "????" ? "???????? ????????????????" : "????????"}
                </span>
                <span style={{ width: "60%", flexDirection: "column" }}>
                  <FieldArray name="sites">
                    {({ remove, push }) => (
                      <div style={{ width: "100%" }}>
                        {values.sites.length > 0 &&
                          values.sites.map((url:any, index:number) => {
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
                                      placeholder={org_type === "????" ? "???????? ????????????????" : "????????"}
                                    />
                                  </ValidationErrorWrapper>
                                </div>

                                {index === 0 ? (
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
                          + ???????????????? ????????
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
                <span className={classes.contactsCompany}>??????????????</span>
                <span style={{ width: "60%", flexDirection: "column" }}>
                  <FieldArray name="phones">
                    {({ remove, push }) => (
                      <div>
                        {values.phones.length > 0 &&
                          values.phones.map((phone:any, index:number) => {
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
                                      onChange={(e) => {
                                        setFieldValue(
                                          fieldName,
                                          e.target.value.replace(
                                            /[^0-9]/g,
                                            ""
                                          )
                                        );
                                      }}
                                      className={classes.inputMask}
                                      autoComplete={'off'}
                                      placeholder={"7 999 999 99 99"}
                                      mask="1 111 111 11 11"
                                      prefix={<>+</>}
                                    />
                                  </ValidationErrorWrapper>
                                </div>
                                {index === 0 ? (
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
                          + ???????????????? ??????????????
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
                <span className={classes.contactsCompany}>E-mail</span>
                <span style={{ width: "60%", flexDirection: "column" }}>
                  <FieldArray name="emails">
                    {({ remove, push }) => (
                      <div>
                        {values.emails.length > 0 &&
                          values.emails.map((email:any, index:number) => {
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
                                {index === 0 ? (
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
                          + ???????????????? email
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
