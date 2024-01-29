import React from "react";
import img4 from "../images/Product Image (4).png";

export default function Content() {
  return (
    <div>
      <div className="container">
        <div className="lo">
          <div className="li">
            <img src={img4} alt="" />
            <h1>THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
            <br />
          </div>
          <div className="pi">
            <p>by Charlie Mackesy</p>
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna <br />{" "}
            aliqua.
            <br />
            <br />
            <h2>$99</h2>
            <input type="text" name="Add to Cart " placeholder="Add to Cart " />
          </div>
        </div>
      </div>
    </div>
  );
}
