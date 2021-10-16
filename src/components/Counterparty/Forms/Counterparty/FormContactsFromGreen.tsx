import {Button, InputAdornment, Paper, TextField} from "@material-ui/core";
import {FieldArray, Form, Formik, getIn} from "formik";
import React from "react";
import Divider from "@material-ui/core/Divider";
import InputFilterSelectedType from "../../Core/FilterInputs/InputFilterSelect";
import SearchIcon from "@material-ui/icons/Search";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {validationSchemaContactsFromGreen} from "./BasicInformationFormValidationSchema";
import {useStylesContactsFromGreen} from "./BasicInformationFormStyles";


type InfoProps = {
  // change: boolean;
  setChangeContactsFromGreen: (val: boolean) => void;
};
export const FormContactsFromGreen: React.FC<InfoProps> = ({
  setChangeContactsFromGreen,
}) => {
  const classes = useStylesContactsFromGreen();



  const { assets, load: assetsLoading } = useTypedSelector((state) => state.assets);
  const { branches,}: any = assets;
  const assetsOptionsDirections = branches?.map((option: any) => ({
    key: option.id,
    value: option.id ? option.id : 0,
    label: option.name,
  }));
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
            // insertContractorContactData(values);
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
            onClick={() => setChangeContactsFromGreen(true)}
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
                                    <InputFilterSelectedType
                                        // className={classes.input}
                                        name={fieldDirection}
                                        value={employees.direction_id}
                                        handleChange={(value:any) => setFieldValue(fieldDirection, value)}
                                        options={assetsOptionsDirections}
                                        placeholder="Выберите"
                                        loading={assetsLoading}
                                        helperText={touchedFieldDirection && errorFieldDirection ? errorFieldDirection : ""}
                                        error={Boolean(touchedFieldDirection && errorFieldDirection)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.label}>
                                  <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Контактное лицо</span>
                                  <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                    <TextField style={{width:"100%"}}
                                               variant={"outlined"}
                                               name={fieldEmployee}
                                               placeholder={"Введите слово или часть слова"}
                                               value={employees.employee_id}
                                               onChange={handleChange}
                                               InputProps={{
                                                 startAdornment: (
                                                     <InputAdornment position="start">
                                                       <SearchIcon
                                                           fontSize={"small"}
                                                           className={classes.icon}
                                                       />
                                                     </InputAdornment>
                                                 ),
                                               }}
                                               error={Boolean(touchedFieldEmployee && errorFieldEmployee)}
                                               helperText={touchedFieldEmployee && errorFieldEmployee ? errorFieldEmployee : ""}
                                    />
                                  </div>

                                </div>
                                <div className={classes.label} style={{alignItems:"flex-start"}}>
                                  <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Дополнительная информация</span>
                                  <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>

                                                                                <textarea
                                                                                    className={classes.textAreas}
                                                                                    name={fieldInfo}
                                                                                    placeholder={"Введите текст"}
                                                                                    value={employees.info}
                                                                                    onChange={handleChange}
                                                                                    // error={Boolean(touchedFieldInfo && errorFieldInfo)}
                                                                                    // helperText={touchedFieldInfo && errorFieldInfo ? errorFieldInfo : ""}
                                                                                >Расскажите о себе</textarea>
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
