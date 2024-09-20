import axios,{AxiosResponse} from "axios"

const BASE_URL = "https://localhost:7019/Api"

export interface itemResource {
    nombre: string;
    descripcion: string;
    resourceTypesId: string;
    categoria: string;
    fecha: string;
  }

export const getResource = async (): Promise<AxiosResponse<itemResource[]>> => {
    const response = await axios.get<itemResource[]>(BASE_URL + "/Resource");
    console.log(response.data);
    return response;
    };