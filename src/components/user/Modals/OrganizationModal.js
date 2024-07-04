import styles from '../../../styles/OrganizationModal.module.css'
import { useState } from "react";
import { Table, Button, Modal } from 'react-bootstrap';

function OrganizationModal({show, onHide}){

    const leftColumnData = ['Организация', 'Договор №', 'Дата договора', 'Дата окончания договора', 'Врямя доступа', 'ФИО', 'Дожность'];

    const [rightColumnData, setRightColumnData] = useState(['Билдинг', '123', '03.07.2024', '03.07.2025', '8:00-21:00', 'Иван Иванович Иванов', '213asd']);

    return(
        <Modal show={show} onHide={onHide}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Основание для допуска</h1>
                <br></br>
                <Table bordered>
                    <tbody>
                        {leftColumnData.map((leftData, index) => (
                            <tr key={index}>
                                <td className={styles.leftColumn}>{leftData}</td>
                                <td>{rightColumnData[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button className={styles.button} variant="primary" onClick={onHide}>Закрыть</Button>
            </div>
        
        </Modal>
    );
}

export default OrganizationModal;