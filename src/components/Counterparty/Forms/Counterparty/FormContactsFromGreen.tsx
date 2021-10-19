import {Button, InputAdornment, Paper, TextField} from "@material-ui/core";
import {FieldArray, Form, Formik, getIn} from "formik";
import React, {useState} from "react";
import Divider from "@material-ui/core/Divider";
import InputFilterSelectedType from "../../Utils/FilterInputs/InputFilterSelect";
import SearchIcon from "@material-ui/icons/Search";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {validationSchemaContactsFromGreen} from "./BasicInformationFormValidationSchema";
import {useStylesContactsFromGreen} from "./BasicInformationFormStyles";
import ValidationErrorWrapper from "../../Utils/utils_options/ValidationErrorWrapper";
import {MagnifyingGlass} from "../../../../IMG/SVG/MagnifyingGlass";
import InputFilterSelect from "../../Utils/FilterInputs/InputFilterSelect";
import {SearchContactPerson} from "../../Utils/utils_options/SearchContactPerson";
import {counterpartiesApi} from "../../../../api/api";
import {InputAssetsOptions} from "../../Utils/utils_options/InputAssetsOptions";


type InfoProps = {
  // change: boolean;
  setChangeContactsFromGreen: (val: boolean) => void;
};
export const FormContactsFromGreen: React.FC<InfoProps> = ({
  setChangeContactsFromGreen,
}) => {
  const classes = useStylesContactsFromGreen();

    const [branch, setBranch] = useState("");
    const { AuthorData,loading: assetsLoading} = useTypedSelector((state) => state.author);
    const { id }: any = AuthorData;

    const searchOptions = SearchContactPerson()
    const {assetsOptionsDirections} = InputAssetsOptions();

const initialValues = {
  contact_employees:[{direction_id: '', employee_id: '', info: ''}]
}
  return (
    <div className={classes.root}>
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaContactsFromGreen}
          onSubmit={async (values,action) => {
            console.log(values,"values")
              await counterpartiesApi.changeContactEmployeesData(values,id)
                  .then(res =>{
                      console.log(res)
                      setChangeContactsFromGreen(true)
                  }).catch((e)=>{
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
            width: "101%",
          }}
        >
          <span className={classes.spanTitle}>Контакты со gbdc GREEN</span>
          <Button
            color="primary"
            type="submit"
            className={classes.btnSubmit}
            // onClick={() => setChangeContactsFromGreen(true)}
            onClick={() => console.log(errors)}
          >
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          <FieldArray name="contact_employees">
            {({ remove, push }) => {
              return (<div>
                    {values.contact_employees.length > 0 &&
                    values.contact_employees?.map((employees, index) => {
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
                                              // className={classes.input}
                                              name={fieldDirection}
                                              value={employees.direction_id}
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
                                                  value={employees.employee_id}
                                                  onFocus={()=>searchOptions.fetchContactPerson()}
                                                  options={searchOptions.searchOptions}
                                                  filterOption={false}
                                                  onSearch={setBranch}
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

                                    {/*<TextField style={{width:"100%"}}*/}
                                    {/*           variant={"outlined"}*/}
                                    {/*           name={fieldEmployee}*/}
                                    {/*           placeholder={"Введите слово или часть слова"}*/}
                                    {/*           value={employees.employee_id}*/}
                                    {/*           onChange={handleChange}*/}
                                    {/*           InputProps={{*/}
                                    {/*             startAdornment: (*/}
                                    {/*                 <InputAdornment position="start">*/}
                                    {/*                   <SearchIcon*/}
                                    {/*                       fontSize={"small"}*/}
                                    {/*                       className={classes.icon}*/}
                                    {/*                   />*/}
                                    {/*                 </InputAdornment>*/}
                                    {/*             ),*/}
                                    {/*           }}*/}
                                    {/*           error={Boolean(touchedFieldEmployee && errorFieldEmployee)}*/}
                                    {/*           helperText={touchedFieldEmployee && errorFieldEmployee ? errorFieldEmployee : ""}*/}
                                    {/*/>*/}
                                  </div>

                                </div>
                                <div className={classes.label} style={{alignItems:"flex-start"}}>
                                  <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Дополнительная информация</span>
                                  <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                      <ValidationErrorWrapper
                                          inputClassName="makeStyles-textAreas"
                                          error={Boolean(touchedFieldInfo && errorFieldInfo)}
                                          helperText={touchedFieldInfo && errorFieldInfo ? errorFieldInfo : ""}
                                      >
                                                <textarea
                                                    className={classes.textAreas}
                                                    name={fieldInfo}
                                                    placeholder={"Введите текст"}
                                                    value={employees.info}
                                                    onChange={handleChange}

                                                >
                                                  Расскажите о себе
                                                </textarea>
                                      </ValidationErrorWrapper>
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

          {/*<div className={classes.label}>*/}
          {/*  <span className={classes.spanTitle}>Направление</span>*/}

          {/*  <InputFilterSelectedDirection*/}
          {/*    selected={checked}*/}
          {/*    onChange={handleChange}*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div className={classes.label}>*/}
          {/*  <span className={classes.spanTitle}>Контактное лицо</span>*/}

          {/*  <SearchInput />*/}
          {/*</div>*/}
          {/*<div className={classes.label}>*/}
          {/*  <span className={classes.spanTitle}>Дополнительная информация</span>*/}

          {/*  <TextField*/}
          {/*    variant={"outlined"}*/}
          {/*    className={classes.textArea}*/}
          {/*    multiline*/}
          {/*    rows={8}*/}
          {/*    name="add_Info"*/}
          {/*    placeholder={"Введите текст"}*/}
          {/*    value={formik.values.add_Info}*/}
          {/*    onChange={formik.handleChange}*/}
          {/*    error={formik.touched.add_Info && Boolean(formik.errors.add_Info)}*/}
          {/*    helperText={formik.touched.add_Info && formik.errors.add_Info}*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div*/}
          {/*  className={classes.addItem}*/}
          {/*  // onClick={addBranch}*/}
          {/*>*/}
          {/*  + Новый контакт*/}
          {/*</div>*/}
        </Paper>
            </Form>
        )}
      </Formik>
    </div>
  );
};
