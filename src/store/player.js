import {SET_AUDIO_SRC} from './typeCreator';
const defaultState = {
    AudioSrc : ''
}

const reducer = (state=defaultState , action)=>{
    switch (action.type){
        case SET_AUDIO_SRC : 
            state.AudioSrc = action.payload;
            break;
        default : 
            break;
    }
    return JSON.parse(JSON.stringify(state))
}
export default reducer;