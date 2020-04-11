import React, { Component } from 'react';
import PlayItem from '../../components/PlayItem/PlayItem'
import './play_list.scss';
class PlayList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playList : [],
            limit : 15,
         }
         this.playList = null;
         this.clientHeight = 0
    }
    componentDidMount(){
        this.getPlayList();
        window.addEventListener('scroll',()=>{
            if(this.playList&&this.playList.clientHeight-window.scrollY === document.body.clientHeight && this.playList.clientHeight>this.clientHeight){
                this.clientHeight = this.playList.clientHeight
                let {playList,limit} = this.state;
                this.setState({
                    limit : limit +15
                },()=>{
                    this.getPlayList(playList[playList.length-1].updateTime);
                })
            }
        })
    }

    componentWillUnmount(){
        window.addEventListener('scroll',()=>{})
    }

    //加载歌单数据
    async getPlayList(before){
        let data = this.props.location.search;
        let url = `/top/playlist/highquality${data}&limit=${this.state.limit}`;
        if(before){
            url = `/top/playlist/highquality${data}&limit=${this.state.limit}&before=${before}`
        }
        
        let res = await this.$axios.get(url)
        if (res.status === 200) {
            this.setState({
                playList: [...this.state.playList,...res.data.playlists]
            })
        }
    }
    render() { 
        let {playList} = this.state;
        return ( 
            <div className='play_list' ref={(div) => { this.playList = div }}>
                {
                    playList.map(ele => (
                        <PlayItem
                            key={ele.id}
                            data={ele}
                        />
                    ))
                }

            </div>
         );
    }
}
 
export default PlayList;

