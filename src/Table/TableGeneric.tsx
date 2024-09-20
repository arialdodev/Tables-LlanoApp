import styles from "./TableGeneric.module.scss";

interface itemResource {
  nombre: string;
  descripcion: string;
  categoria: string;
  fecha: string;
}

interface tableProps<T> {
  tableHeaders: string[];
  items: T[];
  tittles: string[];
}


function TableGeneric<T extends itemResource>({
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
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                {"nombre" in item && <td>{item.nombre}</td>}
                {"descripcion" in item && <td>{item.descripcion}</td>}
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
