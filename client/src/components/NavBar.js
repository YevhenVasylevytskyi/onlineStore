import React, { useContext } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite'

export const NavBar = observer( () => {
    const {user} = useContext(Context)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color:'white'}} to={SHOP_ROUTE} >
          Online Shop
        </NavLink>
        {user.isAuth
          ?
          <Nav className="ml-auto" style={{color:'white'}}>
            <Button variant="outline-light">Панель адміністратора</Button>
            <Button variant="outline-light" style={{marginLeft: '10px'}}>Вийти</Button>            
          </Nav>
          :
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизація</Button>            
          </Nav>      
        }        
      </Container>
    </Navbar>
  )
})