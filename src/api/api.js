import axios from "axios";

const jwt = localStorage.getItem("jwt_token")
  ? localStorage.getItem("jwt_token")
  : null;

const instance = axios.create({
  baseURL: "https://green-kis.tecman.ru/api/",
  headers: {
    "Content-Type":
      "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ncmVlbi1raXMudGVjbWFuLnJ1XC9hcGlcL2xvZ2luIiwiaWF0IjoxNjMxMTc3MTgzLCJleHAiOjE2MzEyNjM1ODMsIm5iZiI6MTYzMTE3NzE4MywianRpIjoiV2lYUml4MnFJQWR4bWZJUiIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.tVnp_-aQORgRQHiXAOepRtNrho7w7FExu6Szf1ydRxM`,
  },
});

export const counterpartiesApi = {
  fetchContractorsList() {
    return instance.get(
      "contractors?filter%5Bfull_name%5D=р&filter%5Bparent_id%5D=&filter%5Bcontractor_type_id%5D=&filter%5Bbranches.id%5D=&filter%5Bcreated_by%5D=&filter%5Bcreated_at%5D=&filter%5Bupdated_at%5D=&include=type,crms,branches,service,sites,emails,phones,author,group&sort=-full_name"
    );
  },
};
