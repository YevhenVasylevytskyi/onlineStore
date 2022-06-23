import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card
                style={{ width: 600 }}
                className="p-5"
            >
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите Ваш Email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите Ваш пароль..."                    
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div className="mt-3">
                                Нет аккаунта?
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Зарегистрируйтесь
                                </NavLink>
                            </div>
                            : 
                            <div className="mt-3">
                                Есть аккаунт? 
                                <NavLink to={LOGIN_ROUTE}>
                                    Войдите!
                                </NavLink>
                            </div>
                        }
                        <Button
                            style={{width: 150, margin: "0 auto"}}
                            className="mt-3"
                            variant="outline-success"
                        >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;