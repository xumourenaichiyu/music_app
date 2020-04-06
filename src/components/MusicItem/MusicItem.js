import React from 'react';
import './MusicItem.scss';
function MusicItem(props){
    let {data} = props;
    return (
        <div className='music_item'>
            <div className='music_coverimg'>

            </div>
            <div className='music_info'>
                <p className='music_name'>{data.name}</p>
                <p className='songers'>
                    {data.ar.map(e=>(
                        <span className='songer' key={e.id}>{e.name}</span>
                    ))}
                </p>
            </div>
        </div>
    )
}
export default MusicItem