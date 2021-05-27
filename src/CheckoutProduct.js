import React from 'react'
import "./css/CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
    const [{basket}, dispatch] = useStateValue();

    const removefromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProduct_img" src={image} />

            <div className="CheckoutProduct_info">
                <p className="CheckoutProduct_title">{title}</p>
                <p className="CheckoutProduct_price"><small>₹</small><strong>{price}</strong></p>
                <div className="CheckoutProduct_rating">
                    {Array(rating).fill().map((_, i) => {
                        <p>⭐</p>
                    })}
                </div>
                {!hideButton && (
                    <button onClick={removefromBasket}>Remove form the basket </button>
                )}
                {/* <button onClick={removefromBasket}>Remove form the basket </button> */}
            </div>
        </div>
    )
}
export default CheckoutProduct
