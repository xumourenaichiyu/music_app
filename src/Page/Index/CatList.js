import React, { Component } from 'react';
import './CatList.scss'
import OpenBox from '../../components/OpenBox';
import Icon from '../../components/Icon';
import {formatNumber,formatTime} from '../../assets/js/tools';
class CatList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            catSubList : [],//歌单列表
            categories : [],//歌单分类列表
            category : 0,
            catHotList : []
         }
    }
    componentDidMount(){
        this.getCatList();
        this.getCatHot();
    }
    //获取歌单分类
    async getCatList(){
        let res = await this.$axios.post('/playlist/catlist');
        if(res.status===200){
            //console.log(res.data)
            let {sub,categories} = res.data;
            let newcategories = [];
            for(let key in categories){
                newcategories.push(categories[key])
            }
            this.setState({
                categories : newcategories,
                catSubList : sub
            })
        }
    }

    //

    //设置歌单类型
    selectcategory = (index)=>{
        this.setState({
            category : index
        })
    }

    //获取热们歌单
    getCatHot = async()=>{
        let res = await this.$axios.post('/playlist/hot');
        if(res.status === 200){
            this.setState({
                catHotList : res.data.tags
            })
        }
    }

    //跳转歌单页面
    getPlayList = async(tag)=>{
        this.props.history.push(`/playlist?cat=${tag}`)
    }
    render() { 
        let {categories,catSubList,category,catHotList} = this.state;
        return ( 
            <div className='cat'>
                <div className='catList'>
                    <div  className='cat_subList_wrap'>
                        <p className='title'><Icon IconName='#icon-yinleshu' size ={'28px'}/>歌单分类</p>
                        <div className='cat_sublist'>
                            {
                                categories.map((ele,index)=>(
                                    <div key={ele} className='cat_item' onClick={()=>{this.selectcategory(index)}}>{ele}</div>
                                ))
                            }
                        </div>
                    </div>
                    <OpenBox height={47}>
                        <div className='cat_sub'>
                            {
                                catSubList.map(ele=>(
                                    ele.category === category ? <div className='cat_sub_item' key={ele.name} onClick={()=>{this.getPlayList(ele.name)}}>{ele.name}</div> : null 
                                ))
                            }
                        </div>
                    </OpenBox>
                </div>

                {/* 热们歌单 */}
                <div className='cat_hot'>
                    <div>
                        <p className='title'><Icon IconName='#icon-yinleshu' size ={'28px'}/>热门歌单</p>
                    </div>
                    <div>
                        {
                            catHotList.map(ele=>(
                                <div className='cat_hot_item' key={ele.id}>
                                    <div className='cat_icon'>
                                        <Icon IconName='#icon-liushengji' size='45px'/>
                                    </div>
                                    <div>
                                        <p className='cat_hot_name'>{ele.name}</p>
                                        <div>
                                            <span className='play_count hot_small_icon'>
                                                <Icon IconName='#icon-icon-test' size='6px'/>&nbsp;&nbsp;
                                                {formatNumber(ele.usedCount)}
                                            </span>
                                            <span className='createtime hot_small_icon'>
                                                <Icon IconName='#icon-shijian' size ='10px'/>&nbsp;&nbsp;
                                                {formatTime(ele.createTime,'YYYY-MM-DD')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CatList;