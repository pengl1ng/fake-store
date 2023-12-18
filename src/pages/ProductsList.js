import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ProductCard from './components/ProductCard/ProductCard';
import './ProductlList.css'

function ProductsList() {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
    useEffect(() => {
        if (products.length === 0) {
            axios.get("https://fakestoreapi.com/products").then(response => {
                localStorage.setItem('products', JSON.stringify(response.data))
                setProducts(JSON.parse(localStorage.getItem('products')))
            })
        }
    }, [products]);
    console.log(products)
    return (
        <div className='card-container'>
            {products.map(product =>
                <ProductCard product={product} key={product.id}></ProductCard>
            )}
        </div>
    );
}

export default ProductsList;