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
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      display: "flex",
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
        width: theme.spacing(9) + 1,
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
    },
    activeLink: {
      textDecoration: "none",
      color: "#3AB994",
      fontWeight: 700,
      fontSize: 13,
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
  })
);
export const SideBarPage: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("");

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
          <List>
            <Link
              to={"/notifications"}
              className={
                active === "Оповещения" ? classes.activeLink : classes.link
              }
            >
              <ListItem button onClick={() => setActive("Оповещения")}>
                <ListItemIcon>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                    invisible={false}
                  >
                    <NotificationIcon
                      color={active === "Оповещения" ? "#3AB994" : "#000"}
                    />
                  </Badge>
                </ListItemIcon>
                <span>Оповещения</span>
                <ListItemText></ListItemText>
              </ListItem>
            </Link>

            <Link
              to={"/projects"}
              className={
                active === "Проекты" ? classes.activeLink : classes.link
              }
            >
              <ListItem button onClick={() => setActive("Проекты")}>
                <ListItemIcon>
                  <ProjectsIcon
                    color={active === "Проекты" ? "#3AB994" : "#000"}
                  />
                </ListItemIcon>
                <span>Проекты </span>
              </ListItem>
            </Link>

            <Link
              to={"/Cash management"}
              className={
                active === "Управление денежными"
                  ? classes.activeLink
                  : classes.link
              }
            >
              <ListItem
                button
                onClick={() => setActive("Управление денежными")}
              >
                <ListItemIcon>
                  <MoneyTransfer
                    color={
                      active === "Управление денежными" ? "#3AB994" : "#000"
                    }
                  />
                </ListItemIcon>
                <span>
                  Управление денежными
                  <br /> средствами
                </span>
              </ListItem>
            </Link>

            <Link
              to={"/Tasks and requests"}
              className={
                active === "Задачи и заявки" ? classes.activeLink : classes.link
              }
            >
              <ListItem button onClick={() => setActive("Задачи и заявки")}>
                <ListItemIcon>
                  <TaskRequest
                    color={active === "Задачи и заявки" ? "#3AB994" : "#000"}
                  />
                </ListItemIcon>
                <span>Задачи и заявки</span>
              </ListItem>
            </Link>

            <Link
              to={"/Goods and materials"}
              className={active === "ТМЦ" ? classes.activeLink : classes.link}
            >
              <ListItem button onClick={() => setActive("ТМЦ")}>
                <ListItemIcon>
                  <TMC color={active === "ТМЦ" ? "#3AB994" : "#000"} />
                </ListItemIcon>
                <span>ТМЦ</span>
              </ListItem>
            </Link>
            <Link
              to={"/treaties"}
              className={
                active === "Договоры" ? classes.activeLink : classes.link
              }
            >
              <ListItem button onClick={() => setActive("Договоры")}>
                <ListItemIcon>
                  <Contracts
                    color={active === "Договоры" ? "#3AB994" : "#000"}
                  />
                </ListItemIcon>
                <span>Договоры</span>
              </ListItem>
            </Link>
            <Link
              to={"/Letters"}
              className={
                active === "Письма" ? classes.activeLink : classes.link
              }
            >
              <ListItem button onClick={() => setActive("Письма")}>
                <ListItemIcon>
                  <Letters color={active === "Письма" ? "#3AB994" : "#000"} />
                </ListItemIcon>
                <span>Письма</span>
              </ListItem>
            </Link>
            <Link
              to={"/counterparties"}
              className={
                active === "Контрагенты" ? classes.activeLink : classes.link
              }
            >
              <ListItem button onClick={() => setActive("Контрагенты")}>
                <ListItemIcon>
                  <ConterpartiesIcon
                    color={active === "Контрагенты" ? "#3AB994" : "#000"}
                  />
                </ListItemIcon>
                <span>Контрагенты</span>
              </ListItem>
            </Link>
            <Link
              to={"/employees"}
              className={
                active === "Сотрудники" ? classes.activeLink : classes.link
              }
            >
              <ListItem button onClick={() => setActive("Сотрудники")}>
                <ListItemIcon>
                  <EmployeesIcon
                    color={active === "Сотрудники" ? "#3AB994" : "#000"}
                  />
                </ListItemIcon>
                <span>Сотрудники</span>
              </ListItem>
            </Link>
            <Link
              to={"/Timesheet"}
              className={
                active === "Таймшит" ? classes.activeLink : classes.link
              }
            >
              <ListItem button onClick={() => setActive("Таймшит")}>
                <ListItemIcon>
                  <TimesheetIcon
                    color={active === "Таймшит" ? "#3AB994" : "#000"}
                  />
                </ListItemIcon>
                <span>Таймшит</span>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <div className={classes.toolbar}>
            <ListItem button onClick={() => setOpen(!open)}>
              {open ? (
                <ListItem style={{ justifyContent: "flex-end" }}>
                  <ChevronLeftIcon />
                  <span>Свернуть</span>
                </ListItem>
              ) : (
                <ListItem>
                  <ChevronRightIcon />
                </ListItem>
              )}
            </ListItem>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
