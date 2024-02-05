import axios from 'axios';
import {url, accessKey, searchUrl, secretKey} from './apiVariables';

export async function authorizeUser(code: string, host: string) {
  try {
    const response = axios.post('https://unsplash.com/oauth/token/', {
      client_id: accessKey,
      client_secret: secretKey,
      redirect_uri: host,
      code: code,
      grant_type: 'authorization_code',
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function likePhoto(id: string, token: string) {
  try {
    const response = await axios.post(`${url}${id}/like`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response)
  } catch (err) {
    console.log(err);
  }
}

