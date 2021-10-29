import { Button, Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect } from "react";
import { useActions } from "../../../redux/type_redux_hook/useAction";
import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import { PencilSimpleIcon } from "../../../IMG/SVG/PencilSimpleIcon";
import { ContractorBankDetailType } from "../Forms/BankAccountForm/CreatEditBankAccount";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      padding: "1%",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: "8px 16px",
      color: "#3B4750",
      borderRadius: 4,
      boxShadow: "none",
      width: 608,
      height: 191,
    },
    btn: {
      textTransform: "none",
      color: "#fff",
      fontSize: 14,
      paddingBottom: 4,
      backgroundColor: "#3AB994",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#36AD8B",
        boxShadow: "none",
      },
      "&:active": {
        backgroundColor: "#32A886",
      },
    },
    description: {
      fontSize: 16,
      width: "40.1%",
      flexWrap: "wrap",
      textTransform: "none",
    },
    textSmall: {
      fontWeight: 400,
    },
  })
);
type BankProps = {
  // change: boolean;
  setEdit: (val: boolean) => void;
  setContractorBankDetail?: (data: ContractorBankDetailType) => void;
};
export const BankDetails: React.FC<BankProps> = ({
  setEdit,
  setContractorBankDetail,
}) => {
  const { data, loading } = useTypedSelector(
    (state) => state.contractorBankDetails
  );

  const { AuthorData } = useTypedSelector((state) => state.author);
  const { id }: any = AuthorData;

  const fieldsMapper = [
    { id: 1, title: "БИК", field: "bik" },
    { id: 2, title: "Наименование банка", field: "name" },
    { id: 3, title: "Город", field: "city" },
    { id: 4, title: "К/с", field: "ks" },
    { id: 5, title: "Р/с", field: "rs" },
  ];

  const { fetchContractorBankDetails } = useActions();

  // useEffect(() => {
  //   fetchContractorBankDetails(id);
  // }, []);

  const classes = useStyles();
  const Details = (props: any) => {
    return (
      <div style={{ display: "flex", marginTop: "1%" }}>
        <Typography variant={"button"} className={classes.description}>
          {props.item}
        </Typography>
        <Typography
          variant={"button"}
          className={clsx(classes.description, classes.textSmall)}
        >
          {props.value}
        </Typography>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      {data.length && !loading
        ? data.map((details) => (
            <div style={{ width: 608, marginRight: 16 }}>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant={"subtitle2"}>
                    {Boolean(details.main)
                      ? "Основной банковский счет"
                      : "Дополнительный банковский счет"}
                  </Typography>
                  <div
                    onClick={() => {
                      setEdit(false);
                      setContractorBankDetail &&
                        setContractorBankDetail(details);
                    }}
                  >
                    <PencilSimpleIcon color="#3B4750" />
                  </div>
                </div>

                <Paper
                  className={classes.paper}
                  style={{
                    opacity: details.is_active ? 1 : 0.5,
                  }}
                >
                  {fieldsMapper.map(({ id, title, field }) => (
                    <Details
                      key={id}
                      item={title}
                      value={details[field as keyof typeof details]}
                    />
                  ))}
                </Paper>
              </div>
            </div>
          ))
        : null}
      <div style={{ width: "100%" }}>
        <Button
          onClick={() => setEdit(false)}
          variant="contained"
          color="primary"
          className={classes.btn}
          startIcon={<AddIcon />}
        >
          Добавить банковские реквизиты
        </Button>
      </div>
    </div>
  );
};
