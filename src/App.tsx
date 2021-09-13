import React, {PropsWithChildren} from "react";
import { HeaderPage } from "./components/Layout/Header/Header";
import { SideBarPage } from "./components/Layout/SideBar/SideBar";
import { Counterparty } from "./components/Counterparty/Counterparty";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Route } from "react-router-dom";
import {InformationUserData} from "./components/Counterparty/InformationUserData/InformationUserData";
import CreateCounterparty from "./components/Counterparty/CreateCounterparty";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
<<<<<<< HEAD
      backgroundColor: "#F2F3F4",
      height: "100%",
=======
      backgroundColor: "#E3DFDF",
        height:"100%"
>>>>>>> form_first_version
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
      margin: theme.spacing(0),
    },
  })
);
const App: React.FC = (props:PropsWithChildren<any>) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.appBar}>
          <HeaderPage />
        </div>
        <div className={classes.drawer}>
          <SideBarPage />
        </div>

        <main className={classes.content}>
          <Route  path="/counterparties" render={() => <Counterparty />} />
          <Route
            path="/counterparty/:item?"
            render={() => <CreateCounterparty />}
          />
          {/*  <Route*/}
          {/*  path="/counterparty/user/:id?"*/}
          {/*  render={() =><InformationUserData/>}*/}
          {/*/>*/}
        </main>
      </div>
    </React.Fragment>
  );
};

export default App;
