import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ProjectsIcon } from "../../../IMG/SVG/ProjectsIcon";
import { NotificationIcon } from "../../../IMG/SVG/NotificationIcon";
import { MoneyTransfer } from "../../../IMG/SVG/MoneyTransferIcon";
import { TaskRequest } from "../../../IMG/SVG/TaskRequestIcon";
import { TMC } from "../../../IMG/SVG/TMCIcon";
import { Contracts } from "../../../IMG/SVG/ContractsIcon";
import { Letters } from "../../../IMG/SVG/LettersIcon";
import { ConterpartiesIcon } from "../../../IMG/SVG/ConterpartiesIcon";
import { EmployeesIcon } from "../../../IMG/SVG/EmployeesIcon";
import { TimesheetIcon } from "../../../IMG/SVG/TimesheetIcon";
const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      display: "flex",
      fontWeight: "normal",
      cursor: "pointer",
      fontSize: 16,
      "& .MuiListItem-button": {
        fontSize: 18,
        fontWeight: 700,
      },
      "& .MuiListItemIcon-root": {
        marginRight: 10,
        marginLeft: 12,
      },
      "& .MuiDrawer-paperAnchorDockedLeft": {
        border: 0,
      },
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      backgroundColor: "#EBECED",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: "hidden",
      overflowY: "hidden",
    },
    drawerClose: {
      backgroundColor: "#ebeced",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      overflowY: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: 96,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    icon: {
      width: 25,
    },
    link: {
      textDecoration: "none",
      color: "#3B4750",
      fontWeight: 700,
      fontSize: 13,
      "& .MuiListItem-gutters:hover": {
        color: "rgba(58, 185, 147, 1)",
      },
    },
    activeLink: {
      textDecoration: "none",
      color: "#3AB994",
      fontWeight: 700,
      fontSize: 13,
    },
    linkIco: {
      color: "#3B4750",
    },
    activeLinkIco: {
      color: "#3AB994",
    },
    div: {
      // backgroundColor:'#3AB994',
      backgroundColor: "transparent",
      width: "27px",
      height: "27px",
    },
    activeDiv: {
      backgroundColor: "#3abb967d",
      width: "27px",
      height: "27px",
    },
    iconsContainer: {
      marginTop: 62,
      marginLeft: 5,
    },
    switcherContainer: {
      display: "flex",
      alignItems: "center",
    },
    activeLinkHover: {
      background: "#e1e3e4",
      marginLeft: -3,
    },
  })
);
export const SideBarPage: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("");
  const [activeLinkIco, linkIco] = ["#3AB994", "#3B4750"];

  return (
    <div className={classes.sidebar}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.iconsContainer}>
          <Divider />
          <List style={{ background: "#EBECED" }}>
            <Link
              to={"/notifications"}
              className={
                active === "????????????????????" ? classes.activeLink : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("????????????????????")}
                className={
                  active === "????????????????????" ? classes.activeLinkHover : ""
                }
                title="????????????????????"
              >
                <ListItemIcon>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                    invisible={false}
                  >
                    <NotificationIcon
                      color={active === "????????????????????" ? activeLinkIco : linkIco}
                    />
                  </Badge>
                </ListItemIcon>
                <span >????????????????????</span>
                <ListItemText></ListItemText>
              </ListItem>
            </Link>

            <Link
              to={"/projects"}
              className={
                active === "??????????????" ? classes.activeLink : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("??????????????")}
                className={active === "??????????????" ? classes.activeLinkHover : ""}
                title="??????????????"
              >
                <ListItemIcon>
                  <ProjectsIcon
                    color={active === "??????????????" ? activeLinkIco : linkIco}
                  />
                </ListItemIcon>
                <span>?????????????? </span>
              </ListItem>
            </Link>

            <Link
              to={"/Cash management"}
              className={
                active === "???????????????????? ??????????????????"
                  ? classes.activeLink
                  : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("???????????????????? ??????????????????")}
                className={
                  active === "???????????????????? ??????????????????"
                    ? classes.activeLinkHover
                    : ""
                }
                title="???????????????????? ??????????????????"
              >
                <ListItemIcon>
                  <MoneyTransfer
                    color={
                      active === "???????????????????? ??????????????????"
                        ? activeLinkIco
                        : linkIco
                    }
                  />
                </ListItemIcon>
                <span>
                  ???????????????????? ??????????????????
                  <br /> ????????????????????
                </span>
              </ListItem>
            </Link>

            <Link
              to={"/Tasks and requests"}
              className={
                active === "???????????? ?? ????????????" ? classes.activeLink : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("???????????? ?? ????????????")}
                className={
                  active === "???????????? ?? ????????????" ? classes.activeLinkHover : ""
                }
                title="???????????? ?? ????????????"
              >
                <ListItemIcon>
                  <TaskRequest
                    color={
                      active === "???????????? ?? ????????????" ? activeLinkIco : linkIco
                    }
                  />
                </ListItemIcon>
                <span>???????????? ?? ????????????</span>
              </ListItem>
            </Link>

            <Link
              to={"/Goods and materials"}
              className={active === "??????" ? classes.activeLink : classes.link}
            >
              <ListItem
                button
                onClick={() => setActive("??????")}
                className={active === "??????" ? classes.activeLinkHover : ""}
                title="??????"
              >
                <ListItemIcon>
                  <TMC color={active === "??????" ? activeLinkIco : linkIco} />
                </ListItemIcon>
                <span>??????</span>
              </ListItem>
            </Link>
            <Link
              to={"/treaties"}
              className={
                active === "????????????????" ? classes.activeLink : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("????????????????")}
                className={active === "????????????????" ? classes.activeLinkHover : ""}
                title="????????????????"
              >
                <ListItemIcon>
                  <Contracts
                    color={active === "????????????????" ? activeLinkIco : linkIco}
                  />
                </ListItemIcon>
                <span>????????????????</span>
              </ListItem>
            </Link>
            <Link
              to={"/Letters"}
              className={
                active === "????????????" ? classes.activeLink : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("????????????")}
                className={active === "????????????" ? classes.activeLinkHover : ""}
                title="????????????"
              >
                <ListItemIcon>
                  <Letters
                    color={active === "????????????" ? activeLinkIco : linkIco}
                  />
                </ListItemIcon>
                <span>????????????</span>
              </ListItem>
            </Link>
            <Link
              to={"/counterparties"}
              className={
                active === "??????????????????????" ? classes.activeLink : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("??????????????????????")}
                className={
                  active === "??????????????????????" ? classes.activeLinkHover : ""
                }
                title="??????????????????????"
              >
                <ListItemIcon>
                  <ConterpartiesIcon
                    color={active === "??????????????????????" ? activeLinkIco : linkIco}
                  />
                </ListItemIcon>
                <span>??????????????????????</span>
              </ListItem>
            </Link>
            <Link
              to={"/employees"}
              className={
                active === "????????????????????" ? classes.activeLink : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("????????????????????")}
                className={
                  active === "????????????????????" ? classes.activeLinkHover : ""
                }
                title="????????????????????"
              >
                <ListItemIcon>
                  <EmployeesIcon
                    color={active === "????????????????????" ? activeLinkIco : linkIco}
                  />
                </ListItemIcon>
                <span>????????????????????</span>
              </ListItem>
            </Link>
            <Link
              to={"/Timesheet"}
              className={
                active === "??????????????" ? classes.activeLink : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("??????????????")}
                className={active === "??????????????" ? classes.activeLinkHover : ""}
                title={"??????????????"}
              >
                <ListItemIcon>
                  <TimesheetIcon
                    color={active === "??????????????" ? activeLinkIco : linkIco}
                  />
                </ListItemIcon>
                <span>??????????????</span>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <div className={classes.toolbar}>
            <div
              onClick={() => setOpen(!open)}
              style={{
                marginRight: "3%",
              }}
            >
              {open ? (
                <div className={classes.switcherContainer}>
                  <ChevronLeftIcon />
                  <span>????????????????</span>
                </div>
              ) : (
                <ChevronRightIcon />
              )}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
