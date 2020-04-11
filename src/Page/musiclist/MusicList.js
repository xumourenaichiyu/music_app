//歌单详情页
import React, { Component } from 'react';
import {connect} from 'react-redux'
import './MusicList.scss';
import MusicItem from '../../components/MusicItem/MusicItem';
import {tipToast} from '../../assets/js/tipToast';
class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playlist : {}
         }
    }
    componentDidMount(){
        this.getPlayListDetail();
    }
    //获取歌单详情
    async getPlayListDetail(){
        let {id} = this.props.match.params;
        let res = await this.$axios.post(`/playlist/detail?id=${id}`);
        if(res.status === 200){
            let {playlist} = res.data;
            this.setState({
                playlist : playlist
            })
        }
    }

    //获取歌曲url 
    getMusicUrl = async (id)=>{
        let res = await this.$axios.post(`/song/url?id=${id}`);
        let data = res.data.data;
        
        if(res.status === 200 && res.data.code === 200){
            if(data[0].url){
                this.props.Audio.src = data[0].url;
                this.props.Audio.play();
            }else{
                tipToast('播放失败',1500)
            }
        }
    }
    render() {
        let {tracks,coverImgUrl} = this.state.playlist; 
        return ( 
            <div className='music_list'>
                <div className='banner' style={{backgroundImage:`url(${coverImgUrl})`}}>

                </div>
                <div className='music_list_item'>
                    {
                        (tracks||[]).map(ele=>(
                            <div key={ele.id} onClick={()=>{this.getMusicUrl(ele.id)}}>
                                <MusicItem
                                    data={ele}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
function mapStateToProps(state){
    return {
        Audio : state.player.Audio
    }
}

export default connect(mapStateToProps,null)(MusicList);