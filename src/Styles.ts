import { makeStyles, tokens } from "@fluentui/react-components";

// Define App styles using makeStyles
const AppStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        // maxWidth: "40rem",
        margin: "0 auto",
    },
    spinner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "15rem",
    },
    errorContainer: {
        padding: "1rem", // 16px → 1rem
        margin: "1rem 0", // 16px → 1rem
        borderRadius: tokens.borderRadiusMedium,
        backgroundColor: tokens.colorPaletteRedBackground1,
        color: tokens.colorPaletteRedForeground2,
        display: "flex",
        flexDirection: "column",
    },
    table: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "0.5rem",
        overflow: "auto",
        fontSize: tokens.fontSizeBase300,
    },
    header: {
        display: "flex",
        backgroundColor: tokens.colorNeutralBackground1,
        padding: "0.5rem",
    },
    headerCell: {
        flexGrow: 1,
        flexShrink: 0,
        display: "inline-block",
        whiteSpace: "normal",
        overflowWrap: "break-word",
        fontWeight: tokens.fontWeightMedium,
    },
    rowFieldCell: {
        minWidth: "15rem",
        flexShrink: 0,
        flexGrow: 1,
        display: "inline-block",
        whiteSpace: "normal",
        overflowWrap: "break-word",
    },
});

export default AppStyles;
