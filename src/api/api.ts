import Axios from "axios";

// const jwt = localStorage.getItem("jwt_token")
//   ? localStorage.getItem("jwt_token")
//   : null;

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZ3JlZW4ta2lzLnRlY21hbi5ydVwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNDU1MjU5OSwiZXhwIjoxNjM0NjM4OTk5LCJuYmYiOjE2MzQ1NTI1OTksImp0aSI6Im9HUWZjUUc5ZTRJcGpkakQiLCJzdWIiOjE1NiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.zYIraF6S910WV6vP5aATSfGjgBBQwzaIJ2BJf6O5CGg`,
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
  changeContractorsGeneralData(formData: any, id: any) {
    return axios.request({
      method: "put",
      url: `contractors/general_info/${id}`,
      data: formData,
    });
  },
  changeContractorsCompanyDetailsData(formData: any, id: any) {
    return axios.request({
      method: "put",
      url: `contractors/about_company/${id}`,
      data: formData,
    });
  },
  changeContractorsContactInfoData(formData: any, id: any) {
    return axios.request({
      method: "put",
      url: `contractors/contacts_info/${id}`,
      data: formData,
    });
  },


  //contacts update
  changeContactGeneralInfoData(formData: any, id: any) {
    return axios.request({
      method: "put",
      url: `contacts/general_info/${id}`,
      data: formData,
    });
  },
  changeContactCongratulationsData(formData: any, id: any) {
    return axios.request({
      method: "put",
      url: `contacts/congratulations_info/${id}`,
      data: formData,
    });
  },
  changeContactEmployeesData(formData: any, id: any) {
    return axios.request({
      method: "put",
      url: `contacts/green_employee_info/${id}`,
      data: formData,
    });
  },
  getAssetsData() {
    return axios.request({ method: "get", url: "contractors/get_assets" });
  },
};

export const contractorApi = {
  fetchContractorBankDetailsData(id: any) {
    return axios.request({ method: "get", url: `bank_details/${id}` });
  },
  insertContractorBankDetailsData(data: any) {
    return axios.request({ method: "post", url: "bank_details/", data });
  },
  updateContractorBankDetailsData(contractor_bank_detail: any, data: any) {
    return axios.request({
      method: "put",
      url: `bank_details/${contractor_bank_detail}`,
      data,
    });
  },
  insertContractorGeneralData(data: any) {
    return axios.request({ method: "post", url: "contractors/", data });
  },
  insertContractorContactData(data: any) {
    return axios.request({ method: "post", url: "contacts/", data });
  },
  getContractorContactData() {
    return axios.request({ method: "get", url: "contacts" });
  },
  searchContactPersonData() {
    return axios.request({ method: "get", url: "employees"});
  },
};
