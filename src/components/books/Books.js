import React from "react";
import img4 from "../images/Product Image (4).png";
import imglogo from "../images/Product Image.png";

export default function Books() {
  return (
    <div>
      <div className="container">
        <div className="sections">
          <h1>Your cart</h1>
          <p>Not ready to checkout? Continue Shopping</p>
          <h6>Remove</h6>

          <img src={img4} alt="" />
          <h2>THE BOY, THE MOLE, THE FOX AND THE HORS</h2>
          <div className="pii">
            <h5>by Charlie Mackesy</h5>
            <h4>Quantity: 1</h4>
            <h3>$99</h3>
          </div>
          <br />
          <br />

          <div className="blue">
            <img src={imglogo} alt="" />
            <text>THE SUBTLE ART OF NOT GIVING A F*CK</text>
          </div>
        </div>
        <div className="footerdown">
          <div className="body">
            <div className="box">
              <h1>Sign up for our newsletter</h1>
              <p>
                Be the first to know about our special offers, news, and
                updates.
              </p>
              <input
                type="text"
                onChange={onchange}
                placeholder="Email Address"
              />
            </div>
            <div className="box1">
              <h1>Lorem Ipsum</h1>
              <p>
                lorem <br /> lorem <br /> lorem <br /> lorem <br /> lorem
              </p>
            </div>
            <div className="box1">
              <h1>Lorem Ipsum</h1>
              <p>
                lorem <br /> lorem <br /> lorem <br /> lorem <br /> lorem
              </p>
            </div>
            <div className="box1">
              <h1>Lorem Ipsum</h1>
              <p>
                lorem <br /> lorem <br /> lorem <br /> lorem <br /> lorem
              </p>
            </div>
            <div className="box1">
              <h1>Lorem Ipsum</h1>
              <p>
                lorem <br /> lorem <br /> lorem <br /> lorem <br /> lorem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
