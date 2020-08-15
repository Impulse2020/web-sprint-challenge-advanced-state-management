import React, { Component } from "react";
import "./App.css";
import SmurfList from "./smurfList";
import SmurfForm from "./smurfForm";
import { connect } from "react-redux";
import { fetchSmurfs } from '../actions/actions';


class App extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    // console.log(this.props)
     this.props.fetchSmurfs();
     console.log(this.props.smurfs)
 }

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <div>We gotta get these smurfs!</div>
        <div>Have fun!</div>
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}
const mapStateToProps = () =>{
  return{
  
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);