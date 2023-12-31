import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { AuthType } from "../../modules/login/types/AuthType";
import { ProductRoutesEnum } from "../../modules/product/routes";
import { ERROR_INVALID_PASSWORD } from "../constants/errosStatus";
import { URL_AUTH } from "../constants/urls";
import { setAuthorizationToken } from "../functions/connection/auth";
import ConnectionApi, { MethodType, connectionApiPost } from "../functions/connection/connectionAPI";
import { useGlobalContext } from "./useGlobalContext";

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    const returnObject: T | undefined = await ConnectionApi.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error')
        return undefined;
      });

    setLoading(false);
    return returnObject;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);
    await connectionApiPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result.user);
        setAuthorizationToken(result.accessToken);
        navigate(ProductRoutesEnum.PRODUCT);
        return result;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error');
        return undefined;
      });
    setLoading(false);
  };
  
  return {
    loading,
    authRequest,
    request,
  };
}