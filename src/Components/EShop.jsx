import React from 'react'
import './eShopCSS.css'
import {useDispatch} from 'react-redux'
import {addToCart} from './CartSlice'

const EShopMain = () => {
    const dispatch = useDispatch();

    let products = [
        {id: 1, name: "Computer", price: 5000, stock: 20},
        {id: 2, name: "Television", price: 3500, stock: 10},
        {id: 3, name: "Refrigerator", price: 4000, stock: 9}
    ]


    const handleAddToCart = product => {
        dispatch(addToCart(product));
    }

    return(
        <>
        <header className="shop-header">
            <h1 className="shop-title">E-commerce Shop</h1>
        </header>
        <section className="products-section">
            <h2>Products</h2>
            <ul className="products-list">
                {products.map(product =>
                    <div className="item-list">
                        <li id={product.id}>{product.name} - {`$${product.price}`}</li>
                        <button className="btn-add-cart" onClick={() => {handleAddToCart(product)}}>Add to cart</button>
                    </div>
                )}
            </ul>
        </section>
        </>
    );
}

export default EShopMain;