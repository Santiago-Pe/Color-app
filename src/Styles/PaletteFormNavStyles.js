import { DRAWER_WIDTH } from "../Helpers/constants";
import media_query from './sizes'
/* ----------  Width of SideNav ---------- */
const drawerWidth = DRAWER_WIDTH;
/* ----------  Styles ---------- */
const styles =  (theme) => ({
  root:{
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title :{
    fontSize: '1.5rem',
    /* ---------- Mobile ---------- */
    [media_query.down('sm')]:{
      display:  'none'
    }
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    /* ---------- Mobile ---------- */
    [media_query.down('sm')]:{
      margin: '0',
      padding: '0.5rem'


    }
  },
  hide: {
    display: "none",
  },
  navBtns:{
    display: "flex",
    flexDirection: "row",
    marginRight: "1rem",
    width: '100%',
    justifyContent: 'end',
     /* ---------- Mobile ---------- */
     [media_query.down('sm')]:{
      margin: "0.5rem",
      
    }
    
  },
  button:{
    margin: "0 0.5rem",
    /* ---------- Mobile ---------- */
    [media_query.down('sm')]:{
      fontSize: '0.8rem',
      margin: "0 0.2rem",
      padding: '0.3rem'
    }
  }
})

export default styles;