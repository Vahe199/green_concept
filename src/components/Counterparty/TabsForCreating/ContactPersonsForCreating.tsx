import {
  Button,
  Checkbox,
  InputAdornment,
  Paper,
  Radio,
  TextField,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

import { CheckSquareChecked } from "../../../IMG/SVG/CheckSquareChecked";
import { CheckSquareUnChecked } from "../../../IMG/SVG/CheckSquareUnChecked";
import { TrashIcon } from "../../../IMG/SVG/TrashIcon";
import InputFilterSelectedBranches from "../../Counterparty/Core/FilterInputs/InputFilterSelectedBranches";
import {
  InputFilterSelectedCongratulationsType,
  InputFilterSelectedDirection,
} from "../../Counterparty/Core/FilterInputs/InputFilterSelectedDirection";
import InputFilterSelectedRoles from "../../Counterparty/Core/FilterInputs/InputFilterSelectedRoles";
import InputFilterSelectedServicesType from "../../Counterparty/Core/FilterInputs/InputFilterSelectedServicesType";
import InputFilterSelectedStatus from "../../Counterparty/Core/FilterInputs/InputFilterSelectedStatus";
import InputFilterSelectedType from "../Core/FilterInputs/InputFilterSelect";
import { UseActions } from "../../../redux/type_redux_hook/ useAction";
import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import get from "lodash/get";

type Data = {
  firstname: string | null;
  surname: string | null;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginLeft: "2%",
      marginRight: "2%",
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
        fontSize: 16,
      },
      "& .MuiFormHelperText-root": {
        fontSize: 9,
        marginLeft: 0,
      },
      "& .MuiFormControlLabel-root": {
        fontSize: 10,
      },
    },
    btn: {
      marginLeft: "2%",
      marginTop: 10,
      marginBottom: 10,
      color: "#fff",
      fontSize: 18,
      paddingBottom: 4,
      textTransform: "none",
      backgroundColor: "#3AB994",
      "&:hover": {
        backgroundColor: "#36AD8B",
      },
      "&:active": {
        backgroundColor: "#32A886",
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
        height: "40px",
        backgroundColor: "transparent",
        fontSize: 16,
      },
      "& .MuiOutlinedInput-multiline": {
        padding: "7.5px 12px",
      },
    },
    paper: {
      padding: 10,
      marginBottom: "1%",
      border: "1px solid #3ab994",
      boxShadow: "none",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
      fontSize: 16,
      fontWeight: 500,

      "& .MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error": {
        marginTop: -2,
      },
    },
    addItem: {
      marginLeft: "40%",
      textDecoration: "none",
      marginBottom: "2%",
      cursor: "pointer",
      fontSize: 14,
      "&:hover": {
        textDecoration: "underline",
      },
    },
    addContact: {
      textDecoration: "none",
      cursor: "pointer",
      fontSize: 14,
      "&:hover": {
        textDecoration: "underline",
      },
    },
    BasicInformation: {
      width: "52%",
      paddingRight: "2%",
    },
    ContactsFromGreen: {
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: theme.palette.common.white,
      },
    },
    rightPanel: {
      width: "57%",
    },
    statusText: {
      fontSize: 16,
      marginLeft: "-32px",
    },
    topDiv: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
    },
    val: {
      fontSize: 16,
      fontWeight: 500,
    },
    rightDivider: {
      marginLeft: "3%",
      marginTop: "1%",
      cursor: "pointer",
      width: "10%",
    },
    selectListItem: {
      marginLeft: "3%",
    },
    addListItem: {
      fontSize: 23,
      border: "none",
      background: "none",
      color: "#3AB994",
    },
    selectItem: {
      fontSize: 16,
      textDecoration: "underline",
    },
    icon: {
      width: 18,
      height: 18,
      marginLeft: -1,
    },
  })
);

const flexInitial = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const validationSchema: yup.SchemaOf<Data> = yup.object({
  firstname: yup.string().required("Обязательное поле"),
  surname: yup.string().required("Обязательное поле"),
});

export const ContactPersonsForCreating = () => {
  const { AuthorData } = useTypedSelector((state) => state.author);
  const { id }: any = AuthorData;

  const { assets } = useTypedSelector((state) => state.assets);
  const {
    contact_roles,
    branches,
    types_and_services,
    contact_statuses,
    directions,
    congratulation_types,
  }: any = assets;

  const contactRolesInitial = get(contact_roles, "[0].id", "");
  const contractorTypeIdInitial = get(types_and_services, "[0].id", "");
  const serviceTypeIdInitial = get(
    types_and_services,
    "[0].services[0].id",
    ""
  );
  const statusIdInitial = get(contact_statuses, "[0].id", "");
  const branchesInitial = get(branches, "[0].id", "");
  const directionsInitial = get(directions, "[0].id", "");
  const congratulationTypesInitial = get(congratulation_types, "[0].id", "");

  const classes = useStyles();
  const { insertContractorContactData } = UseActions();

  const [phone, setPhone] = useState(1);
  const [phoneMob, setPhoneMob] = useState(1);
  const [email, setEmail] = useState(1);
  const [multipleContactsFromGreen, setMultipleContactsFromGreen] = useState(1);
  const [congratsPart, setCongratsPart] = useState(1);

  const formik = useFormik({
    initialValues: {
      contractors_main: 1,
      status_id: statusIdInitial,
      contractors_role_id: contactRolesInitial,
      contractors_position: "",

      firstname: "",
      middlename: "",
      surname: "",
      sex: "Муж",
      birthdate: "1970-01-01",
      delivery_address: "",
      contractor_type_id: contractorTypeIdInitial,
      service_type_id: serviceTypeIdInitial,
      branches: branchesInitial,

      work_phone1: "",
      work_phone2: "",
      work_phone3: "",
      mobile_phone1: "",
      mobile_phone2: "",
      mobile_phone3: "",
      email1: "",
      email2: "",
      email3: "",

      employees_direction_id1: directionsInitial,
      employees_direction_id2: directionsInitial,
      employees_direction_id3: directionsInitial,
      employees_employee_id1: 30, // todo Arsen, must changed.
      employees_employee_id2: 30, // todo Arsen, must changed.
      employees_employee_id3: 30, // todo Arsen, must changed.
      employees_info1: "",
      employees_info2: "",
      employees_info3: "",

      congratulations_name1: "",
      congratulations_name2: "",
      congratulations_name3: "",
      congratulations_congratulation_type_id1: congratulationTypesInitial,
      congratulations_congratulation_type_id2: congratulationTypesInitial,
      congratulations_congratulation_type_id3: congratulationTypesInitial,
      congratulations_other1: "",
      congratulations_other2: "",
      congratulations_other3: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({
      contractors_main,
      contractors_role_id,
      contractors_position,
      branches: branch,
      work_phone1,
      work_phone2,
      work_phone3,
      mobile_phone1,
      mobile_phone2,
      mobile_phone3,
      email1,
      email2,
      email3,

      employees_direction_id1,
      employees_direction_id2,
      employees_direction_id3,
      employees_employee_id1,
      employees_employee_id2,
      employees_employee_id3,
      employees_info1,
      employees_info2,
      employees_info3,

      congratulations_name1,
      congratulations_name2,
      congratulations_name3,
      congratulations_congratulation_type_id1,
      congratulations_congratulation_type_id2,
      congratulations_congratulation_type_id3,
      congratulations_other1,
      congratulations_other2,
      congratulations_other3,
      ...rest
    }) => {
      const phoneWorkDraft = [
        { phone: work_phone1, phone_type: "Рабочий" },
        { phone: work_phone2, phone_type: "Рабочий" },
        { phone: work_phone3, phone_type: "Рабочий" },
      ];
      const phoneMobileDraft = [
        { phone: mobile_phone1, phone_type: "Мобильный" },
        { phone: mobile_phone2, phone_type: "Мобильный" },
        { phone: mobile_phone3, phone_type: "Мобильный" },
      ];
      const emailDraft = [email1, email2, email3];
      const contactEmployees = [
        {
          direction_id: employees_direction_id1,
          employee_id: employees_employee_id1,
          info: employees_info1,
        },
        {
          direction_id: employees_direction_id2,
          employee_id: employees_employee_id2,
          info: employees_info2,
        },
        {
          direction_id: employees_direction_id3,
          employee_id: employees_employee_id3,
          info: employees_info3,
        },
      ];

      const contactCongratulations = [
        {
          name: congratulations_name1,
          congratulation_type_id: congratulations_congratulation_type_id1,
          other: congratulations_other1,
        },
        {
          name: congratulations_name2,
          congratulation_type_id: congratulations_congratulation_type_id2,
          other: congratulations_other2,
        },
        {
          name: congratulations_name3,
          congratulation_type_id: congratulations_congratulation_type_id3,
          other: congratulations_other3,
        },
      ];

      const phones = [];
      const emails = [];
      const contact_employees = [];
      const contact_congratulations = [];
      const contact_contractors = {
        main: contractors_main,
        role_id: contractors_role_id,
        position: contractors_position,
        contractor_id: id,
      };

      const formatedValues: any = rest;

      for (let i = 1; i <= 3; i++) {
        console.log(i);

        if (phone >= i && phoneWorkDraft[i - 1].phone) {
          phones.push(phoneWorkDraft[i - 1]);
          formatedValues["phones"] = phones;
        }
        if (phoneMob >= i && phoneMobileDraft[i - 1].phone) {
          phones.push(phoneMobileDraft[i - 1]);
          formatedValues.phones = phones;
        }
        if (email >= i && emailDraft[i - 1]) {
          emails.push({ email: emailDraft[i - 1] });
          formatedValues.emails = emails;
        }
        if (multipleContactsFromGreen >= i && contactEmployees[i - 1]) {
          contact_employees.push(contactEmployees[i - 1]);
          formatedValues.contact_employees = contact_employees;
        }
        if (congratsPart >= i && contactCongratulations[i - 1].name) {
          contact_congratulations.push(contactCongratulations[i - 1]);
          formatedValues.contact_congratulations = contact_congratulations;
        }
      }

      console.log("submit", formatedValues);

      insertContractorContactData(formatedValues);
    },
  });

  console.log(formik.values, formik.errors);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Сохранить карточку
          </Button>
          <span className={classes.selectListItem}>
            <span className={classes.addListItem}>
              <span style={{ fontSize: 17, marginTop: 15 }}> + </span>
              <span className={classes.selectItem} style={{ marginTop: 15 }}>
                Выбрать из списка
              </span>
            </span>
          </span>
        </div>
        <div className={classes.root}>
          <div className={classes.BasicInformation}>
            <div style={flexInitial}>
              <span className={classes.val}>Основные сведения</span>
            </div>
            <Paper className={classes.paper}>
              <div className={classes.label}>
                <div className={classes.topDiv}>
                  <span style={{ width: "40%" }}>Основное контактное лицо</span>
                  <div
                    style={{
                      width: "60%",
                      ...flexInitial,
                    }}
                  >
                    <span>
                      <Checkbox
                        name="contractors_main"
                        icon={<CheckSquareChecked color="#5B6770" />}
                        checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                        inputProps={{
                          "aria-label": "checkbox with default color",
                        }}
                        value={
                          formik.values.contractors_main === 1 ? true : false
                        }
                        onChange={(e: any) =>
                          formik.setFieldValue(
                            "contractors_main",
                            e.target.checked ? 0 : 1
                          )
                        }
                      />
                    </span>
                    <div
                      style={{
                        width: "170px",
                        ...flexInitial,
                      }}
                    >
                      <span className={classes.statusText}>Статус</span>
                      <InputFilterSelectedStatus
                        name="status_id"
                        handleChange={(e: any) =>
                          formik.setFieldValue("status_id", e.target.value)
                        }
                        error={
                          formik.touched.status_id &&
                          Boolean(formik.errors.status_id)
                        }
                        helperText={
                          formik.touched.status_id && formik.errors.status_id
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.label}>
                <span>Фамилия:</span>
                <TextField
                  variant={"outlined"}
                  name="surname"
                  placeholder={"Фамилия"}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.surname && Boolean(formik.errors.surname)
                  }
                  helperText={formik.touched.surname && formik.errors.surname}
                />
              </div>
              <div className={classes.label}>
                <span>Имя</span>
                <TextField
                  variant={"outlined"}
                  name="firstname"
                  placeholder={"Имя"}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstname && Boolean(formik.errors.firstname)
                  }
                  helperText={
                    formik.touched.firstname && formik.errors.firstname
                  }
                />
              </div>
              <div className={classes.label}>
                <span>Отчество</span>
                <TextField
                  variant={"outlined"}
                  name="middlename"
                  placeholder={"Отчество"}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.middlename &&
                    Boolean(formik.errors.middlename)
                  }
                  helperText={
                    formik.touched.middlename && formik.errors.middlename
                  }
                />
              </div>
              <div className={classes.label}>
                <span>Пол</span>
                <div style={{ width: "60%", display: "flex" }}>
                  <div>
                    <span>Мужчина</span>
                    <Radio
                      checked={formik.values.sex === "Муж"}
                      onChange={() => formik.setFieldValue("sex", "Муж")}
                      color="default"
                      size="medium"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </div>
                  <div>
                    <span>Женщина</span>
                    <Radio
                      checked={formik.values.sex === "Жен"}
                      onChange={() => formik.setFieldValue("sex", "Жен")}
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
                    name="birthdate"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={formik.handleChange}
                    defaultValue="1970-01-01"
                  />
                </div>
              </div>
              <div className={classes.label}>
                <span>Роль</span>
                <InputFilterSelectedRoles
                  name="contractors_role_id"
                  handleChange={formik.handleChange}
                  error={
                    formik.touched.contractors_role_id &&
                    Boolean(formik.errors.contractors_role_id)
                  }
                  helperText={
                    formik.touched.contractors_role_id &&
                    formik.errors.contractors_role_id
                  }
                />
              </div>
              <div className={classes.label}>
                <span>Должность</span>
                <TextField
                  variant={"outlined"}
                  name="contractors_position"
                  placeholder={"Должность"}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contractors_position &&
                    Boolean(formik.errors.contractors_position)
                  }
                  helperText={
                    formik.touched.contractors_position &&
                    formik.errors.contractors_position
                  }
                />
              </div>
              <div className={classes.label}>
                <span>Тип контрагента</span>
                <span style={{ width: "60%" }}>
                  <InputFilterSelectedType
                    name="contractor_type_id"
                    handleChange={(e: any) =>
                      formik.setFieldValue("contractor_type_id", e.target.value)
                    }
                  />
                </span>
              </div>
              <div className={classes.label}>
                <span>Тип услуг</span>
                <span style={{ width: "60%" }}>
                  <InputFilterSelectedServicesType
                    name="service_type_id"
                    handleChange={(e: any) =>
                      formik.setFieldValue("service_type_id", e.target.value)
                    }
                    error={
                      formik.touched.service_type_id &&
                      Boolean(formik.errors.service_type_id)
                    }
                    helperText={
                      formik.touched.service_type_id &&
                      formik.errors.service_type_id
                    }
                  />
                </span>
              </div>
              <div className={classes.label}>
                <span>Отрасль</span>
                <span style={{ width: "60%" }}>
                  <InputFilterSelectedBranches
                    name="branches"
                    handleChange={(e: any) =>
                      formik.setFieldValue("branches", e.target.value)
                    }
                    error={
                      formik.touched.branches && Boolean(formik.errors.branches)
                    }
                    helperText={
                      formik.touched.branches && formik.errors.branches
                    }
                  />
                </span>
              </div>
              <div className={classes.label}>
                <span>Телефон рабочий</span>
                <span style={{ width: "60%" }}>
                  <div
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="work_phone1"
                      placeholder={"+79991234567"}
                      style={{ width: "85%" }}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.work_phone1 &&
                        Boolean(formik.errors.work_phone1)
                      }
                      helperText={
                        formik.touched.work_phone1 && formik.errors.work_phone1
                      }
                    />
                  </div>
                </span>
              </div>
              {phone > 1 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="work_phone2"
                        placeholder={"+79991234567"}
                        style={{ width: "85%" }}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.work_phone2 &&
                          Boolean(formik.errors.work_phone2)
                        }
                        helperText={
                          formik.touched.work_phone2 &&
                          formik.errors.work_phone2
                        }
                      />
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                        }}
                        onClick={() => (phone > 1 ? setPhone(phone - 1) : null)}
                      >
                        {phone === 2 ? <TrashIcon /> : ""}
                      </div>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {phone > 2 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="work_phone3"
                        placeholder={"+79991234567"}
                        style={{ width: "85%" }}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.work_phone3 &&
                          Boolean(formik.errors.work_phone3)
                        }
                        helperText={
                          formik.touched.work_phone3 &&
                          formik.errors.work_phone3
                        }
                      />
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                        }}
                        onClick={() => (phone > 1 ? setPhone(phone - 1) : null)}
                      >
                        {phone === 3 ? <TrashIcon /> : ""}
                      </div>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {phone! < 3 ? (
                <div
                  className={classes.addItem}
                  onClick={() => (phone < 3 ? setPhone(phone + 1) : null)}
                >
                  + Добавить телефон
                </div>
              ) : (
                ""
              )}
              <div className={classes.label}>
                <span>Телефон мобильный</span>
                <span style={{ width: "60%" }}>
                  <div
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="mobile_phone1"
                      placeholder={"+79991234567"}
                      style={{ width: "85%" }}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.mobile_phone1 &&
                        Boolean(formik.errors.mobile_phone1)
                      }
                      helperText={
                        formik.touched.mobile_phone1 &&
                        formik.errors.mobile_phone1
                      }
                    />
                  </div>
                </span>
              </div>
              {phoneMob > 1 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="mobile_phone2"
                        placeholder={"+79991234567"}
                        style={{ width: "85%" }}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.mobile_phone2 &&
                          Boolean(formik.errors.mobile_phone2)
                        }
                        helperText={
                          formik.touched.mobile_phone2 &&
                          formik.errors.mobile_phone2
                        }
                      />
                      {phoneMob === 2 ? (
                        <div
                          style={{
                            marginLeft: "3%",
                            marginTop: "1%",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            phoneMob > 1 ? setPhoneMob(phoneMob - 1) : null
                          }
                        >
                          <TrashIcon />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {phoneMob > 2 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="mobile_phone3"
                        placeholder={"+79991234567"}
                        style={{ width: "85%" }}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.mobile_phone3 &&
                          Boolean(formik.errors.mobile_phone3)
                        }
                        helperText={
                          formik.touched.mobile_phone3 &&
                          formik.errors.mobile_phone3
                        }
                      />
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          phoneMob > 1 ? setPhoneMob(phoneMob - 1) : null
                        }
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {phoneMob! < 3 ? (
                <div
                  className={classes.addItem}
                  onClick={() =>
                    phoneMob < 3 ? setPhoneMob(phoneMob + 1) : null
                  }
                >
                  + Добавить телефон
                </div>
              ) : (
                ""
              )}
              <div className={classes.label}>
                <span>E-mail</span>
                <span style={{ width: "60%" }}>
                  <div
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant={"outlined"}
                      name="email1"
                      style={{ width: "85%" }}
                      placeholder={"email@email.ru"}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email1 && Boolean(formik.errors.email1)
                      }
                      helperText={formik.touched.email1 && formik.errors.email1}
                    />
                  </div>
                </span>
              </div>
              {email > 1 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="email2"
                        style={{ width: "85%" }}
                        placeholder={"email@email.ru"}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email2 && Boolean(formik.errors.email2)
                        }
                        helperText={
                          formik.touched.email2 && formik.errors.email2
                        }
                      />
                      {email === 2 ? (
                        <div
                          style={{
                            marginLeft: "3%",
                            marginTop: "1%",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            email > 1 ? setEmail(email - 1) : null
                          }
                        >
                          <TrashIcon />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {email > 2 ? (
                <div className={classes.label}>
                  <span></span>
                  <span style={{ width: "60%" }}>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        name="email3"
                        style={{ width: "85%" }}
                        placeholder={"email@email.ru"}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email3 && Boolean(formik.errors.email3)
                        }
                        helperText={
                          formik.touched.email3 && formik.errors.email3
                        }
                      />
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                        }}
                        onClick={() => (email > 1 ? setEmail(email - 1) : null)}
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              {email! < 3 ? (
                <div
                  className={classes.addItem}
                  onClick={() => (email < 3 ? setEmail(email + 1) : null)}
                >
                  + Добавить email
                </div>
              ) : (
                ""
              )}
              <div className={classes.label}>
                <span>Адрес доставки</span>

                <TextField
                  variant={"outlined"}
                  className={classes.textArea}
                  multiline
                  rows={3}
                  name="delivery_address"
                  placeholder={"Адрес доставки адрес вторая линия"}
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
          </div>
          <div className={classes.rightPanel}>
            <div style={{ width: "100%" }}>
              <div className={classes.ContactsFromGreen}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <span className={classes.val}>Контакты со стороны GREEN</span>
                </div>
                <Paper className={classes.paper}>
                  <div className={classes.label}>
                    <span>Направление</span>
                    <InputFilterSelectedDirection
                      handleChange={formik.handleChange}
                      name="employees_direction_id1"
                    />
                  </div>
                  <div className={classes.label}>
                    <span>Контактное лицо</span>
                    <TextField
                      variant={"outlined"}
                      name="employees_employee_id1"
                      placeholder={"Введите слово или часть слова"}
                      onChange={formik.handleChange}
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
                      error={
                        formik.touched.employees_employee_id1 &&
                        Boolean(formik.errors.employees_employee_id1)
                      }
                      helperText={
                        formik.touched.employees_employee_id1 &&
                        formik.errors.employees_employee_id1
                      }
                    />
                  </div>
                  <div className={classes.label}>
                    <span>Дополнительная информация</span>

                    <TextField
                      variant={"outlined"}
                      className={classes.textArea}
                      multiline
                      rows={8}
                      name="employees_info1"
                      placeholder={"Введите текст"}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.employees_info1 &&
                        Boolean(formik.errors.employees_info1)
                      }
                      helperText={
                        formik.touched.employees_info1 &&
                        formik.errors.employees_info1
                      }
                    />
                  </div>
                  <div>
                    {multipleContactsFromGreen === 1 ? (
                      <div
                        className={classes.addContact}
                        onClick={() =>
                          multipleContactsFromGreen < 3
                            ? setMultipleContactsFromGreen(
                                multipleContactsFromGreen + 1
                              )
                            : null
                        }
                      >
                        + Новый контакт
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  {multipleContactsFromGreen > 1 ? (
                    <>
                      <Divider style={{ marginBottom: "9px" }} />
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>Направление</span>
                        <InputFilterSelectedDirection
                          handleChange={formik.handleChange}
                          name="employees_direction_id2"
                        />
                        <div
                          className={classes.rightDivider}
                          onClick={() =>
                            setMultipleContactsFromGreen(
                              multipleContactsFromGreen - 1
                            )
                          }
                        >
                          {multipleContactsFromGreen === 2 ? <TrashIcon /> : ""}
                        </div>
                      </div>
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>Контактное лицо</span>
                        <TextField
                          variant={"outlined"}
                          name="employees_employee_id2"
                          style={{ minWidth: "50%" }}
                          placeholder={"Введите слово или часть слова"}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.employees_employee_id2 &&
                            Boolean(formik.errors.employees_employee_id2)
                          }
                          helperText={
                            formik.touched.employees_employee_id2 &&
                            formik.errors.employees_employee_id2
                          }
                        />
                        <div className={classes.rightDivider}></div>
                      </div>
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>
                          Дополнительная информация
                        </span>
                        <TextField
                          variant={"outlined"}
                          className={classes.textArea}
                          multiline
                          rows={8}
                          name="employees_info2"
                          style={{ minWidth: "50%" }}
                          placeholder={"Введите текст"}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.employees_info2 &&
                            Boolean(formik.errors.employees_info2)
                          }
                          helperText={
                            formik.touched.employees_info2 &&
                            formik.errors.employees_info2
                          }
                        />
                        <div className={classes.rightDivider}></div>
                      </div>
                      <div>
                        {multipleContactsFromGreen! < 3 ? (
                          <div
                            style={{ fontSize: "12px" }}
                            onClick={() =>
                              multipleContactsFromGreen < 3
                                ? setMultipleContactsFromGreen(
                                    multipleContactsFromGreen + 1
                                  )
                                : null
                            }
                          >
                            + Новый контакт
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {multipleContactsFromGreen > 2 ? (
                    <>
                      <Divider style={{ marginBottom: "9px" }} />
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>Направление</span>
                        <InputFilterSelectedDirection
                          handleChange={formik.handleChange}
                          name="employees_direction_id3"
                        />
                        <div
                          className={classes.rightDivider}
                          onClick={() =>
                            setMultipleContactsFromGreen(
                              multipleContactsFromGreen - 1
                            )
                          }
                        >
                          <TrashIcon />
                        </div>
                      </div>
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>Контактное лицо</span>
                        <TextField
                          variant={"outlined"}
                          name="employees_employee_id3"
                          style={{ minWidth: "50%" }}
                          placeholder={"Введите слово или часть слова"}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.employees_employee_id3 &&
                            Boolean(formik.errors.employees_employee_id3)
                          }
                          helperText={
                            formik.touched.employees_employee_id3 &&
                            formik.errors.employees_employee_id3
                          }
                        />
                        <div className={classes.rightDivider}></div>
                      </div>
                      <div className={classes.label}>
                        <span style={{ width: "54%" }}>
                          Дополнительная информация
                        </span>

                        <TextField
                          variant={"outlined"}
                          className={classes.textArea}
                          multiline
                          rows={8}
                          name="employees_info3"
                          style={{ minWidth: "50%" }}
                          placeholder={"Введите текст"}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.employees_info3 &&
                            Boolean(formik.errors.employees_info3)
                          }
                          helperText={
                            formik.touched.employees_info3 &&
                            formik.errors.employees_info3
                          }
                        />
                        <div className={classes.rightDivider}></div>
                      </div>
                      <div>
                        {multipleContactsFromGreen! < 3 ? (
                          <div
                            onClick={() =>
                              multipleContactsFromGreen < 3
                                ? setMultipleContactsFromGreen(
                                    multipleContactsFromGreen + 1
                                  )
                                : null
                            }
                          >
                            + Новый контакт
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </Paper>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "2%",
                }}
              >
                <span className={classes.val}>Сведения о поздравлениях</span>
              </div>
              <Paper className={classes.paper}>
                <div className={classes.label}>
                  <span>Праздник</span>
                  <TextField
                    variant={"outlined"}
                    name="congratulations_name1"
                    placeholder={"Название праздника"}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.congratulations_name1 &&
                      Boolean(formik.errors.congratulations_name1)
                    }
                    helperText={
                      formik.touched.congratulations_name1 &&
                      formik.errors.congratulations_name1
                    }
                  />
                </div>

                <div className={classes.label}>
                  <span>Тип поздравления</span>
                  <InputFilterSelectedCongratulationsType
                    handleChange={formik.handleChange}
                    name="congratulations_congratulation_type_id1"
                  />
                </div>
                <div className={classes.label}>
                  <span>Другое</span>
                  <TextField
                    variant={"outlined"}
                    name="congratulations_other1"
                    placeholder={"Другое"}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.congratulations_other1 &&
                      Boolean(formik.errors.congratulations_other1)
                    }
                    helperText={
                      formik.touched.congratulations_other1 &&
                      formik.errors.congratulations_other1
                    }
                  />
                </div>
                {congratsPart! < 3 ? (
                  <div
                    className={classes.addItem}
                    onClick={() =>
                      congratsPart < 3
                        ? setCongratsPart(congratsPart + 1)
                        : null
                    }
                  >
                    + Новый праздник
                  </div>
                ) : (
                  ""
                )}

                {congratsPart > 1 ? (
                  <>
                    <Divider style={{ marginBottom: "9px" }} />
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Праздник</span>
                      <TextField
                        variant={"outlined"}
                        name="congratulations_name2"
                        style={{ minWidth: "50%" }}
                        placeholder={"Название праздника"}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.congratulations_name2 &&
                          Boolean(formik.errors.congratulations_name2)
                        }
                        helperText={
                          formik.touched.congratulations_name2 &&
                          formik.errors.congratulations_name2
                        }
                      />
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                          width: "10%",
                        }}
                        onClick={() =>
                          congratsPart > 1
                            ? setCongratsPart(congratsPart - 1)
                            : null
                        }
                      >
                        {congratsPart === 2 ? <TrashIcon /> : ""}
                      </div>
                    </div>
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Тип поздравления</span>
                      <InputFilterSelectedCongratulationsType
                        handleChange={formik.handleChange}
                        name="congratulations_congratulation_type_id2"
                      />
                      <div className={classes.rightDivider}></div>
                    </div>
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Другое</span>
                      <TextField
                        variant={"outlined"}
                        name="congratulations_other2"
                        style={{ minWidth: "50%" }}
                        placeholder={"Другое"}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.congratulations_other2 &&
                          Boolean(formik.errors.congratulations_other2)
                        }
                        helperText={
                          formik.touched.congratulations_other2 &&
                          formik.errors.congratulations_other2
                        }
                      />
                      <div className={classes.rightDivider}></div>
                    </div>
                  </>
                ) : null}
                {congratsPart > 2 ? (
                  <>
                    <Divider style={{ marginBottom: "9px" }} />
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Праздник</span>
                      <TextField
                        variant={"outlined"}
                        name="congratulations_name3"
                        style={{ minWidth: "50%" }}
                        placeholder={"Название праздника"}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.congratulations_name3 &&
                          Boolean(formik.errors.congratulations_name3)
                        }
                        helperText={
                          formik.touched.congratulations_name3 &&
                          formik.errors.congratulations_name3
                        }
                      />
                      <div
                        style={{
                          marginLeft: "3%",
                          marginTop: "1%",
                          cursor: "pointer",
                          width: "10%",
                        }}
                        onClick={() =>
                          congratsPart > 1
                            ? setCongratsPart(congratsPart - 1)
                            : null
                        }
                      >
                        <TrashIcon />
                      </div>
                    </div>
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Тип поздравления</span>
                      <InputFilterSelectedCongratulationsType
                        handleChange={formik.handleChange}
                        name="congratulations_congratulation_type_id3"
                      />
                      <div className={classes.rightDivider}></div>
                    </div>
                    <div className={classes.label}>
                      <span style={{ width: "54%" }}>Другое</span>
                      <TextField
                        variant={"outlined"}
                        name="congratulations_other3"
                        style={{ minWidth: "50%" }}
                        placeholder={"Другое"}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.congratulations_other3 &&
                          Boolean(formik.errors.congratulations_other3)
                        }
                        helperText={
                          formik.touched.congratulations_other3 &&
                          formik.errors.congratulations_other3
                        }
                      />
                      <div className={classes.rightDivider}></div>
                    </div>
                  </>
                ) : null}
              </Paper>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
