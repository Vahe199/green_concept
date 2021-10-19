import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = (inputClassName: string) =>
  makeStyles((theme: Theme) =>
    createStyles({
      errorWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        position: "relative",

        // [`& .${inputClassName}`]: {
        //   borderColor: "#f44336 !important",
        //   // boxShadow: "0 0 0 2px rgb(185 58 58 / 20%) !important",
        // },
        [`& [class^="${inputClassName}"] `]: {
          borderColor: "#f44336 !important",
          // boxShadow: "0 0 0 2px rgb(185 58 58 / 20%) !important",
        },

        "& .errorText": {
          color: "#f44336 !important",
          fontSize: 9,
          fontWeight: 400,
          marginTop: 0,
          position: "absolute",
          bottom: -12,
        },
      },
    })
  );

export default function ValidationErrorWrapper({
  inputClassName,
  error,
  helperText,
  children,
}: any): any {
  const classes = useStyles(error ? inputClassName : "")();

  return (
    <div className={classes.errorWrapper}>
      {children}
      <span className="errorText">{helperText}</span>
    </div>
  );
}
