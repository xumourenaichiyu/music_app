//歌单详情页
import React, { Component } from 'react';
import './MusicList.scss';
import MusicItem from '../../components/MusicItem/MusicItem'
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
    render() {
        let {tracks,coverImgUrl} = this.state.playlist; 
        return ( 
            <div className='music_list'>
                <div className='banner' style={{backgroundImage:`url(${coverImgUrl})`}}>

                </div>
                <div className='music_list_item'>
                    {
                        (tracks||[]).map(ele=>(
                            <MusicItem
                                key={ele.id}
                                data={ele}
                            />
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
export default MusicList;