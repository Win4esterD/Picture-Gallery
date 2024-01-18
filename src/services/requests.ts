import axios from "axios";
import { url, accessKey, searchUrl } from "./apiVariables";

export async function getImages() {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    return response.data;
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
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
