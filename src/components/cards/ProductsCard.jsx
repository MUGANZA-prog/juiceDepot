import React from 'react';
import './productCard.css'; 

 

const ProductsCard = ({productImage, productName, productCategory, productQuantity, productPrice, productDate}) => {
    
  return (
    <div className='product-card'>
        <img src={productImage} alt="" />

        <div>
            <div>
                <span>{productName}</span>
            </div>
            <div>
                <span>{productCategory}</span>
            </div>
            <div>
                <span>{productDate}</span>
            </div>
        </div>
        <div>
            <div>
                <span>Quantity: {productQuantity}</span>
            </div>
            <div>
                <span>{productPrice} $</span>
            </div>
            
        </div>
        <div>
            <button>BUY NOW!</button>
        </div>
    </div>
  )
}

export default ProductsCard