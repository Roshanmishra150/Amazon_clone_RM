import React from "react";
import "./css/Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <a onClick={handleClick}>
        <div className="footer__backToTop">
          <ExpandLessIcon className="footer__backToTopText" />
        </div>
      </a>

      <div className="footer__verticalRow">
        <div className="footer__verticalCol">
          <div className="footer__verticalColHead">Get to Know Us</div>
          <ul>
            <li><a href="https://github.com/Roshanmishra150/" target="_blank">About US</a></li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a smile</li>
          </ul>
        </div>
        <div className="footer__verticalCol">
          <div className="footer__verticalColHead">Connect with us</div>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100012" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/Roshanm55820460">Twitter</a></li>
            <li><a href="https://www.instagram.com/roshanmishra657/">Instagram</a></li>
          </ul>
        </div>
        <div className="footer__verticalCol">
          <div className="footer__verticalColHead">Make Money with Us</div>
          <ul>
            <li>Sell on Amazon Clone</li>
            <li>Sell under Amazon Clone Accelaor</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="footer__verticalCol">
          <div className="footer__verticalColHead">Amazon Related</div>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li><a href="https://www.amazon.in/b?ie=UTF8&node=6967393031">Amazon App Download</a></li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer__line">
        <img
          className="footer__lineLogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <span className="footer__lineMessage">
          Amazon clone developed by &copy;{" "}
          <a href="https://github.com/Roshanmishra150/" target="_blank">
            Roshan Mishra
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
