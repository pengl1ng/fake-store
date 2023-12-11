import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ProductPage.css'
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
    const navigate = useNavigate()
    const url = window.location.href
    const id = url.substring(url.lastIndexOf("/") + 1)
    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        axios.get("https://fakestoreapi.com/products/{id}".replace('{id}', id)).then(response => {
            setProduct(response.data)
            console.log(response.data)
        })
    }, [])
    return (
        <div className='product_container'>
            <div className='product_image_container'>
                <img className='product_image' src={product.image}/>
            </div>
            <div className='rigth_container'>
                <p className='p_product'>Name: {product.title}</p>
                <p className='p_product'>Description: {product.description}</p>
                <p className='p_product'>Category: {product.category}</p>
                <p className='p_product'>Price: ${product.price}</p>
                <button onClick={DeleteProduct}>Удалить</button>
                <button onClick={() => navigate("/editproduct/{id}".replace('{id}', id))}>Редактировать</button>
            </div>
        </div>
    )
}

function DeleteProduct() {
    const url = window.location.href
    const id = url.substring(url.lastIndexOf("/") + 1)
    try {
        axios.delete("https://fakestoreapi.com/products/{id}".replace('{id}', id)).then(response => {
            alert('Response Status' + response.status)
        })
    }
    catch (e) {

    }
}

export default ProductPage