import React, {Component} from 'react';
import {connect} from 'react-redux';

import Menu from './Menu';

const mapStateToProps = (state, ownProps) => {
    console.log("ownProps: ", ownProps);
    return {
        track: state.tracks.find(track => track.id === Number(ownProps.params.id))
    }
}

class Track extends Component {
    render() {
        return (
            <div>
                <Menu />
                {this.props.track.name}
            </div>
        )       
    }
}

export default connect(mapStateToProps)(Track);