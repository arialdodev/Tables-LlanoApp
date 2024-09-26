import TableGeneric from "./Table/TableGeneric";
import { useEffect, useState } from "react";
import { getResource } from "./Api/ResourceApi";
import styles from "./App.module.scss";

console.log(styles);

interface itemResource {
  name: string;
  description: string;
  resourceTypesId: number;
  createDate: string;
}

const resourceHeaders = ["Nombre", "descripcion", "Categoria", "Fecha"];

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
        />
      </div>
      <br />
      <br />
    </>
  );
}

export default App;
