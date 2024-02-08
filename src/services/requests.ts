import axios from 'axios';
import {url, accessKey, searchUrl} from './apiVariables';

export async function getImages(token?: string | undefined): Promise<never[]> {
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
  token?: string | undefined,
): Promise<any> {
  const auth = token ? `Bearer ${token}`: `Client-ID ${accessKey}`;
  console.log(auth)
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
  token?: string | undefined,
): Promise<any> {
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
