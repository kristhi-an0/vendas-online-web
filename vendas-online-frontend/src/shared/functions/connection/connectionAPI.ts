import axios from "axios";
import { MethodsEnum } from "../../enums/methods.enum";
import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from "../../constants/errosStatus";

export default class ConnectionApi {
  static async call<T>(url: string, method: string, body: unknown) {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: unknown) {
    return ConnectionApi.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
    });
  }
}

export const connectionApiGet = async <T>(url: string) => {
  return ConnectionApi.connect<T>(url, MethodsEnum.GET);
}

export const connectionApiDelete = async <T>(url: string) => {
  return ConnectionApi.connect<T>(url, MethodsEnum.DELETE);
}

export const connectionApiPost = async <T>(url: string, body: unknown) => {
  return ConnectionApi.connect<T>(url, MethodsEnum.POST, body);
}

export const connectionApiPut = async <T>(url: string, body: unknown) => {
  return ConnectionApi.connect<T>(url, MethodsEnum.PUT, body);
}

export const connectionApiPatch = async <T>(url: string, body: unknown) => {
  return ConnectionApi.connect<T>(url, MethodsEnum.PATCH, body);
}