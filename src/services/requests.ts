import axios from "axios";
import { url, accessKey } from "./apiVariables";

export async function getImages() {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
