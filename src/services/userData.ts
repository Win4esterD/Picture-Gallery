import { cookieParser } from "@/utils/functions/cookieParser";
import { accessKey, baseURL } from "./apiVariables";

export async function getUserData(): Promise<any> {
  const token: string = cookieParser('token');
  const auth = !token ? `Client-ID ${accessKey}` : `Bearer ${token}`;
  try{
    const response = await fetch(`${baseURL}me/`, {
      headers: {
        Authorization: auth,
      },
    });
    !response.ok && (document.cookie = "token=''; max-age=-1");
    return response.json();
  }catch(err) {
    console.log(err);
  }
}