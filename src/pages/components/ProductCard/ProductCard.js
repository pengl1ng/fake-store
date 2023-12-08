import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const navigate = useNavigate()
    const id = props.product.id
    return (
        <div className='card' onClick={() => navigate("/product/{id}".replace('{id}', id))}>
            <div className='image'>
                <img src={props.product.image}/>
            </div>
            <p className='cardElem'>{props.product.title}</p>
            <div className='card_footer'>
                <p>${props.product.price}</p>
                <button className='card_btn'>Редактировать</button>
            </div>
        </div>
    )
}

export default ProductCard;