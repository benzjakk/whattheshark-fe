import axios from 'axios';

const API_URL = 'https://whattheshark-backend.herokuapp.com/predict';
export const predict = async(data) => {
  const res = await axios.post(API_URL, data);

  return res.data;
}