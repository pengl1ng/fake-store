import React, { useState, useEffect } from 'react'
import './EditProductPage.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function EditProductPage() {
    const navigate = useNavigate()
    const [editProduct, setProduct] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState(Number(0))
    const [category, setCategory] = useState('')

    useEffect(() => {
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        console.log(editProduct)
        if (editProduct.length === 0) {
            setProduct(JSON.parse(localStorage.getItem('products')).find(p => Number(p.id) === Number(id)))
            console.log(editProduct)
        }

        setTitle(editProduct.title)
        setDesc(editProduct.description)
        setImg(editProduct.image)
        setPrice(editProduct.price)
        setCategory(editProduct.category)
    }, [editProduct])

    const onSubmit = () => {
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        const editedProduct = {
            "title": title,
            "price": price,
            "description": desc,
            "image": img,
            "category": category
        }
        console.log(editedProduct)
        try {
            axios.put("https://fakestoreapi.com/products/{id}".replace('{id}', id), editedProduct).then(response => alert('Response status: ' + response.status))
        }
        catch (e) {

        }
        const editedProduct1 = {
            "id": id,
            "title": title,
            "price": price,
            "description": desc,
            "image": img,
            "category": category
        }

        const products = JSON.parse(localStorage.getItem('products'))
        const newProducts = products.map(product =>
            product.id === editProduct.id ? editedProduct1 : product
        )
        localStorage.setItem('products', JSON.stringify(newProducts))
        navigate("/")
    }

    return (
        <form className='editProduct' onSubmit={onSubmit}>
            <div className='edit_container'>
                <input className='productImgLink' defaultValue={img} type='text' onChange={event => setImg(event.target.value)}
                name='img' placeholder='Ссылка на картинку'/>
                <input className='productName' defaultValue={title} type='text' onChange={event => setTitle(event.target.value)}
                name='title' placeholder='Название'/>
                <input className='productDesc' defaultValue={desc} type='text' onChange={event => setDesc(event.target.value)}
                name='desc' placeholder='Описание'/>
                <input className='productPrice' defaultValue={price} type='text' onChange={event => setPrice(Number(event.target.value))}
                name='price' placeholder='Стоимость'/>
                <input className='productCategory' defaultValue={category} type='text' onChange={event => setCategory(event.target.value)}
                name='category' placeholder='Категория'/>
                <button type='submit'>Обновить товар</button>
            </div>
        </form>
    )
}

export default EditProductPage