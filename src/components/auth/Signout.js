import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signout extends Component {
    componentDidMount() {
        this.props.signout();
    }

    render() {
        return ( <div>
            Sorry to see you go!
        </div> );
    }
}

export default connect(null, actions)(Signout);