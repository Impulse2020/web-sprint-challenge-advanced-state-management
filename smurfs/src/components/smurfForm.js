import React, { useState } from 'react';
import { POSTsmurfs } from '../actions/actions';
import { connect } from 'react-redux';




class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            height: ""
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    inputHandler(event) {
        event.preventDefault();
        this.setState({ ...this.state, [event.target.name]: event.target.value })
        console.log(this.state)
    }
    submitForm(event) {
        event.preventDefault();
        this.setState({
            name: "",
            age: "",
            height: ""
        })
        console.log(this.state.input);
        this.props.POSTsmurfs(this.state);
        <SmurfList />
    }

    render() {
        return (
            <div className="smurfForm">
                <form onSubmit={this.submitForm}>
                    <label>Name:  <input name="name" value={this.state.name} onChange={this.inputHandler} /></label>
                    <label>Age: <input name="age" value={this.state.age} onChange={this.inputHandler} /></label>
                    <label>Height: <input name="height" value={this.state.height} onChange={this.inputHandler} /></label>
                    <button>Put in The smurf</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFETCHING: state.isFETCHING,
        error: state.error
    }
}

export default connect(mapStateToProps, { POSTsmurfs })(SmurfForm);