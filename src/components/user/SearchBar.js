import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "../../styles/SearchBar.module.css";

const SearchBar = ({ placeholder, searchQuery, setSearchQuery, handleClear, handleFind }) => {
    return (
        <div className={styles.searchContainer}>
            <InputGroup>
                <Form.Control placeholder={placeholder} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <Button className={styles.searchClearButton} variant="light" onClick={handleClear}>✕</Button>
            </InputGroup>
            <Button className={styles.searchButton} variant="primary" title="Найти" onClick={handleFind}>Найти</Button>
        </div>
    );
}

export default SearchBar;