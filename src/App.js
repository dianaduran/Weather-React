import React, { Component } from "react";
import "./App.scss";
import API from "./help";
import Header from "./components/Header";
import Country from "./components/InputCountry";
import Label from "./components/Label";



class App extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      values: []
    };

    // Bind `this` context to functions of the class
     this.GetCountry = this.GetCountry.bind(this);
  }

  GetCountry(country){
    console.log(country)

    if(country==="") return;
    API.getWeather(country)
        .then(res=>{
          // console.log(res.data)
          const values={
            main:res.data.main,
            name:res.data.name
          } 
          console.log(values)
          this.setState({values})
         })  
        .catch(err=>console.log(err))
  }




  render() {
       return (
      <div className="main">
        <Header />
        <div className="class_input">
          <Country GetCountry={this.GetCountry}/>
          <Label name={this.state.values}/>
        </div>
      </div>
    );
  }
}

export default App;
