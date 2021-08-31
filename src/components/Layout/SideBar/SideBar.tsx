import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Avatar, Badge} from "@material-ui/core";
import {Link } from "react-router-dom";
import Bell from "../../../IMG/icons/BellSimple.png"
import Case from "../../../IMG/icons/Briefcase.png"
import MoneyTra from "../../../IMG/icons/money_transfer.png"
import CheckSquare from "../../../IMG/icons/CheckSquareOffset.png"
import TMC from "../../../IMG/icons/DesktopTower.png"
import Clip from "../../../IMG/icons/ClipboardText.png"
import Envelope from "../../../IMG/icons/Envelope.png"
import Counterparty from "../../../IMG/icons/IdentificationCard.png"
import Users from "../../../IMG/icons/Users.png"
import Clock from "../../../IMG/icons/ClockClockwise.png"
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
            overflowX: 'hidden',
            overflowY: 'hidden',
        },
        drawerClose: {
            backgroundColor:'#ebeced',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            overflowY: 'hidden',
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
        },
        link:{
            textDecoration:'none',
            color:'#3B4750',
            fontWeight:700,
            fontSize:13
        },
        activeLink:{
            textDecoration:'none',
            color:'#3AB994',
            fontWeight:700,
            fontSize:13
        },
        div:{
            // backgroundColor:'#3AB994',
             backgroundColor:'#bdbdbd42',
            width: '27px',
            height: '27px'
        } ,
        activeDiv:{
            backgroundColor:'#3abb967d',
            width: '27px',
            height: '27px'
        }
    }),
);
export const SideBarPage:React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [active, setActive] = React.useState('');

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

                    <Link to={'/Оповещения'} className={active === 'Оповещения'?classes.activeLink:classes.link}>
                        <ListItem button onClick={()=>setActive('Оповещения')}>
                            <ListItemIcon>
                                <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot"
                                       invisible={false}>
                                    <Avatar variant="rounded" className={active === 'Оповещения'?classes.activeDiv:classes.div}>
                                    <img src={Bell} className={classes.icon}/>
                                    </Avatar>
                                </Badge>
                            </ListItemIcon>
                            <span>Оповещения</span>
                            <ListItemText>
                            </ListItemText>
                        </ListItem>
                    </Link>


                    <Link to={'/Проекты'} className={active === 'Проекты'?classes.activeLink:classes.link}>
                    <ListItem button onClick={()=>setActive('Проекты')} >
                        <ListItemIcon>
                            <Avatar  variant="rounded" className={active === 'Проекты'?classes.activeDiv:classes.div}>
                                <img src={Case} className={classes.icon}/>
                            </Avatar>
                        </ListItemIcon>
                        <span>Проекты</span>
                    </ListItem>
                    </Link>

                    <Link to={'/Управление денежными средствами'} className={active === 'Управление денежными'?classes.activeLink:classes.link}>
                    <ListItem button onClick={()=>setActive('Управление денежными')} >
                        <ListItemIcon>
                            <Avatar variant="rounded" className={active === 'Управление денежными'?classes.activeDiv:classes.div}>
                            <img src={MoneyTra} className={classes.icon}/>
                            </Avatar>
                        </ListItemIcon>
                            <span>Управление денежными<br/> средствами</span>
                    </ListItem>
                    </Link>

                    <Link to={'/Задачи и заявки'} className={active === 'Задачи и заявки'?classes.activeLink:classes.link}>
                    <ListItem button onClick={()=>setActive('Задачи и заявки')}>
                        <ListItemIcon>
                            <Avatar variant="rounded" className={active === 'Задачи и заявки'?classes.activeDiv:classes.div}>
                            <img src={CheckSquare} className={classes.icon}/>
                            </Avatar>
                        </ListItemIcon>
                        <span>Задачи и заявки</span>
                    </ListItem>
                    </Link>

                    <Link to={'/ТМЦ'} className={active === 'ТМЦ'?classes.activeLink:classes.link}>
                    <ListItem button onClick={()=>setActive('ТМЦ')} >
                        <ListItemIcon>
                            <Avatar variant="rounded" className={active === 'ТМЦ'?classes.activeDiv:classes.div}>
                            <img src={TMC} className={classes.icon}/>
                            </Avatar>
                        </ListItemIcon>
                        <span>ТМЦ</span>
                    </ListItem>
                    </Link>
                    <Link to={'/Договоры'} className={active === 'Договоры'?classes.activeLink:classes.link}>
                    <ListItem button onClick={()=>setActive('Договоры')}>
                        <ListItemIcon>
                            <Avatar variant="rounded" className={active === 'Договоры'?classes.activeDiv:classes.div}>
                            <img src={Clip} className={classes.icon}/>
                            </Avatar>
                        </ListItemIcon>
                        <span>Договоры</span>
                    </ListItem>
                    </Link>
                    <Link to={'/Письма'} className={active === 'Письма'?classes.activeLink:classes.link}>
                    <ListItem button onClick={()=>setActive('Письма')}>
                        <ListItemIcon>
                            <Avatar variant="rounded" className={active === 'Письма'?classes.activeDiv:classes.div}>
                            <img src={Envelope} className={classes.icon}/>
                            </Avatar>
                        </ListItemIcon>
                        <span>Письма</span>
                    </ListItem>
                    </Link>
                    <Link to={'/Контрагенты'} className={active === 'Контрагенты'?classes.activeLink:classes.link}>
                    <ListItem button onClick={()=>setActive('Контрагенты')}>
                        <ListItemIcon>
                            <Avatar variant="rounded" className={active === 'Контрагенты'?classes.activeDiv:classes.div}>
                            <img src={Counterparty} className={classes.icon}/>
                            </Avatar>
                        </ListItemIcon>
                        <span>Контрагенты</span>
                    </ListItem>
                    </Link>
                    <Link to={'/Сотрудники'} className={active === 'Сотрудники'?classes.activeLink:classes.link}>
                    <ListItem button onClick={()=>setActive('Сотрудники')} >
                        <ListItemIcon>
                            <Avatar variant="rounded" className={active === 'Сотрудники'?classes.activeDiv:classes.div}>
                            <img src={Users} className={classes.icon}/>
                            </Avatar>
                        </ListItemIcon>
                        <span>Сотрудники</span>
                    </ListItem>
                    </Link>
                    <Link to={'/Таймшит'} className={active === 'Таймшит'?classes.activeLink:classes.link}>
                    <ListItem button onClick={()=>setActive('Таймшит')}>
                        <ListItemIcon>
                            <Avatar variant="rounded" className={active === 'Таймшит'?classes.activeDiv:classes.div}>
                            <img src={Clock} className={classes.icon}/>
                            </Avatar>
                        </ListItemIcon>
                        <span>Таймшит</span>
                    </ListItem>
                    </Link>
                </List>
                <Divider />
                <div className={classes.toolbar} >
                    <ListItem  button onClick={()=> setOpen(!open)}>
                    {open ? <ListItem style={{ justifyContent: 'flex-end',}} >
                         <ChevronLeftIcon />
                        <span>Свернуть</span>
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
