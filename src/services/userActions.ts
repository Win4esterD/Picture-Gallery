import axios from 'axios';
import {url, accessKey, secretKey} from './apiVariables';
import {cookieParser} from '@/utils/functions/cookieParser';

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

export async function likePhoto(id: string) {
  const token = cookieParser('token');
  try {
    await fetch(`${url}${id}/like`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function unlikePhoto(id: string) {
  const token = cookieParser('token');
  try {
    await fetch(`${url}${id}/like`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
