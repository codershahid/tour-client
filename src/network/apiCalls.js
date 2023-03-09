import axios from "axios";
const BASEURL = "http://localhost:8080";

// GET
export const apiGetCall = (route) => {
  async function axiosGetCall() {
    const client = axios.create({
      baseURL: BASEURL,
    });
    const response = await client.get(route);
    return response.data;
  }
  const response = axiosGetCall();
  return response;
};

// Post
export const apiPostCall = (route, data) => {
  async function axiosPostCall() {
    const client = axios.create({
      baseURL: BASEURL,
    });
    const response = await client.post(route, data);
    return response.data;
  }
  const response = axiosPostCall();
  return response;
};
