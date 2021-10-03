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

export default function InputFilterSelectedServicesType({
  handleChange,
  ...props
}: any): any {
  const classes = useStyles();
  const { assets, load } = useTypedSelector((state) => state.assets);
  let { types_and_services }: any = assets;
  return load ? (
    <Loader />
  ) : (
    <div className={classes.root}>
      <TextField
        style={{ width: "100%" }}
        id="outlined-select-currency-native"
        select
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
        InputProps={{
          endAdornment: (
            <div style={{ position: "absolute", right: 5, top: 6 }}>
              <CaretDown />
            </div>
          ),
        }}
        variant="outlined"
        {...props}
      >
        {types_and_services[0].services.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </TextField>
    </div>
  );
}
