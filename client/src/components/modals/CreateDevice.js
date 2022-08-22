import React, { useContext } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
    const {device} = useContext(Context);

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle></Dropdown.Toggle>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрити</Button>
                <Button variant={"outline-success"} onClick={onHide}>Додати</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice;