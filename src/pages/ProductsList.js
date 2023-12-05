import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ProductCard from './components/ProductCard/ProductCard';

function ProductsList() {
    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(response => {
            setProducts(response.data);
        })
    }, []);
    console.log(products)
    return (
        <div>
            {products.map(product =>
                <ProductCard product={product} key={product.id}></ProductCard>
            )}
        </div>
    );
}

export default ProductsList;