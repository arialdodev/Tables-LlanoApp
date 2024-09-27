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

enum resourceTypesIdEnum {
  Leyendas = 1,
  Palabras = 2,
  Coplas = 3,
  Refranes = 4,
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

function TableGeneric({ tableHeaders, items, tittles }: tableProps) {

  const getResourceType = (id: number): string => {
    switch (id) {
      case resourceTypesIdEnum.Leyendas :
        return "Leyendas";
      case resourceTypesIdEnum.Palabras:
        return "Palabras";
      case resourceTypesIdEnum.Coplas:
        return "Coplas";
      case resourceTypesIdEnum.Refranes:
        return "Refranes";
      default:
        return "Desconocido";
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
                case resourceTypesIdEnum.Leyendas:
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--legends"]}`;
                  break;
                case resourceTypesIdEnum.Palabras:
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--words"]}`;
                  break;
                case resourceTypesIdEnum.Coplas:
                  badgeColor = `${styles.badgeColor} ${styles["badgeColor--couplets"]}`;
                  break;
                case resourceTypesIdEnum.Refranes:
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
                  <div className={badgeColor}>
                    {getResourceType(item.resourceTypesId)}
                  </div>
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
