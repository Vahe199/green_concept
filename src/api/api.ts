import Axios from "axios";

// const jwt = localStorage.getItem("jwt_token")
//   ? localStorage.getItem("jwt_token")
//   : null;

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZ3JlZW4ta2lzLnRlY21hbi5ydVwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTIyOTgxNSwiZXhwIjoxNjM1MzE2MjE1LCJuYmYiOjE2MzUyMjk4MTUsImp0aSI6IlhDdDl5d211OFphVTNROEgiLCJzdWIiOjE1NiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9._A4uVquz8wobCO5AghVRaaxEqo85Y_n4weaUgak5mqU`,
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
  getContractorContactDataWithId(id: number) {
    return axios.request({ method: "get", url: `contacts/${id}` });
  },
};

export const employeesApi = {

  creatNewEmployee(data: any) {
    debugger
    return axios.request({
      method: "post",
      url: `employees`,
      data,
      headers: {"Content-Type": "multipart/form-data"},
    });
  },

  getEmployeesAssets() {
    return axios.request({method: "get", url: "employees/get_assets"});
  },

  getEmployeesData() {
    return axios.request({method: "get", url: "employees"});
  },

  getEmployeeDataById(id: number) {
    return axios.request({method: "get", url: `employees/${id}`});
  },


  updateEmployeeDataById(id: number,data: any) {
    debugger
    return axios.request({
      method: "put",
      url: `employees/employee_data/${id}`,
      data,
      headers: {"Content-Type": "multipart/form-data"},
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

  updateEmployeeEducationsById(id:number, data:any) {
    return axios.request({ method: "put", url: `employee_educations/${id}`, data })

  }  ,
  updateEmployeeSkillsById( id:number,data:any,) {

    return axios.request({ method: "put", url: `employee_skills/${id}`, data })

  },
  updateEmployeeRegisterById( id:number,data:any,) {

    return axios.request({ method: "put", url: `employee_registers/${id}`, data })

  }
}

