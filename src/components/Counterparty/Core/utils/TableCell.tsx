import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export const StyledTableCell = withStyles((theme: Theme): any =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.white,
      "& .MuiTextField-root": {
        minWidth: "100%",
        height: "30px",
        color: "blue",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 7,
        textAlign: "start",
        height: "30px",
        backgroundColor: "transparent",
        fontSize: 13,
        opacity: 0.75,
      },
      "& .MuiSelect-iconOutlined": {
        right: 0,
      },
    },
  })
)(TableCell);
