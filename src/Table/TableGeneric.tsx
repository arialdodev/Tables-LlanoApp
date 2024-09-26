import styles from "./TableGeneric.module.scss";

interface itemResource {
  name: string;
  description: string;
  resourceTypesId: number;
  createDate: string;
}

interface tableProps {
  tableHeaders: string[];
  items: itemResource[];
  tittles: string[];
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

function TableGeneric({
  tableHeaders,
  items,
  tittles,
}: tableProps) {

  const getResourceType = (id: number): string => {
    switch (id) {
      case 1:
        return 'Leyendas';
      case 2:
        return 'Palabras';
      case 3:
        return 'Coplas';
      case 4:
        return 'Refranes';
      default:
        return 'Desconocido';
    }
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h2>{tittles[0]}</h2>
      </div>
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
            if ("resourceTypesId" in item) {
              switch (item.resourceTypesId) {
                case 1:
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--legends"]}`;
                  break;
                case 2:
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--words"]}`;
                  break;
                case 3:
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--couplets"]}`;
                  break;
                case 4:
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--proverbs"]}`;
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
                <td>{item.name}</td>
                <td>{item.description.substring(0, 20)}</td>

                <td>
                  <div className={badgeColor}>{getResourceType(item.resourceTypesId)}</div>
                </td>
                <td>{formatDate(item.createDate)}</td>
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
