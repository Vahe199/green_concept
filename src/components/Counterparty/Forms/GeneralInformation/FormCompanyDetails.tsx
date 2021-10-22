import {Button, Paper, TextField} from "@material-ui/core";
import {FieldArray, Form, Formik, getIn} from "formik";
import React, {useEffect, useState} from "react";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import {useActions} from "../../../../redux/type_redux_hook/useAction";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {validationSchemaFormCompanyDetails} from "./GeneralInformationValidationSchema";
import InputFilterSelectedType from "../../../Utils/FilterInputs/InputFilterSelect";
import {useStylesCompanyDetails} from "./GeneralInformationStyles";
import ValidationErrorWrapper from "../../../Utils/utils_options/ValidationErrorWrapper";
import {MagnifyingGlass} from "../../../../IMG/SVG/MagnifyingGlass";
import InputFilterSelect from "../../../Utils/FilterInputs/InputFilterSelect";
import {Input} from "antd";

type Props = {
  // change: boolean;
  setChangeCompanyDetails: (val: boolean) => void;
};

export const FormCompanyDetails: React.FC<Props> = ({
  setChangeCompanyDetails,
}) => {
  const { changeAuthorCompanyDetailsData, recoveryAuthorDataState } =
    useActions();
  const { AuthorData, error, isChange, errorMsg } = useTypedSelector(
    (state) => state.author
  );
  const { id, full_name, short_name, parent_id }: any =
    AuthorData;
  const { assets, load: assetsLoading } = useTypedSelector((state) => state.assets);
  const { branches,}: any = assets;
  const { contractors, loading } = useTypedSelector(
      (state) => state.counterparties
  );
  const classes = useStylesCompanyDetails();
  const [companyGroupFilterInital, setCompanyGroupFilterInital] = useState<any>(
      []
  );

  const { contractor }: any = AuthorData;
  const { org_type }: any = contractor;

  const [validateValue, setValidateValue] = useState<any>(org_type);

  const { TextArea } = Input;
  const [group, setGroup] = useState("");
  const companyGroupFilter =
      group.length === 0 || group.length > 3
          ? companyGroupFilterInital.filter(
              ({ full_name }: { full_name: string }) => full_name.includes(group)
          )
          : companyGroupFilterInital;
  useEffect(() => {
    !companyGroupFilterInital.length &&
    setCompanyGroupFilterInital(contractors);
  }, [contractors]);
  let errorMessage: string = "CompanyDetails";
  useEffect(() => {
    if (error) {
      setChangeCompanyDetails(true);
      setTimeout(() => {
        recoveryAuthorDataState();
      }, 4000);
    }
    if (isChange) {
      setChangeCompanyDetails(false);
      recoveryAuthorDataState();
    }
  }, [error, isChange]);


  const assetsOptionsBranches = branches?.map((option: any) => ({
    key: option.id,
    value: option.id ? option.id : 0,
    label: option.name,
  }));
  const initialValues = {
    full_name: full_name,
    short_name: short_name,
    parent_id: parent_id ? parent_id : null,
    branches: ['']
  }

  return (
    <div className={classes.root}>
      <Formik
          initialValues={initialValues}
          validationSchema={() => validationSchemaFormCompanyDetails(validateValue)}
          onSubmit={async (values,action) => {
            // console.log(values,"values")
            changeAuthorCompanyDetailsData(values, id, errorMessage)
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
            marginBottom: 8,
          }}
        >
          <span style={{ fontWeight: 500, fontSize: 16 }}>
            Сведения о компании
          </span>
          <Button color="primary" type="submit"
                  className={classes.saveButton}>
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          {errorMsg === "CompanyDetails" && (
            <div style={{ color: "red" }}>{error}</div>
          )}
          <div className={classes.label2}>
            <span style={{width:"40%"}}>Полное наименование компании</span>
            <div style={{width:"60%"}}>
              <ValidationErrorWrapper
                  inputClassName="ant-input"
                  error={touched.full_name && Boolean(errors.full_name)}
                  helperText={touched.full_name && errors.full_name}
              >
                <TextArea
                    name="full_name"
                    value={values.full_name}
                    onChange={handleChange}
                    style={{height: '80px'}}
                    className={classes.input2}
                    //multiline
                    //rows={2}
                    autoSize={false}
                    //className={classes.textAreaCN}
                    autoComplete={'off'}
                    placeholder={'ООО "Северо-Западная компания”'} />
              </ValidationErrorWrapper>
            </div>
            {/*<TextField*/}
            {/*  variant={"outlined"}*/}
            {/*  className={classes.textArea}*/}
            {/*  multiline*/}
            {/*  rows={3}*/}
            {/*  name="full_name"*/}
            {/*  placeholder={'ООО "Северо-Западная концессионная компания”'}*/}
            {/*  value={values.full_name}*/}
            {/*  onChange={handleChange}*/}
            {/*  error={touched.full_name && Boolean(errors.full_name)}*/}
            {/*  helperText={touched.full_name && errors.full_name}*/}
            {/*/>*/}
          </div>
          <div className={classes.label}>
            <span style={{width:"40%"}}>Краткое наименование компании</span>
            <div style={{width:"60%"}}>
              <ValidationErrorWrapper
                  inputClassName="ant-input"
                  error={touched.short_name && Boolean(errors.short_name)}
                  helperText={touched.short_name && errors.short_name}
              >
                <Input
                    name="short_name"
                    value={values.short_name}
                    onChange={handleChange}
                    className={classes.input2}
                    autoComplete={'off'}
                    placeholder={"Краткое наименование компании"} />
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
          <div className={classes.label}>
            <span style={{width:"40%"}}>Группа компаний (при наличии)</span>
            <div className={classes.searchWraper} style={{width:"60%"}}>
              <MagnifyingGlass className="searchIcon" />
              <InputFilterSelect
                  name="parent_id"
                  placeholder={"Группа компаний"}
                  onSearch={setGroup}
                  value={values.parent_id}
                  options={companyGroupFilter.map((option: any) => ({
                    key: option.id,
                    value: option.id,
                    label: option.full_name,
                  }))}
                  filterOption={false}
                  onSelect={(id: number) => {
                    setFieldValue("parent_id", id)
                  }}
                  notFoundContent={null}
                  className={"searchMode "}
                  showSearch
              />
            </div>
          </div>
          <div className={classes.label} style={{ alignItems: "flex-start" }}>
            <span>Отрасль</span>
            <span style={{width: "60%", flexDirection: "column"}}>
              <FieldArray name="branches">
                                        {({ remove, push}) => (
                                            <div style={{width: "100%"}}>
                                              {values.branches.length > 0 &&
                                              values.branches.map((branch, index) => {
                                                const fieldName = `branches[${index}]`;
                                                const touchedFieldName = getIn(touched, fieldName);
                                                const errorFieldName = getIn(errors, fieldName);
                                                return (
                                                    <div key={index} style={{
                                                      display: "flex",
                                                      flexDirection: "row",
                                                      alignItems: "center",
                                                      marginBottom:16
                                                    }}>
                                                      <div style={index > 0 ? {width: "90%"} : {width: "100%"}}>
                                                        <ValidationErrorWrapper
                                                            inputClassName="ant-select-selector"
                                                            error={Boolean(touchedFieldName && errorFieldName)}
                                                            helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                        >
                                                        <InputFilterSelectedType
                                                            name={fieldName}
                                                            handleChange={(value: any) =>
                                                                setFieldValue(fieldName, value)
                                                            }
                                                            value={branch}
                                                            options={assetsOptionsBranches}
                                                            placeholder="Выберите отрасль"
                                                            loading={assetsLoading}
                                                        />
                                                        </ValidationErrorWrapper>
                                                      </div>

                                                      {index == 0 ? "" : <div style={{marginLeft: 16, marginTop: -9}}
                                                                              onClick={() => remove(index)}>
                                                        <TrashIcon/>
                                                      </div>}
                                                    </div>
                                                )
                                              })}
                                              <div
                                                  className={classes.addItemCRM}
                                                  onClick={() => push('')}
                                              >
                                                + Добавить отрасль
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
