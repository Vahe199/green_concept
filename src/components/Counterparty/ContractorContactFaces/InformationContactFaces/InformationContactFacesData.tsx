import { Checkbox, Paper, Radio } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import { CheckSquareChecked } from "../../../../IMG/SVG/CheckSquareChecked";
import { CheckSquareUnChecked } from "../../../../IMG/SVG/CheckSquareUnChecked";
import {formatPhoneNumber} from "../../../Utils/numberMask";
import {InputAssetsOptions} from "../../../Utils/utils_options/InputAssetsOptions";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "4% 32px 4% 4%",

      // marginRight:32,
      "& .MuiIconButton-root.Mui-disabled": {
        color: "#5B6770 !important",
      },
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
  id: number;
  phone: string;
  phone_type: string;
  phoneable_id: any;
  phoneable_type: any;
};
type EmailProps = {
  email: string;
  emailable_id: any;
  emailable_type: any;
  id: number;
};
type PersonContactState = {
  firstname: string;
  surname: string;
  middlename: string;
  sex: string;
  birthdate: string;
  contractors: any[];
  branches: any[];
  emails: any[];
  phones: any[];
  delivery_address: string;
};

export const InformationContactFacesData: React.FC<InfoProps> = ({
  setChangeBasicInformation,
}) => {
  const contractor_contState={

      firstname: "",
        surname: "",
        middlename : "",
        sex :"",
        birthdate : " ",
        contractors :[],
        branches : [],
        emails : [],
        phones : [],
        delivery_address : "",
    service_type:{},
    contractor_type_id:""
}
  const { contractor_contacts } = useTypedSelector((state) => state.contactPerson);
const {firstname,surname, middlename, sex, birthdate,branches,emails,phones,delivery_address,contractors,service_type,contractor_type_id}:any = contractor_contacts ? contractor_contacts :   contractor_contState

  const classes = useStyles();

  const {assetsOptionsCounterpartyType} = InputAssetsOptions()

  const contractorType= assetsOptionsCounterpartyType.find((type:any) =>type.value == contractor_type_id)


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
        <span className={classes.spanTitle}>???????????????? ????????????????</span>
        <span onClick={() => setChangeBasicInformation(false)}>
          <PencilSimpleIcon color="#3B4750" />
        </span>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.label}>
          <span className={classes.spanTitle}>???????????????? ???????????????????? ????????</span>
          <span style={{ width: "61%" }}>
            <Checkbox
                disabled
                checked={true}
                inputProps={{ "aria-label": "disabled checked checkbox" }}
                icon={<CheckSquareUnChecked color="#ADB3B8" />}
                checkedIcon={<CheckSquareChecked color="#5B6770" />}
            />
          </span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>??????????????:</span>
          <span style={{ width: "60%" }}>{surname}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>??????</span>
          <span style={{ width: "60%" }}>{firstname}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>????????????????</span>
          <span style={{ width: "60%" }}>{middlename}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>??????</span>
          <div style={{ width: "60%", display: "flex" }}>
            <div>
              <span>??????????????</span>
              <Radio
                checked={sex === "??????"}
                disabled={true}
                value="??????"
                color="default"
                name="radio-button-demo"
                size="medium"
                inputProps={{ "aria-label": "A" }}
              />
            </div>
            <div>
              <span>??????????????</span>
              <Radio
                checked={sex === "??????"}
                disabled={true}
                value="??????"
                color="default"
                name="radio-button-demo"
                size="medium"
                inputProps={{ "aria-label": "B" }}
              />
            </div>
          </div>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>???????? ????????????????</span>
          <span style={{ width: "60%" }}>{birthdate}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>????????</span>
          <span style={{ width: "60%" }}>
            {contractors && contractors.length > 0 ? contractors[0]?.contact_role?.name: ""}
          </span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>??????????????????</span>
          <span style={{ width: "60%" }}>{contractors && contractors[0]?.position}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>?????? ??????????????????????</span>
          <span style={{ width: "60%" }}>
            { contractorType?.label}
          </span>
        </div>
        {contractor_type_id !== 1 && <div className={classes.label}>
          <span className={classes.spanTitle}>?????? ??????????</span>
          <span style={{width: "60%"}}>
            {service_type?.name}
          </span>
        </div>}
        <div className={classes.label}>
          <span className={classes.spanTitle}>??????????????</span>
          <span style={{ width: "60%" }}>{branches && branches.length > 0 ? branches[0]?.name: ""}</span>
        </div>
        <div className={classes.label} style={{ alignItems: "self-start" }}>
          <span className={classes.spanTitle}>?????????????? ??????????????</span>
          <span style={{ width: "60%" }}>
            {phones?.map((phone: PhoneProps) => {
              return (
                phone?.phone_type == "??????????????" && (
                  <div key={phone.id}>{`${formatPhoneNumber(phone?.phone)}`}</div>
                )
              );
            })}
          </span>
        </div>
        <div className={classes.label} style={{ alignItems: "self-start" }}>
          <span className={classes.spanTitle}>?????????????? ??????????????????</span>
          <span style={{ width: "60%" }}>
            {phones?.map((phone: PhoneProps) => {
              return (
                phone?.phone_type == "??????????????????" && (
                  <div key={phone.id}>{`${formatPhoneNumber(phone?.phone)}`}</div>
                )
              );
            })}
          </span>
        </div>
        <div className={classes.label} style={{ alignItems: "self-start" }}>
          <span className={classes.spanTitle}>E-mail</span>
          <span style={{ width: "60%" }}>
            {" "}
            {emails?.map((email: EmailProps) => (
              <div key={email.id}>{email.email}</div>
            ))}
          </span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>?????????? ????????????????</span>

          <span style={{ width: "60%" }}>{delivery_address}</span>
        </div>
      </Paper>
    </div>
  );
};
