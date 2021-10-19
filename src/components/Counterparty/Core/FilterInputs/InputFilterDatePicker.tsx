import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {DatePicker} from "antd";
import {Calendar} from "../../../../IMG/SVG/calendar";
import img from "../../../../IMG/icons/close.png";
import {useState} from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      "& .ant-select": {
        height: "100%",
        border: "1px solid #F1F2F3",
      },
      "& .ant-select-selector": {
        height: "100% !important",
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
      allowClear={true}
      className={classes.select + " " + className}
      value={value === "" ? null : value}
      onChange={handleChange}
      style={{ width: "100%" }}
      //onOpenChange={() => setOpenCalendar(!openCalendar)}
      suffixIcon={<Calendar />}
      //   suffixIcon={openCalendar ? <Calendar /> : <img src={img} style={{width: 15, height: 15}} />}
      {...props}
    />
  );
}
