import {makeStyles} from "@material-ui/core/styles";

export const useTableStyles = makeStyles({
    root: {
        width: "100%",
        color: "#3b475080",

        "& .ant-select": {
            height: "40px !important",
        },
        "& .ant-select-selection-item": {
            lineHeight: "36px !important",
        },
        "& .ant-select-selection-placeholder": {
            lineHeight: "36px !important",
            fontWeight: 400,
            fontSize: '16px',
        },
        "& .ant-picker": {
            height: "40px !important",
        },
    },
    table: {
        color: "#3B4750",
        fontSize: 15,
        borderRadius: "4px",
        overflow: "hidden",

        "& thead": {
            "& tr": {
                "& th": {
                    alignItems: "flex-start",
                    background: "#FFFFFF",
                    "&::before": { display: "none" },
                    minHeight: 104,
                },
            },
        },
        "& tbody": {
            "& tr": {
                cursor: "pointer",

                "&:nth-child(odd) ": {
                    background: " #F2F3F4",
                },

                "&:nth-child(even) ": {
                    background: " #FFFFFF",
                },
                "&:hover": {
                    boxShadow:
                        "0px 0px 12px rgba(51, 63, 79, 0.08), 0px 0px 2px rgba(51, 63, 79, 0.32)",
                },
                "&:active": {
                    boxShadow: "0px 0px 6px 0px #333F4F3D inset",
                },
            },
        },
    },
    titleText: {
        fontsize: "15px",
    },
    input: {
        marginTop: 16,
    },
    icon: {
        fontSize: "16px",
    },
    searchWraper: {
        position: "relative",

        "& .searchMode .ant-select-arrow": {
            display: "none",
        },
        "& .searchMode .ant-select-selection-search": {
            top: 4,
            left: 24,
        },
        "& .searchMode .ant-select-selection-item": {
            top: 0,
            left: 15,
        },
        "& svg": {
            position: "absolute",
            left: 8,
            top: 28,
            zIndex: 4,
        },
    },
});
