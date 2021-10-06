import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import { CaretDown } from "../../../../IMG/SVG/CaretDown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "100px",
      width: "60%",
    },
  })
);

export function InputFilterSelectedDirection({
  handleChange,
  ...props
}: any): any {
  const classes = useStyles();
  const { assets, load } = useTypedSelector((state) => state.assets);
  let { directions }: any = assets;
  return load ? (
    <span></span>
  ) : (
    <div className={classes.root}>
      <TextField
        style={{ width: "100%" }}
        id="outlined-select-currency-native"
        select
        InputProps={{
          endAdornment: (
            <div style={{ position: "absolute", right: 5, top: 6 }}>
              <CaretDown />
            </div>
          ),
        }}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
        {...props}
      >
        {directions.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </TextField>
    </div>
  );
}
export function InputFilterSelectedCongratulationsType({
  handleChange,
  ...props
}: any): any {
  const classes = useStyles();
  const { assets, load } = useTypedSelector((state) => state.assets);
  let { congratulation_types }: any = assets;
  return load ? (
    <span></span>
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
        {congratulation_types.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </TextField>
    </div>
  );
}
