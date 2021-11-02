import React from "react";
import { makeStyles, createStyles} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
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
    description: {
      width: "47%",
      flexWrap: "wrap",
      textTransform: "none",
      fontSize: 16,
    },
    title: {
      fontSize: 15,
    },
  })
);
type Props = {
  // change: boolean;
  setChangeContacts: (val: boolean) => void;
};
export const CompanyContactsForUser: React.FC<Props> = ({
  setChangeContacts,
}) => {
  const classes = useStyles();
  const { AuthorData } = useTypedSelector((state) => state.author);
  const { contractor }: any = AuthorData;
  const { org_type,  legal_registration_address,
    actual_address,
    post_address,
    sites=[],
    emails=[],
    phones=[], }: any = contractor;

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
          Контакты компании
        </Typography>
        <div onClick={() => setChangeContacts(true)}>
          <PencilSimpleIcon color="#3B4750" />
        </div>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            {org_type === "ЮЛ" ? "Юридический адрес" : "Адрес регистрации"}
          </Typography>
          <Typography variant={"body2"} className={classes.title}>
            {legal_registration_address}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            Фактический адрес
          </Typography>
          <Typography variant={"body2"} className={classes.title}>
            {actual_address}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            Почтовый адрес
          </Typography>
          <Typography variant={"body2"} className={classes.title}>
            {post_address}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            {org_type === "ЮЛ" ? "Сайт компании" : "Сайт"}
          </Typography>
          <Typography variant={"body2"} className={classes.title}>
            {sites.length > 0 ?
              sites?.map((site: any) => (
                <div key={site.id} className={classes.title}>{site.url}</div>
            )):""}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            Телефон
          </Typography>
          <Typography variant={"body2"}>
            {phones.length > 0 ?
              phones?.map((phone: any) => (
              <div key={phone.id} className={classes.title}>{phone.phone}</div>
            )):""}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            E-mail
          </Typography>
          <Typography variant={"body2"}>
            {emails.length > 0 ?
              emails?.map((mail: any) => (
              <div key={mail.id} className={classes.title}>{mail.email}</div>
            )):""}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            style={{ width: "47%", flexWrap: "wrap" }}
          ></Typography>

        </div>
      </Paper>
    </div>
  );
};
