import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://localhost:7019/Api";

export interface itemResource {
  name: string;
  description: string;
  resourceTypesId: number;
  createDate: string;
}

interface ApiResponse<T> {
  isSuccess: boolean;
  value: T;
  error: string | null;
  errorType: number;
}

export const getResource = async (): Promise<AxiosResponse<ApiResponse<itemResource[]>>> => {
  const response = await axios.get<ApiResponse<itemResource[]>>(BASE_URL + "/Resource");
  console.log(response.data);
  return response;
};