import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth:'70px',
            width:'100%',

        },
    }),
);

export default function InputFilterSelected(props:any):any {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                id="outlined-select-currency-native"
                select
                defaultValue={'all'}
                onChange={props.handleChange}
                SelectProps={{
                    native: true,
                }}
                variant="outlined"
            >
                {props.currencies.map((option:any) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </TextField>
        </div>
    );
}
