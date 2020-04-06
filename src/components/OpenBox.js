import React, { Component } from 'react';
class OpenBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            height : 0,
            isOpen : false
         }
    }
    componentDidMount(){
        this.setState({
            height : this.props.height || '.4rem'
        })
    }

    //展开或则收起容器
    openBox = ()=>{
        this.setState(state=>{
            if(!state.isOpen){
                state.height = 'auto'
            }else{
                state.height = this.props.height | '.4rem'
            }
            state.isOpen = !state.isOpen;
           return state
        })
    }
    render() { 
        return (

            <div>

                <div style={{ height: this.state.height, overflowY: 'scroll' }}>
                    {this.props.children}
                </div>


                <div style={{textAlign : 'center',color:'#999'}} onClick={this.openBox}>{this.state.isOpen ? '收起' : '展开'}</div>
            </div>
         );
    }
}
 
export default OpenBox;