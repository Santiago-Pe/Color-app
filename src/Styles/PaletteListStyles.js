export default {
    root: {
       backgroundColor: "blue",
       height: "100vh",
       display: "flex",
       alignItems: "flex-start",
       justifyContent: "center",
       paddingBottom: "2rem"

    },
    container: {
        width: "60%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        display: "flex",
        widht: "100%",
        justifyContent: "space-between"

    },
    title:{
        color: "white"
    },
    palette:{
        boxSizing: "border-box",
        widht: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    },
    link:{
        textDecoration: "none"
    }

}
