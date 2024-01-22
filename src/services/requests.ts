import axios from "axios";
import { url, accessKey, searchUrl } from "./apiVariables";

export async function getImages() {
  try {
    const response = await fetch(url, {
      cache: 'no-cache',
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getImagesByQuery(query: string) {
  try {
    const response = await axios.get(`${searchUrl}&query=${query}`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    return response.data.results;
  } catch (err) {
    console.log((err as Error).message);
  }
}
