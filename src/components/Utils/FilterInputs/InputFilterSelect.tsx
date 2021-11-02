import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Select } from "antd";
import React, {useState} from "react";
import arrowImg from "../../../IMG/icons/arrow.png"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      "& .ant-select": {
        height: "100%",
        fontSize: 16,
        fontWeight: 400,
        border: "1px solid #F1F2F3",
      },

      "& .ant-select-selector": {
        height: "100% !important",
        fontSize: 16,
        fontWeight: 400,
      },

      "& .ant-select-selection-placeholder": {
        fontSize: 16,
        fontWeight: 400,
      },

      "& svg": {
        fill: "#2c2e30",
      },
    },
  })
);

export default function InputFilterSelect({
  value = "",
  handleChange,
  options = [],
  className = "searchMode",
  loading = false,
  ...props
}: any): any {
  const classes = useStyles();
  //It's for change position arrow in select type
  const [arrow, setArrow] = useState<any>(false);
  return (
    <Select
      className={classes.select + " " + className}
      value={value === "" ? null : value}
      onChange={handleChange}
      options={options}
      style={{ width: "100%" }}
      suffixIcon={<img src={arrowImg}  style={arrow ? {transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}} />}
      onDropdownVisibleChange={() => setArrow(!arrow)}
      {...props}
    />
  );
}
