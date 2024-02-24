import Axios from "axios";

const AxiosClient = Axios.create({
  baseURL: "http://localhost:8080",
});

export default AxiosClient;
