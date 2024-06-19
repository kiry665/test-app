import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OrganizationModal({show, onHide}){
    return(
        <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
    );
}

export default OrganizationModal;