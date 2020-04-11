import React, { Component } from 'react';
import {connect} from 'react-redux';
class PlayAudio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    render() { 
        return ( 
            <div>
                <audio src={this.props.src} controls autoPlay={true} style={{display:none}}/>
            </div>
            
         );
    }
}
const mapStateToProps = (state)=>{
    return {
        src : state.player.AudioSrc
    }
}
export default connect(mapStateToProps)(PlayAudio);