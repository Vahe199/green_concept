import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Select } from "antd";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      "& .ant-select": {
        height: "100%",
        fontSize:14,
        border: "1px solid #F1F2F3",
      },
      "& .ant-select-selector": {
        height: "100% !important",
        fontSize:14,
      },

      "& svg":{
        fill:"#2c2e30",
      }

            },
  })
);

export default function InputFilterSelect({
  value = "",
  handleChange,
  options = [],
  placeholder = "",
  className = "",
  loading = false,
  ...props
}: any): any {
  const classes = useStyles();

  return (
    <Select
      placeholder={placeholder}
      // allowClear
      className={classes.select + " " + className}
      value={value}
      onChange={handleChange}
      options={options}
      // loading={loading}
      style={{ width: "100%" }}
      {...props}
    />
  );
}
