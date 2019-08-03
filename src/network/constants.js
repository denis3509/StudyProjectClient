export const SERVER_URL = 'http://localhost:3002';

export const configAxios = {
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
  //transformRequest: [(data = {}) => JSON.stringify(data)],
};
