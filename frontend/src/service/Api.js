import axios from "axios";

class CallApi {
  async fetchData(url, data = null) {
    let baseUrl = process.env.NEXT_PUBLIC_API_URL + "/";
    let res = await axios.get(baseUrl + url, data);
    let response = res.data;
    return response;
  }

  async storeData(url, data) {
    let baseUrl = process.env.NEXT_PUBLIC_API_URL + "/";
    let res = await axios.post(baseUrl + url, data);
    let response = await res.data;
    return response;
  }

  async EditData(url) {
    let baseUrl = process.env.NEXT_PUBLIC_API_URL + "/";
    let res = await axios.get(baseUrl + url);
    let response = res.data;
    return response;
  }


  async deleteData(url, data) {
    let config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };

    let baseUrl = process.env.NEXT_PUBLIC_API_URL + "/";
    let res = await axios.delete(baseUrl + url, config);
    let response = await res.data;
  }
}

export default CallApi;
