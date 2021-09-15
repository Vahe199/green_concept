import React, {useEffect} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Paper, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {UseActions} from "../../../../redux/type_redux_hook/ useAction";

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
        paddingLeft: 4,
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
        paddingLeft: 4,
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
      border: "1px solid #3ab994",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
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

export const FormCompanyDetails:React.FC<Props> = ({setChangeCompanyDetails}) => {
  const {changeAuthorData} = UseActions();
  const {AuthorData,error,success} = useTypedSelector(state => state.author)
  const {id,full_name,short_name,group,branches}:any = AuthorData;
  const classes = useStyles();
  useEffect(()=>{
    if(error) {
      setChangeCompanyDetails(true)
    }
    if(success){
      setChangeCompanyDetails(false)
    }
  },[])
  const formik = useFormik({
    initialValues: {
      FullCompanyName: full_name,
      ShortNameCompany: short_name,
      CompanyGroup: group? group.full_name :  "",
      Industry: branches.length > 0 ? branches[0].name : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = new FormData()
      formData.append('full_name', values.FullCompanyName);
      formData.append('short_name', values.ShortNameCompany);
      formData.append('group', values.CompanyGroup);
      formData.append('branches', values.Industry);
      // changeAuthorData(formData,id)
       changeAuthorData({'full_name':values.FullCompanyName,'short_name':values.ShortNameCompany,
         'group':values.CompanyGroup, 'branches':values.Industry },id)
       alert(JSON.stringify({'full_name':values.FullCompanyName,'short_name':values.ShortNameCompany,
         'group':values.CompanyGroup, 'branches':values.Industry }, null, 2));
    },
  });

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
          <span>Сведения о компании</span>
          <Button color="primary" type="submit" className={classes.saveButton}>
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          {error && <div style={{color:"red"}}>{error}</div>}
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
          <div className={classes.label}>
            <span>Отрасль</span>
            <TextField
              variant={"outlined"}
              name="Industry"
              placeholder={"Выберите отрасль"}
              value={formik.values.Industry}
              onChange={formik.handleChange}
              error={formik.touched.Industry && Boolean(formik.errors.Industry)}
              helperText={formik.touched.Industry && formik.errors.Industry}
            />
          </div>
        </Paper>
      </form>
    </div>
  );
};
