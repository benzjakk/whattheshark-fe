import React, { useState } from 'react';
import uploadDefault from '../../img/upload_default.png';
import { Upload, Button } from 'antd';
import { predict } from '../../service/predict';
import style from './Home.module.scss';

export const Home = () => {
  const [previewImg, setPreviewImg] = useState(null)
  
  
  // function getBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = error => reject(error);
  //   });
  // }

  const handleAction = async(file) => {
    const data = new FormData();
    data.append("image",file);
    data.append("filename",file.name);
    const previewImgUrl = URL.createObjectURL(file);
    setPreviewImg(previewImgUrl);
    try {
      const res = await predict(data);
      console.log(res);
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
