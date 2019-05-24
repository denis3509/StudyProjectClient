import axios from 'axios'
import {configAxios} from '../../../network/constants'

const instance = axios.create(configAxios);

const api ={
  getUser : (user_id) => instance.get(`/users/${user_id}`),
};

export default api;