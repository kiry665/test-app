import { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../../styles/Individual.module.css"
import OrganizationModal from "./Modals/OrganizationModal";
import SearchBar from "./SearchBar";
import DataTableRadio from "./DataTableRadio";
import Pagination from "./Pagination";
import DataTableHover from "./DataTableHover";

const Individual = () => {
    
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

    const [individualDetails, setIndividualDetails] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");

    const [onTransport, setOnTransport] = useState(false);

    const [organizationDetails, setOrganizationDetails] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [nextForm, setNextForm] = useState(false);

    const [showAccess, setShowAccess] = useState(false);

    const [showOrganizationModal, setShowOrganizationModal] = useState(false);

    const [selectedIndividualId, setSelectedIndividualId] = useState(null);

    const rowsPerPage = 3;
    const totalPages = Math.ceil(individualDetails.length / rowsPerPage);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = individualDetails.slice(indexOfFirstRow, indexOfLastRow);

    const handleClear = () => {
        setCurrentPage(1);
        setSearchQuery("");
        setOnTransport(false);
        setIndividualDetails([]);
        setOrganizationDetails([]);
        setNextForm(false);
        setSelectedIndividualId(null);
        setShowAccess(false);
    };

    const handleChangeOnTransport = () => {
        setOnTransport(!onTransport);
    }

    //получить из API
    const handleFindIndividuals = () => {
        const filteredDetails = individualDetailsAll.filter(individual =>
            individual.fio.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if(filteredDetails.length == 0){
            setShowAccess(true);
        }
        setIndividualDetails(filteredDetails);
        setCurrentPage(1);
    };

    //получить из API
    const handleFindOrganization = (id) => {
        setOrganizationDetails([
            {id: 1, name: "Билдинг", accessTime: "C 8:00 до 20:00", status: "Разрешено"},
            {id: 2, name: "Билдинг", accessTime: "C 8:00 до 20:00", status: "Разрешено"},
            {id: 3, name: "Билдинг", accessTime: "C 8:00 до 20:00", status: "Разрешено"},
            {id: 4, name: "Билдинг", accessTime: "C 8:00 до 20:00", status: "Разрешено"}
        ]);
        setNextForm(true); //получить по API 
        setShowAccess(true);
    };

    const handleChangePage = (pageNumber) => {
        if(currentPage !== pageNumber){
            setNextForm(false);
            setCurrentPage(pageNumber);
            setOrganizationDetails([]);
            setSelectedIndividualId(null);
        }
    };

    const handleOrganizationClick = (id) => {
        console.log(id);
        setShowOrganizationModal(true);
    };

    return(
        <div>
            <h1 className={styles.h1}>Физическое лицо</h1>
            <SearchBar
                placeholder={"ФИО"}
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
                handleClear={handleClear} 
                handleFind={handleFindIndividuals}
            />
            <Form.Check id="onTransport" type="checkbox" checked= {onTransport} onChange={handleChangeOnTransport} label="На транспорте"/>
            <br/>
            {showAccess ? (
                nextForm ? (
                    <h2 className={styles.allowed}>Доступ разрешён</h2>
                ) : (
                    <h2 className={styles.forbidden}>Доступ запрещён</h2>
                )
            ) : null}
            <br/>
            <DataTableRadio
                columns={[
                    {
                        header: 'ФИО',
                        accessor: 'fio',
                        style: { width: '50%' },
                    },
                    {
                        header: 'Паспорт',
                        accessor: 'passport',
                    }
                    ]}
                data={currentRows}
                onRowSelect={handleFindOrganization}
                selectedId={selectedIndividualId}
                setSelectedId={setSelectedIndividualId}
                radioAccessor= 'fio'
            />
            <Pagination
                handleChangePage={handleChangePage}
                totalPages={totalPages}
                currentPage={currentPage}
            />
            <br/>
            <DataTableHover
                columns={[
                    { 
                        header: 'Организация', 
                        accessor: 'name', 
                        style: { width: '33%' } 
                    },
                    { 
                        header: 'Время доступа', 
                        accessor: 'accessTime', 
                        style: {} 
                    },
                    { 
                        header: 'Статус', 
                        accessor: 'status', 
                        style: {} 
                    }
                ]}
                data={organizationDetails}
                onRowClick={handleOrganizationClick}
            />
            <OrganizationModal
                show={showOrganizationModal}
                onHide={() => setShowOrganizationModal(false)}
            />
        </div>
    );
}

export default Individual;