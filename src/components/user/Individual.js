import { useState } from "react";
import { Pagination, Table, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import styles from "../../styles/Individual.module.css"
import VerticalStepper from "./VerticalStepper";
import OrganizationModal from "./Modals/OrganizationModal";

const Individual = () => {
    
    //то что есть в базе
    const [individualDetailsAll, setIndividualDetailsAll] = useState([
        {id: "1", fio: "Иванов Иван Иванович", passport: "1234 567890" },
        {id: "2", fio: "Петров Петр Петрович", passport: "2345 678901" },
        {id: "3", fio: "Сидоров Сидор Сидорович", passport: "3456 789012" },
        {id: "4", fio: "Кузнецов Алексей Андреевич", passport: "4567 890123" },
        {id: "5", fio: "Смирнова Мария Ивановна", passport: "5678 901234" },
        {id: "6", fio: "Васильев Дмитрий Сергеевич", passport: "6789 012345" },
        {id: "7", fio: "Михайлова Ольга Петровна", passport: "7890 123456" },
        {id: "8", fio: "Фёдоров Виктор Николаевич", passport: "8901 234567" },
        {id: "9", fio: "Дмитриева Анна Васильевна", passport: "9012 345678" },
        {id: "10", fio: "Борисов Максим Александрович", passport: "0123 456789"}
    ]);

    //то что получили из БД по запросу
    const [individualDetails, setIndividualDetails] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");

    const [organizationDetails, setOrganizationDetails] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [nextForm, setNextForm] = useState(false);

    const [showOrganizationModal, setShowOrganizationModal] = useState(false);

    const rowsPerPage = 3;
    const totalPages = Math.ceil(individualDetails.length / rowsPerPage);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = individualDetails.slice(indexOfFirstRow, indexOfLastRow);

    const handleClear = () => {
        setCurrentPage(1);
        setSearchQuery("");
        setIndividualDetails([]);
        setOrganizationDetails([]);
        setNextForm(false);
    };

    const handleFindIndividuals = () => {
        const filteredDetails = individualDetailsAll.filter(individual =>
            individual.fio.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setIndividualDetails(filteredDetails);
        setCurrentPage(1);
    };

    const handleFindOrganization = () => {
        setNextForm(false);
        setOrganizationDetails([
            {id: 1, name: "Билдинг", startTimeOfAccess: "08:00", endTimeOfAccess: "20:00", status: checkAccess("10:00", "20:00")},
            {id: 2, name: "Билдинг", startTimeOfAccess: "08:00", endTimeOfAccess: "20:00", status: checkAccess("10:00", "20:00")},
            {id: 3, name: "Билдинг", startTimeOfAccess: "08:00", endTimeOfAccess: "20:00", status: checkAccess("10:00", "20:00")},
            {id: 4, name: "Билдинг", startTimeOfAccess: "08:00", endTimeOfAccess: "20:00", status: checkAccess("10:00", "20:00")}
        ]);
    };

    const handleChangePage = (pageNumber) => {
        if(currentPage !== pageNumber){
            setNextForm(false);
            setCurrentPage(pageNumber);
            setOrganizationDetails([]);
        }
    };

    const handlePreviousPage = () => {
        if(currentPage > 1){
            handleChangePage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if(currentPage < totalPages){
            handleChangePage(currentPage + 1);
        }
    };

    const handleOrganizationClick = (id) => {
        setShowOrganizationModal(true);
    };

    function checkAccess(startTimeOfAccess, endTimeOfAccess){
        
        let current = new Date();

        let [startHour, startMinute] = startTimeOfAccess.split(':').map(Number);
        let [endHour, endMinute] = endTimeOfAccess.split(':').map(Number);

        let startTime = new Date(current);
        startTime.setHours(startHour, startMinute, 0, 0);

        let endTime = new Date(current);
        endTime.setHours(endHour, endMinute, 0, 0);

        if (current >= startTime && current <= endTime) {
            setNextForm(true);
            return "Разрешено";
        } else {
            return "Запрещено";
        }
    }

    return(
        <div className={styles.container}>
        <Row>
            <Col md={2}>
                <div className={styles.stepperContainer}>
                    <VerticalStepper stepCount={3} currentStep={0} stepLabels={['Физическое лицо', 'Транспортное средсто', 'Материальные ценности']}/>
                </div>
            </Col>
            <Col md={10}>
                <h1 className={styles.h1}>Физическое лицо</h1>
                <div className={styles.searchContainer}>
                    <InputGroup>
                        <Form.Control placeholder="ФИО" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                        <Button className={styles.searchClearButton} variant="light" onClick={handleClear}>✕</Button>
                    </InputGroup>
                    <Button className={styles.searchButton} variant="primary" title="Найти" onClick={handleFindIndividuals}>Найти</Button>
                </div>
                <br/>
                <Form.Check type="checkbox" label="На транспорте"/>
                <br/>
                {nextForm && <h2>Доступ разрешён</h2>}
                <br/>
                <Table>
                    <thead>
                        <tr>
                            <th className={styles.th} style={{ width: '50%' }}>ФИО</th>
                            <th className={styles.th}>Паспорт</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((individualDetail, index) => (
                            <tr key={index}>
                                <td className={styles.td}>
                                    <Form.Check type="radio" key={individualDetail.id} name="individual" onChange={(e) => handleFindOrganization(e)} label={individualDetail.fio}/>
                                </td>
                                <td className={styles.td}>{individualDetail.passport}</td>
                            </tr>
                        ))}
                        {/* {currentRows.length < 3 && Array.from({ length: 3 - currentRows.length }).map((_, index) => (
                            <tr key={`empty-${index}`}>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        ))} */}
                    </tbody>
                </Table>
                <br/>
                <Pagination className={styles.pagination}>
                    <Pagination.Prev onClick={handlePreviousPage}>Назад</Pagination.Prev>
                    {Array.from({length: totalPages}, (_, index) => (
                        <Pagination.Item key={index+1} active={index+1 === currentPage} onClick={() => handleChangePage(index+1)}>{index+1}</Pagination.Item>
                    ))}
                    <Pagination.Next onClick={handleNextPage}>Далее</Pagination.Next>
                </Pagination>
                <br/>
                <Table hover>
                    <thead>
                        <tr>
                            <th className={styles.th} style={{ width: '33%' }}>Организация</th>
                            <th className={styles.th}>Время доступа</th>
                            <th className={styles.th}>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        {organizationDetails.map((organizationDetail, index) => (
                            <tr key={organizationDetail.id} onClick={() => handleOrganizationClick(organizationDetail.id)}>
                                <td className={styles.td}>{organizationDetail.name}</td>
                                <td className={styles.td}>C {organizationDetail.startTimeOfAccess} до {organizationDetail.endTimeOfAccess}</td>
                                <td className={styles.td}>{organizationDetail.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button className={styles.button} disabled={!nextForm}>Далее</Button>
            </Col>
        </Row>
        <OrganizationModal
                show={showOrganizationModal}
                onHide={() => setShowOrganizationModal(false)}
            />
        </div>
    );
}

export default Individual;