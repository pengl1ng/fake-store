import React from 'react';

const ProductCard = (props) => {
    const id = props.id
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
}

export default ProductCard;