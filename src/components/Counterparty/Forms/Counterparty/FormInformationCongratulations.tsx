import React from "react";
import {FieldArray, Form, Formik, getIn} from "formik";
import {Button, Divider, Paper} from "@material-ui/core";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import InputFilterSelectedType from "../../../Utils/FilterInputs/InputFilterSelect";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {useStylesInformationCongratulations} from "./BasicInformationFormStyles";
import {validationSchemaInformationCongratulations} from "./BasicInformationFormValidationSchema";
import ValidationErrorWrapper from "../../../Utils/utils_options/ValidationErrorWrapper";
import {contractorApi} from "../../../../api/api";
import {Input} from "antd";
import {InputAssetsOptions} from "../../../Utils/utils_options/InputAssetsOptions";
import {Dispatch} from "redux";
import {
    ContractorContactDataAction,
    ContractorContactDataActionType
} from "../../../../redux/types/contractor_contact_data";
import {useDispatch} from "react-redux";
import get from "lodash/get";
import pick from "lodash/pick";


type InfoCongratulations = {
  // change: boolean;
  setChangeCongratulations: (val: boolean) => void;
};

export const FormInformationCongratulations: React.FC<InfoCongratulations> = ({
  setChangeCongratulations,}) => {
  const classes = useStylesInformationCongratulations();
    const dispatch: Dispatch<ContractorContactDataAction> = useDispatch()
    const { contractor_contacts,loading: assetsLoading}:any = useTypedSelector((state) => state.contactPerson);
    const {id}= contractor_contacts

const {assetsOptionsCongratulation} = InputAssetsOptions()

  const initialValues = {
      contact_congratulations: get(contractor_contacts, "congratulations", [{name:'',
          congratulation_type_id:'',
          other:''}]).map(
          (congratulation: any) =>
              pick(congratulation, ["name", "congratulation_type_id", "other"])
      ),
  }
  return (
      <div className={classes.root}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaInformationCongratulations}
            onSubmit={async (values,action) => {
                contractorApi.changeContactCongratulationsData(id,values).then(res =>{
                    const {data} = res
                    dispatch({type:ContractorContactDataActionType.SET_CONTRACTOR_CONTACT_DATA_BY_CONTRACTOR_ID,
                        payload:data?.contact, success:true})

                    setChangeCongratulations(true)

                })
                    .catch((e)=>{


                    })
            }}
        >
          {({ values, touched, handleChange,errors,setFieldValue }) => (
              <Form>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                >
                  <span className={classes.spanTitle}>???????????????? ?? ??????????????????????????</span>
                  <Button
                      color="primary"
                      // onClick={() => setChangeCongratulations(true)}
                      type="submit"
                      style={{ textTransform: "none" }}
                  >
                    ??????????????????
                  </Button>
                </div>
                <Paper className={classes.paper}>
                  <FieldArray name="contact_congratulations">
                    {({ remove, push }) => {
                      return (<div>
                            {values.contact_congratulations.length > 0 &&
                            values.contact_congratulations?.map((congratulations:any, index:number) => {
                              const fieldName = `contact_congratulations[${index}].name`;
                              const touchedFieldName = getIn(touched, fieldName);
                              const errorFieldName = getIn(errors, fieldName);
                              const fieldCongratulation_type = `contact_congratulations[${index}].congratulation_type_id`;
                              const touchedFieldCongratulation_type = getIn(touched, fieldCongratulation_type);
                              const errorFieldCongratulation_type = getIn(errors, fieldCongratulation_type);
                              const fieldOther = `contact_congratulations[${index}].other`;
                              const touchedFieldOther = getIn(touched, fieldOther);
                              const errorFieldOther = getIn(errors, fieldName);
                              return (<div>
                                    {index == 0 ? "" : <Divider style={{marginBottom: 16}}/>}
                                    <div key={index}
                                         style={{display: "flex", flexDirection: "row"}}>
                                      <div style={{width:"100%"}}>
                                        <div className={classes.label}>
                                          <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>????????????????</span>
                                          <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                              <div style={{width:"100%"}}>
                                                  <ValidationErrorWrapper
                                                      inputClassName="ant-input"
                                                      error={Boolean(touchedFieldName && errorFieldName)}
                                                      helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                  >
                                                      <Input
                                                          name={fieldName}
                                                          className={classes.input}
                                                          value={congratulations.name}
                                                          onChange={handleChange}
                                                          autoComplete={'off'}
                                                          placeholder={"???????????????? ??????????????????"} />
                                                  </ValidationErrorWrapper>
                                              </div>
                                            {/*<TextField style={{width:"100%"}}*/}
                                            {/*           variant={"outlined"}*/}
                                            {/*           name={fieldName}*/}
                                            {/*           value={congratulations.name}*/}
                                            {/*           placeholder={"???????????????? ??????????????????"}*/}
                                            {/*           onChange={handleChange}*/}
                                            {/*           error={Boolean(touchedFieldName && errorFieldName)}*/}
                                            {/*           helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}*/}
                                            {/*/>*/}
                                          </div>
                                        </div>
                                        <div className={classes.label}>
                                          <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>?????? ????????????????????????</span>
                                            <div
                                                style={
                                                    index == 0
                                                        ? { width: "65%" }
                                                        : { width: "63%" }
                                                }
                                            >
                                                <ValidationErrorWrapper
                                                    inputClassName="ant-select-selector"
                                                    helperText={
                                                        touchedFieldCongratulation_type &&
                                                        errorFieldCongratulation_type
                                                            ? errorFieldCongratulation_type
                                                            : ""
                                                    }
                                                    error={Boolean(
                                                        touchedFieldCongratulation_type &&
                                                        errorFieldCongratulation_type
                                                    )}
                                                >
                                                    <InputFilterSelectedType
                                                        // className={classes.input}
                                                        name={fieldCongratulation_type}
                                                        value={
                                                            congratulations.congratulation_type_id
                                                        }
                                                        handleChange={(value: any) =>
                                                            setFieldValue(
                                                                fieldCongratulation_type,
                                                                value
                                                            )
                                                        }
                                                        options={
                                                            assetsOptionsCongratulation
                                                        }
                                                        placeholder="????????????????"
                                                        loading={assetsLoading}
                                                    />
                                                </ValidationErrorWrapper>
                                            </div>
                                        </div>
                                        <div className={classes.label}>
                                          <span style={index == 0 ?{width:"35%"}:{width:"37%"} }>????????????</span>
                                          <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                              <div style={{width:"100%"}}>
                                                  <ValidationErrorWrapper
                                                      inputClassName="ant-input"
                                                      error={Boolean(touchedFieldOther && errorFieldOther)}
                                                      helperText={touchedFieldOther && errorFieldOther ?errorFieldOther : ""}
                                                  >
                                                      <Input
                                                          name={fieldOther}
                                                          className={classes.input}
                                                          value={congratulations.other}
                                                          onChange={handleChange}
                                                          autoComplete={'off'}
                                                          placeholder={"????????????"} />
                                                  </ValidationErrorWrapper>
                                              </div>
                                            {/*<TextField style={{width:"100%"}}*/}
                                            {/*           variant={"outlined"}*/}
                                            {/*           name={fieldOther}*/}
                                            {/*           placeholder={"????????????"}*/}
                                            {/*           value={congratulations.other}*/}
                                            {/*           onChange={handleChange}*/}
                                            {/*           error={Boolean(touchedFieldOther && errorFieldOther)}*/}
                                            {/*           helperText={touchedFieldOther && errorFieldOther ?errorFieldOther : ""}*/}
                                            {/*/>*/}
                                          </div>
                                        </div>
                                      </div>
                                      {index == 0 ? "" :<div style={{marginLeft: 16}}
                                                             onClick={() => remove(index)}>
                                        <TrashIcon/>
                                      </div>}
                                    </div>
                                  </div>
                              )
                            })}
                            <div
                                className={classes.addItemCRM} style={{ marginLeft:"35%"}}
                                onClick={() => push({name: '', congratulation_type_id: '', other: ''})}
                            >
                              + ?????????? ????????????????
                            </div>
                          </div>
                      )}}
                  </FieldArray>

                </Paper>
              </Form>
          )}
        </Formik>
      </div>
  );
};
