import Axios from "axios";

// const jwt = localStorage.getItem("jwt_token")
//   ? localStorage.getItem("jwt_token")
//   : null;

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZ3JlZW4ta2lzLnRlY21hbi5ydVwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTc0ODEwNSwiZXhwIjoxNjM1ODM0NTA1LCJuYmYiOjE2MzU3NDgxMDUsImp0aSI6IjhXQmFzb1Z6ek9XdE5ndzEiLCJzdWIiOjE1NiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.ZrrND8-JwCTsUJ5jaaNn8VruT23Nlej6m2yVmRTzAD0`,
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
  getContractorsDataWithId(id: number) {
    return axios.request({
      method: "get",
      url: `contractors/${id}`,
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
  changeContactGeneralInfoData(id: any, formData: any) {
    return axios.request({
      method: "put",
      url: `contacts/general_info/${id}`,
      data: formData,
    });
  },

  getAssetsData() {
    return axios.request({ method: "get", url: "contractors/get_assets" });
  },
};

export const contractorApi = {
  fetchContractorsContactList(config = {}) {
    return axios.request({
      method: "get",
      url: `contacts`,
      ...config,
    });
  },
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
  getContactById(id: number) {
    return axios.request({
      method: "get",
      url: `contacts/${id}`,
    });
  },
  changeContactEmployeesData(id: number, formData: any) {
    return axios.request({
      method: "put",
      url: `contacts/green_employee_info/${id}`,
      data: formData,
    });
  },
  changeContactCongratulationsData(id: number, formData: any) {
    return axios.request({
      method: "put",
      url: `contacts/congratulations_info/${id}`,
      data: formData,
    });
  },
  insertContractorGeneralData(data: any) {
    return axios.request({ method: "post", url: "contractors/", data });
  },
  insertContractorContactData(data: any) {
    return axios.request({ method: "post", url: "contacts/", data });
  },
  getContractorContactData(config = {}) {
    return axios.request({ method: "get", url: "contacts", ...config });
  },

};

export const employeesApi = {
  creatNewEmployee(data: any) {
    return axios.request({
      method: "post",
      url: `employees`,
      data,
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      },
    });
  },

  createNewEmployeeQualification(id: number, data: any) {
    return axios.request({
      method: "post",
      url: `employee_skills/${id}`,
      data,
    });
  },

  getEmployeesAssets() {
    return axios.request({ method: "get", url: "employees/get_assets" });
  },

  getEmployeesData() {
    return axios.request({ method: "get", url: "employees" });
  },

  getEmployeeDataById(id: number) {
    return axios.request({ method: "get", url: `employees/${id}` });
  },

  updateEmployeeDataById(id: number, data: any) {
    return axios.request({
      method: "post",
      url: `employees/employee_data/${id}`,
      data,
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      },
    });
  },
  updateEmployeeGeneralInfoById(data: any, id: number) {
    return axios.request({
      method: "put",
      url: `employees/general_info/${id}`,
      data,
    });
  },
  updateEmployeeAboutInfoById(data: any, id: number) {
    return axios.request({
      method: "put",
      url: `employees/about_info/${id}`,
      data,
    });
  },

  //employee educations

  updateEmployeeEducationsById(id: number, data: any) {
    return axios.request({
      method: "put",
      url: `employee_educations/${id}`,
      data,
    });
  },
  updateEmployeeSkillsById(id: number, data: any) {
    return axios.request({ method: "put", url: `employee_skills/${id}`, data });
  },
  updateEmployeeRegisterById(id: number, data: any) {
    return axios.request({
      method: "put",
      url: `employee_registers/${id}`,
      data,
    });
  },
};
