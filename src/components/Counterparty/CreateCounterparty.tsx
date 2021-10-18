import {Link, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, {useEffect, useState} from "react";
import {useHistory, withRouter} from "react-router-dom";
import {CaretDoubleLeft} from "../../IMG/SVG/CaretDoubleLeft";
import {useTypedSelector} from "../../redux/type_redux_hook/useTypedSelector";
import CreatingBankDetails from "./BankDetails/CreatingBankDetails";
import {ContractorContactFacesData} from "./ContractorContactFaces/ContractorContactFacesData";
import {InformationUserData} from "./InformationUserData/InformationUserData";
import CreatEditBankAccount, {
  ContractorBankDetailType,
  initialBankDetails,
} from "./Forms/BankAccountForm/CreatEditBankAccount";
import {BankDetails} from "./TabsForCreating/BankDetails";
import {ContactPersonsForCreating} from "./TabsForCreating/ContactPersonsForCreating";
import {GeneralInformationForCreating} from "./TabsForCreating/GeneralInformationForCreating";
import {useActions} from "../../redux/type_redux_hook/useAction";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: any;
//   value: any;
// }

const useStyles = makeStyles((theme) => ({
  menuRoot: {
    flexGrow: 1,
    backgroundColor: "#000",
    opacity: "0",
    color: "#000",
  },
  tabs: {
    backgroundColor: "#000",
    opacity: "0",
    color: "#000",
    textColor: "#000",
  },
  container: {
    height: "100vh",
    width: "100%",
    paddingTop: 67,
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  root: {
    flexGrow: 1,
    width: "100%",
    height: 125,
    margin: "-3px 0 0 0",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "2%",
    boxShadow: "none",
  },
  typography: {
    color: "#3B4750",
    fontSize: 23,
    marginTop: -14,
    marginBottom: 7,
  },
  bottomField: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#F2F3F4",
    // height:"100vh",
    // minHeight:'100%',
    alignItems: "center",
    justifyContent: "center",
  },
  TabsStyle: {
    height: 1,
  },
  tabStyle: {
    textTransform: "none",
    height: 14,
    color: "#5B6770",
    fontSize: 18,
    fontWeight: 500,
  },
  rootTabStyle: {
    padding: 0,
    minWidth: 0,
    marginRight: 32,
  },
}));

const CreateCounterparty = (props: any) => {
  const { AuthorData } = useTypedSelector((state) => state.author);
  let { id }: any = AuthorData;
  const {getContactPersonsDataWithId} = useActions()
  useEffect(()=>{
    getContactPersonsDataWithId(110)
  },[])
  let history = useHistory();
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [edit, setEdit] = useState(true);
  const [contractorBankDetail, setContractorBankDetail] =
    useState<ContractorBankDetailType>(initialBankDetails);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={classes.container}>
      <Paper square className={classes.root}>
        <Typography variant="subtitle1" noWrap className={classes.typography}>
          {props.match.params.item === "author"
            ? `ООО «Контрагент №${id}»`
            : "Новый контрагент"}
        </Typography>

        <div style={{ display: "flex" }}>
          <Tabs
            TabIndicatorProps={{
              style: { background: "#3AB994", height: 3 },
            }}
            value={selectedTab}
            onChange={handleChange}
            aria-label="Новый контрагент"
          >
            <Tab
              label={
                <Typography variant="subtitle1" className={classes.tabStyle}>
                  Общие сведения
                </Typography>
              }
              className={classes.rootTabStyle}
            />
            <Tab
              label={
                <Typography
                  variant="subtitle1"
                  style={{ paddingLeft: 5 }}
                  className={classes.tabStyle}
                >
                  Контактные лица
                </Typography>
              }
              className={classes.rootTabStyle}
            />
            <Tab
              label={
                <Typography variant="subtitle1" className={classes.tabStyle}>
                  Банковские реквизиты
                </Typography>
              }
              className={classes.rootTabStyle}
            />
            <Tab
              label={
                <Typography variant="subtitle1" className={classes.tabStyle}>
                  Договоры
                </Typography>
              }
              className={classes.rootTabStyle}
            />
            <Tab
              label={
                <Typography variant="subtitle1" className={classes.tabStyle}>
                  Официальная переписка
                </Typography>
              }
              className={classes.rootTabStyle}
            />
          </Tabs>
        </div>
        <Divider style={{ width: "102%" }} />
      </Paper>
      <div style={{ display: "flex", marginLeft: "2%", marginTop: "1%" }}>
        <div style={{ marginRight: ".5%" }}>
          <CaretDoubleLeft color="#3B4750" alt="double left icon" />
        </div>
        <Link color="inherit" onClick={() => history.push("/counterparties")}>
          <div style={{ fontSize: 14, cursor: "pointer" }}>
            Вернуться назад к списку
          </div>
        </Link>
      </div>

      <div className={classes.bottomField}>
        {props.match.params.item === "author" ? (
          <div>
            {selectedTab === 0 && <InformationUserData />}
            {selectedTab === 1 && <ContractorContactFacesData />}
            {selectedTab === 2 && <CreatingBankDetails />}
          </div>
        ) : props.match.params.item === "new contractor" ? (
          <div>
            {selectedTab === 0 && <GeneralInformationForCreating />}
            {selectedTab === 1 && <ContactPersonsForCreating />}
            {selectedTab === 2 && (
              <div>
                {edit ? (
                  <BankDetails
                    setEdit={setEdit}
                    setContractorBankDetail={setContractorBankDetail}
                  />
                ) : (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ width: "50%" }}>
                      <CreatEditBankAccount
                        setEdit={setEdit}
                        contractorBankDetail={contractorBankDetail}
                        setContractorBankDetail={setContractorBankDetail}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>{props.match.params.item}</div>
        )}
      </div>
    </div>
  );
};
export default withRouter(CreateCounterparty);
