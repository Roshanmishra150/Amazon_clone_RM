import React, { useState, useEffect} from 'react'
import "./css/payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct"
import { Link, useHistory } from 'react-router-dom';
import { useElements, CardElement, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal} from "./reducer";
import axios from "./axios";
import { db } from "./firebase"

function Payment() {

    const [{basket, user},dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disable, setDisable] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientsecret, setClientsecret] = useState(true)

    useEffect(() => {
        // generate the special stripe secret which allow us to charge a customer
        const getclientsecret = async () => {
            const response = await axios({
                method: "post",
                // stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientsecret(response.data.clientsecret)
        }
        getclientsecret();
    }, [basket])

    console.log(" the client secret is >>> ",clientsecret)
    console.log("👱", user);
    
    const handelsubmit =async (event) => {
        // do all fancy stripe staff...
        event.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientsecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation


            db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });

            setSucceeded(true)
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET",
            });

            history.replace('/orders')
        })
    }
    const handelchange = event => {
        setDisable(event.empty);
        setError(event.error? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout { <Link to ="/checkout">{basket?.length} items</Link>}
                </h1>
            

            <div className="payment_session">
                <div className="payment_title">
                    <h3> Delivery Address </h3>
                </div>

                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>123 react </p>
                    <p>web mern </p>
                </div>
            </div>

            <div className="payment_session">
                <div className="payment_title">
                    <h3> Review items and Delivery </h3>
                </div>

                <div className="payment_item">
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
            </div>

            <div className="payment_session">
                <div className="payment_title">
                    <h3> Payment Method </h3>
                </div>
                <div className="payment_details">
                    {/* stripe magic will build here */}
                        <form onSubmit={handelsubmit}>
                            <CardElement onChange={handelchange} />

                            <div className="payment_pricescontainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total : {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                            <button disabled={processing || disable || succeeded}>
                                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment

