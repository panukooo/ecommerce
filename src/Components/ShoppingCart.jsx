import React from 'react'
import './shoppingCartCSS.css'
import {useSelector, useDispatch} from 'react-redux'
import {decreaceQuantity, increaceQuantity, removeItem, deleteCart} from './CartSlice'

const ShoppingCart = () => {
    let cartItems = useSelector(state => state.cart.cartItems);
    let totalAmount = cartItems.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
    let dispatch = useDispatch();

    const handleDecreace = productId => {
        dispatch(decreaceQuantity(productId));
    }

    const handleIncreace = productId => {
        dispatch(increaceQuantity(productId));
    }

    const handleRemoveItem = productId => {
        dispatch(removeItem(productId))
    }

    const handleDeleteCart = () => {
        dispatch(deleteCart())
    }

    return(
        <>
            <section className="cart-section">
                <h2>Shopping Cart</h2>
                <ul className="cart-list">
                    {cartItems.map(product => 
                        <div className="shopping-cart-list">
                            <span className="flex-item-name-align"><li>{product.name} - {"$"+product.price}</li></span>
                            <span className="flex-item-btns-quantity-align">
                                <button onClick={() => {handleDecreace(product.id)}}>-</button>
                                    {`     ${product.quantity}     `}
                                <button onClick={() => {handleIncreace(product.id)}}>+</button>
                            </span>
                            <span className="flex-item-btn-align"><button className="btn-remove-item" onClick={() => {handleRemoveItem(product.id)}}>Remove</button></span>
                        </div>)
                    }
                </ul>
            </section>
            <section className="total-amount-section">
                <p>The total amount is: {`$${totalAmount}`}</p>
                <button className="btn-clear-cart" onClick={() => {handleDeleteCart()}}>Clear Cart</button>
            </section>
        </>
    );
}

export default ShoppingCart;