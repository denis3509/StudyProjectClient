import axios from 'axios'
import {configAxios} from '../../../network/constants'

const instance = axios.create(configAxios);

const api = {
  getMessages : (dashboard_id)=> instance.get(`/dashboards/dashboard/messages?dashboard_id=${dashboard_id}`),

};

export default api