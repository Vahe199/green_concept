import { Button, Checkbox, Paper, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useActions } from "../../../../redux/type_redux_hook/useAction";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import * as yup from "yup";
import { CheckSquareChecked } from "../../../../IMG/SVG/CheckSquareChecked";
import { CheckSquareUnChecked } from "../../../../IMG/SVG/CheckSquareUnChecked";
import ValidationErrorWrapper from "../../../Utils/utils_options/ValidationErrorWrapper";
import { Input } from "antd";
import get from "lodash/get";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "4%",
      // marginRight: "7%",
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
        fontWeight: 400,
        fontSize: 16,
      },
      "& .MuiFormHelperText-root": {
        fontSize: 9,
        marginTop: -2,
        marginLeft: 0,
      },
      "& .MuiFormControlLabel-root": {
        fontSize: 10,
      },
      "& .MuiOutlinedInput-adornedEnd ": {
        paddingRight: 0,
      },
    },
    paper: {
      padding: 16, //10
      color: "#3B4750",
      border: "1px solid #3ab994",
      boxShadow: "none",
    },
    input: {
      fontSize: 16,
      "&::placeholder": {
        fontSize: 16,
        fontWeight: 400,
      },
    },
    textInTable: {
      color: "#3B4750",
      fontWeight: 500,
      fontSize: 16,
      width: "25%",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 12,
      textTransform: "none",
    },
    saveButton: {
      textTransform: "none",
      textDecoration: "underline",
    },
    btn: {
      color: "#fff",
      fontSize: 15,
      fontWeight: 400,
      marginLeft: 24,
      height: 30,
      width: 170,
      whiteSpace: "nowrap",
      paddingTop: 4.5,
      paddingBottom: 4.5,
      paddingRight: 16,
      paddingLeft: 16,
      boxShadow: "none",
      backgroundColor: "#3AB994",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#36AD8B",
        boxShadow: "none",
      },
      "&:active": {
        backgroundColor: "#32A886",
      },
    },
  })
);

export const initialBankDetails = {
  bik: "",
  name: "",
  city: "",
  ks: "",
  rs: "",
  is_active: 1,
};

export type ContractorBankDetailType = {
  bik: string;
  name: string;
  city: string;
  ks: string;
  rs: string;
  is_active: number;
  id?: number | string;
  main?: number | string;
};
const validationSchema = yup.object({
  bik: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .max(9, " ???? ???????????? 9 ????????????????")
    .required("???????????????????????? ????????"),
  name: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .max(200, " ???? ???????????? 200 ????????????????")
    .required("???????????????????????? ????????"),
  city: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .max(100, " ???? ???????????? 100 ????????????????")
    .required("???????????????????????? ????????"),
  ks: yup
    .string()
    .min(20, " ???? ?????????? 20 ????????????????.")
    .max(20, " ???? ?????????? 20 ????????????????")
    .required("???????????????????????? ????????"),
  rs: yup
    .string()
    .min(20, " ???? ?????????? 20 ????????????????.")
    .max(20, " ???? ?????????? 20 ????????????????")
    .required("???????????????????????? ????????"),
});

type BankProps = {
  // change: boolean;
  setEdit: (val: boolean) => void;
  contractorBankDetail: ContractorBankDetailType;
  setContractorBankDetail?: (data: ContractorBankDetailType) => void;
};

const CreatEditBankAccount: React.FC<BankProps> = ({
  setEdit,
  contractorBankDetail,
  setContractorBankDetail,
}) => {
  const { AuthorData } = useTypedSelector((state) => state.author);
  const id: any = get(AuthorData, "contractor.id", "");

  const { loading } = useTypedSelector((state) => state.contractorBankDetails);

  const classes = useStyles();

  const { insertContractorBankDetails, updateContractorBankDetails } =
    useActions();

  const formik = useFormik({
    initialValues: contractorBankDetail,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = { ...values, contractor_id: id };
      if (contractorBankDetail && contractorBankDetail.id) {
        updateContractorBankDetails(contractorBankDetail.id, data);
      } else {

        insertContractorBankDetails(data);
      }
      setTimeout(() => {
        setEdit(true);
      }, 500);
    },
  });

  useEffect(() => {
    return () =>
      setContractorBankDetail && setContractorBankDetail(initialBankDetails);
  }, []);

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              color: "#3B4750",
              fontSize: "16px",
            }}
          >
            ???????????????? ???????????????????? ????????
          </span>
          <Button
            type="submit"
            color="primary"
            className={classes.saveButton}
            disabled={loading}
          >
            ??????????????????
          </Button>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span className={classes.textInTable}>??????</span>
            <div
              style={{
                width: "75%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "70%" }}>
                <ValidationErrorWrapper
                  inputClassName="ant-input"
                  error={formik.touched.bik && Boolean(formik.errors.bik)}
                  helperText={formik.touched.bik && formik.errors.bik}
                >
                  <Input
                    name="bik"
                    style={{ width: "100%" }}
                    onChange={formik.handleChange}
                    autoComplete={"off"}
                    className={classes.input}
                    value={formik.values.bik}
                    placeholder={"1234556789101112"}
                  />
                </ValidationErrorWrapper>
              </div>
              {/*<TextField*/}
              {/*  name="bik"*/}
              {/*  style={{ width: "75%" }}*/}
              {/*  variant={"outlined"}*/}
              {/*  placeholder={"1234556789101112"}*/}
              {/*  value={formik.values.bik}*/}
              {/*  onChange={formik.handleChange}*/}
              {/*  error={formik.touched.bik && Boolean(formik.errors.bik)}*/}
              {/*  helperText={formik.touched.bik && formik.errors.bik}*/}
              {/*/>*/}
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                ?????????????????? ???? ??????
              </Button>
            </div>
          </div>
          <div className={classes.label}>
            <span className={classes.textInTable}>???????????????????????? ??????????</span>
            <div style={{ width: "75%" }}>
              <ValidationErrorWrapper
                inputClassName="ant-input"
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              >
                <Input
                  name="name"
                  style={{ width: "100%" }}
                  onChange={formik.handleChange}
                  autoComplete={"off"}
                  className={classes.input}
                  value={formik.values.name}
                  placeholder={"???????????????????????? ??????????"}
                />
              </ValidationErrorWrapper>
            </div>
            {/*<TextField*/}
            {/*  style={{ width: "75%" }}*/}
            {/*  variant={"outlined"}*/}
            {/*  name="name"*/}
            {/*  placeholder={"???????????????????????? ??????????"}*/}
            {/*  value={formik.values.name}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*  error={formik.touched.name && Boolean(formik.errors.name)}*/}
            {/*  helperText={formik.touched.name && formik.errors.name}*/}
            {/*/>*/}
          </div>
          <div className={classes.label}>
            <span className={classes.textInTable}>??????????</span>
            <div style={{ width: "75%" }}>
              <ValidationErrorWrapper
                inputClassName="ant-input"
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              >
                <Input
                  name="city"
                  style={{ width: "100%" }}
                  onChange={formik.handleChange}
                  autoComplete={"off"}
                  className={classes.input}
                  value={formik.values.city}
                  placeholder={"??????????"}
                />
              </ValidationErrorWrapper>
            </div>
            {/*<TextField*/}
            {/*  style={{ width: "75%" }}*/}
            {/*  variant={"outlined"}*/}
            {/*  name="city"*/}
            {/*  placeholder={"??????????"}*/}
            {/*  value={formik.values.city}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*  error={formik.touched.city && Boolean(formik.errors.city)}*/}
            {/*  helperText={formik.touched.city && formik.errors.city}*/}
            {/*/>*/}
          </div>
          <div className={classes.label}>
            <span className={classes.textInTable}>??/c</span>
            <div style={{ width: "75%" }}>
              <ValidationErrorWrapper
                inputClassName="ant-input"
                error={formik.touched.ks && Boolean(formik.errors.ks)}
                helperText={formik.touched.ks && formik.errors.ks}
              >
                <Input
                  name="ks"
                  style={{ width: "100%" }}
                  onChange={formik.handleChange}
                  autoComplete={"off"}
                  className={classes.input}
                  value={formik.values.ks}
                  placeholder={"123456789101112"}
                />
              </ValidationErrorWrapper>
            </div>
            {/*<TextField*/}
            {/*  style={{ width: "75%" }}*/}
            {/*  variant={"outlined"}*/}
            {/*  name="ks"*/}
            {/*  placeholder={"123456789101112"}*/}
            {/*  value={formik.values.ks}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*  error={formik.touched.ks && Boolean(formik.errors.ks)}*/}
            {/*  helperText={formik.touched.ks && formik.errors.ks}*/}
            {/*/>*/}
          </div>
          <div className={classes.label}>
            <span className={classes.textInTable}>??/c</span>
            <div style={{ width: "75%" }}>
              <ValidationErrorWrapper
                inputClassName="ant-input"
                error={formik.touched.rs && Boolean(formik.errors.rs)}
                helperText={formik.touched.rs && formik.errors.rs}
              >
                <Input
                  name="rs"
                  style={{ width: "100%" }}
                  onChange={formik.handleChange}
                  autoComplete={"off"}
                  className={classes.input}
                  value={formik.values.rs}
                  placeholder={"123456789101112"}
                />
              </ValidationErrorWrapper>
            </div>
            {/*<TextField*/}
            {/*  style={{ width: "75%" }}*/}
            {/*  variant={"outlined"}*/}
            {/*  name="rs"*/}
            {/*  placeholder={"123456789101112"}*/}
            {/*  value={formik.values.rs}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*  error={formik.touched.rs && Boolean(formik.errors.rs)}*/}
            {/*  helperText={formik.touched.rs && formik.errors.rs}*/}
            {/*/>*/}
          </div>
          <div className={classes.label}>
            <span className={classes.textInTable}>???????? ????????????????</span>
            <span style={{ width: "82%" }}>
              <Checkbox
                defaultChecked
                name="is_active"
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
                value={formik.values.is_active ? true : false}
                onChange={(e) =>
                  formik.setFieldValue("is_active", e.target.checked ? 1 : 0)
                }
                icon={<CheckSquareUnChecked color="#ADB3B8" />}
                checkedIcon={<CheckSquareChecked color="#5B6770" />}
                // todo, not implemented
              />
            </span>
          </div>
        </Paper>
      </form>
    </div>
  );
};

export default CreatEditBankAccount;
