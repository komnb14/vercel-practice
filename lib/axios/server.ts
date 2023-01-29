import axios, {AxiosError, AxiosResponse} from "axios";
import AppError, {ErrorName} from "../error/Error";

const serverAxios = axios.create();


serverAxios.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },
    function (error: AxiosError) {
        return getAppError(error);
    }
)


const getAppError = (error: AxiosError) => {
    const status = error?.response?.status;
    switch (status) {
        case 404: {
            return createAppError("NotFound")
        }
        case 422: {
            return createAppError("ValidationError")
        }
    }
    return Promise.reject(error)
}

const createAppError = (name: ErrorName) => {
    return Promise.reject(new AppError(name))
}

export default serverAxios;
