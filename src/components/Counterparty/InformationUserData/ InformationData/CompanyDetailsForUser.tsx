import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
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
      boxShadow: "none",
    },
    div: {
      display: "flex",
      marginBottom: 10,
    },
    description: {
      width: "50%",
      flexWrap: "wrap",
      textTransform: "none",
      fontSize: 16,
    },
    val: {
      fontSize: 16,
      fontWeight: 500,
    },
  })
);
type Props = {
  // change: boolean;
  setChangeCompanyDetails: (val: boolean) => void;
};
export const CompanyDetailsForUser: React.FC<Props> = ({
  setChangeCompanyDetails,
}) => {
  const { AuthorData } = useTypedSelector((state) => state.author);
  const { contractor }: any = AuthorData;
  const { full_name, short_name, group, branches }: any = contractor;

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
        <Typography variant={"subtitle2"} className={classes.val}>
          Сведения о компании
        </Typography>
        <div onClick={() => setChangeCompanyDetails(true)}>
          <PencilSimpleIcon color="#3B4750" />
        </div>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            Полное наименование компании
          </Typography>
          <Typography variant={"body2"} className={classes.val}>
            {full_name}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            Краткое наименование компании
          </Typography>
          <Typography variant={"body2"} className={classes.val}>
            {short_name}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            Группа компаний (при наличии)
          </Typography>
          <Typography variant={"body2"} className={classes.val}>
            {group ? group.full_name : "-----------------------"}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography variant={"button"} className={classes.description}>
            Отрасль
          </Typography>
          <Typography variant={"body2"}>
            {branches.length > 0
              ? branches.map((branch: any) => (
                  <div key={branch.id} className={classes.val}>
                    {branch.name}
                  </div>
                ))
              : ""}
          </Typography>
        </div>
      </Paper>
    </div>
  );
};
