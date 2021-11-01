import {makeStyles} from "@material-ui/core/styles";

export const useTableStyles =(loading: boolean) =>
    makeStyles({
        root: {
            width: "100%",
            color: "#3b475080",
            position: "relative",

            "& .ant-select": {
                height: "40px !important",
            },
            "& .ant-select-selection-item": {
                lineHeight: "36px !important",
            },
            "& .ant-select-selection-placeholder": {
                lineHeight: "36px !important",
                fontWeight: 400,
                fontSize: "16px",
            },
            "& .ant-picker": {
                height: "40px !important",
            },
        },
        titleWrapper: {
            padding: "16px 16px 0 16px",
            fontSize: 16,
             color: "#5B6770",

            "& span": {
                color: "#3B4750",
                fontWeight: 500,
            },

            "& .ant-divider.ant-divider-horizontal": {
                margin: "8px 0 6px 0",
                borderColor: "#ADB3B8",
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
                ...(loading ? { visibility: "hidden" } : {}),
                minHeight: 320,

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

                    "&.ant-table-row:hover > td": {
                        background: "transparent",
                    },
                },
            },
        },
        spinner: {
            position: "absolute",
            width: "100%",
            height: "300px",
            bottom: 0,
            top: "70%",
        },
        titleText: {
            fontsize: "15px",
        },
        input: {
            marginTop: 16,
        },
        input2: {
            marginTop: 16,
            width: 148,
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
