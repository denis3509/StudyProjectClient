export const SERVER_URL = 'https://study-nodejs-app.herokuapp.com/';

export const configAxios = {
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
  //transformRequest: [(data = {}) => JSON.stringify(data)],
};
