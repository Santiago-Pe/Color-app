import chroma from "chroma-js";
import media_query from './sizes'
/* ---------- Styles ---------- */
 const styles = {
    colorBox: {
      width: "20%",
      height: (props) => (props.showFullPalettte ? "25%" : "50%"),
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      marginBottom: " -5px",
      "&:hover button": {
        opacity: "1",
        transition: "all 0.5s ease-in",
      },
      /* ---------- Large ---------- */
      [media_query.down('lg')]:{
        width: "25%",
        height: (props) => (props.showFullPalettte ? "20%" : "33.333%"),
      },
       /* ---------- Tablet ---------- */
       [media_query.down('md')]:{
        width: "50%",
        height: (props) => (props.showFullPalettte ? "10%" : "20%"),
       
      },
      /* ---------- Mobile ---------- */
      [media_query.down('xs')]:{
        width: "100%",
        height: (props) => (props.showFullPalettte ? "5%" : "10%"),
      }
    },
    text: {
      color: (props) =>
        (chroma(props.background).luminance() <= 0.5 ? "#fff" : "#000")
    },
    seeMore: {
      background: "rgb(255, 255, 255, 0.3)",
      position: "absolute",
      border: "none",
      right: "0",
      bottom: "0",
      width: "60px",
      height: "30px",
      textAlign: "center",
      lineHeight: "30px",
      textTransform: "uppercase",
      fontSize: '1rem',
      /* ---------- Tablete ---------- */
      [media_query.down('xs')]:{
        height: "100%",
      },
      
    },
    copyOverlay: {
      opacity: "0",
      zIndex: "0",
      width: "100%",
      height: "100%",
      transition: "transform 0.7s",
      transform: "scale(0.1)",
    },
    showOverlay: {
      opacity: "1",
      transform: "scale(50)",
      zIndex: "10",
      position: "absolute",

    },
    copyMessage: {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "4rem",
      transform: "scale(0.1)",
      opacity: "0",
      zIndex: "0",
      transition: "all 0.3s ease-in-out",
      "& h1": {
        fontWeight: "400",
        textShadow: "1px 2px black",
        background: "rgb(255, 255, 255, 0.3)",
        width: "100%",
        marginBottom: "0",
        padding: "1rem",
        textTransform: "uppercase",
        textAlign: "center",
        /* ---------- Tablete ---------- */
        [media_query.down('md')]:{
          fontSize: '5rem'
        },
        /* ---------- Mobile ---------- */
        [media_query.down('xs')]:{
          fontSize: '4rem'
        }
      },
      "& p": {
        fontSize: "2rem",
        fontWeight: "100",
      },
    },
    showMessage: {
      opacity: "1",
      transform: "scale(1)",
      transitionDelay: " 0.3s",
      zIndex: "20",
    },
    boxContent: {
      position: "absolute",
      width: "100%",
      left: "0px",
      bottom: "0px",
      padding: "10px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
    },
    coppyButton: {
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "2",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgb(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      opacity: "0",
    },
  };
  
  export default styles