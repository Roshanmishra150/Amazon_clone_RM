import React from "react";
import "./css/header.css"
import "./Login"
import img from "./imgs/amazonlogo.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header(){
    const[{basket,user},dispatch] = useStateValue();

    const handelAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return(
        <div className="header">
            <div className="header_logo">
                <Link to="/">
                    <img src={img} />
                </Link>
            </div>

            <div className="header_search">
                <input className="header_searchinput" type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handelAuthentication} className="header_option">
                        <span className="header_optionlineone">hello {!user?  'Guest' : user.email}</span>
                        <span className="header_optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                
                <Link to="/orders">
                    <div className="header_option">
                        <span className="header_optionlineone">Return</span>
                        <span className="header_optionlinetwo">& Orders</span>
                    </div>
                </Link>
                
                <div className="header_option">
                    <span className="header_optionlineone">your</span>
                    <span className="header_optionlinetwo">prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionlinetwo header_basketcount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;