import {
  Button,
  Checkbox,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@material-ui/core";
import { FieldArray, Form, Formik, getIn } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { CheckSquareChecked } from "../../../IMG/SVG/CheckSquareChecked";
import { CheckSquareUnChecked } from "../../../IMG/SVG/CheckSquareUnChecked";
import { TrashIcon } from "../../../IMG/SVG/TrashIcon";
import { useActions } from "../../../redux/type_redux_hook/useAction";
import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import InputFilterSelectedType from "../../Utils/FilterInputs/InputFilterSelect";
import { useStylesGeneralInfo } from "./TabsForUtil/GeneralInformationForStyle";
import { validationSchema } from "./TabsForUtil/GeneralInformationForValidate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyError,
  notifySuccess,
} from "../../Utils/utils_options/ToastNotify";
import ValidationErrorWrapper from "../../Utils/utils_options/ValidationErrorWrapper";
import { MagnifyingGlass } from "../../../IMG/SVG/MagnifyingGlass";
import InputFilterSelect from "../../Utils/FilterInputs/InputFilterSelect";
import { InputAssetsOptions } from "../../Utils/utils_options/InputAssetsOptions";
import { recoveryAuthorDataState } from "../../../redux/store/action_creator/contractors_action_creatot/recoveryAuthorDataState";
import BackToAddress from "../../Utils/BackToAddress";
import { SearchContactPerson } from "../../Utils/utils_options/SearchContactPerson";

import { Input } from "antd";
import MaskedInput from "antd-mask-input";

export const GeneralInformationForCreating = () => {
  const formikRef = useRef<any>();
  const classes = useStylesGeneralInfo();
  const [matchesAddressActualAddress, setMatchesAddressActualAddress] =
    React.useState<boolean>(true);
  const [matchesAddressMailingAddress, setMatchesAddressMailingAddress] =
    React.useState<boolean>(true);
  const [contractorId, setContractorId] = React.useState(1);
  const [companyGroupFilterInital, setCompanyGroupFilterInital] = useState<any>(
    []
  );
  const [group, setGroup] = useState("");
  const { fetchContactPerson, searchOptions } = SearchContactPerson();

  //Now I work
  const [legalRegistrationAddress, setLegalRegistrationAddress] =
    useState<string>("");

  const Options = InputAssetsOptions();
  const { insertContractorGeneralData, recoveryAuthorDataState } = useActions();
  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
  const { types_and_services }: any = assets;
  const { success, error }: any = useTypedSelector((state) => state.author);
  const { contractors, loading } = useTypedSelector(
    (state) => state.counterparties
  );
  const companyGroupFilter = companyGroupFilterInital.filter(
    ({ full_name }: { full_name: string }) => full_name.includes(group)
  );
  const { TextArea } = Input;

  const [validateValue, setValidateValue] = useState<string>("ЮЛ");

  useEffect(() => {
    !companyGroupFilterInital.length &&
      setCompanyGroupFilterInital(contractors);
  }, [contractors]);
  useEffect(() => {
    if (error) {
      notifyError();
      recoveryAuthorDataState();
    }
    if (success) {
      notifySuccess();
      formikRef.current.resetForm();
      recoveryAuthorDataState();
    }
  }, [success, error, validateValue]);

  const assetsOptionsServiceType = types_and_services[
    contractorId - 1
  ]?.services?.map((option: any) => ({
    key: option.id,
    value: option.id ? option.id : 0,
    label: option.name,
  }));

  const initialValues = {
    org_type: "ЮЛ",
    crms: [""],
    contractor_type_id: "",
    service_type_id: "",
    inn: "",
    kpp: "",
    ogrn: "",
    nda: 1,
    full_name: "",
    short_name: "",
    parent_id: null,
    branches: [""],
    legal_registration_address: "",
    actual_address: "",
    post_address: "",
    sites: [{ url: "" }],
    phones: [{ phone: "" }],
    emails: [{ email: "" }],
  };
  return (
    <div style={{ width: "100%" }}>
      <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
      <BackToAddress address="/counterparties" title="списку" />
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={() => validationSchema(validateValue)}
        onSubmit={async (values, action) => {
          console.log(values, "values");
          insertContractorGeneralData(values);
        }}
      >
        {({ values, touched, handleChange, errors, setFieldValue }) => (
          <Form>
            <Button
              // onClick={()=>console.log(errors)}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.btn}
            >
              Сохранить карточку
            </Button>
            <div className={classes.root}>
              <div style={{ width: "27%", marginLeft: "2%", minWidth: 387 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: 8,
                  }}
                >
                  <span className={classes.val}>Общие сведения</span>
                </div>
                <Paper className={classes.paper}>
                  <div style={{ marginBottom: "2%", display: "flex" }}>
                    <div>
                      <span style={{ fontSize: 16, fontWeight: "normal" }}>
                        Физическое лицо
                      </span>
                      <Radio
                        checked={values.org_type === "ФЛ"}
                        onChange={(e) => {
                          setFieldValue("org_type", e.target.value);
                          setValidateValue("ФЛ");
                        }}
                        value="ФЛ"
                        color="default"
                        name="org_type"
                        size="medium"
                        inputProps={{ "aria-label": "ФЛ" }}
                      />
                    </div>
                    <div>
                      <span style={{ fontSize: 16, fontWeight: "normal" }}>
                        Юридическое лицо
                      </span>
                      <Radio
                        checked={values.org_type === "ЮЛ"}
                        onChange={(e) => {
                          setFieldValue("org_type", e.target.value);
                          setValidateValue("ЮЛ");
                        }}
                        value="ЮЛ"
                        color="default"
                        name="org_type"
                        size="medium"
                        inputProps={{ "aria-label": "ЮЛ" }}
                      />
                    </div>
                  </div>
                  {(values.org_type === "ФЛ" && contractorId !== 1) || (
                    <div
                      className={classes.label}
                      style={{ alignItems: "flex-start" }}
                    >
                      <span>CRM</span>
                      <Typography>
                        <FieldArray name="crms">
                          {({ remove, push }) => (
                            <div style={{ width: "100%" }}>
                              {values.crms.length > 0 &&
                                values.crms.map((crm, index) => {
                                  const fieldName = `crms[${index}]`;
                                  const touchedFieldName = getIn(
                                    touched,
                                    fieldName
                                  );
                                  const errorFieldName = getIn(
                                    errors,
                                    fieldName
                                  );
                                  return (
                                    <div
                                      key={index}
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginBottom: 16,
                                      }}
                                    >
                                      <div
                                        style={
                                          index > 0
                                            ? { width: "80%" }
                                            : { width: "100%" }
                                        }
                                      >
                                        <ValidationErrorWrapper
                                          inputClassName="ant-select-selector"
                                          error={Boolean(
                                            touchedFieldName && errorFieldName
                                          )}
                                          helperText={
                                            touchedFieldName && errorFieldName
                                              ? errorFieldName
                                              : ""
                                          }
                                        >
                                          <InputFilterSelectedType
                                            name={fieldName}
                                            handleChange={(value: any) => {
                                              const newCrms = [...values.crms];
                                              if (value) {
                                                newCrms[index] = value;
                                              } else {
                                                newCrms.splice(index, 1);
                                              }

                                              setFieldValue(
                                                "crms",
                                                newCrms.length ? newCrms : [""]
                                              );
                                            }}
                                            value={crm}
                                            options={[
                                              {
                                                key: "",
                                                value: "",
                                                label: "",
                                              },
                                              ...Options.assetsOptionsCRMS,
                                            ]}
                                            placeholder="Фамилия Имя"
                                            loading={assetsLoading}
                                            // className={classes.input}
                                          />
                                        </ValidationErrorWrapper>
                                      </div>

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
                                onClick={() => push("")}
                              >
                                + Добавить еще CRM
                              </div>
                            </div>
                          )}
                        </FieldArray>
                      </Typography>
                    </div>
                  )}
                  <div className={classes.label}>
                    <span>Тип контрагента</span>
                    <span style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-select-selector"
                        error={
                          touched.contractor_type_id &&
                          Boolean(errors.contractor_type_id)
                        }
                        helperText={
                          touched.contractor_type_id &&
                          errors.contractor_type_id
                        }
                      >
                        <InputFilterSelectedType
                          //className={classes.input}
                          //inputClassName="ant-select-selector"
                          name="contractor_type_id"
                          handleChange={(value: any) => {
                            setFieldValue("contractor_type_id", value);
                            setContractorId(value);
                          }}
                          value={values.contractor_type_id}
                          options={Options.assetsOptionsCounterpartyType}
                          placeholder="Другое"
                          loading={assetsLoading}
                        />
                      </ValidationErrorWrapper>
                    </span>
                  </div>
                  <div className={classes.label}>
                    <span>Тип услуг</span>
                    <span style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-select-selector"
                        error={
                          touched.service_type_id &&
                          Boolean(errors.service_type_id)
                        }
                        helperText={
                          touched.service_type_id && errors.service_type_id
                        }
                      >
                        <InputFilterSelectedType
                          // className={classes.input}
                          name="service_type_id"
                          handleChange={(value: any) =>
                            setFieldValue("service_type_id", value)
                          }
                          value={values.service_type_id}
                          options={assetsOptionsServiceType}
                          placeholder="Другое"
                          loading={assetsLoading}
                        />
                      </ValidationErrorWrapper>
                    </span>
                  </div>
                  <div className={classes.label}>
                    <span>ИНН</span>
                    {/*<TextField*/}
                    {/*  variant={"outlined"}*/}
                    {/*  name="inn"*/}
                    {/*  placeholder={"1234556789101112"}*/}
                    {/*  value={values.inn}*/}
                    {/*  onChange={handleChange}*/}
                    {/*  error={touched.inn && Boolean(errors.inn)}*/}
                    {/*  helperText={touched.inn && errors.inn}*/}
                    {/*/>*/}
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={touched.inn && Boolean(errors.inn)}
                        helperText={touched.inn && errors.inn}
                      >
                        <Input
                          name="inn"
                          className={classes.input}
                          value={values.inn}
                          onChange={handleChange}
                          autoComplete={"off"}
                          placeholder={"1234556789101112"}
                        />
                      </ValidationErrorWrapper>
                    </div>
                  </div>
                  {values.org_type === "ЮЛ" && (
                    <div className={classes.label}>
                      <span>КПП</span>
                      <div style={{ width: "60%" }}>
                        <ValidationErrorWrapper
                          inputClassName="ant-input"
                          error={touched.kpp && Boolean(errors.kpp)}
                          helperText={touched.kpp && errors.kpp}
                        >
                          <Input
                            name="kpp"
                            value={values.kpp}
                            onChange={handleChange}
                            autoComplete={"off"}
                            placeholder={"1234556789101112"}
                          />
                        </ValidationErrorWrapper>
                      </div>
                      {/*<TextField*/}
                      {/*  variant={"outlined"}*/}
                      {/*  name="kpp"*/}
                      {/*  placeholder={"1234556789101112"}*/}
                      {/*  value={values.kpp}*/}
                      {/*  onChange={handleChange}*/}
                      {/*  error={touched.kpp && Boolean(errors.kpp)}*/}
                      {/*  helperText={touched.kpp && errors.kpp}*/}
                      {/*/>*/}
                    </div>
                  )}
                  <div className={classes.label}>
                    <span>{values.org_type === "ЮЛ" ? "ОГРН" : "ОГРНИП"}</span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={touched.ogrn && Boolean(errors.ogrn)}
                        helperText={touched.ogrn && errors.ogrn}
                      >
                        <Input
                          name="ogrn"
                          value={values.ogrn}
                          onChange={handleChange}
                          autoComplete={"off"}
                          className={classes.input}
                          placeholder={"1234556789101112"}
                        />
                      </ValidationErrorWrapper>
                    </div>
                    {/*<TextField*/}
                    {/*  variant={"outlined"}*/}
                    {/*  name="ogrn"*/}
                    {/*  placeholder={"1234556789101112"}*/}
                    {/*  value={values.ogrn}*/}
                    {/*  onChange={handleChange}*/}
                    {/*  error={touched.ogrn && Boolean(errors.ogrn)}*/}
                    {/*  helperText={touched.ogrn && errors.ogrn}*/}
                    {/*/>*/}
                  </div>
                  <div className={classes.label}>
                    <span>NDA</span>
                    <span style={{ width: "63.2%" }}>
                      <Checkbox
                        icon={<CheckSquareChecked color="#5B6770" />}
                        checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                        color="default"
                        inputProps={{
                          "aria-label": "checkbox with default color",
                        }}
                        value={values.nda === 1 ? true : false}
                        onChange={(e: any) =>
                          setFieldValue("nda", e.target.checked ? 0 : 1)
                        }
                      />
                    </span>
                  </div>
                </Paper>
              </div>
              <div style={{ width: "35%", marginLeft: 32, marginRight: 32 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "101%",
                    marginBottom: 8,
                  }}
                >
                  <span className={classes.val}>Сведения о компании</span>
                </div>
                <Paper className={classes.paper}>
                  <div
                    className={classes.label}
                    style={{ alignItems: "flex-start" }}
                  >
                    <span style={{ marginTop: "1%", width: "40%" }}>
                      {values.org_type === "ЮЛ"
                        ? "Полное наименование компании"
                        : "ФИО"}
                    </span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={touched.full_name && Boolean(errors.full_name)}
                        helperText={touched.full_name && errors.full_name}
                      >
                        <TextArea
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          style={{ height: "80px" }}
                          //multiline
                          //rows={2}
                          autoSize={false}
                          className={classes.input}
                          //className={classes.textAreaCN}
                          autoComplete={"off"}
                          placeholder={
                            values.org_type === "ЮЛ"
                              ? 'ООО "Северо-Западная компания”'
                              : "ФИО"
                          }
                        />
                      </ValidationErrorWrapper>
                    </div>
                    {/*<TextField*/}
                    {/*  variant={"outlined"}*/}
                    {/*  multiline*/}
                    {/*  className={classes.textAreaCN}*/}
                    {/*  rows={2}*/}
                    {/*  name="full_name"*/}
                    {/*  value={values.full_name}*/}
                    {/*  placeholder={'ООО "Северо-Западная компания”'}*/}
                    {/*  onChange={handleChange}*/}
                    {/*  error={touched.full_name && Boolean(errors.full_name)}*/}
                    {/*  helperText={touched.full_name && errors.full_name}*/}
                    {/*/>*/}
                  </div>
                  <div className={classes.label2}>
                    <span style={{ width: "40%" }}>
                      {values.org_type === "ЮЛ"
                        ? "Краткое наименование компании"
                        : "Краткое наименование"}
                    </span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={touched.short_name && Boolean(errors.short_name)}
                        helperText={touched.short_name && errors.short_name}
                      >
                        <Input
                          name="short_name"
                          value={values.short_name}
                          onChange={handleChange}
                          autoComplete={"off"}
                          className={classes.input}
                          placeholder={
                            values.org_type === "ЮЛ"
                              ? "Краткое наименование компании"
                              : "Краткое наименование"
                          }
                        />
                      </ValidationErrorWrapper>
                    </div>
                    {/*<TextField*/}
                    {/*  variant={"outlined"}*/}
                    {/*  name="short_name"*/}
                    {/*  placeholder={"Краткое наименование компании"}*/}
                    {/*  value={values.short_name}*/}
                    {/*  onChange={handleChange}*/}
                    {/*  error={touched.short_name && Boolean(errors.short_name)}*/}
                    {/*  helperText={touched.short_name && errors.short_name}*/}
                    {/*/>*/}
                  </div>
                  <div
                    className={classes.label}
                    style={{ alignItems: "flex-start" }}
                  >
                    <span style={{ width: "40%" }}>
                      Группа компаний (при наличии)
                    </span>
                    {/*<TextField*/}
                    {/*    variant={"outlined"}*/}
                    {/*    name="parent_id"*/}
                    {/*    disabled={true}*/}
                    {/*    placeholder={"Группа компаний"}*/}
                    {/*    onChange={handleChange}*/}

                    {/*/>*/}

                    <div
                      className={classes.searchWraper}
                      style={{ width: "60%" }}
                    >
                      <ValidationErrorWrapper
                        inputClassName="ant-select-selector"
                        error={touched.parent_id && Boolean(errors.parent_id)}
                        helperText={touched.parent_id && errors.parent_id}
                      >
                        <div className={classes.searchWraper}>
                          <MagnifyingGlass className="searchIcon" />
                          <InputFilterSelect
                            name="parent_id"
                            placeholder={"Группа компаний"}
                            onSearch={setGroup}
                            //className={classes.input}
                            value={values.parent_id}
                            // options={companyGroupFilter.map((option: any) => ({
                            //   key: option.id,
                            //   value: option.id,
                            //   label: option.full_name,
                            // }))}
                            onFocus={fetchContactPerson}
                            options={searchOptions}
                            filterOption={false}
                            onSelect={(id: number) => {
                              setFieldValue("parent_id", id);
                            }}
                            notFoundContent={null}
                            className={"searchMode "}
                            showSearch
                          />
                        </div>
                      </ValidationErrorWrapper>
                    </div>
                  </div>
                  {(values.org_type === "ФЛ" && contractorId !== 1) || (
                    <div
                      className={classes.label}
                      style={{ alignItems: "flex-start" }}
                    >
                      <span>Отрасль</span>
                      <div
                        style={{
                          width: "60%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <FieldArray name="branches">
                          {({ remove, push }) => (
                            <div style={{ width: "100%" }}>
                              {values.branches.length > 0 &&
                                values.branches.map((branch, index) => {
                                  const fieldName = `branches[${index}]`;
                                  const touchedFieldName = getIn(
                                    touched,
                                    fieldName
                                  );
                                  const errorFieldName = getIn(
                                    errors,
                                    fieldName
                                  );
                                  return (
                                    <div
                                      key={index}
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginBottom: 16,
                                      }}
                                    >
                                      <div
                                        style={
                                          index > 0
                                            ? { width: "90%" }
                                            : { width: "100%" }
                                        }
                                      >
                                        <ValidationErrorWrapper
                                          inputClassName="ant-select-selector"
                                          error={Boolean(
                                            touchedFieldName && errorFieldName
                                          )}
                                          helperText={
                                            touchedFieldName && errorFieldName
                                              ? errorFieldName
                                              : ""
                                          }
                                        >
                                          <InputFilterSelectedType
                                            name={fieldName}
                                            value={branch}
                                            handleChange={(value: any) => {
                                              const newBranches = [
                                                ...values.branches,
                                              ];
                                              if (value) {
                                                newBranches[index] = value;
                                              } else {
                                                newBranches.splice(index, 1);
                                              }
                                              setFieldValue(
                                                "branches",
                                                newBranches.length
                                                  ? newBranches
                                                  : ["Выбрать из списка"]
                                              );
                                            }}
                                            options={[
                                              {
                                                key: "",
                                                value: "",
                                                label: "",
                                              },
                                              ...Options.assetsOptionsBranches,
                                            ]}
                                            placeholder="Выберите отрасль"
                                            loading={assetsLoading}
                                          />
                                        </ValidationErrorWrapper>
                                      </div>

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
                                onClick={() => push("")}
                              >
                                + Добавить отрасль
                              </div>
                            </div>
                          )}
                        </FieldArray>
                      </div>
                    </div>
                  )}
                </Paper>
              </div>
              <div style={{ width: "35%", marginRight: "2%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "101%",
                    marginBottom: 8,
                  }}
                >
                  <span className={classes.val}>Контакты компании</span>
                </div>
                <Paper className={classes.paper}>
                  <div className={classes.label}>
                    <span>
                      {values.org_type === "ЮЛ"
                        ? "Юридический адрес"
                        : "Адрес регистрации"}
                    </span>
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
                          className={classes.input}
                          autoComplete={"off"}
                          onBlur={() =>
                            setLegalRegistrationAddress(
                              values.legal_registration_address
                            )
                          }
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
                    {/*  onBlur={() =>*/}
                    {/*    setLegalRegistrationAddress(*/}
                    {/*      values.legal_registration_address*/}
                    {/*    )*/}
                    {/*  }*/}
                    {/*  error={*/}
                    {/*    touched.legal_registration_address &&*/}
                    {/*    Boolean(errors.legal_registration_address)*/}
                    {/*  }*/}
                    {/*  helperText={*/}
                    {/*    touched.legal_registration_address &&*/}
                    {/*    errors.legal_registration_address*/}
                    {/*  }*/}
                    {/*/>*/}
                  </div>
                  <div className={classes.label}>
                    <span>Фактический адрес</span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={
                          touched.actual_address &&
                          Boolean(errors.actual_address)
                        }
                        helperText={
                          touched.actual_address && errors.actual_address
                        }
                      >
                        <Input
                          name="actual_address"
                          value={values.actual_address}
                          onChange={handleChange}
                          className={classes.input}
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
                    {/*  error={*/}
                    {/*    touched.actual_address && Boolean(errors.actual_address)*/}
                    {/*  }*/}
                    {/*  helperText={*/}
                    {/*    touched.actual_address && errors.actual_address*/}
                    {/*  }*/}
                    {/*/>*/}
                  </div>
                  <div style={{ justifyContent: "left", marginTop: -12 }}>
                    <Checkbox
                      className={classes.check}
                      icon={<CheckSquareChecked color="#5B6770" />}
                      checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                      name="MatchesAddressActualAddress"
                      checked={matchesAddressActualAddress}
                      color="default"
                      inputProps={{
                        "aria-label": "checkbox with default color",
                      }}
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
                    />
                    <span className={classes.checkText}>
                      {values.org_type === "ЮЛ"
                        ? "Совпадает с юридическим адресом"
                        : "Совпадает с адресом регистрации"}
                    </span>
                  </div>
                  <div className={classes.label}>
                    <span>Почтовый адрес</span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={
                          touched.post_address && Boolean(errors.post_address)
                        }
                        helperText={touched.post_address && errors.post_address}
                      >
                        <Input
                          name="post_address"
                          value={values.post_address}
                          className={classes.input}
                          onChange={handleChange}
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
                    {/*  error={*/}
                    {/*    touched.post_address && Boolean(errors.post_address)*/}
                    {/*  }*/}
                    {/*  helperText={touched.post_address && errors.post_address}*/}
                    {/*/>*/}
                  </div>
                  <div style={{ justifyContent: "left", marginTop: -12 }}>
                    <Checkbox
                      className={classes.check}
                      icon={<CheckSquareChecked color="#5B6770" />}
                      checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                      name="MatchesAddressMailingAddress"
                      color="default"
                      checked={matchesAddressMailingAddress}
                      inputProps={{
                        "aria-label": "checkbox with default color",
                      }}
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
                    />
                    <span className={classes.checkText}>
                      {values.org_type === "ЮЛ"
                        ? "Совпадает с юридическим адресом"
                        : "Совпадает с адресом регистрации"}
                    </span>
                  </div>
                  <div
                    className={classes.label}
                    style={{ alignItems: "flex-start" }}
                  >
                    <span>
                      {values.org_type === "ЮЛ" ? "Сайт компании" : "Сайт"}
                    </span>

                    <div
                      style={{
                        width: "60%",
                        // display: "flex",
                        // justifyContent: "space-between",
                      }}
                    >
                      <FieldArray name="sites">
                        {({ insert, remove, push }) => (
                          <div style={{ width: "100%" }}>
                            {values.sites.length > 0 &&
                              values.sites.map((url: any, index: any) => {
                                const fieldName = `sites[${index}].url`;
                                const touchedFieldName = getIn(
                                  touched,
                                  fieldName
                                );
                                const errorFieldName = getIn(errors, fieldName);
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",
                                      marginBottom: 12,
                                    }}
                                  >
                                    <div style={{ width: "100%" }}>
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
                                          value={url.url}
                                          className={classes.input}
                                          onChange={handleChange}
                                          style={
                                            index > 0
                                              ? { width: "90%" }
                                              : { width: "100%" }
                                          }
                                          autoComplete={"off"}
                                          placeholder={"www.сайткомпании.ru"}
                                        />
                                      </ValidationErrorWrapper>
                                    </div>
                                    {/*<TextField*/}
                                    {/*  style={*/}
                                    {/*    index > 0*/}
                                    {/*      ? { width: "90%" }*/}
                                    {/*      : { width: "100%" }*/}
                                    {/*  }*/}
                                    {/*  variant={"outlined"}*/}
                                    {/*  name={fieldName}*/}
                                    {/*  value={url.url}*/}
                                    {/*  placeholder={"www.сайткомпании.ru"}*/}
                                    {/*  onChange={handleChange}*/}
                                    {/*  error={Boolean(*/}
                                    {/*    touchedFieldName && errorFieldName*/}
                                    {/*  )}*/}
                                    {/*  helperText={*/}
                                    {/*    touchedFieldName && errorFieldName*/}
                                    {/*      ? errorFieldName*/}
                                    {/*      : ""*/}
                                    {/*  }*/}
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
                    </div>
                  </div>
                  <div
                    className={classes.label}
                    style={{ alignItems: "flex-start" }}
                  >
                    <span>Телефон</span>
                    <div
                      style={{
                        width: "60%",
                        // display: "flex",
                        // justifyContent: "space-between",
                      }}
                    >
                      <FieldArray name="phones">
                        {({ insert, remove, push }) => (
                          <div>
                            {values.phones.length > 0 &&
                              values.phones.map((phone, index) => {
                                const fieldName = `phones[${index}].phone`;
                                const touchedFieldName = getIn(
                                  touched,
                                  fieldName
                                );
                                const errorFieldName = getIn(errors, fieldName);
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "100%",
                                        marginBottom: 16,
                                      }}
                                    >
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
                                            width: "90%",
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
                                          className={classes.input}
                                          placeholder={"7 999 999 99 99"}
                                          mask="1 111 111 11 11"
                                          prefix={<>+</>}
                                        />
                                      </ValidationErrorWrapper>
                                    </div>
                                    {/*<TextField*/}
                                    {/*  fullWidth*/}
                                    {/*  style={{ width: "90%", marginBottom: 16 }}*/}
                                    {/*  placeholder={"+79991234567"}*/}
                                    {/*  variant={"outlined"}*/}
                                    {/*  name={fieldName}*/}
                                    {/*  value={phone.phone}*/}
                                    {/*  onChange={handleChange}*/}
                                    {/*  error={Boolean(*/}
                                    {/*    touchedFieldName && errorFieldName*/}
                                    {/*  )}*/}
                                    {/*  helperText={*/}
                                    {/*    touchedFieldName && errorFieldName*/}
                                    {/*      ? errorFieldName*/}
                                    {/*      : ""*/}
                                    {/*  }*/}
                                    {/*/>*/}
                                    <div
                                      style={{ marginLeft: 16 }}
                                      onClick={() => remove(index)}
                                    >
                                      <TrashIcon />
                                    </div>
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
                    </div>
                  </div>

                  <div
                    className={classes.label}
                    style={{ alignItems: "flex-start" }}
                  >
                    <span>E-mail</span>
                    <div
                      style={{
                        width: "60%",
                        // display: "flex",
                        // justifyContent: "space-between",
                      }}
                    >
                      <FieldArray name="emails">
                        {({ insert, remove, push }) => (
                          <div>
                            {values.emails.length > 0 &&
                              values.emails.map((email, index) => {
                                const fieldName = `emails[${index}].email`;
                                const touchedFieldName = getIn(
                                  touched,
                                  fieldName
                                );
                                const errorFieldName = getIn(errors, fieldName);
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "100%",
                                        marginBottom: 16,
                                      }}
                                    >
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
                                          onChange={handleChange}
                                          style={{ width: "90%" }}
                                          className={classes.input}
                                          autoComplete={"off"}
                                          type="email"
                                          //value={email}
                                          placeholder={`email${
                                            index + 1
                                          }@email.com`}
                                        />
                                      </ValidationErrorWrapper>
                                    </div>
                                    {/*<TextField*/}
                                    {/*  fullWidth*/}
                                    {/*  style={{ width: "90%", marginBottom: 16 }}*/}
                                    {/*  placeholder={`email${*/}
                                    {/*    index + 1*/}
                                    {/*  }@email.com`}*/}
                                    {/*  variant={"outlined"}*/}
                                    {/*  name={fieldName}*/}
                                    {/*  type="email"*/}
                                    {/*  value={email.email}*/}
                                    {/*  onChange={handleChange}*/}
                                    {/*  error={Boolean(*/}
                                    {/*    touchedFieldName && errorFieldName*/}
                                    {/*  )}*/}
                                    {/*  helperText={*/}
                                    {/*    touchedFieldName && errorFieldName*/}
                                    {/*      ? errorFieldName*/}
                                    {/*      : ""*/}
                                    {/*  }*/}
                                    {/*/>*/}
                                    <div
                                      style={{ marginLeft: 16 }}
                                      onClick={() => remove(index)}
                                    >
                                      <TrashIcon />
                                    </div>
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
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
