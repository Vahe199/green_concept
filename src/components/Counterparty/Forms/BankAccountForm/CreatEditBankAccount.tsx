import { Button, Checkbox, Paper, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { UseActions } from "../../../../redux/type_redux_hook/ useAction";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import * as yup from "yup";
import { CheckSquareChecked } from "../../../../IMG/SVG/CheckSquareChecked";
import { CheckSquareUnChecked } from "../../../../IMG/SVG/CheckSquareUnChecked";

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
        fontSize: 13,
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
      padding: 10,
      color: "#3B4750",
      border: "1px solid #3ab994",
      boxShadow: "none",
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
      fontSize: 10,
      paddingBottom: 0,
      padding: 4,
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
  account_active: false,
  id: "",
};

export type ContractorBankDetailType = {
  bik: string;
  name: string;
  city: string;
  ks: string;
  rs: string;
  account_active: boolean;
  id: number | string;
};
const validationSchema = yup.object({
  bik: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .max(9, " Не больше 9 символов")
    .required("Обязательное поле"),
  name: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .max(200, " не больше 200 символов")
    .required("Обязательное поле"),
  city: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .max(100, " Не больше 100 символов")
    .required("Обязательное поле"),
  ks: yup
    .string()
    .min(20, " Не менее 20 символов.")
    .max(20, " Не более 20 символов")
    .required("Обязательное поле"),
  rs: yup
    .string()
    .min(20, " Не менее 20 символов.")
    .max(20, " Не более 20 символов")
    .required("Обязательное поле"),
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
  const { id }: any = AuthorData;

  const { loading } = useTypedSelector((state) => state.contractorBankDetails);

  const classes = useStyles();

  const { insertContractorBankDetails, updateContractorBankDetails } =
    UseActions();

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
      setEdit(true);
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
          <span>Основной банковский счет</span>
          <Button
            type="submit"
            color="primary"
            className={classes.saveButton}
            disabled={loading}
          >
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span>БИК</span>
            <div
              style={{
                width: "75%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                name="bik"
                style={{ width: "75%" }}
                variant={"outlined"}
                placeholder={"1234556789101112"}
                value={formik.values.bik}
                onChange={formik.handleChange}
                error={formik.touched.bik && Boolean(formik.errors.bik)}
                helperText={formik.touched.bik && formik.errors.bik}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                Заполнить по БИК
              </Button>
            </div>
          </div>
          <div className={classes.label}>
            <span>Наименование банка</span>
            <TextField
              style={{ width: "75%" }}
              variant={"outlined"}
              name="name"
              placeholder={"Наименование банка"}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
          <div className={classes.label}>
            <span>Город</span>
            <TextField
              style={{ width: "75%" }}
              variant={"outlined"}
              name="city"
              placeholder={"Город"}
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </div>
          <div className={classes.label}>
            <span>К/c</span>
            <TextField
              style={{ width: "75%" }}
              variant={"outlined"}
              name="ks"
              placeholder={"123456789101112"}
              value={formik.values.ks}
              onChange={formik.handleChange}
              error={formik.touched.ks && Boolean(formik.errors.ks)}
              helperText={formik.touched.ks && formik.errors.ks}
            />
          </div>
          <div className={classes.label}>
            <span>Р/c</span>
            <TextField
              style={{ width: "75%" }}
              variant={"outlined"}
              name="rs"
              placeholder={"123456789101112"}
              value={formik.values.rs}
              onChange={formik.handleChange}
              error={formik.touched.rs && Boolean(formik.errors.rs)}
              helperText={formik.touched.rs && formik.errors.rs}
            />
          </div>
          <div className={classes.label}>
            <span>Счет активный</span>
            <span style={{ width: "75%" }}>
              <Checkbox
                name="account_active"
                defaultChecked
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
                value={formik.values.account_active}
                onChange={formik.handleChange}
                icon={<CheckSquareUnChecked color="#5B6770" />}
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
