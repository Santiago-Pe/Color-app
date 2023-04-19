export default {
    navbar:{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "10vh",
        backgroundColor: "white"
    },
    logo:{
        marginRight: "15px",
        padding:  "0 13px",
        fontSize:" 22px",
        backgroundColor:" #eceff1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        "& span":{
            texDecoration: "none",
            color:  "black",
        },
        "& .material-icons":{
            marginLeft: "5px"
        }
    },
    slider:{
        width: "340px",
        margin: " 0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent",
        },
        "& .rc-slider-rail": {
            height: "8px",
        },
        "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus":{
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green!important",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
        }
    },
    selectContainer:{
        marginLeft: "auto",
        marginRight: "1rem",
        "& .material-icons": {
            cursor: "pointer"
        }
    }


}