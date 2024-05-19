import "./footer.scss";

import { LuSendHorizonal } from "react-icons/lu";
import React from "react";
import icon1 from "../../../assets/images/icon1.svg";
import icon2 from "../../../assets/images/icon2.svg";
import icon3 from "../../../assets/images/icon3.svg";
import icon4 from "../../../assets/images/icon4.svg";
import img1 from "../../../assets/images/foo1.svg";
import img2 from "../../../assets/images/foo2.svg";
import img3 from "../../../assets/images/foo3.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cards">
          <div>
            <h2 className="footer__title">Exclusive</h2>
            <p className="footer__desc">Subscribe</p>
            <p className="footer__desc">Get 10% off your first order</p>
            <div className="footer__input">
              <input placeholder="Enter your email" type="text" />
              <LuSendHorizonal />
            </div>
          </div>
          <div>
            <h2 className="footer__title">Support</h2>
            <ul className="footer__item">
              <li className="footer__list">
                <a href="">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
              </li>
              <li className="footer__list">
                <a href="">xexclusive@gmail.com</a>
              </li>
              <li className="footer__list">
                <a href="">+88015-88888-9999</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Account</h2>
            <ul className="footer__item">
              <li className="footer__list">
                <a href="">My Account</a>
              </li>
              <li className="footer__list">
                <a href="">Login / Register</a>
              </li>
              <li className="footer__list">
                <a href="">Cart</a>
              </li>
              <li className="footer__list">
                <a href="">Wishlist</a>
              </li>
              <li className="footer__list">
                <a href="">Shop</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Quick Link</h2>
            <ul className="footer__item">
              <li className="footer__list">
                <a href="">Privacy Policy</a>
              </li>
              <li className="footer__list">
                <a href="">Terms Of Use</a>
              </li>
              <li className="footer__list">
                <a href="">FAQ</a>
              </li>
              <li className="footer__list">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Quick Link</h2>
            <p className="footer__desc">Save $3 with App New User Only</p>
            <div className="footer__link__img">
              <img src={img1} alt="" />
              <div>
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="footer__imgs">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer__bottom__title">
        Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
