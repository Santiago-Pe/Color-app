import media_query from './sizes';
const styles =  {
  '@global': {
    'fade-exit':{
      opacity: '1'
    },
    'fade-exit-active':{
      opacity: '0',
      transition: 'opacity 300ms ease-out'
    }
  },
    root: {
       display: "flex",
       flexDirection: 'column',
       alignItems: "center",
       justifyContent: "center",
       padding: "1rem",

    },
    
    container: {
        margin: '0 auto',
        maxWidth: '1200px',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
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
        color: "white",
        fontSize: '2rem',
          /* ----------Mobile ---------- */
       [media_query.down('xs')]:{
        fontSize: '1.5rem'
      },
    },
    palette:{
      //   boxSizing: "border-box",
      //   width: "100%",
      //   display: "grid",
      //   gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      //   gridGap: '1.5rem',

      //  [media_query.down('sm')]:{
      //   gridTemplateColumns: "repeat(2, 50%)",
       
      // },

      //  [media_query.down('xs')]:{
      //   gridTemplateColumns: "repeat(1, 100%)",
      //   gridGap: '1rem',
       
      // },
      display: 'flex',
      flexWrap: 'wrap !important',
      marginTop: '20px',
      justifyContent: 'center'
    },
    link:{
        textDecoration: "none"
    }

}

export default styles