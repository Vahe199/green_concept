import { Button, Checkbox, Paper, Radio, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { CheckSquareChecked } from "../../../../IMG/SVG/CheckSquareChecked";
import { CheckSquareUnChecked } from "../../../../IMG/SVG/CheckSquareUnChecked";
import { TrashIcon } from "../../../../IMG/SVG/TrashIcon";
import { UseActions } from "../../../../redux/type_redux_hook/ useAction";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import InputFilterSelectedCrm from "../../Core/FilterInputs/InputFilterSelectedCRM";
import InputFilterSelectedServicesType from "../../Core/FilterInputs/InputFilterSelectedServicesType";
import InputFilterSelectedType from "../../Core/FilterInputs/InputFilterSelectedType";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: "7%",
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
      "& .makeStyles-label": {},
    },
    paper: {
      padding: 10,
      color: "#3B4750",
      border: "1px solid #3ab994",
      // color: "red",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 12,
      fontWeight: 500,
    },
    NDASection: {
      marginTop: "-10px",
    },
    saveButton: {
      textTransform: "none",
      textDecoration: "underline",
    },
  })
);
type Props = {
  // change: boolean;
  setChangeGeneralInformation: (val: boolean) => void;
};
export const FormGeneralInformation: React.FC<Props> = ({
  setChangeGeneralInformation,
}) => {
  const { changeAuthorGeneralData, recoveryAuthorDataState } = UseActions();
  const classes = useStyles();

  const { AuthorData, error, isChange } = useTypedSelector(
    (state) => state.author
  );
  let {
    id,
    crms,
    org_type,
    inn,
    kpp,
    ogrn,
    nda,
    type,
    service,
    errorMsg,
  }: any = AuthorData;
  const [orgType, setOrgType] = React.useState(org_type);
  const [srm, setCRM] = React.useState(`${crms[0]?.id}`);
  const [srm1, setCRM1] = React.useState("");
  const [srm2, setCRM2] = React.useState("");
  let errorMessage: string = "General";
  const addCRMInput = () => {
    if (!srm1) {
      setCRM1("1");
    }
    if (!srm2 && srm1) {
      setCRM2("1");
    }
  };
  const [counterparty, setCounterparty] = React.useState(
    !type ? 1 : type && type.length > 0 ? type[0].id : type.id
  );
  const [services, setServices] = React.useState(
    !service ? 1 : service && service.length > 0 ? service[0].id : service.id
  );
  useEffect(() => {
    if (error) {
      setChangeGeneralInformation(true);
      setTimeout(() => {
        recoveryAuthorDataState();
      }, 4000);
    }
    if (isChange) {
      setChangeGeneralInformation(false);
      recoveryAuthorDataState();
    }
  }, [error, isChange]);
  const formik = useFormik({
    initialValues: {
      org_type: orgType,
      CRM: srm,
      CounterpartyType: counterparty,
      ServiceType: services,
      INN: inn,
      KPP: kpp,
      OGPN: ogrn,
      NDA: nda,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      changeAuthorGeneralData(
        {
          org_type: orgType,
          contractor_type_id: counterparty,
          crms: [srm, srm1, srm2].filter((tiem) => tiem.length > 0),
          service_type_id: services,
          inn: values.INN,
          kpp: values.KPP,
          ogrn: values.OGPN,
          nda: values.NDA,
        },
        id,
        errorMessage
      );
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
          <span style={{ fontWeight: 500 }}>Общие сведения</span>
          <Button color="primary" type="submit" className={classes.saveButton}>
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          {errorMsg === "General" && (
            <div style={{ color: "red" }}>{error}</div>
          )}
          <div style={{ marginBottom: "2%", display: "flex" }}>
            <div>
              <span style={{ fontSize: 12, fontWeight: 500 }}>
                Физическое лицо
              </span>
              <Radio
                checked={orgType === "ФЛ"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOrgType(e.target.value)
                }
                value="ФЛ"
                color="default"
                name="org_type"
                size="medium"
                inputProps={{ "aria-label": "A" }}
              />
            </div>
            <div>
              <span style={{ fontSize: 12, fontWeight: 500 }}>
                Юридическое лицо
              </span>
              <Radio
                checked={orgType === "ЮЛ"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOrgType(e.target.value)
                }
                value="ЮЛ"
                color="default"
                name="org_type"
                size="medium"
                inputProps={{ "aria-label": "B" }}
              />
            </div>
          </div>
          <div className={classes.label}>
            <span>CRM</span>
            <div
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputFilterSelectedCrm
                name="CRM"
                style={{ width: "83%" }}
                placeholder={"Фамилия Имя"}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCRM(e.target.value)
                }
              />
              {srm && srm1 && srm2 ? (
                <span style={{ width: 25 }}></span>
              ) : (
                <AddIcon onClick={addCRMInput} />
              )}
            </div>
          </div>
          {srm1 && (
            <div className={classes.label}>
              <span></span>
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <InputFilterSelectedCrm
                  name="CRM1"
                  style={{ width: "83%" }}
                  placeholder={"Фамилия Имя"}
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCRM1(e.target.value)
                  }
                />
                <span onClick={() => setCRM1("")}>
                  <TrashIcon />
                </span>
              </div>
            </div>
          )}
          {srm2 && (
            <div className={classes.label}>
              <span></span>
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <InputFilterSelectedCrm
                  name="CRM2"
                  style={{ width: "83%" }}
                  placeholder={"Фамилия Имя"}
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCRM2(e.target.value)
                  }
                />
                <span onClick={() => setCRM2("")}>
                  <TrashIcon />
                </span>
              </div>
            </div>
          )}
          <div className={classes.label}>
            <span>Тип контрагента</span>
            <span style={{ width: "60%" }}>
              <InputFilterSelectedType
                name="CounterpartyType"
                value={counterparty}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCounterparty(e.target.value)
                }
              />
            </span>
          </div>
          <div className={classes.label}>
            <span>Тип услуг</span>
            <span style={{ width: "60%" }}>
              <InputFilterSelectedServicesType
                value={services}
                name="ServiceType"
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setServices(e.target.value)
                }
                // options={authors}
              />
            </span>
          </div>
          <div className={classes.label}>
            <span>ИНН</span>
            <TextField
              variant={"outlined"}
              name="INN"
              placeholder={"1234556789101112"}
              value={formik.values.INN}
              onChange={formik.handleChange}
              error={formik.touched.INN && Boolean(formik.errors.INN)}
              helperText={formik.touched.INN && formik.errors.INN}
            />
          </div>
          <div className={classes.label}>
            <span>КПП</span>
            <TextField
              variant={"outlined"}
              name="KPP"
              placeholder={"1234556789101112"}
              value={formik.values.KPP}
              onChange={formik.handleChange}
              error={formik.touched.KPP && Boolean(formik.errors.KPP)}
              helperText={formik.touched.KPP && formik.errors.KPP}
            />
          </div>
          <div className={classes.label}>
            <span>ОГРН</span>
            <TextField
              variant={"outlined"}
              name="OGPN"
              placeholder={"1234556789101112"}
              value={formik.values.OGPN}
              onChange={formik.handleChange}
              error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
              helperText={formik.touched.OGPN && formik.errors.OGPN}
            />
          </div>
          <div className={clsx(classes.label, classes.NDASection)}>
            <span>NDA</span>
            <span style={{ width: "63.2%" }}>
              <Checkbox
                defaultChecked
                color="default"
                icon={<CheckSquareChecked color="#5B6770" />}
                checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
            </span>
          </div>
        </Paper>
      </form>
    </div>
  );
};
