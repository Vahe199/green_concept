import React from "react";
import {FieldArray, Form, Formik, getIn} from "formik";
import {Button, Divider, Paper, TextField} from "@material-ui/core";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import InputFilterSelectedType from "../../Core/FilterInputs/InputFilterSelect";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {useStylesInformationCongratulations} from "./BasicInformationFormStyles";
import {validationSchemaInformationCongratulations} from "./BasicInformationFormValidationSchema";
import ValidationErrorWrapper from "../../Core/utils/ValidationErrorWrapper";
import {counterpartiesApi} from "../../../../api/api";


type InfoCongratulations = {
  // change: boolean;
  setChangeCongratulations: (val: boolean) => void;
};

export const FormInformationCongratulations: React.FC<InfoCongratulations> = ({
  setChangeCongratulations,}) => {
  const classes = useStylesInformationCongratulations();

    const { AuthorData } = useTypedSelector((state) => state.author);
    const { id }: any = AuthorData;
  const { assets, load: assetsLoading } = useTypedSelector((state) => state.assets);
  const { congratulation_types, }: any = assets;

  const assetsOptionsCongratulation = congratulation_types?.map((option: any) => ({
    key: option.id,
    value: option.id ? option.id : 0,
    label: option.name,
  }));
  const initialValues = {
    contact_congratulations:[{name: '', congratulation_type_id: '', other: ''}]
  }
  return (
      <div className={classes.root}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaInformationCongratulations}
            onSubmit={async (values,action) => {
              console.log(values,"values")
                counterpartiesApi.changeContactCongratulationsData(values,id).then(res =>{
                    console.log(res)
                    setChangeCongratulations(true)
                    debugger
                })
                    .catch((e)=>{
                        console.log(e.response)
                        debugger
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
                  <span className={classes.spanTitle}>Сведения о поздравлениях</span>
                  <Button
                      color="primary"
                      // onClick={() => setChangeCongratulations(true)}
                      onClick={() => console.log(errors)}
                      type="submit"
                      style={{ textTransform: "none" }}
                  >
                    Сохранить
                  </Button>
                </div>
                <Paper className={classes.paper}>
                  <FieldArray name="contact_congratulations">
                    {({ remove, push }) => {
                      return (<div>
                            {values.contact_congratulations.length > 0 &&
                            values.contact_congratulations?.map((congratulations, index) => {
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
                                          <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Праздник</span>
                                          <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                            <TextField style={{width:"100%"}}
                                                       variant={"outlined"}
                                                       name={fieldName}
                                                       value={congratulations.name}
                                                       placeholder={"Название праздника"}
                                                       onChange={handleChange}
                                                       error={Boolean(touchedFieldName && errorFieldName)}
                                                       helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                            />
                                          </div>
                                        </div>
                                        <div className={classes.label}>
                                          <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Тип поздравления</span>
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
                                                        placeholder="Выберите"
                                                        loading={assetsLoading}
                                                    />
                                                </ValidationErrorWrapper>
                                            </div>
                                        </div>
                                        <div className={classes.label}>
                                          <span style={index == 0 ?{width:"35%"}:{width:"37%"} }>Другое</span>
                                          <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                            <TextField style={{width:"100%"}}
                                                       variant={"outlined"}
                                                       name={fieldOther}
                                                       placeholder={"Другое"}
                                                       value={congratulations.other}
                                                       onChange={handleChange}
                                                       error={Boolean(touchedFieldOther && errorFieldOther)}
                                                       helperText={touchedFieldOther && errorFieldOther ?errorFieldOther : ""}
                                            />
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
                              + Новый праздник
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
