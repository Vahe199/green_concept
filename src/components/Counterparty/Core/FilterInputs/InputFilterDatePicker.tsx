import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import { DatePicker } from "antd";
import { MagnifyingGlass } from "../../../../IMG/SVG/MagnifyingGlass";

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
      className={classes.select + " " + className}
      value={value}
      onChange={handleChange}
      style={{ width: "100%" }}
      suffixIcon={<MagnifyingGlass />}
      {...props}
    />
  );
}
