import axios from 'axios'
import {configAxios} from '../../../network/constants'

const instance = axios.create(configAxios);

const api ={
  getUser : () => instance.get(`/users/user/get`),
  signUp : (userName, login, password, email) =>{instance.post(`/users/signUp`, {userName, login, password, email})},
  login : (login, password) => instance.post(`/users/login`, {login, password}),
  logout : ()=> instance.get(`/users/logout`)
};

export default api;