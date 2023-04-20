export default {
    root: {
       backgroundColor: "blue",
       height: "100vh",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       padding: "2rem",
       //width: "100%"

    },
    container: {
        maxWidth: "1080px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100%",
        margin: "0 auto"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        "& a":{
            color: "white",
            textDecoration: "none"
        }

    },
    title:{
        color: "white"
    },
    palette:{
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "10px",
        row: "10px"
    },
    link:{
        textDecoration: "none"
    }

}
