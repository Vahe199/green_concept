import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Paper, Button, Link } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import { UseActions } from "../../../../redux/type_redux_hook/ useAction";
import InputFilterSelectedBranches from "../../Core/FilterInputs/InputFilterSelectedBranches";
import { TrashIcon } from "../../../../IMG/SVG/TrashIcon";

type Data = {
  FullCompanyName: string | null;
  ShortNameCompany: string | null;
  CompanyGroup: string | null;
  Industry: string | null;
};
const validationSchema: yup.SchemaOf<Data> = yup.object({
  FullCompanyName: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  ShortNameCompany: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  CompanyGroup: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  Industry: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // marginRight: "5%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 12,
        textAlign: "start",
        height: "30px",
        backgroundColor: "transparent",
        fontSize: 13,
      },
      "& .MuiFormHelperText-root": {
        fontSize: 9,
        marginTop: -2,
        marginLeft: 0,
      },
    },
    textArea: {
      marginBottom: "6%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "50px",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        textAlign: "start",
        height: "50px",
        backgroundColor: "transparent",
        fontSize: 13,
      },
      "& .MuiOutlinedInput-multiline": {
        padding: "7.5px 14px",
      },
    },
    paper: {
      padding: 10,
      color: "#3B4750",
      border: "1px solid #3ab994",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontWeight: 500,
    },
    addItem: {
      marginTop: 12,
      cursor: "pointer",
      textDecoration: "underline",
    },
    saveButton: {
      textTransform: "none",
      textDecoration: "underline",
    },
  })
);
type Props = {
  // change: boolean;
  setChangeCompanyDetails: (val: boolean) => void;
};

export const FormCompanyDetails: React.FC<Props> = ({
  setChangeCompanyDetails,
}) => {
  const { changeAuthorCompanyDetailsData, recoveryAuthorDataState } =
    UseActions();
  const { AuthorData, error, isChange, errorMsg } = useTypedSelector(
    (state) => state.author
  );
  const { id, full_name, short_name, group, branches, parent_id }: any =
    AuthorData;
  const classes = useStyles();
  const [branch, setBranches] = useState(
    `${branches.length > 0 ? branches[0].id : ""}`
  );
  const [branch1, setBranches1] = useState("");
  const [branch2, setBranches2] = useState("");
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
  const formik = useFormik({
    initialValues: {
      FullCompanyName: full_name,
      ShortNameCompany: short_name,
      CompanyGroup: group ? group.full_name : "",
      Industry: branches.length > 0 ? branches[0].name : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      changeAuthorCompanyDetailsData(
        {
          full_name: values.FullCompanyName,
          short_name: values.ShortNameCompany,
          parent_id: parent_id,
          branches: [branch, branch1, branch2].filter(
            (tiem) => tiem.length > 0
          ),
        },
        id,
        errorMessage
      );
      // alert(JSON.stringify({'full_name':values.FullCompanyName,'short_name':values.ShortNameCompany,
      //   'group':values.CompanyGroup, 'branches':values.Industry }, null, 2));
    },
  });
  const addBranch = () => {
    if (!branch1) {
      setBranches1("1");
    }
    if (!branch2 && branch1) {
      setBranches2("1");
    }
  };
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "101%",
          }}
        >
          <span style={{ fontWeight: 500 }}>Сведения о компании</span>
          <Button color="primary" type="submit" className={classes.saveButton}>
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          {errorMsg == "CompanyDetails" && (
            <div style={{ color: "red" }}>{error}</div>
          )}
          <div className={classes.label}>
            <span>Полное наименование компании</span>

            <TextField
              variant={"outlined"}
              className={classes.textArea}
              multiline
              rows={3}
              name="FullCompanyName"
              placeholder={'ООО "Северо-Западная концессионная компания”'}
              value={formik.values.FullCompanyName}
              onChange={formik.handleChange}
              error={
                formik.touched.FullCompanyName &&
                Boolean(formik.errors.FullCompanyName)
              }
              helperText={
                formik.touched.FullCompanyName && formik.errors.FullCompanyName
              }
            />
          </div>
          <div className={classes.label}>
            <span>Краткое наименование компании</span>
            <TextField
              variant={"outlined"}
              name="ShortNameCompany"
              placeholder={"Краткое наименование компании"}
              value={formik.values.ShortNameCompany}
              onChange={formik.handleChange}
              error={
                formik.touched.ShortNameCompany &&
                Boolean(formik.errors.ShortNameCompany)
              }
              helperText={
                formik.touched.ShortNameCompany &&
                formik.errors.ShortNameCompany
              }
            />
          </div>
          <div className={classes.label}>
            <span>Группа компаний (при наличии)</span>
            <TextField
              variant={"outlined"}
              name="CompanyGroup"
              placeholder={"Группа компаний"}
              value={formik.values.CompanyGroup}
              onChange={formik.handleChange}
              error={
                formik.touched.CompanyGroup &&
                Boolean(formik.errors.CompanyGroup)
              }
              helperText={
                formik.touched.CompanyGroup && formik.errors.CompanyGroup
              }
            />
          </div>
          <div className={classes.label} style={{ alignItems: "flex-start" }}>
            <span>Отрасль</span>
            <span style={{ width: "60%", flexDirection: "column" }}>
              <div style={{ marginBottom: 15 }}>
                <InputFilterSelectedBranches
                  name="Industry"
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setBranches(e.target.value)
                  }
                />
              </div>
              {branch1 && (
                <div style={{ marginBottom: 15, display: "flex" }}>
                  <InputFilterSelectedBranches
                    name="Industry"
                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setBranches1(e.target.value)
                    }
                  />
                  <span onClick={() => setBranches1("")}>
                    <TrashIcon />
                  </span>
                </div>
              )}
              {branch2 && (
                <div style={{ marginBottom: 15, display: "flex" }}>
                  <InputFilterSelectedBranches
                    name="Industry"
                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setBranches2(e.target.value)
                    }
                  />
                  <span onClick={() => setBranches2("")}>
                    <TrashIcon />
                  </span>
                </div>
              )}

              <div className={classes.addItem} onClick={addBranch}>
                + Добавить отрасль
              </div>
            </span>
          </div>
        </Paper>
      </form>
    </div>
  );
};
