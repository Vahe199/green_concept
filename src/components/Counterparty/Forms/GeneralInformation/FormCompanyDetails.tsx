import {Button, Paper, TextField} from "@material-ui/core";
import {FieldArray, Form, Formik, getIn} from "formik";
import React, {useEffect} from "react";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import {useActions} from "../../../../redux/type_redux_hook/useAction";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {validationSchemaFormCompanyDetails} from "./GeneralInformationValidationSchema";
import InputFilterSelectedType from "../../Core/FilterInputs/InputFilterSelect";
import {useStylesCompanyDetails} from "./GeneralInformationStyles";

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
  const classes = useStylesCompanyDetails();

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
    parent_id: parent_id,
    branches: ['']
  }
  return (
    <div className={classes.root}>
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaFormCompanyDetails}
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
          <div className={classes.label}>
            <span>Полное наименование компании</span>

            <TextField
              variant={"outlined"}
              className={classes.textArea}
              multiline
              rows={3}
              name="full_name"
              placeholder={'ООО "Северо-Западная концессионная компания”'}
              value={values.full_name}
              onChange={handleChange}
              error={touched.full_name && Boolean(errors.full_name)}
              helperText={touched.full_name && errors.full_name}
            />
          </div>
          <div className={classes.label}>
            <span>Краткое наименование компании</span>
            <TextField
              variant={"outlined"}
              name="short_name"
              placeholder={"Краткое наименование компании"}
              value={values.short_name}
              onChange={handleChange}
              error={touched.short_name && Boolean(errors.short_name)}
              helperText={touched.short_name && errors.short_name}
            />
          </div>
          <div className={classes.label}>
            <span>Группа компаний (при наличии)</span>
            <TextField
              variant={"outlined"}
              name="parent_id"
              placeholder={"Группа компаний"}
              value={values.parent_id}
              onChange={handleChange}
              error={touched.parent_id && Boolean(errors.parent_id)}
              helperText={touched.parent_id && errors.parent_id}
            />
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
                                                      alignItems: "center"
                                                    }}>
                                                      <div style={index > 0 ? {width: "90%"} : {width: "100%"}}>
                                                        <InputFilterSelectedType
                                                             className={classes.input}
                                                            name={fieldName}
                                                            handleChange={(value: any) =>
                                                                setFieldValue(fieldName, value)
                                                            }
                                                            value={branch}
                                                            options={assetsOptionsBranches}
                                                            placeholder="Выберите отрасль"
                                                            loading={assetsLoading}
                                                            error={Boolean(touchedFieldName && errorFieldName)}
                                                            helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                        />
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
