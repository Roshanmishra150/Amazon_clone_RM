import React from "react";
import "./css/home.css";
import Product from "./product"
import img from"./imgs/top1.png";
import Learnbook from "./imgs/thelearn.png";
import laptop from "./imgs/laptop.png";
import watch from "./imgs/watch.png";
import beauty from "./imgs/beauty.png";
import redmi from "./imgs/redmi.png";
import samsung from "./imgs/samsung.png";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_img" src={img} alt="ca1.png" />

                <div className="home_row">
                    <Product title="The learn startup "
                             id="12345678"
                             price={2.99}
                             image={Learnbook}
                             rating={3}/>

                    <Product title="The Best Laptop Of the year "
                             id="87654321"
                             price={50.56}
                             image={laptop}
                             rating={4}/>                    
                </div>

                <div className="home_row">
                    <Product title="The styles and cool watches "
                             id="14785236"
                             price={10}
                             image={watch}
                             rating={2}/>

                    <Product title="The best and qulity beauty products "
                             id="96325874"
                             price={23.45}
                             image={beauty}
                             rating={3}/>

                    <Product title="The larges selling phone "
                             id="12398712"
                             price={25.27}
                             image={redmi}
                             rating={5}/>
                </div>

                <div className="home_row">
                    <Product title="The best wall tv  "
                             id="74196352"
                             price={56.24}
                             image={samsung}
                             rating={5}/>
                </div>
            </div>
        </div>
    )
}
export default Home;
