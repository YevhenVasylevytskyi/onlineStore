import React from "react";
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="ms-auto me-auto">Авторизація</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-4"
                        placeholder="Введіть Ваш email"
                    />
                    <Form.Control
                        className="mt-4"
                        placeholder="Введіть пароль"
                    />                       
                    <Row className="d-flex justify-content-between mt-4">
                        <div>
                            Немає аккаунту?
                            <NavLink to={REGISTRATION_ROUTE}>Зареєструйтесть</NavLink>
                        </div>
                        <Button                                
                            variant="outline-success">
                            Увійти
                        </Button>
                    </Row>
                </Form>
            </Card>
            
        </Container>
     )
}

export default Auth;