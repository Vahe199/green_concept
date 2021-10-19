import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {DatePicker} from "antd";
import {Calendar} from "../../../../IMG/SVG/calendar";
import img from "../../../../IMG/icons/close.png";
import {useState} from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      "& .ant-select": {
        height: "50%",
        border: "1px solid #F1F2F3",
      },
      "& .ant-select-selector": {
        height: "100% !important",
      },
    },
     iconCalendar: {
         //backgroundColor: 'green',
       //cursor: 'pointer',
       "&:hover": {
         backgroundColor: 'red',
       },
     },

  })
);

export default function InputFilterDatePicker({
  value = "",
  handleChange,
  className = "",
  ...props
}: any): any {
  const classes = useStyles();

  const [openCalendar, setOpenCalendar] = useState(true);

  return (
      <DatePicker
          allowClear
          className={classes.select + " " + className}
          value={value === "" ? null : value}
          onChange={handleChange}
          onMouseOver={() => setOpenCalendar(true)}
          style={{ width: "100%" }}
          //autoFocus={() => value && setOpenCalendar(false)}
          //onOpenChange={() => setOpenCalendar(!openCalendar)}
          suffixIcon={openCalendar && <span onClick={() => console.log('dc')} className={classes.iconCalendar}> <Calendar /> </span>}
          //onFocus={() => value && setOpenCalendar(false)}
          //onBlur={() => setOpenCalendar(true)}
          {...props}
      />

  );
}
