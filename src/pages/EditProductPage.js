import React, { useState, useEffect } from 'react'
import './EditProductPage.css'
import axios from 'axios'
import { useForm } from 'react-hook-form';

function EditProductPage() {
    const [product, setProduct] = useState([])
    const [image, setImage] = useState(product.image)
    const [title, setTitle] = useState(product.title)
    const [desc, setDesc] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)

    useEffect(() => {
        const url = window.location.href
        console.log(url)
        const id = url.substring(url.lastIndexOf("/") + 1)
        console.log(id)
        axios.get("https://fakestoreapi.com/products/{id}".replace('{id}', id)).then(response => {
            setProduct(response.data)
            console.log(response.data)
        })
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        const product = {
            "title": data.productTitle,
            "price": data.productPrice,
            "description": data.productDescription,
            "image": data.productImage,
            "category": data.productCategory
        }
        console.log(product)
        try {
            await axios (
                axios.put("https://fakestoreapi.com/products/{id}".replace('{id}', id), product).then(response => alert('Response status: ' + response.status))
            )
        }
        catch (e) {

        }
    }
    return (
        <form className='editProduct' onSubmit={handleSubmit(onSubmit)}>
            <div className='edit_container'>
                <input className='productImgLink' value={image} type='text' onChange={event => setImage(event.target.value)}
                placeholder='Ссылка на картинку' {...register("productImage", {required: true})}/>
                <input className='productName' value={title} type='text' onChange={event => setTitle(event.target.value)}
                placeholder='Название' {...register("productTitle", {required: true})}/>
                <input className='productDesc' value={desc} type='text' onChange={event => setDesc(event.target.value)}
                placeholder='Описание' {...register("productDescription", {required: true})}/>
                <input className='productPrice' value={price} type='text' onChange={event => setPrice(event.target.value)}
                placeholder='Стоимость' {...register("productPrice", {required: true})}/>
                <input className='productCategory' value={category} type='text' onChange={event => setCategory(event.target.value)}
                placeholder='Категория' {...register("productCategory", {required: true})}/>
                <button type='submit'>Обновить товар</button>
            </div>
        </form>
    )
}

export default EditProductPage