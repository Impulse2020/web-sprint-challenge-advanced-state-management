import React from 'react';

class SmurfCard extends React.Component{
    constructor(props){
        super(props);
    }
    componenDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <h2>name:{}</h2>
                <h2>Age:{}</h2>
                <h2>Height:{}</h2>
            </div>
        )
    }

}

export default SmurfCard;