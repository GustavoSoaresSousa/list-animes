import axios from "axios";

export const api = "https://kitsu.io/api/edge";

export const apiMovie = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    "Auhorization": `Bearer ${process.env.API_TOKEN}`,
   " Content-Type": "application/json;charset=utf-8"
  }
});
