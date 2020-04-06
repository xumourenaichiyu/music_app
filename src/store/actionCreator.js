import {SET_AUDIO_SRC} from './typeCreator';
export const setAudioSrcAction = (value)=>(
    {
        type : SET_AUDIO_SRC,
        payload : value
    }
)