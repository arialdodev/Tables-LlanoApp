import TableGeneric from "./Table/TableGeneric";
import styles from "./App.module.scss";

console.log(styles);

interface itemResource {
  nombre: string;
  solicita: string;
  correo: string;
  categoria: string;
  fecha: string;
}

const listResources: itemResource[] = [
  {
    nombre: "Criollo",
    solicita: "Elver Riaño",
    correo: "diazelver@gmail.com",
    categoria: "Palabras",
    fecha: "06/14/2024",
  },
  {
    nombre: "Más resoplón que...",
    solicita: "Arialdo Riaño",
    correo: "arialdodiaz@gmail.com",
    categoria: "Refranes",
    fecha: "06/14/2024",
  },
  {
    nombre: "La Llorona",
    solicita: "Arialdo Riaño",
    correo: "arialdodiaz@gmail.com",
    categoria: "Leyendas",
    fecha: "06/14/2024",
  },
  {
    nombre: "El cuatro y el ar...",
    solicita: "Arialdo Riaño",
    correo: "arialdodiaz@gmail.com",
    categoria: "Coplas",
    fecha: "06/14/2024",
  },
  {
    nombre: "Ceresere",
    solicita: "Elver Riaño",
    correo: "diazelver@gmail.com",
    categoria: "Palabras",
    fecha: "06/14/2024",
  },
];

const resourceHeaders = [
  "Nombre",
  "Solicita",
  "Correo",
  "Categoria",
  "Fecha de solicitud",
];

interface itemUser {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
}

const listUsers: itemUser[] = [
  {
    nombre: "Carlos",
    apellido: "González",
    telefono: "3123456789",
    correo: "carlos.gonzalez@example.com",
  },
  {
    nombre: "María",
    apellido: "Fernández",
    telefono: "3169876543",
    correo: "maria.fernandez@example.com",
  },
  {
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "3001234567",
    correo: "juan.perez@example.com",
  },
  {
    nombre: "Ana",
    apellido: "Ramírez",
    telefono: "3198765432",
    correo: "ana.ramirez@example.com",
  },
  {
    nombre: "Luis",
    apellido: "Martínez",
    telefono: "3187654321",
    correo: "luis.martinez@example.com",
  },
];

const usersHeaders = ["Nombre", "Apellido", "Telenono", "Correo"];

const titleResource = ["Solicitudes nuevo contenido"];

const titleUser = ["Listado de usuarios registrados"];

function App() {
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
      <div>
        <TableGeneric
          tableHeaders={usersHeaders}
          items={listUsers}
          tittles={titleUser}
        ></TableGeneric>
      </div>
    </>
  );
}

export default App;
