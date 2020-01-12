import axios from 'axios';
import {apiKey} from './constants'

let api = {};
let BASE_URL = `https://cricapi.com`;

api.get = (url) => {
  return new Promise( (resolve, reject)=> {
    axios.get(`${BASE_URL}${url}`,{ params: {'apikey':apiKey} })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error)
      })
  });
}

api.post = (url,body) => {
  return new Promise( (resolve, reject) => {
    axios.post(`${BASE_URL}/${url}`, body)
    .then( (response)=> {
      resolve(response)
    })
    .catch( (error)=> {
      reject(error)
    });
  });
}
export default api;