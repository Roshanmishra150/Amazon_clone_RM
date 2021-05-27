import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import imgs from "./imgs/amazonlogo.png"
import { useState } from "react"
import { auth } from "./firebase";
import "./css/login.css"

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/")
        })
        .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    history.push("/")
                }
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src={imgs} />
            </Link>

            <div className="login_container" >
                <h1>Sign in </h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="email" placeholder="Enter your email id" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                    <button type="submit" onClick={signin} className="sign_btn"> Sign In </button>
                </form>
                <p>
                    By singin in you agree terms and conditions of the sales and the purcashes , and our cookies notice only the genral information from you 
                </p>
                <button onClick={register} className="login_register_btn">Create your Amazon account</button>
            </div>
        </div>
    )
}
export default Login
