import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import Loader from "../../../Layout/Loader/Loader";
import { CaretDown } from "../../../../IMG/SVG/CaretDown";

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
  let { types_and_services = [] }: any = assets;
  return (
    <div className={classes.root}>
      {props.value === "ShowText" &&
        types_and_services.map((option: any) =>
          option.id === parseInt(props.id) ? option.name : ""
        )}
      {props.value !== "ShowText" && (
        <TextField
          style={{ width: "100%" }}
          id="outlined-select-currency-native"
          select
          //value={props.value}
          onChange={props.handleChange}
          SelectProps={{
            native: true,
          }}
          InputProps={{
            endAdornment: (
              <div style={{ position: "absolute", right: 5, top: 9 }}>
                {load ? <Loader size={15} /> : <CaretDown />}
              </div>
            ),
          }}
          variant="outlined"
        >
          {types_and_services?.map((option: any) => (
            <option key={option.id} value={option.id ? option.id : "1"}>
              {option.name}
            </option>
          ))}
        </TextField>
      )}
    </div>
  );
}
