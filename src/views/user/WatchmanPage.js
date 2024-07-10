import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import VerticalStepper from "../../components/user/VerticalStepper";
import OrganizationModal from "../../components/user/Modals/OrganizationModal";
import styles from "../../styles/WatchmanPage.module.css"
import Individual from "../../components/user/Individual";

const WatchmanPage = () => {

    const [showOrganizationModal, setShowOrganizationModal] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    return(
        <div className={styles.container}>
            <Row>
                <Col md={2}>
                    <div className={styles.stepperContainer}>
                        <VerticalStepper stepCount={3} currentStep={currentStep} stepLabels={['Физическое лицо', 'Транспортное средсто', 'Материальные ценности']}/>
                    </div>
                </Col>
                <Col md={10}>
                    <Individual></Individual>
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