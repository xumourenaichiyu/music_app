
const defaultState = {
    Audio : new Audio(),//播放器实例对象
    musicList : [],//音乐播放列表
}

const reducer = (state=defaultState , action)=>{
    switch (action.type){
        default:
            return {...state}
    }
}
export default reducer;