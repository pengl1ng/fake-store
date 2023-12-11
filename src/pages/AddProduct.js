import React from 'react';
import { useForm } from 'react-hook-form';
import axios from'axios'
import './AddProduct.css'

function AddProduct() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
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
                axios.post("https://fakestoreapi.com/products", product).then(response => alert('Response status: ' + response.status))
            )
        }
        catch (e) {

        }
    }

    return (
        <form className='addProduct' onSubmit={handleSubmit(onSubmit)}>
            <div className='add_container'>
                <input className='productImgLink' type='text' placeholder='Ссылка на картинку' {...register("productImage", {required: true})}/>
                <input className='productName' type='text' placeholder='Название' {...register("productTitle", {required: true})}/>
                <input className='productDesc' type='text' placeholder='Описание' {...register("productDescription", {required: true})}/>
                <input className='productPrice' type='text' placeholder='Стоимость' {...register("productPrice", {required: true})}/>
                <input className='productCategory' type='text' placeholder='Категория' {...register("productCategory", {required: true})}/>
                <button type='submit'>Добавить продукт</button>
            </div>
        </form>
    );
}

export default AddProduct;