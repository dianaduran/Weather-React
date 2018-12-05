import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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



class TextFields extends React.Component {
    
  state = {
   country:''
  };

  onChange=(e)=> {
    //console.log('handle change called');
    this.setState({country: e.target.value.toUpperCase()});
  }

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase();
    }

  onSubmit=(e)=>{
    e.preventDefault();
    const country=this.state.country;
    this.setState({country:''})
    this.props.GetCountry(this.Capitalize(country));
    
  }

  

 

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
       <TextField
          id="standard-with-placeholder"
          label="Enter City"
          placeholder="Write Country"
          className={classes.textField}
          margin="normal"
          value={this.state.country}
          onChange={this.onChange}
        />
       <Button color="primary" className={classes.button} onClick={this.onSubmit}>
        Search
      </Button>
      </form>
    );
  }
}


export default withStyles(styles)(TextFields);