import { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../../styles/Individual.module.css"
import OrganizationModal from "./Modals/OrganizationModal";
import SearchBar from "./SearchBar";
import DataTableRadio from "./DataTableRadio";
import Pagination from "./Pagination";
import DataTableHover from "./DataTableHover";

const Vehicle = () => {

    const [VehiclesAll, setVehiclesAll] = useState([
        {id: "1", name: "Камаз", number: "А111АА96" },
        {id: "1", name: "Камаз", number: "А999АА96" }
    ]);

    const [VehicleDetails, setVehicleDetails] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");

    const [onTransport, setOnTransport] = useState(false);

    const [organizationDetails, setOrganizationDetails] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [nextForm, setNextForm] = useState(false);

    const [showAccess, setShowAccess] = useState(false);

    const [showOrganizationModal, setShowOrganizationModal] = useState(false);

    const [selectedVehicleId, setSelectedVehicleId] = useState(null);

    const rowsPerPage = 3;
    const totalPages = Math.ceil(VehicleDetails.length / rowsPerPage);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = VehicleDetails.slice(indexOfFirstRow, indexOfLastRow);

    const handleClear = () => {
        setCurrentPage(1);
        setSearchQuery("");
        setOnTransport(false);
        setVehicleDetails([]);
        setOrganizationDetails([]);
        setNextForm(false);
        setSelectedVehicleId(null);
        setShowAccess(false);
    };

    const handleChangeOnTransport = () => {
        setOnTransport(!onTransport);
    }

    //получить из API
    const handleFindVehicles = () => {
        const filteredDetails = VehiclesAll.filter(vehicle =>
            vehicle.number.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if(filteredDetails.length == 0){
            setShowAccess(true);
        }
        setVehicleDetails(filteredDetails);
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
            setSelectedVehicleId(null);
        }
    };

    const handleOrganizationClick = (id) => {
        console.log(id);
        setShowOrganizationModal(true);
    };

    return(
        <div>
            <h1 className={styles.h1}>Автотранспорт</h1>
            <SearchBar
                placeholder={"Номер ТС"}
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
                handleClear={handleClear} 
                handleFind={handleFindVehicles}
            />
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
                        header: 'Название транспортного средства',
                        accessor: 'name',
                        style: { width: '50%' },
                    },
                    {
                        header: 'Номер',
                        accessor: 'number',
                    },
                    ]}
                data={currentRows}
                onRowSelect={handleFindOrganization}
                selectedId={selectedVehicleId}
                setSelectedId={setSelectedVehicleId}
                radioAccessor= 'name'
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

export default Vehicle;