import React from 'react';
import {HeaderPage} from "./components/Layout/Header/Header";
import {SideBarPage} from "./components/Layout/SideBar/SideBar";
import {Counterparty} from "./components/Counterparty/Counterparty";
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Route} from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            backgroundColor: '#E3DFDF',
        },
        appBar: {
             zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(0),
            margin:theme.spacing(0),
        },
    }),
);
const App: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <CssBaseline/>
                <div className={classes.appBar}>
                    <HeaderPage/>
                </div>
                <div className={classes.drawer}>
                    <SideBarPage/>
                </div>

                <main className={classes.content}>

                    <Route path="/Контрагенты" render={()=> <Counterparty/>}/>
                </main>
            </div>
        </React.Fragment>
    );
}

export default App;
