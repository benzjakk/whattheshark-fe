import React from 'react'
import loadingPic from '../../img/loading.png';
import style from './Loading.module.scss';

export const Loading = () => {
    return (
        <div className={style.loadingContainer}>
            <img src={loadingPic} alt='loading_pic'/>
        </div>
    )
}
