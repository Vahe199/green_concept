import { Checkbox, Paper, Radio } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {CheckSquareChecked} from "../../../../IMG/SVG/CheckSquareChecked";
import {CheckSquareUnChecked} from "../../../../IMG/SVG/CheckSquareUnChecked";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "4%",
      "& .MuiIconButton-root.Mui-disabled":{
        color:"#5B6770 !important"
      }
    },
    paper: {
      padding: 16, //10
      color: "#3B4750",
      boxShadow: "none",
    },
    spanTitle: {
      fontSize: 16,
      fontWeight: 500,
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 16,
    },
  })
);
type InfoProps = {
  // change: boolean;
  setChangeBasicInformation: (val: boolean) => void;
};
type PhoneProps = {
  id:number
  phone: string
  phone_type: string
  phoneable_id: any
  phoneable_type:any
};
type EmailProps = {
  email:string
  emailable_id:any
  emailable_type: any
  id: number
};
type PersonContactState = {
  firstname:string,
  surname:string,
  middlename:string,
  sex:string,
  birthdate:string,
  contractors:any[],
  branches:any[],
  emails:any[],
  phones:any[],
  delivery_address:string}

export const InformationContactFacesData: React.FC<InfoProps> = ({
  setChangeBasicInformation,
}) => {

  const {PersonContact} = useTypedSelector(state => state.contactPerson)


    const {
    firstname = "",
      surname = "",
      middlename = "",
      sex = "",
      birthdate = " ",
      contractors = [],
      branches = [],
      emails = [],
      phones =[],
      delivery_address = ""}:any = PersonContact

  const classes = useStyles();
  const [checked, setChecked] = React.useState(sex);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <span className={classes.spanTitle}>Основные сведения</span>
        <span onClick={() => setChangeBasicInformation(false)}>
          <PencilSimpleIcon color="#3B4750" />
        </span>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Основное контактное лицо</span>
          <span style={{ width: "61%" }}>
            <Checkbox
                disabled={true}
                checked={contractors[0].main ? true : false}
              name="main_contact_person"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
                // icon={<CheckSquareChecked color="#5B6770" />}
                // checkedIcon={
                //   <CheckSquareUnChecked color="#5B6770" />
                // }
                icon={<CheckSquareUnChecked color="#ADB3B8" />}
                checkedIcon={<CheckSquareChecked color="#5B6770" />}

            />
          </span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Фамилия:</span>
          <span style={{ width: "60%" }}>{surname}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Имя</span>
          <span style={{ width: "60%" }}>{firstname}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Отчество</span>
          <span style={{ width: "60%" }}>{middlename}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Пол</span>
          <div style={{ width: "60%", display: "flex" }}>
            <div>
              <span>Мужчина</span>
              <Radio
                checked={checked === "Муж"}
                disabled={true}
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
                checked={checked === "Жен"}
                onChange={handleChange}
                disabled={true}
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
          <span className={classes.spanTitle}>Дата рождения</span>
          <span style={{ width: "60%" }}>{birthdate}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Роль</span>
          <span style={{ width: "60%" }}>{contractors[0]?.contact_role?.name}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Должность</span>
          <span style={{ width: "60%" }}>{contractors[0]?.position}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Тип контрагента</span>
          <span style={{ width: "60%" }}>{contractors[0]?.contractor?.full_name}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Тип услуг</span>
          <span style={{ width: "60%" }}>{contractors[0]?.contractor?.short_name}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Отрасль</span>
          <samp style={{ width: "60%" }}>{branches[0].name}</samp>
        </div>
        <div className={classes.label} style={{ alignItems: "self-start" }}>
          <span className={classes.spanTitle}>Телефон рабочий</span>
          <span style={{ width: "60%" }}>
            {phones?.map((phone:PhoneProps) => {
              return(phone?.phone_type == "Рабочий" && <div key={phone.id}>{phone?.phone}</div>)
            })}
          </span>
        </div>
        <div className={classes.label} style={{ alignItems: "self-start" }}>
          <span className={classes.spanTitle}>Телефон мобильный</span>
          <span style={{ width: "60%" }}>
            {phones?.map((phone:PhoneProps) => {
              return(phone?.phone_type == "Мобильный" && <div key={phone.id}>{phone.phone}</div>)
            })}
          </span>
        </div>
        <div className={classes.label} style={{ alignItems: "self-start" }}>
          <span className={classes.spanTitle}>E-mail</span>
          <span style={{ width: "60%" }}> {emails?.map((email:EmailProps) =>
          ( <div key={email.id}>{email.email}</div>)
          )}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Адрес доставки</span>

          <span style={{ width: "60%" }}>
          {delivery_address}
          </span>
        </div>
      </Paper>
    </div>
  );
};
