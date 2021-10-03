import { InputAdornment } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { CaretDown } from "../../../../IMG/SVG/CaretDown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "70px",
      width: "100%",
    },
    "&.MuiOutlinedInput-adornedEnd": {
      poddingRight: 100,
    },
  })
);

export default function InputFilterSelected(props: any): any {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-select-currency-native"
        select
        InputProps={{
          endAdornment: (
            <div style={{ position: "absolute", right: 5, top: 6 }}>
              <CaretDown />
            </div>
          ),
        }}
        defaultValue={"all"}
        onChange={props.handleChange}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
      >
        {props.options?.map((option: any) => (
          <option key={option.author_id} value={option.author_fio}>
            {option.author_fio.substring(0, 9) + "..."}
          </option>
        ))}
      </TextField>
    </div>
  );
}
