import axios from 'axios'
import {configAxios} from '../../../network/constants'

const instance = axios.create(configAxios);

const api = {
  getDashboard : (dashboard_id)=> instance.get(`/dashboards/dashboard?dashboard_id=${dashboard_id}`),
  newDashboard : ( dashboard ) => instance.post(`/dashboards/dashboard`, {...dashboard}),
  updateDashboard : (dashboard_id, update) => instance.put(`/dashboards/dashboard?dashboard_id=${dashboard_id}`, {...update}),
  removeDashboard : (dashboard_id ) => instance.delete(`/dashboards/dashboard?dashboard_id=${dashboard_id}`),

  getColumn : (dashboard_id, column_id)=> instance.get(`/dashboards/column?dashboard_id=${dashboard_id}&column_id=${column_id}`),
  newColumn : (dashboard_id, column ) => instance.post(`/dashboards/column?dashboard_id=${dashboard_id}`, {...column}),
  updateColumn : (dashboard_id, column_id, update) => instance.put(`/dashboards/column?dashboard_id=${dashboard_id}&column_id=${column_id}`, {...update}),
  removeColumn : (dashboard_id, column_id ) => instance.delete(`/dashboards/column?dashboard_id=${dashboard_id}&column_id=${column_id}`),

  getCard : (dashboard_id, column_id , card_id)=> instance.get(`/dashboards/column?dashboard_id=${dashboard_id}&column_id=${column_id}&card_id=${card_id}`),
  newCard : (dashboard_id, column_id, card ) => instance.post(`/dashboards/column?dashboard_id=${dashboard_id}`, {...card}),
  updateCard : (dashboard_id, column_id, card_id, update) => instance.put(`/dashboards/column?dashboard_id=${dashboard_id}&column_id=${column_id}&card_id=${card_id}`, {...update}),
  removeCard : (dashboard_id, column_id, card_id ) => instance.delete(`/dashboards/column?dashboard_id=${dashboard_id}&column_id=${column_id}&card_id=${card_id}`),


};

export default api;