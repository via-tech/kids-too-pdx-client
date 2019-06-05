require('dotenv').config();
import fetch from 'cross-fetch';

const request = (path, method, body) => {
  return fetch(`${process.env.API_URL_TEST}${path}`, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: body ? {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${body.token}`
    } : null
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);

export const get = (path, body) => request(path, 'GET', body);

export const del = (path, body) => request(path, 'DELETE', body);

export const patch = (path, body) => request(path, 'PATCH', body);
