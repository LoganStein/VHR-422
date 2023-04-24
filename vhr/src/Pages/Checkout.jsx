import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/Checkout.css";
import {
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
  faCcAmex,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const listing = location.state;
  const [Tax, setTax] = useState((listing.price * 3 + 50) * 0.12);
  const [Total, setTotal] = useState(listing.price * 3 + 50 + Tax);

  const imgs = listing.imgs || [];
  const imgEl = imgs
    .slice(0, 2)
    .map((img) => (
      <div
        className="Checkout__img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    ));

  const handleAddOn = (e) => {
    if (e.target.checked) {
      // add target value to Total and update Tax
      let subtotal = Total - Tax + Number(e.target.value);
      let newTax = subtotal * 0.12;
      let newTotal = subtotal + newTax;

      setTotal(newTotal);
      setTax(newTax);
    } else {
      // remove target value from Total and update Tax
      let subtotal = Total - Tax - Number(e.target.value);
      let newTax = subtotal * 0.12;
      let newTotal = subtotal + newTax;
      setTotal(newTotal);
      setTax(newTax);
    }
  };

  return (
    <div>
      <Header />
      <div className="Checkout__container">
        <div className="imgs-addons">
          <div className="Checkout__imgs">{imgEl}</div>
          <span>
            Please select the add-ons you would like to purchase for your stay!
          </span>
          <div className="addons">
            <input onChange={handleAddOn} value={20} type="checkbox" />
            <label>+$20 Deep Clean</label>
            <input onChange={handleAddOn} value={15} type="checkbox" />
            <label>+$15 Personal tour</label>
            <input onChange={handleAddOn} value={120} type="checkbox" />
            <label>+$120 Catering</label>
          </div>
          <div className="total">
            <div className="row">
              <span>Rate Per Night:</span>
              <span>${listing.price}(x3)</span>
            </div>
            <div className="row">
              <span>Cleaning Fee:</span>
              <span>$30</span>
            </div>
            <div className="row">
              <span>Service Fee:</span>
              <span>$20</span>
            </div>
            <div className="row">
              <span>Tax:</span>
              <span>${Tax.toFixed(2)}</span>
            </div>
            <div className="total-row row">
              <span>Total:</span>
              <span>
                <b>${Total.toFixed(2)}</b>
              </span>
            </div>
          </div>
        </div>
        <form
          className="Checkout__form"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <div className="card-icons">
            <FontAwesomeIcon icon={faCcVisa} />
            <FontAwesomeIcon icon={faCcMastercard} />
            <FontAwesomeIcon icon={faCcDiscover} />
            <FontAwesomeIcon icon={faCcAmex} />
          </div>
          <label htmlFor="cardName">Name on Card</label>
          <input type="text" id="cardName" name="cardName" required />

          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="#### #### #### ####"
            required
          />

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
      <div className="tos-container">
        <span>
          When you make a booking on our website, you agree to pay the full
          amount of the rental fee, including any applicable taxes and fees. We
          accept various payment methods, including credit cards, PayPal, and
          bank transfers. Once you have completed the booking process, you will
          receive a confirmation email with all the details of your booking. If
          you need to cancel your booking, please refer to our cancellation
          policy. We offer various cancellation options, depending on the type
          of rental and how far in advance you cancel. Please note that
          cancellations made outside of our cancellation policy may not be
          eligible for a refund. Our website acts as a platform to connect
          renters with vacation homeowners. We are not responsible for any
          damage, loss, or injury that occurs during your stay at a vacation
          home. We recommend that you purchase travel insurance to protect
          yourself in the event of any unforeseen circumstances.
        </span>
      </div>
    </div>
  );
}

export default Checkout;
