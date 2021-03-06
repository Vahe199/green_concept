import {Button, Checkbox, Paper, Radio} from "@material-ui/core";
import clsx from "clsx";
import {FieldArray, Form, Formik, getIn} from "formik";
import React, {useEffect} from "react";
import {CheckSquareChecked} from "../../../../IMG/SVG/CheckSquareChecked";
import {CheckSquareUnChecked} from "../../../../IMG/SVG/CheckSquareUnChecked";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import {useActions} from "../../../../redux/type_redux_hook/useAction";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import InputFilterSelectedType from "../../../Utils/FilterInputs/InputFilterSelect";
import {validationSchemaGeneralInfo} from "./GeneralInformationValidationSchema";
import {useStylesGeneralInformation} from "./GeneralInformationStyles";
import ValidationErrorWrapper from "../../../Utils/utils_options/ValidationErrorWrapper";
import {InputAssetsOptions} from "../../../Utils/utils_options/InputAssetsOptions";
import {Input} from "antd";
import pick from "lodash/pick";
import get from "lodash/get";

type Props = {
  // change: boolean;
  setChangeGeneralInformation: (val: boolean) => void;
};
export const FormGeneralInformation: React.FC<Props> = ({
  setChangeGeneralInformation,
}) => {
  const { changeAuthorGeneralData, recoveryAuthorDataState } = useActions();
  const classes = useStylesGeneralInformation();

  const { AuthorData, error, isChange, errorMsg } = useTypedSelector(
    (state) => state.author
  );
  const { contractor }: any = AuthorData;
  let { id}: any = contractor
  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
  const { types_and_services }: any = assets;

  const [contractorId, setContractorId] = React.useState(contractor ? contractor?.contractor_type_id : 1);
  let errorMessage: string = "General";
  const [validateValue2, setValidateValue2] = React.useState<string>("ЮЛ");

const {assetsOptionsCounterpartyType, assetsOptionsCRMS} = InputAssetsOptions()

  const assetsOptionsServiceType = types_and_services[
  contractorId - 1
      ]?.services?.map((option: any) => ({
    key: option.id,
    value: option.id ? option.id : 0,
    label: option.name,
  }));

  useEffect(() => {
    if (error) {
      setChangeGeneralInformation(true);
      setTimeout(() => {
        recoveryAuthorDataState();
      }, 4000);
    }
    if (isChange) {
      setChangeGeneralInformation(false);
      recoveryAuthorDataState();
    }
  }, [error, isChange, validateValue2]);

  useEffect(() => {
    console.log(validateValue2, 'contractorId')
  }, [contractorId])

  const initialValues = {
      // @ts-ignore
    crms: get(contractor, "crms", []).map((crms: any) =>
      get(crms, "id", "")
  ),
    ...pick(contractor, [
      "inn",
      "kpp",
      "ogrn",
      "nda",
      "org_type",
      "contractor_type_id",
      "service_type_id"
    ]),
  };

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={() => validationSchemaGeneralInfo(validateValue2)}
        onSubmit={async (values, action) => {
          changeAuthorGeneralData(values, id, errorMessage);
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
                Общие сведения
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
              {errorMsg === "General" && (
                <div style={{ color: "red" }}>{error}</div>
              )}
              <div style={{ marginBottom: "2%", display: "flex" }}>
                <div>
                  <span style={{ fontSize: 16, fontWeight: "normal" }}>
                    Физическое лицо
                  </span>
                  <Radio
                    checked={values.org_type === "ФЛ"}
                    onChange={(e) => {
                      setFieldValue("org_type", e.target.value);
                      setValidateValue2("ФЛ")
                    }}
                    value="ФЛ"
                    color="default"
                    name="org_type"
                    size="medium"
                    inputProps={{ "aria-label": "A" }}
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
                      setValidateValue2("ЮЛ")
                    }}
                    value="ЮЛ"
                    color="default"
                    name="org_type"
                    size="medium"
                    inputProps={{ "aria-label": "B" }}
                  />
                </div>
              </div>
              {contractorId === 1 &&  <div
                  className={classes.label}
                  style={{alignItems: "flex-start"}}
              >
                <span style={{width: "40%"}}>CRM</span>
                <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                >
                  <FieldArray name="crms">
                    {({remove, push}) => (
                        <div style={{width: "100%", alignItems: "center"}}>
                          {values.crms.length > 0 &&
                          values.crms.map((crm:any, index:number) => {
                            const fieldName = `crms[${index}]`;
                            const touchedFieldName = getIn(touched, fieldName);
                            const errorFieldName = getIn(errors, fieldName);
                            return (
                                <div
                                    key={index}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      marginBottom: 16
                                    }}
                                >
                                  <div
                                      style={{width: "100%"}}>
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
                                          handleChange={(value: any) =>
                                              setFieldValue(fieldName, value)
                                          }
                                          value={crm}
                                          options={assetsOptionsCRMS}
                                          placeholder="Фамилия Имя"

                                      />
                                    </ValidationErrorWrapper>
                                  </div>

                                  {index == 0 ? (
                                      ""
                                  ) : (
                                      <div
                                          style={{marginLeft: 16}}
                                          onClick={() => remove(index)}
                                      >
                                        <TrashIcon/>
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
                </div>
              </div>}

              <div className={classes.label}>
                <span style={{width: "40%"}}>Тип контрагента</span>
                <span style={{ width: "60%" }}>
                    <ValidationErrorWrapper
                        inputClassName="ant-select-selector"
                        error={
                          touched.contractor_type_id &&
                          Boolean(errors.contractor_type_id)
                        }
                        helperText={
                          touched.contractor_type_id && errors.contractor_type_id
                        }
                    >
                  <InputFilterSelectedType
                    // className={classes.input}
                    name="contractor_type_id"
                    handleChange={(value: any) => {
                      setFieldValue("contractor_type_id", value);
                      setContractorId(value);
                      if (value === 1) {
                        setFieldValue("service_type_id", "");

                      }
                      if(value !== 1){
                        setFieldValue("crms", []);
                      }
                    }}
                    value={values.contractor_type_id}
                    options={assetsOptionsCounterpartyType}
                    placeholder="Другое"
                    loading={assetsLoading}

                  />
                    </ValidationErrorWrapper>
                </span>
              </div>
              {contractorId == 1 || <div className={classes.label}>
                <span style={{width: "40%"}}>Тип услуг</span>
                <span style={{width: "60%"}}>
                    <ValidationErrorWrapper
                        inputClassName="ant-select-selector"
                        error={
                          touched.service_type_id && Boolean(errors.service_type_id)
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
              </div>}
              <div className={classes.label}>
                <span style={{width: "40%"}}>ИНН</span>
                <div style={{width:"60%"}}>
                  <ValidationErrorWrapper
                      inputClassName="ant-input"
                      error={touched.inn && Boolean(errors.inn)}
                      helperText={touched.inn && errors.inn}
                  >
                    <Input
                        name="inn"
                        value={values.inn}
                        onChange={handleChange}
                        autoComplete={'off'}
                        placeholder={"1234556789101112"} />
                  </ValidationErrorWrapper>
                </div>
              </div>
              {values.org_type === "ЮЛ" && (
                <div className={classes.label}>
                  <span style={{width: "40%"}}>КПП</span>
                  <div style={{width:"60%"}}>
                    <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={touched.kpp && Boolean(errors.kpp)}
                        helperText={touched.kpp && errors.kpp}
                    >
                      <Input
                          name="kpp"
                          value={values.kpp}
                          onChange={handleChange}
                          autoComplete={'off'}
                          placeholder={"1234556789101112"} />
                    </ValidationErrorWrapper>
                  </div>
                </div>
              )}
              <div className={classes.label}>
                <span style={{width: "40%"}}>{values.org_type === "ФЛ" ? "ОГРНИП" : "ОГРН"}</span>
                <div style={{width:"60%"}}>
                  <ValidationErrorWrapper
                      inputClassName="ant-input"
                      error={touched.ogrn && Boolean(errors.ogrn)}
                      helperText={touched.ogrn && errors.ogrn}
                  >
                    <Input
                        name="ogrn"
                        value={values.ogrn}
                        onChange={handleChange}
                        autoComplete={'off'}
                        placeholder={"1234556789101112"} />
                  </ValidationErrorWrapper>
                </div>
              </div>
              <div  className={clsx(classes.label, classes.NDASection)}>
                <span style={{ width: "37%" }}>NDA</span>
                <span style={{ width: "63%" }}>
                  <Checkbox
                    name={"nda"}

                     value={values.nda === 1 ? true : false}
                    onChange={(e: any) => {
                      setFieldValue("nda", e.target.checked ? 0 : 1)
                    }
                    }

                    color="default"
                    icon={<CheckSquareChecked color="#5B6770" />}
                    checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                    inputProps={{ "aria-label": "checkbox with default color" }}
                  />
                </span>
              </div>
            </Paper>
          </Form>
        )}
      </Formik>
    </div>
  );
};
