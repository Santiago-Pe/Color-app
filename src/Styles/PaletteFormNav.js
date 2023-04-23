import { DRAWER_WIDTH } from "../Helpers/constants";
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
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  navBtns:{
    display: "flex",
    flexDirection: "row",
    marginRight: "1rem"
  },
  button:{
    margin: "0 0.5rem"
  }
})

export default styles;