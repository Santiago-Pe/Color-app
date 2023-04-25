import media_query from './sizes'
 /* ---------- Stlyles ---------- */
const styles = {
    palette: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
    paletteColor:{
      height: "86vh",
    },
    goBack:{
      width: "20%",
      height: "50%",
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      marginBottom:" -5px" ,
      backgroundColor: "black",
      "& a": {
        width: "100px",
      height: "30px",
      position: "absolute",
      display:  "2",
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
      color: "white"
      },
      /* ---------- large ---------- */
      [media_query.down('lg')]:{
        width: '25%',
        height: '33.333%'
      },
      /* ---------- Tablet ---------- */
      [media_query.down('md')]:{
        width: '50%',
        height: '20%'
      },
      /* ---------- Mobile ---------- */
      [media_query.down('xs')]:{
        width: '100%',
        height: '10%'
      }
    },
}
  
  export default styles;