import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import logo from "../../../IMG/Green_Logo.png";
import gear from "../../../IMG/icons/Gear.png";
import signOut from "../../../IMG/icons/SignOut.png";
import profilePic from "../../../IMG/profilePic.png";
import {AppBar, Avatar, Toolbar, Link, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            display: "flex",
            // zIndex: theme.zIndex.drawer + 1,
            backgroundColor: "#F2F3F4",
        },
        typography: {
            color: "#56626b",
        },
        avatarLogo: {
            width: theme.spacing(10),
            height: theme.spacing(4),
        },
        rightToolbar: {
            display: "flex",
            marginLeft: "auto",
            marginRight: -12,
            alignItems: "center",
        },
        avatar: {
            marginright: 1,
            width: 40,
            height: 40,
        },
        avatarTitle: {
            color: "#000",
            display: "inline",
            marginRight: 12,
            fontSize: 15,
        },
        right: {
            width: 25,
        },
        settings: {
            width: 25,
            height: 25,
            marginLeft: 35,
        },
        signOut: {
            width: 25,
            height: 25,
            marginLeft: 40,
        },
    })
);
export const HeaderPage = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <img alt="Logo GREEN" src={logo} className={classes.avatarLogo}/>
                <Typography variant="h6" noWrap className={classes.typography}>
                    GREEN
                </Typography>
                <section className={classes.rightToolbar}>
                    <Typography
                        variant="h5"
                        color="inherit"
                        className={classes.avatarTitle}
                    >
                        Инна Карпова
                    </Typography>
                    <Link href="#">
                        <Avatar
                            alt="Remy Sharp"
                            src={profilePic}
                            className={classes.avatar}
                        />
                    </Link>
                    <Link href="#">
                        <img alt="Settings" src={gear} className={classes.settings}/>
                    </Link>
                    <Link href="#">
                        <img alt="Sign Out" src={signOut} className={classes.signOut}/>
                    </Link>
                </section>
            </Toolbar>
        </AppBar>
    );
};
