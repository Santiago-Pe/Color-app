import media_query from './sizes'
const styles =  {
    root: {
       backgroundColor: "blue",
       height: "100vh",
       display: "flex",
       alignItems: "flex-start",
       justifyContent: "center",
       padding: "2rem",
       //width: "100%",
       /* ---------- Extra Small ---------- */
      [media_query.down('sm')]:{
        height: "100%",
      
      },

    },
    
    container: {
        width: '52%',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'column',
        /* ---------- Extra Large ---------- */
       [media_query.down('xl')]:{
        width: "80%",
       
      },
      /* ---------- Extra Small ---------- */
      [media_query.down('xs')]:{
        width: "80%",
       
      },
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
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: '1.5rem',
        /* ----------Large Mobile ---------- */
       [media_query.down('sm')]:{
        gridTemplateColumns: "repeat(2, 50%)",
       
      },
        /* ----------Mobile ---------- */
       [media_query.down('xs')]:{
        gridTemplateColumns: "repeat(1, 100%)",
        gridGap: '1rem',
       
      },
    },
    link:{
        textDecoration: "none"
    }

}

export default styles