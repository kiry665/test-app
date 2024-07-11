import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import VerticalStepper from "../../components/user/VerticalStepper";
import OrganizationModal from "../../components/user/Modals/OrganizationModal";
import styles from "../../styles/WatchmanPage.module.css"
import Individual from "../../components/user/Individual";
import Pagination from "../../components/user/Pagination";
import Vehicle from "../../components/user/Vehicle";
import Material from "../../components/user/Material";

const WatchmanPage = () => {

    const stepCount = 3;
    const [currentStep, setCurrentStep] = useState(0);
    const stepComponents = [
        <Individual />,
        <Vehicle />,
        <Material/>
    ];

    const handlePreviousStep = () => {
        if(currentStep > 0){
            setCurrentStep(currentStep-1);
        }
    }

    const handleNextStep = () => {
        if(currentStep < stepCount - 1){
            setCurrentStep(currentStep+1);
        }
    }

    return(
        <div className={styles.container}>
            <Row>
                <Col md={2}>
                    <div className={styles.stepperContainer}>
                        <VerticalStepper stepCount={stepCount} currentStep={currentStep} stepLabels={['Физическое лицо', 'Транспортное средсто', 'Материальные ценности']}/>
                    </div>
                </Col>
                <Col md={10}>
                    {stepComponents[currentStep]}
                </Col>
            </Row>
            <Button className={styles.button} disabled={false} onClick={handleNextStep}>Далее</Button>
            <Button className={styles.button} disabled={false} onClick={handlePreviousStep}>Назад</Button>
            
        </div>
    );
}

export default WatchmanPage;