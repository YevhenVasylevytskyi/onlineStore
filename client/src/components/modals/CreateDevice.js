import React, { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

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
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>Виберіть тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>    
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>Виберіть бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>    
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={"mt-3"}
                        placeholder="Введіть назву пристрою"
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder="Введіть вартість пристрою"
                        type="number"
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder="Введіть назву пристрою"
                        type="file"
                    />
                    <hr />
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Додати нову характеристику
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введіть назву характеристики"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введіть опис"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={()=>removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Видалити
                                </Button>
                            </Col>
                        </Row>    
                    )}
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