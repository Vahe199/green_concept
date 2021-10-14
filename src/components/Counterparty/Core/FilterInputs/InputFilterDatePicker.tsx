import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import { DatePicker } from "antd";
import { MagnifyingGlass } from "../../../../IMG/SVG/MagnifyingGlass";
import {TimesheetIcon} from "../../../../IMG/SVG/TimesheetIcon";
import {TMC} from "../../../../IMG/SVG/TMCIcon";
import {TaskRequest} from "../../../../IMG/SVG/TaskRequestIcon";
import {CaretDoubleLeft} from "../../../../IMG/SVG/CaretDoubleLeft";
import {CaretDown} from "../../../../IMG/SVG/CaretDown";
import {CheckSquareChecked} from "../../../../IMG/SVG/CheckSquareChecked";
import {CheckSquareUnChecked} from "../../../../IMG/SVG/CheckSquareUnChecked";
import {SortingButtons} from "../../../../IMG/SVG/sortingButtonsIcon";
import {Calendar} from "../../../../IMG/SVG/calendar";
import moment from "moment"

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
  placeholder = "",
  className = "",
  ...props
}: any): any {
  const classes = useStyles();

  return (
    <DatePicker
      placeholder={placeholder}
      allowClear
      // defaultValue={moment('2015-01-01', 'YYYY-MM-DD')}
      className={classes.select + " " + className}
        value={value}
       onChange={handleChange}
      style={{ width: "100%" }}
      suffixIcon={<Calendar/>}
      {...props}
    />
  );
}
