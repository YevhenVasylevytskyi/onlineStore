import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";

const Shop = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar />
                </Col>
            </Row>
            <Row>
                <Col md={9}></Col>
            </Row>
        </Container>
    )
}

export default Shop;