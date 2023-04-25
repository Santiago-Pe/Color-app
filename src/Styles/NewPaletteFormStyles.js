import { DRAWER_WIDTH} from "../Helpers/constants";
import media_query from './sizes'
/* ----------  Width of SideNav ---------- */
const drawerWidth = DRAWER_WIDTH;
/* ----------  Styles ---------- */
const styles = (theme) => ({
  root: {
    display: "flex",
    width: '100%',
    backgroundColor: 'white',
    height: '100%'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
   
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title:{
    fontSize: '2rem',
    /* ---------- Mobile ---------- */
    [media_query.down('xs')]:{
      fontSize: '1.5rem'
    }

  },
  buttons:{
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0"
    

  },
  button:{
    width: "48%",
    fontSize: '13px'
  }
});


export default styles;