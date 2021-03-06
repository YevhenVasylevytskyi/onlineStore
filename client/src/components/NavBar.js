import React, { useContext } from "react";
import { Context } from "../index";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const {user} = useContext(Context)

  return (    
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Online_Shop</NavLink>

        {user.isAuth ?
          <Nav style={{ marginLeft: 'auto', color: 'white'}}>
            <Button variant="outline-light">Админ панель</Button>
            <Button variant="outline-light" style={{marginLeft: 20}}>Выйти</Button>
          </Nav>
          :
          <Nav style={{ marginLeft: 'auto', color: 'white' }}>
            <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }

      </Container>        
    </Navbar>    
  )
})

export default NavBar;