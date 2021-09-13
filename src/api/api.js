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
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ncmVlbi1raXMudGVjbWFuLnJ1XC9hcGlcL2xvZ2luIiwiaWF0IjoxNjMxNTU2Mjg2LCJleHAiOjE2MzE2NDI2ODYsIm5iZiI6MTYzMTU1NjI4NiwianRpIjoiQ1pIVTVMVGdkbE5GWjlQQSIsInN1YiI6MTU2LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.hdvxFcL-PpGjP9oasgZLG9oKmIKLh6lHHApeiPpRlP8`,
  },
});

export const counterpartiesApi = {
  fetchContractorsList() {
    return instance.get(
      "contractors?filter%5Bfull_name%5D=р&filter%5Bparent_id%5D=&filter%5Bcontractor_type_id%5D=&filter%5Bbranches.id%5D=&filter%5Bcreated_by%5D=&filter%5Bcreated_at%5D=&filter%5Bupdated_at%5D=&include=type,crms,branches,service,sites,emails,phones,author,group&sort=-full_name"
    );
  },
  fetchContractorsAuthor() {
    return instance.get("contractors/authors_list");
  },
  fetchContractorsTypes() {
    return instance.get("api/admin/contractor_types");
  },
};
