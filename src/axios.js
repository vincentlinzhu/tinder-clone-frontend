import axios from "axios";

const instance = axios.create({
  baseURL: "https://clone--tinder--backend.herokuapp.com/",
});

export default instance;
