import axios from 'axios';

const API_URL = 'https://whattheshark-backend.herokuapp.com/predict';
export const predict = async(image) => {
  const res = axios.post(API_URL, { image });

  return res.data;
}