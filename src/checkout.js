import React from "react";
import "./css/checkout.css";
import img from "./imgs/car2.png"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./subtotal"

function Checkout() {
    const [{ basket, user },dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="check_left">
                <img className="check_ads" src={img} alt="image is therie foe advertisment" />
                
            {/* {basket?.length === 0 ? (
                 <div>
                    <h2>Tu carro de compras esta vacío </h2>
                    <p>You have no items in the shopping cart. To add an item click on "Add to cart" under the desired product</p>
                 </div>           
            ) : ( */}

                <div >
                    <h3>{user?.email}</h3>
                    <h2 className="check_title">Your shopping Basket</h2>
                    {basket?.map((item) => (
                        <CheckoutProduct
                            id ={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
                {/* )} */}
                
            </div>
            {/* {basket.length > 0 && (  */}

            <div className="check_right">
                {/* <h2>The subtotal will go here</h2> */}
                <Subtotal/>
            </div>
            {/* )} */}

        </div>
    )
}
export default Checkout;