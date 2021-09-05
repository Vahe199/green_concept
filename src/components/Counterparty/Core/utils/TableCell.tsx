import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export const StyledTableCell = withStyles((theme: Theme):any =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.white,
            '& .MuiTextField-root': {
                minWidth: '100%',
                height: '30px',
                backgroundColor: theme.palette.common.white,
            },
            '& .MuiOutlinedInput-input':{
                padding: 0,
                paddingLeft:4,
                textAlign:'start',
                height:'30px',
                backgroundColor:'transparent',
                fontSize:13
            },
            '& .MuiSelect-iconOutlined':{
                 right:0
            },
        },

    }),
)(TableCell);
