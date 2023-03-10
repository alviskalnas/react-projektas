import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../pages/container/Container';

const Navigation = () => {
     return (
        <Container>
          <ul>
          <li>
            <NavLink to='/MainPage'>CodeAcademy Project</NavLink>
          </li>
          <li>
            <NavLink to='/'>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/programs">Programs</NavLink>
          </li>
          <li>
            <NavLink to='/pages'>Counter</NavLink>
          </li>
          <li>
            <NavLink to="/cars">Cars</NavLink>
          </li>
          <li>
              <NavLink to="/shopping-page">Shopping Page</NavLink>
          </li>
          <li>
            <NavLink to="/to-do-list">To Do List</NavLink>
          </li>
          <li>
            <NavLink to="/student-page">Student Page</NavLink>
          </li>
          <li>
            <NavLink to="/API-page">Cat page</NavLink>
          </li>
          <li>
            <NavLink to="/bored">Bored page</NavLink>
          </li>
          <li>
            <NavLink to="/coinbase">Coinbase</NavLink>
          </li>
          <li>
            <NavLink to="/fake-acc">Fake account</NavLink>
          </li>
          <li>
            <NavLink to="/new-API">New API</NavLink>
          </li>
        </ul>
        </Container>
     )
}

export default Navigation;