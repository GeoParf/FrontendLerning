import axios from "axios";
import prepereResponse from "./prepereResponse";
import prepereRequest from "./prepereRequest";

const instance = axios.create({ // Экземпляр класса Axios
  headers: {
    'Content-Tipe': 'application/json',
  },
  crossdomine: true,
  baseURL: '/api',
})

export default async params => {
  const baseParams = prepereRequest(params);
  try {
    const data = await instance(baseParams);
    return prepereResponse(data);
  } 
  catch(err) {
    throw err;
  };
};