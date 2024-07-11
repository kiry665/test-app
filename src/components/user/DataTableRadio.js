import React, { useState } from 'react';
import { Pagination, Table, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import styles from '../../styles/DataTable.module.css';

const DataTableRadio = ({ columns, data, onRowSelect, selectedId, setSelectedId, radioAccessor }) => {
    // const [selectedId, setSelectedId] = useState(null);
  
    const handleRowClick = (id) => {
      setSelectedId(id);
      onRowSelect(id);
    };
  
    return (
    <div>
        <Table bordered>
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
                <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                    <td key={colIndex} className={styles.td}>
                    {column.accessor === radioAccessor ? (
                        <Form.Check
                        type="radio"
                        name="dataTableRadio"
                        onChange={() => handleRowClick(row.id)}
                        checked={selectedId === row.id}
                        label={row[column.accessor]}
                        />
                    ) : (
                        row[column.accessor]
                    )}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </Table>
  </div>
    );
};

export default DataTableRadio