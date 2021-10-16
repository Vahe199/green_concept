import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {DatePicker} from "antd";
import {Calendar} from "../../../../IMG/SVG/calendar";

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

  return (
    <DatePicker

      // allowClear
      // defaultValue={moment('2015-01-01', 'YYYY-MM-DD')}
      className={classes.select + " " + className}
      value={value === "" ? null : value}
      onChange={handleChange}
      style={{ width: "100%" }}
      suffixIcon={<Calendar />}
      {...props}
    />
  );
}
