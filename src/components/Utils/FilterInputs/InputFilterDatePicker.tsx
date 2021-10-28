import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DatePicker } from "antd";
import { Calendar } from "../../../IMG/SVG/calendar";
import { useState } from "react";

const useStyles = (value: string) =>
  makeStyles((theme: Theme) =>
    createStyles({
      
      select: {
        "& .ant-select": {
          height: "50%",
          border: "1px solid #F1F2F3",
        },
        "& .ant-select-selector": {
          height: "100% !important",
        },
        
        "& .ant-picker-input:hover .ant-picker-suffix": {
          opacity: value ? 0 : 1,
        },
        
      },
        "& .ant-picker-suffix":{
            height:16
        },
        iconCalendar: {
            fontSize:18,
            "&:hover": {
                backgroundColor: "#fff",
            },
        },
        yearPiker:{
            width:52,
            height:30,
            marginRight:24,
            paddingRight:0,
            paddingLeft:4,
            "& input": {
                fontSize: "16px !important",
                textAlign:"center"
            }
        },

  })
);

export default function InputFilterDatePicker({
  value = "",
  handleChange,
  className = "",
  ...props
}: any): any {
  const classes = useStyles(value || "")();

  const [openCalendar, setOpenCalendar] = useState(true);

  return (
    <DatePicker
      allowClear
      className={classes.select + " " + className + " " + className.yearPiker}
      value={value === "" ? null : value}
      onChange={handleChange}
      onMouseOver={() => setOpenCalendar(true)}
      style={{ width: "100%" }}
      suffixIcon={openCalendar && <Calendar />}
      {...props}
    />
  );
}
