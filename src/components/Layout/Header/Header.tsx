import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Logo from "../../../IMG/SVG/Logo";
import profilePic from "../../../IMG/profilePic.png";
import { SettingsIcon } from "../../../IMG/SVG/SettingsIcon";
import { SignOutIcon } from "../../../IMG/SVG/SignOutIcon";
import { AppBar, Avatar, Toolbar, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      display: "flex",
      // zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#F2F3F4",
      boxShadow: "none",
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
      color: "#3B4750",
      display: "inline",
      marginRight: 12,
      fontSize: 16,
    },
    right: {
      width: 25,
    },
    settings: {
      width: 25,
      height: 25,
      marginLeft: 32,
      marginTop: -7,
      cursor: "pointer",
    },
    signOut: {
      width: 25,
      height: 25,
      marginLeft: 37,
      marginRight: 34,
      marginTop: -7,
      cursor: "pointer",
    },
  })
);
export const HeaderPage = () => {
  const [activeLinkIco, linkIco] = ["#3B4750", "#5B6770"];
  const [hover, setHover] = React.useState("");
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {/* <img alt="Logo GREEN" src={logo} className={classes.avatarLogo} /> */}
        <Link href="/">
          <Logo style={{ width: 146, height: 32 }} />
        </Link>
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
          <div
            className={classes.settings}
            onMouseOver={() => setHover("Settings")}
            onMouseOut={() => setHover("")}
          >
            <SettingsIcon
              color={hover === "Settings" ? activeLinkIco : linkIco}
            />
          </div>
          <div
            className={classes.signOut}
            onMouseOver={() => setHover("SignOut")}
            onMouseOut={() => setHover("")}
          >
            <SignOutIcon
              color={hover === "SignOut" ? activeLinkIco : linkIco}
            />
          </div>
        </section>
      </Toolbar>
    </AppBar>
  );
};
