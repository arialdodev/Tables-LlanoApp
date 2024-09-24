import TableGeneric from "./Table/TableGeneric";
import { useEffect, useState } from "react";
import { getResource } from "./Api/ResourceApi";
import styles from "./App.module.scss";

console.log(styles);

interface itemResource {
  nombre: string;
  descripcion: string;
  resourceTypesId: string;
  categoria: string;
  fecha: string;
}

const resourceHeaders = [
  "Nombre",
  "descripcion",
  "resourceTypesId",
  "Categoria",
  "Fecha",
];

const titleResource = ["Solicitudes nuevo contenido"];

function App() {
  
const [listResources, setListResources] = useState<itemResource[]>([]);

useEffect(() => {
  const fetchResources = async () => {
      const response = await getResource();
      setListResources(response.data);
  };

  fetchResources();
}, []);

  return (
    <>
      <div>
        <TableGeneric
          tableHeaders={resourceHeaders}
          items={listResources}
          tittles={titleResource}
        ></TableGeneric>
      </div>
      <br />
      <br />
    </>
  );
}

export default App;
