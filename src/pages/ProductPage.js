import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductPage = () => {
    const [product, setProduct] = useState([])
    const url = window.location.hash
    const id = url.substring(url.lastIndexOf("/") - 1)
    console.log(id)
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/{id}".replace('{id}', id)).then(response => {
            setProduct(response.data)
            console.log(response.data)
        })
    }, [])
    return (
        <div>
            <div>
                <img src={product.image}/>
            </div>
            <p>{product.title}</p>
            <div>
                <p>${product.price}</p>
                <button>Редактировать</button>
            </div>
        </div>
    )
}

export default ProductPage