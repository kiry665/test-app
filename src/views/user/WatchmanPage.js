import { useState } from "react";
import { Pagination, Table, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import styles from "../../styles/Individual.module.css"
import VerticalStepper from "./VerticalStepper";
import OrganizationModal from "./Modals/OrganizationModal";

const WatchmanPage = () => {

    const [showOrganizationModal, setShowOrganizationModal] = useState(false);

    return(
        <div className={styles.container}>
            <Row>
                <Col md={2}>
                    <div className={styles.stepperContainer}>
                        <VerticalStepper stepCount={3} currentStep={0} stepLabels={['Физическое лицо', 'Транспортное средсто', 'Материальные ценности']}/>
                    </div>
                </Col>
                <Col md={10}>
                    
                </Col>
            </Row>
            <OrganizationModal
                show={showOrganizationModal}
                onHide={() => setShowOrganizationModal(false)}
            />
        </div>
    );
}

export default WatchmanPage;