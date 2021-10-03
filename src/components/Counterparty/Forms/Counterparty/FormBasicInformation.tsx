import {
  Button,
  Checkbox,
  Link,
  Paper,
  Radio,
  TextField,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useFormik } from "formik";
import React from "react";
import { CheckSquareChecked } from "../../../../IMG/SVG/CheckSquareChecked";
import { CheckSquareUnChecked } from "../../../../IMG/SVG/CheckSquareUnChecked";
import InputFilterSelectedBranches from "../../../Counterparty/Core/FilterInputs/InputFilterSelectedBranches";
import InputFilterSelectedRoles from "../../Core/FilterInputs/InputFilterSelectedRoles";
import InputFilterSelectedServicesType from "../../Core/FilterInputs/InputFilterSelectedServicesType";
import InputFilterSelectedType from "../../Core/FilterInputs/InputFilterSelectedType";

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
        paddingLeft: 7,
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
      boxShadow: "none",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 12,
    },
    spanTitle: {
      fontSize: 16,
    },
  })
);
type InfoProps = {
  // change: boolean;
  setChangeBasicInformation: (val: boolean) => void;
};
export const FormBasicInformation: React.FC<InfoProps> = ({
  setChangeBasicInformation,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState("a");
  const [rolesValue, setRolesValue] = React.useState("1");
  const [branchValue, setBranchValue] = React.useState("1");
  const [service, setService] = React.useState("1");
  const [CounterpartyType, setCounterpartyType] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      main_contact_person: false,
      Surname: "",
      Name: "",
      middle_name: "",
      Gender: checked,
      date_of_birth: "",
      Role: "",
      Position: "",
      counterparty_type: "",
      service_type: "",
      Industry: "",
      work_phone: "",
      mobile_phone: "",
      Email: "",
      delivery_address: "",
    },
    // validationSchema: validationSchema,
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
          }}
        >
          <span className={classes.spanTitle}>Основные сведения</span>
          <Button
            color="primary"
            onClick={() => setChangeBasicInformation(true)}
            type="submit"
            style={{ textTransform: "none", boxShadow: "none" }}
          >
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span>Основное контактное лицо </span>
            <span style={{ width: "61%" }}>
              <Checkbox
                name="main_contact_person"
                icon={<CheckSquareChecked color="#5B6770" />}
                checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
            </span>
          </div>
          <div className={classes.label}>
            <span>Фамилия:</span>
            <TextField
              variant={"outlined"}
              name="Surname"
              placeholder={"Фамилия"}
              value={formik.values.Surname}
              onChange={formik.handleChange}
              error={formik.touched.Surname && Boolean(formik.errors.Surname)}
              helperText={formik.touched.Surname && formik.errors.Surname}
            />
          </div>
          <div className={classes.label}>
            <span>Имя</span>
            <TextField
              variant={"outlined"}
              name="Name"
              placeholder={"Имя"}
              value={formik.values.Name}
              onChange={formik.handleChange}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name}
            />
          </div>
          <div className={classes.label}>
            <span>Отчество</span>
            <TextField
              variant={"outlined"}
              name="middle_name"
              placeholder={"Отчество"}
              value={formik.values.middle_name}
              onChange={formik.handleChange}
              error={
                formik.touched.middle_name && Boolean(formik.errors.middle_name)
              }
              helperText={
                formik.touched.middle_name && formik.errors.middle_name
              }
            />
          </div>
          <div className={classes.label}>
            <span>Пол</span>
            <div style={{ width: "60%", display: "flex" }}>
              <div>
                <span>Мужчина</span>
                <Radio
                  checked={checked === "a"}
                  onChange={handleChange}
                  value="a"
                  color="default"
                  name="radio-button-demo"
                  size="medium"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div>
                <span>Женщина</span>
                <Radio
                  checked={checked === "b"}
                  onChange={handleChange}
                  value="b"
                  color="default"
                  name="radio-button-demo"
                  size="medium"
                  inputProps={{ "aria-label": "B" }}
                />
              </div>
            </div>
          </div>
          <div className={classes.label}>
            <span>Дата рождения</span>
            <div style={{ width: "60%", display: "flex" }}>
              <TextField
                id="date"
                name="date_of_birth"
                variant="outlined"
                type="date"
                defaultValue="2021-01-01"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className={classes.label}>
            <span>Роль</span>
            <InputFilterSelectedRoles
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRolesValue(e.target.value)
              }
              value={rolesValue}
            />
          </div>
          <div className={classes.label}>
            <span>Должность</span>
            <TextField
              variant={"outlined"}
              name="Position"
              placeholder={"Должность"}
              value={formik.values.Position}
              onChange={formik.handleChange}
              error={formik.touched.Position && Boolean(formik.errors.Position)}
              helperText={formik.touched.Position && formik.errors.Position}
            />
          </div>
          <div className={classes.label}>
            <span>Тип контрагента</span>
            <span style={{ width: "60%" }}>
              <InputFilterSelectedType
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCounterpartyType(e.target.value)
                }
                value={CounterpartyType}
              />
            </span>
          </div>
          <div className={classes.label}>
            <span>Тип услуг</span>
            <span style={{ width: "60%" }}>
              <InputFilterSelectedServicesType
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setService(e.target.value)
                }
                value={service}
              />
            </span>
          </div>
          <div className={classes.label}>
            <span>Отрасль</span>
            <div
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputFilterSelectedBranches
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setBranchValue(e.target.value)
                }
                value={branchValue}
              />
            </div>
          </div>
          <div className={classes.label}>
            <span>Телефон рабочий</span>
            <span style={{ width: "60%" }}>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant={"outlined"}
                  name="work_phone"
                  placeholder={"+79999999999"}
                  value={formik.values.work_phone}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.work_phone &&
                    Boolean(formik.errors.work_phone)
                  }
                  helperText={
                    formik.touched.work_phone && formik.errors.work_phone
                  }
                />
                <Link color="inherit">+ Добавить телефон</Link>
              </div>
            </span>
          </div>
          <div className={classes.label}>
            <span>Телефон мобильный</span>
            <span style={{ width: "60%" }}>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant={"outlined"}
                  name="mobile_phone"
                  placeholder={"+79999999999"}
                  value={formik.values.mobile_phone}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.mobile_phone &&
                    Boolean(formik.errors.mobile_phone)
                  }
                  helperText={
                    formik.touched.mobile_phone && formik.errors.mobile_phone
                  }
                />
                <Link color="inherit">+ Добавить телефон</Link>
              </div>
            </span>
          </div>
          <div className={classes.label}>
            <span>E-mail</span>
            <span style={{ width: "60%" }}>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant={"outlined"}
                  name="Email"
                  placeholder={"email@email.com"}
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                  error={formik.touched.Email && Boolean(formik.errors.Email)}
                  helperText={formik.touched.Email && formik.errors.Email}
                />
                <Link color="inherit">+ Добавить email</Link>
              </div>
            </span>
          </div>
          <div className={classes.label}>
            <span>Адрес доставки</span>

            <TextField
              variant={"outlined"}
              className={classes.textArea}
              multiline
              rows={3}
              name="delivery_address"
              placeholder={"Адрес доставки адрес вторая линия"}
              value={formik.values.delivery_address}
              onChange={formik.handleChange}
              error={
                formik.touched.delivery_address &&
                Boolean(formik.errors.delivery_address)
              }
              helperText={
                formik.touched.delivery_address &&
                formik.errors.delivery_address
              }
            />
          </div>
        </Paper>
      </form>
    </div>
  );
};
