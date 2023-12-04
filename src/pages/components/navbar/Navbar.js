import './Navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <ul>
            <li><Link to='/'>Список товаров</Link></li>
            <li><Link to='/addproduct'>Добавить товар</Link></li>
            <li><Link to='/auth'>Авторизация</Link></li>
        </ul>
    )
}

export default Navbar;