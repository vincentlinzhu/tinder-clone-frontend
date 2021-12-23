import axios from "axios";

const instance = axios.create({
  baseURL: "https://clone--tinder--full.herokuapp.com/",
});

export default instance;
