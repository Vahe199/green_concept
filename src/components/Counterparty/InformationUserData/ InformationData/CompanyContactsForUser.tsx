import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import pencil from "../../../../IMG/icons/pencil.png";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";

const useStyles = makeStyles((theme: Theme) =>
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
    },
    div: {
      display: "flex",
      marginBottom: 10,
    },
    description: {
      width: "47%",
      flexWrap: "wrap",
      textTransform: "none",
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
  const {
    legal_registration_address,
    actual_address,
    post_address,
    emails,
    phones,
  }: any = AuthorData;
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
        <Typography variant={"subtitle2"}>Контакты компании</Typography>
        <div onClick={() => setChangeContacts(true)}>
          <img src={pencil} alt="Pencil" style={{ width: 15, height: 15 }} />
        </div>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            className={classes.description}
          >
            Юридический адрес
          </Typography>
          <Typography variant={"body2"}>
            {legal_registration_address}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            className={classes.description}
          >
            Фактический адрес
          </Typography>
          <Typography variant={"body2"}>{actual_address}</Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            className={classes.description}
          >
            Почтовый адрес
          </Typography>
          <Typography variant={"body2"}>{post_address}</Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            className={classes.description}
          >
            Сайт компании
          </Typography>
          <Typography variant={"body2"}>www.сайткомпании.ru</Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            className={classes.description}
          >
            Телефон
          </Typography>
          <Typography variant={"body2"}>
            {phones.map((phone: any) => (
              <div key={phone.id}>{phone.phone}</div>
            ))}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            className={classes.description}
          >
            E-mail
          </Typography>
          <Typography variant={"body2"}>
            {emails.map((mail: any) => (
              <div key={mail.id}>{mail.email}</div>
            ))}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            variant={"button"}
            style={{ width: "47%", flexWrap: "wrap" }}
          ></Typography>
          <Link
            href="#"
            onClick={() => console.log("Посмотреть карту")}
            color="inherit"
          >
            Посмотреть карту
          </Link>
        </div>
      </Paper>
    </div>
  );
};
