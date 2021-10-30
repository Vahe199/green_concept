import {toast} from "react-toastify";

export const notifyError = (msg:any) => toast.error(msg,{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress:undefined,
});
export const notifySuccess = (msg:any) => toast.success(msg,{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
