import React, { useEffect } from 'react';
import SmurfCard from './smurfCard';
import { fetchSmurfs } from '../actions/actions';
import { connect } from 'react-redux';

class SmurfList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            smurfs:[]
        }
    }
    
    render() {
        
    
        return (
            <div>
            {this.props.smurfs.map((smurf) => (
            <SmurfCard key={smurf.id} smurf={smurf} />))}
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

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);