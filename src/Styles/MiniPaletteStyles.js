 /* ---------- Styles ---------- */
const styles = {
    root: {
        height: 'auto',
       backgroundColor: "white",
       borderRadius: "5px",
       padding: "0.5rem",
       border: "none",
       position: "relative",

       boxShadow: "3px 7px 16px 3px rgba(0,0,0,0.2)",
       cursor: "pointer",
       "&:hover button": {
        opacity: "1"
       },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
       
    },
    colors: {
        backgroundColor: "grey",
        height: "120px",
        width: "auto",
        overflow: "hidden",
        borderRadius: "5px",
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"

    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"

    },
    miniColor: {
        height: "25%",
        width: "25%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-5px"
    },
    btnDelete: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "2rem !important",
        height: "2rem !important",
        position: "absolute",
        top: "0px",
        right: "0px",
        zIndex: "20",
        padding: "5px",
        cursor: 'pointer',
        opacity: "0",
        border: 'none',
        borderRadius: '0px 5px 0px 0px',
        outline: 'none',
        '& svg':{
            width: "1.2rem !important",
            height: "1.2rem !important",
        }
    },
    icon:{

    }
}

export default styles;