import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './Footer.scss';
import Icon from '../Icon';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='footer'>
                <NavLink to='/' className='footer_Item'>
                    <Icon IconName='#icon-yinleshu'/><br/>
                    歌单
                </NavLink>
                <NavLink to='/music' className='centerIcon'>
                    <Icon IconName='#icon-MP' size='36'/>
                </NavLink>
                <NavLink to='/my'>
                    <Icon IconName='#icon-erji'/><br/>
                    我的
                </NavLink>
            </div>
         );
    }
}
 
export default Footer;