import media_query from './sizes'
const styles = {
    root:{
      width: "100%",
    },
    picker:{
      width: "100% !important",
      margintTop: "2rem"
  
    },
    inputColor: {
      width: "100%",
      marginTop: "2rem",
      "& input": {
        padding: "10px 10px"
      }
    },
    addColor:{
      width: "100%",
      padding: "1rem",
      marginTop: "0.5rem",
      fontSize: "1.2rem",
       /* ---------- Mobile ---------- */
       [media_query.down('sm')]:{
        fontSize: "1rem",
        padding: "0.5rem",
      }
    },
  }

  export default styles;