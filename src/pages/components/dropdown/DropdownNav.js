import React from 'react';
import {Link} from 'react-router-dom';
import './DropdownNav.css'

function DropdownNav() {
    return (
        <div className='dropdown'>
            <a className='main-item' href='javascript:void(0);' tabindex="1"><img src='' alt='Открыть navbar'></img></a>
            <ul className='sub-menu'>
                <li><Link to='/'>Список товаров</Link></li>
                <li><Link to='/addproduct'>Добавить товар</Link></li>
                <li><Link to='/auth'>Авторизация</Link></li>
            </ul>
        </div>
    ) 
}

export default DropdownNav