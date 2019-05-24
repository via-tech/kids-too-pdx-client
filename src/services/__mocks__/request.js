require('dotenv').config();
import store from '../../store';
import { getToken } from '../../selectors/session';
import fetch from 'cross-fetch';

const request = (path, method, body) => {
  return fetch(`${process.env.API_URL_TEST}${path}`, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken(store.getState())}`
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);

export const get = (path, body) => request(path, 'GET', body);
