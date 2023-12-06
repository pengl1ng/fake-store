import './Navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <div className='header'>
            <button><Link to='/' className='link'>Список товаров</Link></button>
            <button><Link to='/addproduct' className='link'>Добавить товар</Link></button>
            <button className='btn_unlog' onClick={UnAuth}>Выйти</button>
        </div>
    )
}

function UnAuth() {
    localStorage.setItem('token', "")
    window.location.reload()
}

export default Navbar;