import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/Checkout.css";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const listing = location.state;
  console.log(listing);
  const imgs = listing.imgs || [];
  const imgEl = imgs
    .slice(0, 2)
    .map((img) => (
      <div
        className="Checkout__img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    ));
  return (
    <div>
      <Header />
      <div className="Checkout__container">
        <div className="Checkout__imgs">{imgEl}</div>
        <form className="Checkout__form">
          <label htmlFor="cardName">Name on Card</label>
          <input type="text" id="cardName" name="cardName" required />

          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" required />

          <div className="Checkout__form-row">
            <div>
              <label htmlFor="expiryMonth">Exp. Date</label>
              <select id="expiryMonth" name="expiryMonth" required>
                <option value="">MM</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div>
              <label id="year" htmlFor="expiryYear"></label>
              <select id="expiryYear" name="expiryYear" required>
                <option value="">YYYY</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="cvv">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
          </div>
          <label htmlFor="zip">Zip / Postal Code</label>
          <input type="text" id="zip" name="zip" required />

          <button type="submit">Checkout</button>
          <center>
            <span
              onClick={() => {
                navigate(-1);
              }}
              className="Cancel"
            >
              Cancel
            </span>
          </center>
        </form>
      </div>
      <span>
        Please select the add-ons you would like to purchase for your stay!
      </span>
      <div className="addons">
        <input type="checkbox" />
        <label>+$20 Deep Clean</label>
        <input type="checkbox" />
        <label>+$15 Personal tour</label>
        <input type="checkbox" />
        <label>+$120 Catering</label>
      </div>
    </div>
  );
}

export default Checkout;
