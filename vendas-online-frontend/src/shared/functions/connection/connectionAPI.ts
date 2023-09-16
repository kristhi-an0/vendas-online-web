import axios, { AxiosRequestConfig } from "axios";
import { MethodsEnum } from "../../enums/methods.enum";
import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from "../../constants/errosStatus";
import { getAuthorizationToken } from "./auth";

export type MethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export default class ConnectionApi {
  static async call<T>(url: string, method: MethodType, body: unknown): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: getAuthorizationToken(),
        'Content-Type': 'application/json',
      },
    };
    switch (method) {
      case MethodsEnum.POST:
      case MethodsEnum.PUT:
      case MethodsEnum.PATCH:
        return (await axios[method]<T>(url, body, config)).data;
      case MethodsEnum.GET:
      case MethodsEnum.DELETE:
      default:
        return (await axios[method]<T>(url, body, config)).data;
    }
  }

  static async connect<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
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
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const connectionApiGet = async <T>(url: string): Promise<T> => {
  return ConnectionApi.connect<T>(url, MethodsEnum.GET);
}

export const connectionApiDelete = async <T>(url: string): Promise<T> => {
  return ConnectionApi.connect<T>(url, MethodsEnum.DELETE);
}

export const connectionApiPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionApi.connect<T>(url, MethodsEnum.POST, body);
}

export const connectionApiPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionApi.connect<T>(url, MethodsEnum.PUT, body);
}

export const connectionApiPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionApi.connect<T>(url, MethodsEnum.PATCH, body);
}