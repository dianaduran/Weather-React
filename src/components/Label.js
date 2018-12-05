import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { white } from 'material-ui/styles/colors';

const styles = theme => ({
  container: {
    flexWrap: 'wrap',
    textAlign:'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color:white,
    textAlign: 'center !important'
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});



const Label=(props)=>{
    
   const { classes, name } = props;

    return (
    
      <form className={classes.container} >
        <TextField
        id="standard-read-only-input"
        value={name.name || ''}
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      </form>
    );
  }



export default withStyles(styles)(Label);