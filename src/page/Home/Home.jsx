import React, { useState } from 'react';
import uploadDefault from '../../img/upload_default.png';
import { Upload, Button } from 'antd';
import { predict } from '../../service/predict';
import style from './Home.module.scss';

export const Home = () => {
  const [previewImg, setPreviewImg] = useState(null)
  
  
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handleAction = async(file) => {
    console.log(file);
    const previewImgUrl = URL.createObjectURL(file);
    setPreviewImg(previewImgUrl);
    try {
      const fileBase64 = await getBase64(file);
      const res = await predict(fileBase64);
      console.log('res',res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={style.container}>
      <img src={previewImg || uploadDefault} alt="upload_default" />
      <Upload
        action={handleAction}
        listType="picture"
        showUploadList={false}
      >
        <Button type="primary">
          อัปโหลดรูป
        </Button>
      </Upload>
    </div>
  )
}
