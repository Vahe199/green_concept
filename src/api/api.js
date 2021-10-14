import Axios from "axios";

// const jwt = localStorage.getItem("jwt_token")
//   ? localStorage.getItem("jwt_token")
//   : null;

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ncmVlbi1raXMudGVjbWFuLnJ1XC9hcGlcL2xvZ2luIiwiaWF0IjoxNjM0MTExODgxLCJleHAiOjE2MzQxOTgyODEsIm5iZiI6MTYzNDExMTg4MSwianRpIjoiaUJaQ1g3VWpmN0QxNjk0ciIsInN1YiI6MTU2LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.tsgHh7JdBq4WQ_hD26h6uIDR5XItxHiB9e2wCq6yqyE`,
};

const createAxios = () => {
  const baseURL = "https://green-kis.tecman.ru/api/";
  const newAxios = Axios.create({
    baseURL,
  });

  newAxios.defaults.headers = { ...newAxios.defaults.headers, ...headers };

  newAxios.interceptors.response.use(
    (response) => response,
    (error) => {
      const {
        status,
        config: { url },
        data,
      } = error.response;

      if (
        (status === 401 && url !== "login") ||
        data?.detail?.includes("Invalid token")
      ) {
        localStorage.removeItem("token");
        window.location.pathname = "/";
      }

      return Promise.reject(error);
    }
  );

  return newAxios;
};

const axios = createAxios();

export const counterpartiesApi = {
  fetchContractorsList(config = {}) {
    return axios.request({
      method: "get",
      url: `contractors/`,
      ...config,
    });
  },
  fetchContractorsAuthor() {
    return axios.request({ method: "get", url: "contractors/authors_list" });
  },
  fetchContractorsTypes() {
    return axios
      .request({ method: "get", url: "admin/contractor_types" })
      .then((res) => {});
  },
  fetchContractorsServicesTypes() {
    return axios.request({
      method: "get",
      url: "admin/contractor_type_services",
    });
  },
  changeContractorsGeneralData(formData, id) {
    return axios.request({
      method: "put",
      url: `contractors/general_info/${id}`,
      data: formData,
    });
  },
  changeContractorsCompanyDetailsData(formData, id) {
    return axios.request({
      method: "put",
      url: `contractors/about_company/${id}`,
      data: formData,
    });
  },
  changeContractorsContactInfoData(formData, id) {
    return axios.request({
      method: "put",
      url: `contractors/contacts_info/${id}`,
      data: formData,
    });
  },
  getAssetsData() {
    return axios.request({ method: "get", url: "contractors/get_assets" });
  },
};

export const contractorApi = {
  fetchContractorBankDetailsData(id) {
    return axios.request({ method: "get", url: `bank_details/${id}` });
  },
  insertContractorBankDetailsData(data) {
    return axios.request({ method: "post", url: "bank_details/", data });
  },
  updateContractorBankDetailsData(contractor_bank_detail, data) {
    return axios.request({
      method: "put",
      url: `bank_details/${contractor_bank_detail}`,
      data,
    });
  },
  insertContractorGeneralData(data) {
    debugger;
    return axios.request({ method: "post", url: "contractors/", data });
  },
  insertContractorContactData(data) {
    return axios.request({ method: "post", url: "contacts/", data });
  },
};
