import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DatePicker } from "antd";
import { Calendar } from "../../../IMG/SVG/calendar";
import { useState } from "react";
import moment from "moment";

const useStyles = (value: string) =>
  makeStyles((theme: Theme) =>
    createStyles({
      
      select: {
          "& input" : {
              fontSize: 16,
          },
          "& input-placeholder" : {
              color: 'red',
          },
        "& .ant-select": {
          height: "50%",
          border: "1px solid #F1F2F3",
        },
        "& .ant-select-selector": {
          height: "100% !important",
        },

        
        "& .ant-picker-input:hover .ant-picker-suffix": {
          opacity: value ? 0 : 1,
            cursor: 'pointer',
        },

        
      },
        "& .ant-picker-suffix":{
            height:16,
        },

        "& .ant-picker-suffix:hover": {
             cursor: 'pointer',
        },
        iconCalendar: {
            fontSize:18,
            "&:hover": {
                backgroundColor: "#fff",
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
  const classes = useStyles(value || "")();

  const [openCalendar, setOpenCalendar] = useState(true);

  return (
    <DatePicker
      allowClear
      className={classes.select + " " + className}
      value={value === "" ? null : value}
      onChange={handleChange}
      onMouseOver={() => setOpenCalendar(true)}
      style={{ width: "100%" }}
      suffixIcon={<Calendar />}
      {...props}
    />
  );
}
