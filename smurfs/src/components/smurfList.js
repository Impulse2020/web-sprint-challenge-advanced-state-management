import React, { useEffect } from 'react';
import SmurfCard from './smurfCard';
import { connect } from 'react-redux';


class SmurfList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            smurfs:props.smurfs,
        }
    }
    
    render() {
        return (
            <div>
            {this.props.smurfs.length ? this.props.smurfs.map((smurf) => ( 
            <SmurfCard key={smurf.id} smurf={smurf} />)) : console.log(this.props) }
            </div>
        )
    }    
}

// store.dispatch(fetchSmurfs);


const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFETCHING: state.isFETCHING,
        error: state.error
    }
}

export default connect(mapStateToProps)(SmurfList);