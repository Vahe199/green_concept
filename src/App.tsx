// import React from 'react';
// import {HeaderPage} from "./components/Header/Header";
// import {SideBarPage} from "./components/SideBar/SideBar";
// import {Counterparty} from "./components/Counterparty/Counterparty";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
// import {Container, Grid} from "@material-ui/core";
//
// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//             padding: theme.spacing(0),
//             backgroundColor: '#E3DFDF',
//             height: '100%',
//             width: '100%'
//         },
//         paper: {
//             padding: theme.spacing(2),
//             textAlign: 'center',
//             color: theme.palette.text.secondary,
//         },
//     }),
// );
// const App: React.FC = () => {
//     const classes = useStyles();
//     return (
//         <React.Fragment>
//             <CssBaseline/>
//             <Container maxWidth='xl' className={classes.root}>
//                 <HeaderPage/>
//                 <Grid container>
//                     <Grid item xs={1}>
//                         <SideBarPage/>
//                     </Grid>
//                     <Grid item xs={11}>
//                         <Counterparty/>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </React.Fragment>
//     );
// }
import React from 'react';
import {HeaderPage} from "./components/Header/Header";
import {SideBarPage} from "./components/SideBar/SideBar";
import {Counterparty} from "./components/Counterparty/Counterparty";
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Container, Grid} from "@material-ui/core";
import clsx from "clsx";
const drawerWidth = 240;
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
        },
    }),
);
const App: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth='xl' className={classes.root}>
                <CssBaseline/>
                <div className={classes.appBar}>
                    <HeaderPage/>
                </div>

                <div className={classes.drawer}>
                    <SideBarPage/>
                </div>
                <main className={classes.content}>
                    <Counterparty/>
                </main>
            </Container>
        </React.Fragment>
    );
}

export default App;
