import styles from "../../styles/Pagination.module.css";
import { Pagination } from "react-bootstrap";

const PPagination = ({handleChangePage, totalPages, currentPage}) => {

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

    return(
        <Pagination className={styles.pagination}>
            <Pagination.Prev onClick={handlePreviousPage}>Назад</Pagination.Prev>
            {Array.from({length: totalPages}, (_, index) => (
                <Pagination.Item key={index+1} active={index+1 === currentPage} onClick={() => handleChangePage(index+1)}>{index+1}</Pagination.Item>
            ))}
            <Pagination.Next onClick={handleNextPage}>Далее</Pagination.Next>
        </Pagination>
    );
}

export default PPagination