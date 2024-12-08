import { JS_HEADERS } from '../constants.js';
const fetchAPI = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, { headers: JS_HEADERS })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export { fetchAPI };
