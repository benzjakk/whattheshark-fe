import React from 'react';
import style from './SharkDetailHeader.module.scss';
import back from '../../img/Back.png'

export const SharkDetailHeader = () => {
  return (
    <div className={style.root}>
        <img className={style.left} src={back} alt="back"/>
        <div className={style.title}>WHAT THE SHARK?</div>
    </div>
  )
}
