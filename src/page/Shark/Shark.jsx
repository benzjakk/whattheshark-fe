import React from 'react';
import style from './Shark.module.scss';
import { SHARK, SHARK_DETAIL } from '../../parameters/constants';
import white from '../../img/WhiteShark.png';
import bull from '../../img/BullShark.png';
import tiger from '../../img/TigerShark.png';

export const Shark = () => {
  return (
    <div className={style.root}>
        <div className={style.container}>
            <img className={style.sharkImage} src={white} alt="white_shark"/>
            <div className={style.title}>{SHARK.WHITE}</div>
            <div className={style.body}>{SHARK_DETAIL.WHITE}</div>
        </div>
        <div className={style.container}>
            <img className={style.sharkImage} src={bull} alt="bull_shark"/>
            <div className={style.title}>{SHARK.BULL}</div>
            <div className={style.body}>{SHARK_DETAIL.BULL}</div>
        </div>
        <div className={style.container}>
            <img className={style.sharkImage} src={tiger} alt="tiger_shark"/>
            <div className={style.title}>{SHARK.TIGER}</div>
            <div className={style.body}>{SHARK_DETAIL.TIGER}</div>
        </div>
        <div className={style.container}>
            <div className={style.title}>#TeamSharks</div>
            <div className={style.body}>1. นายพลพัฒน์ สงวนสิริกุล รหัสนักศึกษา 62010602</div>
            <div className={style.body}>2. นายลิขิตภูมิ ลิขิตงาม รหัสนักศึกษา 62010785</div>
            <div className={style.body}>3. นายกัมปนาท ควชะกุล รหัสนักศึกษา 61010061</div>
            <div className={style.body}>4. นายกิตติคม บุญรอด รหัสนักศึกษา 61010080</div>
            <div className={style.body}>5. นายธนบดี แสงประจง รหัสนักศึกษา 61010430</div>
            <div className={style.body}>6. นางสาวสิรินยา กำยาน รหัสนักศึกษา 61011120</div>
            <div className={style.body}>7. นายหฤษฏ์ สินกำเนิด รหัสนักศึกษา 61011166</div>
            <div className={style.body}>8. นายวรุต เพชรสุวรรณ รหัสนักศึกษา 61010949</div>
        </div>
    </div>
  )
}
