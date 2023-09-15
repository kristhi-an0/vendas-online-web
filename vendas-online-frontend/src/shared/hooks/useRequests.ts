import axios from "axios";
import { useState } from "react"
import { useGlobalContext } from "./useGlobalContext";
import { connectionApiPost } from "../functions/connection/connectionAPI";

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('Erro')
      });
  };

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);
    const returnData = await connectionApiPost(url, body)
      .then((result) => {
        setNotification('Entrando...', 'success');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
    setLoading(false);
    return returnData;
  };
  
  return {
    loading,
    getRequest,
    postRequest,
  };
}