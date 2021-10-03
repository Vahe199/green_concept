import { Checkbox, Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import InputFilterSelectedType from "../../Core/FilterInputs/InputFilterSelectedType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: "7%",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      padding: "1%",
    },
    paper: {
      width: "100%",
      color: "#3B4750",
      padding: 16,
      borderRadius: 4,
      boxShadow: "none",
    },
    div: {
      display: "flex",
      marginBottom: 10,
    },
    title: {
      fontSize: 16,
    },
  })
);

type Props = {
  // change: boolean;
  setChangeGeneralInformation: (val: boolean) => void;
};
export const GeneralInformationForUser: React.FC<Props> = ({
  setChangeGeneralInformation,
}) => {
  const { AuthorData } = useTypedSelector((state) => state.author);
  const { crms, org_type, inn, kpp, ogrn, nda, contractor_type_id }: any =
    AuthorData;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Typography variant={"subtitle2"} className={classes.title}>
          Общие сведения
        </Typography>
        <div onClick={() => setChangeGeneralInformation(true)}>
          <PencilSimpleIcon color="#3B4750" />
        </div>
      </div>
      <Paper className={classes.paper}>
        <Typography
          variant={"subtitle2"}
          style={{ marginBottom: 16 }}
          className={classes.title}
        >
          {org_type === "ФЛ" ? "Физическое лицо" : "Юридическое лицо"}
        </Typography>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            style={{ width: "40%" }}
            className={classes.title}
          >
            CRM
          </Typography>
          <Typography variant={"body2"}>
            {crms?.map((crm: any, index: number) => (
              <div key={index} className={classes.title}>
                {crm.surname + " " + crm.firstname}
              </div>
            ))}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            style={{
              width: "40%",
              marginTop: -1,
              flexWrap: "wrap",
              textTransform: "none",
            }}
            className={classes.title}
          >
            Тип контрагента
          </Typography>
          <Typography
            variant={"body2"}
            style={{ marginTop: 2 }}
            className={classes.title}
          >
            {contractor_type_id ? (
              <InputFilterSelectedType
                value="ShowText"
                id={contractor_type_id}
              />
            ) : (
              "------------------"
            )}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            style={{ width: "40%", flexWrap: "wrap" }}
            className={classes.title}
          >
            ИНН
          </Typography>
          <Typography variant={"body2"} className={classes.title}>
            {inn}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            style={{ width: "40%", flexWrap: "wrap" }}
            className={classes.title}
          >
            КПП
          </Typography>
          <Typography variant={"body2"} className={classes.title}>
            {kpp}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            style={{ width: "40%", flexWrap: "wrap" }}
            className={classes.title}
          >
            ОГРН
          </Typography>
          <Typography variant={"body2"} className={classes.title}>
            {ogrn}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            style={{ width: "40%", flexWrap: "wrap" }}
            className={classes.title}
          >
            NDA
          </Typography>
          <span style={{ margin: "-10px 0 0 -12px" }}>
            <Checkbox
              disabled
              checked={nda}
              inputProps={{ "aria-label": "disabled checked checkbox" }}
            />
          </span>
        </div>
      </Paper>
    </div>
  );
};
