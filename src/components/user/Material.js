import DataTableHover from "./DataTableHover";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { useState } from "react";
import styles from "../../styles/Individual.module.css";
import { Form } from "react-bootstrap";
import DataTable from "./DataTable";


const Material = () => {

    const [organizations, setOrganizations] = useState(["Билдинг", "Билдинг", "Билдинг"]);

    const [materialDetailsAll, setMaterialDetailsAll] = useState([
        {id: 1, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 2, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 3, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 4, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 5, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 6, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 7, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 8, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 9, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 10, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 11, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
        {id: 12, name: "Билдинг", count: "C 8:00 до 20:00", comment: "Разрешено"},
    ]);

    const [materialDetails, setMaterialDetails] = useState(materialDetailsAll);

    const [onlyContainers, setOnlyContainers] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 6;
    const totalPages = Math.ceil(materialDetails.length / rowsPerPage);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = materialDetails.slice(indexOfFirstRow, indexOfLastRow);

    const handleClear = () => {
        setCurrentPage(1);
        setSearchQuery("");
        setOnlyContainers(false);
        setMaterialDetails(materialDetailsAll);
    };

    const handleChangeOnlyContainers = () => {
        setOnlyContainers(!onlyContainers);
    }

    const handleFindMaterials = () => {
        const filteredDetails = materialDetailsAll.filter(material =>
            material.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setMaterialDetails(filteredDetails);
        setCurrentPage(1);
    }

    const handleChangePage = (pageNumber) => {
        if(currentPage !== pageNumber){
            setCurrentPage(pageNumber);
        }
    };

    return(
        <div>
            <h1 className={styles.h1}>Материальные ценности</h1>
            <div className={styles.inline}>
                <Form.Select className={styles.select}>
                    {organizations.map((organization, index) => (
                        <option key={index} value={organization}>
                            {organization}
                        </option>
                    ))}
                </Form.Select>
                <SearchBar
                    placeholder={"Наименование"}
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    handleClear={handleClear} 
                    handleFind={handleFindMaterials}
                />
            </div>
            
            <Form.Check id="onlyContainers" type="checkbox" checked= {onlyContainers} onChange={handleChangeOnlyContainers} label="Показывать только контейнеры"/>
            <br/>
            <DataTable
                columns={[
                    { 
                        header: 'Наименование', 
                        accessor: 'name', 
                        style: { width: '33%' } 
                    },
                    { 
                        header: 'Количество', 
                        accessor: 'count', 
                    },
                    { 
                        header: 'Примечание', 
                        accessor: 'comment', 
                    }
                ]}
                data={materialDetails}
            />
            <Pagination
                handleChangePage={handleChangePage}
                totalPages={totalPages}
                currentPage={currentPage}
            />
        </div>
    );
}

export default Material;