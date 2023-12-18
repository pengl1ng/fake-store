import React, { useState, useEffect } from 'react'
import './EditProductPage.css'
import axios from 'axios'
import { useForm } from 'react-hook-form';

function EditProductPage() {
    const [editProduct, setProduct] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState('')
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
    }, [editProduct, title])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        const editedProduct = {
            "title": data.productTitle,
            "price": data.productPrice,
            "description": data.productDescription,
            "image": data.productImage,
            "category": data.productCategory
        }
        console.log(editedProduct)
        try {
            await axios (
                axios.put("https://fakestoreapi.com/products/{id}".replace('{id}', id), editedProduct).then(response => alert('Response status: ' + response.status))
            )
        }
        catch (e) {

        }
        const editedProduct1 = {
            "id": id,
            "title": data.productTitle,
            "price": data.productPrice,
            "description": data.productDescription,
            "image": data.productImage,
            "category": data.productCategory
        }

        const products = JSON.parse(localStorage.getItem('products'))
        const newProducts = products.map(product =>
            product.id === editProduct.id ? editedProduct1 : product
        )
        localStorage.setItem('products', JSON.stringify(newProducts))
    }

    return (
        <form className='editProduct' onSubmit={handleSubmit(onSubmit)}>
            <div className='edit_container'>
                <input className='productImgLink' defaultValue={img} type='text' onChange={event => setImg(event.target.value)}
                name='img' placeholder='Ссылка на картинку' {...register("productImage", {required: true})}/>
                <input className='productName' defaultValue={title} type='text' onChange={event => setTitle(event.target.value)}
                name='title' placeholder='Название' {...register("productTitle", {required: true})}/>
                <input className='productDesc' defaultValue={desc} type='text' onChange={event => setDesc(event.target.value)}
                name='desc' placeholder='Описание' {...register("productDescription", {required: true})}/>
                <input className='productPrice' defaultValue={price} type='text' onChange={event => setPrice(event.target.value)}
                name='price' placeholder='Стоимость' {...register("productPrice", {required: true})}/>
                <input className='productCategory' defaultValue={category} type='text' onChange={event => setCategory(event.target.value)}
                name='category' placeholder='Категория' {...register("productCategory", {required: true})}/>
                <button type='submit'>Обновить товар</button>
            </div>
        </form>
    )
}

export default EditProductPage