import React from 'react';
import style from './SharkDetailHeader.module.scss';
import back from '../../img/Back.png'

export const SharkDetailHeader = () => {
  return (
    <div className={style.root}>
        <a href='/'><img className={style.left} src={back} alt="back"/></a>
        <div className={style.title}>WHAT THE SHARK?</div>
    </div>
  )
}
