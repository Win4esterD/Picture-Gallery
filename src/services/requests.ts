import axios from 'axios';
import {url, accessKey, searchUrl} from './apiVariables';
import { cookieParser } from '@/utils/functions/cookieParser';

export async function getImages(): Promise<never[]> {
  const token = cookieParser('token');
  const auth = !token ? `Client-ID ${accessKey}` : `Bearer ${token}`;
  try {
    const response = await fetch(url + '?per_page=28', {
      cache: 'no-cache',
      headers: {
        Authorization: auth,
      },
    });
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function getImagesByQuery(
  query: string,
  page: string = '1',
): Promise<any> {
  const token = cookieParser('token');
  const auth = token ? `Bearer ${token}`: `Client-ID ${accessKey}`;
  try {
    const {data} = await axios.get(`${searchUrl}&query=${query}&page=${page}`, {
      headers: {
        Authorization: auth,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getPhotoById(
  id: string,
): Promise<any> {
  const token = cookieParser('token');
  const auth = !token ? `Client-ID ${accessKey}` : `Bearer ${token}`;
  try {
    const response = await fetch(url + id, {
      headers: {
        Authorization: auth,
      },
      cache: 'no-cache',
    });
    return response.json();
  } catch (err) {
    console.log((err as Error).message);
  }
}
