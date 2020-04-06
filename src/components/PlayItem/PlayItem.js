import React from 'react';
import './PlayItem.scss';
import {formatNumber,formatTime} from '../../assets/js/tools';
import Icon from '../../components/Icon';
import {withRouter} from 'react-router-dom'
function PlayItem(props){
    let {data} = props;
    let name = data.name;
    let coverImgUrl = data.coverImgUrl;
    let playCount = data.playCount;
    let updateTime = data.updateTime;
    let id = data.id;
    function goMusicList(){//跳转歌单详情页
        props.history.push(`/musiclist/${id}`)
    }
    return(
        <div className='play_item' onClick={goMusicList}>
            <div>
                <div className='coverImg'>
                    <img src={coverImgUrl} alt=''/>
                    <div className='info'>
                        <span style={{paddingLeft:'.03rem'}}>
                            <Icon IconName='#icon-icon-test' size='7px'/>&nbsp;&nbsp;
                            {formatNumber(playCount)}
                        </span>
                        <br/>
                        <span>
                            <Icon IconName='#icon-shijian' size='12px'/>&nbsp;&nbsp;
                            {formatTime(updateTime,'YYYY-MM-DD')}
                        </span>
                    </div>
                </div>
            </div>
            <div className='play_name'>
                {name}
            </div>
        </div>
    )
}
export default withRouter(PlayItem)