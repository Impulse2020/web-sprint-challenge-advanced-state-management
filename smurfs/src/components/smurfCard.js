import React from 'react';

class SmurfCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                
                <h2>name:{this.props.smurf.name}</h2>
                <h2>Age:{this.props.smurf.age}</h2>
                <h2>Height:{this.props.smurf.height}</h2>
            </div>
        )
    }

}

export default SmurfCard;