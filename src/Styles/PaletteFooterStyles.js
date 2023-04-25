import media_query from './sizes'

const styles = {
    paletteFooter: {
        backgroundColor: "white",
        height: "7vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "800",
        '& h3': {
            fontSize: '1.5rem',
            [media_query.down('sm')]:{
                fontSize: '1.2rem'
              }
        }

    },
    emoji:{
        fontSize: "1.5rem",
        margin: "0 1rem",
        [media_query.down('sm')]:{
            fontSize: '1.2rem'
          }
    }

}
export default  styles;