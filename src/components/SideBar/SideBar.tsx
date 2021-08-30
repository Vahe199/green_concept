import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Badge} from "@material-ui/core";
import Bell from "../../IMG/icons/BellSimple.png"
import Case from "../../IMG/icons/Briefcase.png"
import MoneyTra from "../../IMG/icons/money_transfer.png"
import CheckSquare from "../../IMG/icons/CheckSquareOffset.png"
import TMC from "../../IMG/icons/DesktopTower.png"
import Clip from "../../IMG/icons/ClipboardText.png"
import Envelope from "../../IMG/icons/Envelope.png"
import Counterparty from "../../IMG/icons/IdentificationCard.png"
import Users from "../../IMG/icons/Users.png"
import Clock from "../../IMG/icons/ClockClockwise.png"
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sidebar: {
             display: 'flex',

        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
             backgroundColor:'#EBECED',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            backgroundColor:'#ebeced',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems:'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        icon:{
            width:25,
        }
    }),
);
export const SideBarPage:React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return(
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
                <div style={{marginTop:63}}>

                <Divider />
                <List>
                        <ListItem button >
                        <ListItemIcon>
                            <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot"  invisible={false} >
                                <img src={Bell} className={classes.icon}/>
                            </Badge>
                        </ListItemIcon>
                            <ListItemText primary={'Оповещения'} />
                        </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                                <img src={Case} className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'Проекты'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <img src={MoneyTra} className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText   >
                            <span style={{ fontSize: "14px" }}>Управление денежными<br/> средствами</span>
                        </ListItemText>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <img src={CheckSquare} className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'Задачи и заявки'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <img src={TMC} className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'ТМЦ'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <img src={Clip} className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'Договоры'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <img src={Envelope} className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'Письма'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <img src={Counterparty} className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'Контрагенты'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <img src={Users} className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'Сотрудники'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <img src={Clock} className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'Таймшит'} />
                    </ListItem>
                </List>
                <Divider />
                <div className={classes.toolbar} >
                    <ListItem  button onClick={()=> setOpen(!open)}>
                    {open ? <ListItem >
                         <ChevronLeftIcon />
                        <ListItemText primary={'Свернуть'} />
                    </ListItem>: <ListItem>
                            <ChevronRightIcon />
                        </ListItem>}
                    </ListItem>
                </div>
                </div>
            </Drawer>
        </div>
    )
}
