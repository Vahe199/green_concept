import { Checkbox, Paper, Radio } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";

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

export const InformationContactFacesData: React.FC<InfoProps> = ({
  setChangeBasicInformation,
}) => {
  const contact = useTypedSelector(state => state.contactPerson.PersonContact)
  const {} = contact
  const classes = useStyles();
  const [checked, setChecked] = React.useState("a");
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
          marginBottom: 10,
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
              name="main_contact_person"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
          </span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Фамилия:</span>
          <span style={{ width: "60%" }}>Анна</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Имя</span>
          <span style={{ width: "60%" }}>Владимировна</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Отчество</span>
          <span style={{ width: "60%" }}>Смирнова</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Пол</span>
          <div style={{ width: "60%", display: "flex" }}>
            <div>
              <span>Мужчина</span>
              <Radio
                checked={checked === "a"}
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
                checked={checked === "b"}
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
          <span style={{ width: "60%" }}>01.01.1990</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Роль</span>
          <span style={{ width: "60%" }}>Консультант</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Должность</span>
          <span style={{ width: "60%" }}>Руководитель проектов</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Тип контрагента</span>
          <span style={{ width: "60%" }}>Поставщик</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Тип услуг</span>
          <span style={{ width: "60%" }}>Поставщик</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Отрасль</span>
          <samp style={{ width: "60%" }}>Строительство/ Девелопмент</samp>
        </div>
        <div className={classes.label} style={{ alignItems: "self-start" }}>
          <span className={classes.spanTitle}>Телефон рабочий</span>
          <span style={{ width: "60%" }}>
            <div>+79991234567</div>
            <div>+79991234567</div>
            <div>+79991234567</div>
          </span>
        </div>
        <div className={classes.label} style={{ alignItems: "self-start" }}>
          <span className={classes.spanTitle}>Телефон мобильный</span>
          <span style={{ width: "60%" }}>
            <div>+79991234567</div>
            <div>+79991234567</div>
            <div>+79991234567</div>
          </span>
        </div>
        <div className={classes.label} style={{ alignItems: "self-start" }}>
          <span className={classes.spanTitle}>E-mail</span>
          <span style={{ width: "60%" }}>email@email.com</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Адрес доставки</span>

          <span style={{ width: "60%" }}>
            123456 г. Петропавловск-Камчатский, улица Николая-Прибоя, д. 1
            строение 2, подъезд 3, офис 456
          </span>
        </div>
      </Paper>
    </div>
  );
};
