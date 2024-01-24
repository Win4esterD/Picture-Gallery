import axios from "axios";
import { url, accessKey, searchUrl } from "./apiVariables";

export async function getImages() {
  try {
    const response = await fetch(url + "?per_page=28", {
      cache: "no-cache",
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log((error as Error).message);
  }
}


export async function getImagesByQuery(query: string, page: string = '1') {
  try {
    const { data } = await axios.get(
      `${searchUrl}&query=${query}&page=${page}`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
}


export async function getPhotoById(id: string) {
  try {
    const response = await fetch(url + id, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    return response.json()
  } catch (err) {
    console.log((err as Error).message);
  }
}
