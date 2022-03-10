import axios from 'axios';
const base_url = 'https://itunes.apple.com';
export const API = {
  SEARCH: '/search',
  LOOKUP: '/lookup',
};

export const requestGet = (url, params = {}, extraHeaders = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(base_url + url, {
        headers: {
          Accept: 'application/json',
          ...extraHeaders,
        },
        params: {...params},
      })
      .then(response => {
        // console.log('API', 'requestGet-response.status', response.data);
        resolve(response.data);
      })
      .catch(error => {
        // console.log('API', 'requestGet-error', error);
        reject(error);
      });
  });
};
