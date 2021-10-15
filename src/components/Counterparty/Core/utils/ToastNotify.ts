import {toast} from "react-toastify";

export const notifyError = () => toast.error("некорректные данные",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress:undefined,
});
export const notifySuccess = () => toast.success("подрядчик успешно добавлен",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
