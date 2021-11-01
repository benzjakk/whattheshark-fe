import React from 'react';
import uploadDefault from '../../img/upload_default.png';
import { Upload, Button } from 'antd';
import style from './Home.module.scss';

export const Home = () => {
  return (
    <div className={style.container}>
      <img src={uploadDefault} alt='upload_default' />
      <Upload>
        <Button type="primary">
          อัปโหลดรูป
        </Button>
      </Upload>
    </div>
  )
}
