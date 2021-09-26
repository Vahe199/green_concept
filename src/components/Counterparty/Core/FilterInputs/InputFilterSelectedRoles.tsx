import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import Loader from "../../../Layout/Loader/Loader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "100px",
      width: "60%",
    },
  })
);

export default function InputFilterSelectedRoles(props: any): any {
  const classes = useStyles();
  const { assets, load } = useTypedSelector((state) => state.assets);
  let { contact_roles }: any = assets;
  return load ? (
    <Loader />
  ) : (
    <div className={classes.root}>
      <TextField
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
        {contact_roles?.map((option: any) => (
          <option key={option.id} value={option.id ? option.id : "1"}>
            {option.name}
          </option>
        ))}
      </TextField>
    </div>
  );
}
