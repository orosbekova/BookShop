import React, { useState } from "react";
import img from "../img/Main image.png";
import png from "../img/image 8.png";
import png1 from "../img/image 8 (1).png";
import png2 from "../img/image 8 (2).png";
import png3 from "../img/image 8 (3).png";
import png4 from "../img/image 8 (4).png";
import png5 from "../img/image 8 (5).png";
import png6 from "../img/image 5.png";
import png7 from "../img/image 6.png";
import png8 from "../img/image 7.png";
import jpg from "../image/Product Image.png";
import jpg1 from "../image/Product Image (1).png";
import jpg2 from "../image/Product Image (2).png";
import jpg3 from "../image/Product Image (3).png";
import jpg4 from "../image/Product Image (4).png";
import jpg5 from "../image/Product Image (5).png";
import jpg6 from "../image/image 9.png";
export default function Link() {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="hero">
            <img src={img} alt="" />{" "}
          </div>
          <div className="text">
            <h1>Welcome to our Bookshop</h1>
            <p>A place where you can get all the books you want!</p>
          </div>

          <div className="imgnext">
            <h1>Genres</h1>
            <p>View all</p>
          </div>
          <div className="cartina">
            <div className="imgPhoto">
              <img src={png} alt="" />
              <p>Sci-Fi</p>
            </div>
            <div className="imgPhoto">
              <img src={png1} alt="" />
              <p>For kids</p>
            </div>
            <div className="imgPhoto">
              <img src={png2} alt="" />
              <p>Psychology</p>
            </div>
            <div className="imgPhoto">
              <img src={png3} alt="" />
              <p>Romantic</p>
            </div>
            <div className="imgPhoto">
              <img src={png4} alt="" />
              <p>Detective</p>
            </div>
            <div className="imgPhoto">
              <img src={png5} alt="" />
              <p>Finance</p>
            </div>
          </div>

          <div className="logo">
            <h1>New Books</h1>
          </div>
          <div className="img-content">
            <div className="true ">
              <img src={png7} alt="" />
              <h1>
                The Climate Book: <br />
                The Facts and the Solutions
              </h1>
              <p>by Greta Thunberg</p>
            </div>
            <div className="true2">
              <img src={png6} alt="" />
              <h1>
                Rest Is Resistance: <br />A Manifesto
              </h1>
              <p>by Tricia Hersey</p>
            </div>
            <div className="true3">
              <img src={png8} alt="" />
              <h1>
                A New Name: <br />
                Septology VI-VII
              </h1>
              <p>by Jon Fosse</p>
            </div>
          </div>
          <div className="link1">
            <h1>Books</h1>
            <p>View all</p>
          </div>
          <div className="forget">
            <div className="learn">
              <img src={jpg} alt="" />
              <h1>
                THE SUBTLE ART OF <br />
                NOT GIVING A F*CK
              </h1>
              <p>by Mark Manson</p>
            </div>
            <div className="learn">
              <img src={jpg1} alt="" />
              <h1>8 RULES OF LOVE</h1>
              <p>by Jay Shetty</p>
            </div>
            <div className="learn">
              <img src={jpg2} alt="" />
              <h1>THE CREATIVE ACT</h1>
              <p>
                by Rick Rubin with Neil <br />
                Strauss
              </p>
            </div>
            <div className="learn">
              <img src={jpg3} alt="" />
              <h1>
                THE BOY, THE MOLE, <br />
                THE FOX AND THE HORSE
              </h1>
              <p>by Charlie Mackesy</p>
            </div>
            <div className="learn">
              <img src={jpg4} alt="" />
              <h1>HARRY POTTER</h1>
              <p>by J.K. Rowling</p>
            </div>
            <div className="learn">
              <img src={jpg5} alt="" />
              <h1>IT ENDS WITH US</h1>
              <p>by Colleen Hoover</p>
            </div>
          </div>
          <div className="footer">
            <h1>About Us</h1>
            <div className="down">
              <img src={jpg6} alt="" />
              <h1>
                We believe that books have the power to change lives, and <br />
                we're dedicated to helping our customers find the perfect <br />
                book for them. Whether you're looking for an escape from <br />
                reality, an educational read, or a book to inspire you, we've{" "}
                <br />
                got you covered. <br />
                Thank you for choosing to shop with us. We look forward to{" "}
                <br />
                helping you discover your next favorite book!
              </h1>
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
    </div>
  );
  function onchange() {}
}
