import React, { Component } from 'react';
class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <svg className="icon" aria-hidden="true" style={{fontSize :this.props.size || 28}}>
                <use xlinkHref={this.props.IconName}></use>
            </svg>
         );
    }
}
 
export default Icon;