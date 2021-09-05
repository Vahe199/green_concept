import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {Link, Typography} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
// import {Link} from "react-router-dom"
import { GeneralInformation } from "./TabsForCreating/GeneralInformation";
import { ContactPerson } from "./TabsForCreating/ContactPerson";
import DoubleLeft from "../../IMG/icons/DoubleLeft.png";
import {useHistory} from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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
    margin: 0,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "2%",
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
    backgroundColor: "#E3DFDF",
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
  },
  rootTabStyle: {
    padding: 0,
    minWidth: 0,
    marginRight: 32,
  },
}));

export const CreateCounterparty = () => {
  let history = useHistory();
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
    console.log(event.target)
  };

  return (
    <div className={classes.container}>
      <Paper square className={classes.root}>
        <Typography variant="subtitle1" noWrap className={classes.typography}>
          Новый контрагент
        </Typography>
        <div style={{ display: "flex" }}>
          <Tabs
            TabIndicatorProps={{
              style: { background: "#3AB994" },
            }}
            value={selectedTab}
            onChange={handleChange}
            aria-label="Новый контрагент"
          >
            <Tab
              label={
                <Typography variant="subtitle1" className={classes.tabStyle}>
                  Общие Сведения
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
                  Официальная Переписка
                </Typography>
              }
              className={classes.rootTabStyle}
            />
          </Tabs>
        </div>
      </Paper>
      <div style={{marginLeft:'2%',marginTop:'1%'}}>
      <Link color="inherit" onClick={()=>history.push('/counterparties')}>
        <img src={DoubleLeft} style={{width:16,height:16,marginBottom:-2}} alt='double left icon'/>
       <span style={{fontSize:16}}> Вернуться назад к списку</span>
      </Link>
      </div>

      <div className={classes.bottomField}>
        {selectedTab === 0 && <GeneralInformation />}
        {selectedTab === 1 && <ContactPerson />}
      </div>
    </div>
  );
};
