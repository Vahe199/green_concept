import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableRow = withStyles((theme: Theme):any =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },

    }),
)(TableRow);
