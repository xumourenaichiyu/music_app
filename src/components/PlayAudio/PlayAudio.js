import React, { Component } from 'react';
class PlayAudio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    render() { 
        return ( 
            <div>
                <audio src='' controls/>
            </div>
            
         );
    }
}
const mapStateToProps = (state)=>{
    return {
        src : state.player.AudioSrc
    }
}
export default PlayAudio;