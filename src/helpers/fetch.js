import { TV_API_PATH } from '../constants.js';

const fetchAPI = (param) => {
  return new Promise((resolve, reject) => {
    fetch(`${TV_API_PATH}${param}`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export { fetchAPI };
