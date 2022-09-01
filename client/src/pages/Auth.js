import React, { useState, useContext } from "react";
import { Button, Card, Form, Row, Container } from "react-bootstrap";
import { NavLink, useLocation } from 'react-router-dom'
import { registration, login } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from 'mobx-react-lite'
import { Context } from '../index'


const Auth = () => {
    const { user } = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        if (isLogin) {
            const response = await login()

        }
        else {
            const response = await registration(email, password)

        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизациія' : 'Реєстрація'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-4"
                        placeholder="Введіть Ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-4"
                        placeholder="Введіть пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-4 ps-4 pe-4">
                        {isLogin ?
                            <div style={{ display: "inline-block" }}>
                                Немає аккаунту?
                                <div style={{ display: "inline-block" }} className="ms-2">
                                    <NavLink to={REGISTRATION_ROUTE}>Зареєструватися</NavLink>
                                </div>
                            </div>
                            :
                            <div style={{ display: "inline-block" }}>
                                Є аккаунт?
                                <div style={{ display: "inline-block" }} className="ms-2">
                                    <NavLink to={LOGIN_ROUTE}>Увійти</NavLink>
                                </div>
                            </div>}
                        <div style={{ display: "inline-block" }}>
                            <Button
                                variant={"outline-success"}
                                onClick={click}
                                className="mt-4"
                            >
                                {isLogin ? 'Увійти' : 'Реєстрація'}
                            </Button>
                        </div>
                    </Row>
                </Form>
            </Card>
            
        </Container>
    )
};

export default Auth;