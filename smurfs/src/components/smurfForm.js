import React, {useState} from 'react';
import {POSTsmurfs} from '../actions/actions';
import {connect} from 'react-redux';

class SmurfForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input:"",
            submit: ""
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    inputHandler(event){
        event.preventDefault();
        this.setState({
            input:event.target.value
        })
    }
    submitForm(event){
        event.preventDefault();
        this.setState({

            
        })
    }
    render(){
        return(
          <div className="smurfForm">
            <form onSubmit={this.submitForm}>
             <label>Name:  <input value={this.state.input.name} onChange={this.inputHandler} /></label>
             <label>Age: <input value={this.state.input.age} onChange={this.inputHandler} /></label>
             <label>Height: <input value={this.state.input.height} onChange={this.inputHandler} /></label> 
             <button>Put in The smurf</button>
            </form>
         </div>      
        )
    }
}


export default  SmurfForm;