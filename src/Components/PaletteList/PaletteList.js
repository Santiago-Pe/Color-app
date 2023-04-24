import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";
import { withStyles } from "@material-ui/core";
import styles from "../../Styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import {  Check, Close } from "@material-ui/icons";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
class PaletteList extends Component {
  constructor(props) {
    super(props);

    /* ---------- State ---------- */
    this.state = {
      openDeleteDialog: false,
      deletingId: ''
    }

    /* ---------- Binding Functions ---------- */
    this.goToPalete = this.goToPalete.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  /* ---------- Functions ---------- */

  // Naveigate to specific palette
  goToPalete(id) {
    this.props.history.push(`/palette/${id}`);
  }
  // Open popup
  openDialog (id) {
    this.setState({openDeleteDialog: true, deletingId: id})
  }

  // Close popup
  closeDialog () {
    this.setState({openDeleteDialog: false, id: ''})
  }

  handleDelete(){
    this.props.deletePalette(this.state.deletingId)
    this.closeDialog()



  }

  /* ---------- Render ---------- */
  render() {
    const { palette, classes} = this.props;
    const {openDeleteDialog} = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.title}>Color Lab</h1>
            <Link to="/palette/new">Creat palette</Link>
          </nav>
          <TransitionGroup className={classes.palette}>
              {palette.map((p) => (
              
                <CSSTransition  key={p.id} classNames='fade' timeout={300}>
                  <MiniPalette 
                    {...p} 
                    handleClick={this.goToPalete} 
                    id={p.id}  
                    linkStyles={classes.link} 
                    openDialog={this.openDialog}


                  />
                </CSSTransition>
              
                
              ))}
            </TransitionGroup>
        </div>
        <Dialog open={openDeleteDialog} arial-labelledby='delette-dialog-title' onClose={this.closeDialog}>
          <DialogTitle id="delette-dialog-title">Delete this Palette ?</DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor: blue[100], color: blue[900]}}>
                  <Check/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Delete'}/>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor: red[100], color: red[900]}} >
                  <Close/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Cancle'}/>
            </ListItem>
          </List> 
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
