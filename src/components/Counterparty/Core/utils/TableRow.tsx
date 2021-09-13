import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableRow = withStyles((theme: Theme): any =>
  createStyles({
    hover: {
      "&:hover": {
        WebkitBoxShadow: "0px 0px 6px 0px #333F4F3D inset !important",
        BoxShadow: "0px 0px 6px 0px #333F4F3D inset !important",
      },
    },
    root: {
      WebkitBoxShadow:
        "0px 0px 2px 0px #333F4F52; box-shadow: 0px 0px 12px 0px #333F4F14",
      BoxShadow:
        "0px 0px 2px 0px #333F4F52; box-shadow: 0px 0px 12px 0px #333F4F14",
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);
