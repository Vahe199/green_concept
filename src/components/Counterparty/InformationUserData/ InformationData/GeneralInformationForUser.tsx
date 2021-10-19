import { Checkbox, Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";

import {CheckSquareUnChecked} from "../../../../IMG/SVG/CheckSquareUnChecked";
import {CheckSquareChecked} from "../../../../IMG/SVG/CheckSquareChecked";

import InputFilterSelectedType from "../../../Utils/FilterInputs/InputFilterSelect";
import {InputAssetsOptions} from "../../../Utils/utils_options/InputAssetsOptions";


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
      title2: {
        fontSize: 15,
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
    const { contractor }: any = AuthorData;
    const {assetsOptionsCongratulation} = InputAssetsOptions()
  const { crms, org_type, inn, kpp, ogrn, nda, contractor_type_id }: any = contractor;
    let contractorType= assetsOptionsCongratulation.filter((type:any) =>type.key == contractor_type_id).map((type:any) =>(
        <div key={type.id}>{type.label}</div>
    ))

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: 8,
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
              <div key={index} className={classes.title2}>
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
              <span className={classes.title}>{contractor_type_id ? contractorType :
                  "------------------"
              }</span>

          </Typography>
        </div>
          {<div className={classes.div}>
              <Typography
                  variant={"button"}
                  style={{width: "40%", flexWrap: "wrap"}}
                  className={classes.title}
              >
                  ИНН
              </Typography>
              <Typography variant={"body2"} className={classes.title2}>
                  {inn}
              </Typography>
          </div>}
          {org_type === "ЮЛ" && <div className={classes.div}>
              <Typography
                  variant={"button"}
                  style={{width: "40%", flexWrap: "wrap"}}
                  className={classes.title}
              >
                  КПП
              </Typography>
              <Typography variant={"body2"} className={classes.title2}>
                  {kpp}
              </Typography>
          </div>}
        <div className={classes.div}>
          <Typography
            variant={"button"}
            style={{ width: "40%", flexWrap: "wrap" }}
            className={classes.title}
          >
              <span>{org_type === "ФЛ" ? 'ОГРНИП' : 'ОГРН'}</span>
          </Typography>
          <Typography variant={"body2"} className={classes.title2}>
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
               icon={<CheckSquareUnChecked color="#ADB3B8" />}
               checkedIcon={<CheckSquareChecked color="#5B6770" />}
            />
          </span>
        </div>
      </Paper>
    </div>
  );
};
