import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useEffect } from "react";
import { UseActions } from "../../../../redux/type_redux_hook/ useAction";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import Loader from "../../../Layout/Loader/Loader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "100px",
      width: "100%",
    },
  })
);

export default function InputFilterSelectedType(props: any): any {
  const classes = useStyles();
  const { assets, load } = useTypedSelector((state) => state.assets);
  let { types_and_services }: any = assets;
  return load ? (
    <Loader />
  ) : (
    <div className={classes.root}>
      {/* <TextField
        style={{ width: "100%" }}
        id="outlined-select-currency-native"
        select
        //value={props.value}
        onChange={props.handleChange}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
      >
        {types_and_services?.map((option: any) => (
          <option key={option.id} value={option.id ? option.id : "1"}>
            {option.name}
          </option>
        ))}
      </TextField> */}
    </div>
  );
}
