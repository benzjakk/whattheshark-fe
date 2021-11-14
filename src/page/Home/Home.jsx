import React, { useState } from 'react';
import uploadDefault from '../../img/upload_default.png';
import { Upload, Button, Spin, message } from 'antd';
import { predict } from '../../service/predict';
import style from './Home.module.scss';
import { SHARK_ENUM, SHARK, SHARK_DETAIL } from '../../parameters/constants';

export const Home = () => {
  const [previewImg, setPreviewImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
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
      setLoading(true);
      const res = await predict(data);
      if(res.success){
        setResult(res.result)
      }  
    } catch (error) {
      setResult(null);
      setPreviewImg(null);
      console.error(error);
      message.error('เกิดข้อผิดพลาด, กรุณาลองใหม่อีกครั้ง !!!');
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className={style.container}>
      <img src={previewImg || uploadDefault} alt="upload_default" />
      { !loading && 
        <>
        <Upload
        action={handleAction}
        listType="picture"
        showUploadList={false}
        >
          <Button type="primary">
            อัปโหลดรูป
          </Button>
        </Upload>
        {result && 
          <div className={style.resultContainer}>
              <div className={style.title}>{SHARK[SHARK_ENUM[result]]}</div>
              <div className={style.subTitle}>{SHARK_DETAIL[SHARK_ENUM[result]]}</div>
          </div>
        }
        <a href='/detail'><div className={style.sharkDetail}>ทำความรู้จักฉลามทั้ง 3 พันธุ์</div></a>
        </>
      }   
      { loading && <Spin />}
      
    </div>
  )
}
