import React, {useState} from 'react';
import {POSTsmurfs} from '../actions/actions';
import {connect} from 'react-redux';

class SmurfForm extends React.Component{
    constructor(props){
        super(props);




    }
    render(){
        return(
          <div className="smurfForm">
            <form>
             <label>Name:  <input></input></label>
             <label>Age: <input></input></label>
             <label>Height: <input></input></label> 
             <button>Put in The smurf</button>

            </form>
         </div>      
        )



    }


}

export default  SmurfForm;