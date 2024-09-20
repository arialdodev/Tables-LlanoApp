import styles from "./TableGeneric.module.scss";

interface itemResource {
  nombre: string;
  solicita: string;
  correo: string;
  categoria: string;
  fecha: string;
}

interface itemUser {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
}

interface tableProps<T> {
  tableHeaders: string[];
  items: T[];
  tittles: string[];
}

type dataItem = itemResource | itemUser;

function TableGeneric<T extends dataItem>({
  tableHeaders,
  items,
  tittles,
}: tableProps<T>) {
  return (
    <>
      {tittles.length > 0 && (
        <div className={styles.titleContainer}>
          {tittles.map((itemTitulos) => (
            <div key={itemTitulos} className={styles.title}>
              {itemTitulos}
            </div>
          ))}
        </div>
      )}
      <table className={`table ${styles.table_generic}`}>
        <thead>
          <tr>
            <th>#</th>
            {tableHeaders.map((item) => (
              <th key={item}>{item}</th>
            ))}
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            let badgeColor = "";
            if ("categoria" in item) {
              switch (item.categoria) {
                case "Palabras":
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--words"]}`;
                  break;
                case "Refranes":
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--proverbs"]}`;
                  break;
                case "Leyendas":
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--legends"]}`;
                  break;
                case "Coplas":
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--couplets"]}`;
                  break;
                default:
                  badgeColor = "";
                  break;
              }
            }

            console.log(badgeColor);

            return (
              <tr>
                <th scope="row">{index + 1}</th>
                {"nombre" in item && <td>{item.nombre}</td>}
                {"apellido" in item && <td>{item.apellido}</td>}
                {"solicita" in item && <td>{item.solicita}</td>}
                {"telefono" in item && <td>{item.telefono}</td>}
                {"correo" in item && <td>{item.correo}</td>}
                {"categoria" in item && (
                  <td>
                    <div className={badgeColor}>{item.categoria}</div>
                  </td>
                )}
                {"fecha" in item && <td>{item.fecha}</td>}
                <td className={styles.table_generic__arrow}>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default TableGeneric;
