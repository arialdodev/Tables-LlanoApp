import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://localhost:7019";

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

export const getResource = async (): Promise<
  AxiosResponse<ApiResponse<itemResource[]>>
> => {
  const response = await axios.get<ApiResponse<itemResource[]>>(
    BASE_URL + "/Api/Resource",
  );
  return response;
};
