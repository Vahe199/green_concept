import {Button, Paper} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {Input} from "antd";
import {FieldArray, Form, Formik, getIn} from "formik";
import get from "lodash/get";
import pick from "lodash/pick";
import React from "react";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {contractorApi} from "../../../../api/api";
import {MagnifyingGlass} from "../../../../IMG/SVG/MagnifyingGlass";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import {
    ContractorContactDataAction,
    ContractorContactDataActionType
} from "../../../../redux/types/contractor_contact_data";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {
    default as InputFilterSelect,
    default as InputFilterSelectedType
} from "../../../Utils/FilterInputs/InputFilterSelect";
import {InputAssetsOptions} from "../../../Utils/utils_options/InputAssetsOptions";
import {SearchContactPerson} from "../../../Utils/utils_options/SearchContactPerson";
import ValidationErrorWrapper from "../../../Utils/utils_options/ValidationErrorWrapper";
import {useStylesContactsFromGreen} from "./BasicInformationFormStyles";
import {validationSchemaContactsFromGreen} from "./BasicInformationFormValidationSchema";


type InfoProps = {
  // change: boolean;
  setChangeContactsFromGreen: (val: boolean) => void;
};
export const FormContactsFromGreen: React.FC<InfoProps> = ({
  setChangeContactsFromGreen,
}) => {
  const classes = useStylesContactsFromGreen();
    const { TextArea } = Input;

  const dispatch: Dispatch<ContractorContactDataAction> = useDispatch()
    const { contractor_contacts ,loading: assetsLoading} = useTypedSelector((state) => state.contactPerson);
    const {id}:any = contractor_contacts


    const {fetchContactPerson,searchOptions,searchFilter} = SearchContactPerson()
    const {assetsOptionsDirections} = InputAssetsOptions();
const initialValues = {

    contact_employees: get(contractor_contacts, "employees", [{direction_id:'', employee_id: "", info: ""}]).map(
        (employee: any) => pick(employee, ["direction_id", "employee_id", "info"])
    ),
}
  return (
    <div className={classes.root}>
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaContactsFromGreen}
          onSubmit={async (values,action) => {
              await contractorApi.changeContactEmployeesData(id,values)
                  .then(res =>{
                      const {data} = res
                      dispatch({type:ContractorContactDataActionType.SET_CONTRACTOR_CONTACT_DATA_BY_CONTRACTOR_ID,
                          payload:data?.contact, success:true})
                      setChangeContactsFromGreen(true)
                  }).catch((e)=>{

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
            width: "101%",
              //marginBottom: 8,
          }}
        >
          <span className={classes.spanTitle}>Контакты со стороны GREEN</span>
          <Button
            color="primary"
            type="submit"
            className={classes.btnSubmit}
          >
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          <FieldArray name="contact_employees">
            {({ remove, push }) => {
              return (<div>
                    {values.contact_employees.length > 0 &&
                    values.contact_employees?.map((employ:any, index:number) => {
                      const fieldDirection = `contact_employees[${index}].direction_id`;
                      const touchedFieldDirection = getIn(touched, fieldDirection);
                      const errorFieldDirection = getIn(errors, fieldDirection);
                      const fieldEmployee = `contact_employees[${index}].employee_id`;
                      const touchedFieldEmployee = getIn(touched, fieldEmployee);
                      const errorFieldEmployee = getIn(errors, fieldEmployee);
                      const fieldInfo = `contact_employees[${index}].info`;
                      const touchedFieldInfo = getIn(touched, fieldInfo);
                      const errorFieldInfo = getIn(errors, fieldInfo);
                      return (
                          <div>
                            {index == 0 ? "" : <Divider style={{marginBottom: 16}}/>}
                            <div key={index} style={{display:"flex",flexDirection:"row"}}>
                              <div style={{width:"100%"}}>

                                <div className={classes.label}>
                                  <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Направление</span>
                                  <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                      <ValidationErrorWrapper
                                          inputClassName="ant-select-selector"
                                          helperText={
                                              touchedFieldDirection &&
                                              errorFieldDirection
                                                  ? errorFieldDirection
                                                  : ""
                                          }
                                          error={Boolean(
                                              touchedFieldDirection &&
                                              errorFieldDirection
                                          )}
                                      >
                                          <InputFilterSelectedType
                                               //className={classes.input}
                                              name={fieldDirection}
                                              value={employ.direction_id}
                                              handleChange={(value: any) =>
                                                  setFieldValue(
                                                      fieldDirection,
                                                      value
                                                  )
                                              }
                                              options={
                                                  assetsOptionsDirections
                                              }
                                              placeholder="Выберите"
                                              loading={assetsLoading}
                                          />
                                      </ValidationErrorWrapper>
                                  </div>
                                </div>
                                <div className={classes.label}>
                                  <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Контактное лицо</span>
                                  <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                      <ValidationErrorWrapper
                                          inputClassName="ant-select-selector"
                                          error={Boolean(
                                              touchedFieldEmployee &&
                                              errorFieldEmployee
                                          )}
                                          helperText={
                                              touchedFieldEmployee &&
                                              errorFieldEmployee
                                                  ? errorFieldEmployee
                                                  : ""
                                          }
                                      >
                                          <div className={classes.searchWraper}>
                                              <MagnifyingGlass className="searchIcon" />
                                              <InputFilterSelect
                                                  name={fieldEmployee}
                                                  placeholder={"Введите слово или часть слова"}
                                                  value={employ.employee_id}
                                                  onFocus={()=>fetchContactPerson()}
                                                  options={searchOptions}
                                                  filterOption={false}
                                                  onSearch={(val:any)=> {
                                                       searchFilter(val)
                                                  }}
                                                  onSelect={(id: number) => {
                                                      setFieldValue(fieldEmployee,id)
                                                  }}
                                                  notFoundContent={null}
                                                  className={"searchMode " }
                                                  prefix={<MagnifyingGlass className={classes.icon} />}
                                                  showSearch
                                              />
                                          </div>
                                      </ValidationErrorWrapper>
                                  </div>

                                </div>
                                <div className={classes.label} style={{alignItems:"flex-start"}}>
                                  <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Дополнительная информация</span>
                                  <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                      <div style={{width:"100%"}}>
                                          <ValidationErrorWrapper
                                              inputClassName="ant-input"
                                              error={Boolean(
                                                  touchedFieldInfo &&
                                                  errorFieldInfo
                                              )}
                                              helperText={
                                                  touchedFieldInfo &&
                                                  errorFieldInfo
                                                      ? errorFieldInfo
                                                      : ""
                                              }
                                          >
                                              <TextArea
                                                  name={fieldInfo}
                                                  value={employ.info}
                                                  className={classes.input}
                                                  onChange={handleChange}
                                                  style={{height: '233px'}}
                                                  //multiline
                                                  //rows={2}
                                                  autoSize={false}
                                                  //className={classes.textAreaCN}
                                                  autoComplete={'off'}
                                                  placeholder={'Введите текст'} />
                                          </ValidationErrorWrapper>
                                      </div>
                                  </div>
                                </div>
                              </div>
                              {index == 0 ? ""
                                  : <div style={{marginLeft:16}}
                                         onClick={() => remove(index)}>
                                    <TrashIcon/>
                                  </div>}
                            </div>
                          </div>
                      )
                    })}
                    <div
                        className={classes.addItemCRM}
                        onClick={() => push({direction_id: '', employee_id: '', info: ''})}
                    >
                      + Новый контакт
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
