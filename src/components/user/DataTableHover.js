import styles from "../../styles/DataTable.module.css";
import { Table } from "react-bootstrap";

const DataTableHover = ({ columns, data, onRowClick }) => {
    return(
        <Table hover bordered>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className={styles.th} style={column.style}>
                        {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={row.id} onClick={() => onRowClick(row.id)}>
                        {columns.map((column, colIndex) => (
                        <td key={colIndex} className={styles.td}>
                            {row[column.accessor]}
                        </td>
                        ))}
                    </tr>
                ))}
            </tbody>
    </Table>
    );
}

export default DataTableHover;