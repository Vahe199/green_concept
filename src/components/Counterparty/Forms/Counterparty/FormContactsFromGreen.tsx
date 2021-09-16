import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Paper, Button, Link } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchInput from "../../Core/FilterInputs/searchInput";
import { InputFilterSelectedDirection } from "../../Core/FilterInputs/InputFilterSelectedDirection";

const validationSchema = yup.object({
  direction: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  contact_person: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
  add_Info: yup
    .string()
    .min(0, " should be of minimum 8 characters length")
    .required("Обязательное поле"),
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "4%",
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
      "& .MuiFormControlLabel-root": {
        fontSize: 10,
      },
    },
    textArea: {
      "& .MuiOutlinedInput-input": {
        textAlign: "start",
        height: "80px",
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
      height: 270,
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 12,
    },
    btnSubmit: {
      textTransform: "none",
      textDecoration: "underline",
    },
    spanTitle: {
      fontSize: 16,
    },
    addItem: {
      marginTop: 70,
      cursor: "pointer",
      textDecoration: "underline",
    },
  })
);
type InfoProps = {
  // change: boolean;
  setChangeContactsFromGreen: (val: boolean) => void;
};
export const FormContactsFromGreen: React.FC<InfoProps> = ({
  setChangeContactsFromGreen,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      direction: "",
      contact_person: "",
      add_Info: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
          <span className={classes.spanTitle}>Контакты со стороны Грин</span>
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
          <div className={classes.label}>
            <span>Направление</span>
            {/*<TextField*/}
            {/*  variant={"outlined"}*/}
            {/*  name="direction"*/}
            {/*  placeholder={"Выберите"}*/}
            {/*  value={formik.values.direction}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*  error={*/}
            {/*    formik.touched.direction &&*/}
            {/*    Boolean(formik.errors.direction)*/}
            {/*  }*/}
            {/*  helperText={*/}
            {/*    formik.touched.direction &&*/}
            {/*    formik.errors.direction*/}
            {/*  }*/}
            {/*/>*/}
            <InputFilterSelectedDirection />
          </div>
          <div className={classes.label}>
            <span>Контактное лицо</span>
            {/*<TextField*/}
            {/*  variant={"outlined"}*/}
            {/*  name="contact_person"*/}
            {/*  placeholder={"Введите слово или часть слова"}*/}
            {/*  value={formik.values.contact_person}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*  error={*/}
            {/*    formik.touched.contact_person &&*/}
            {/*    Boolean(formik.errors.contact_person)*/}
            {/*  }*/}
            {/*  helperText={*/}
            {/*    formik.touched.contact_person &&*/}
            {/*    formik.errors.contact_person*/}
            {/*  }*/}
            {/*/>*/}
            <SearchInput />
          </div>
          <div className={classes.label}>
            <span>Дополнительная информация</span>

            <TextField
              variant={"outlined"}
              className={classes.textArea}
              multiline
              rows={8}
              name="add_Info"
              placeholder={"Введите текст"}
              value={formik.values.add_Info}
              onChange={formik.handleChange}
              error={formik.touched.add_Info && Boolean(formik.errors.add_Info)}
              helperText={formik.touched.add_Info && formik.errors.add_Info}
            />
          </div>
          <div
            className={classes.addItem}
            // onClick={addBranch}
          >
            + Добавить отрасль
          </div>
        </Paper>
      </form>
    </div>
  );
};
