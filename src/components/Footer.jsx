import React from "react";
import styles from "../modules/Footer.module.scss";
import Submit from "../assets/submit-icon.png";
import QRIcon from "../assets/qr-icon.png";
import Gplay from "../assets/gplay-icon.png";
import AppStore from "../assets/app-store-icon.png";
import Facebook from "../assets/facebook-icon.png";
import Twitter from "../assets/twitter-icon.png";
import LinkedIn from "../assets/linkedin-icon.png";
import Instagram from "../assets/insta-icon.png";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-footer"]}>
        <div className={styles["footer-icon-a"]}>
          <div className={styles["footer-icon-b"]}>
            <div className={styles["footer-icon-c"]}>
              <div className={styles["footer-iconcopyright"]}>
                <div className={styles["footer-group"]}></div>
              </div>
              <span className={styles["footer-text"]}>
                <span>© Copyright Rimel 2022. All right reserved</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles["footer-icon-7"]}>
          <div className={styles["footer-icon-8"]}>
            <div className={styles["footer-exclusive-sub"]}>
              <div className={styles["footer-exclusive-sub-main"]}>
                <div className={styles["footer-logo"]}>
                  <span className={styles["footer-text02"]}>
                    <span>Exclusive</span>
                  </span>
                </div>
                <span className={styles["footer-text04"]}>
                  <span>Subscribe</span>
                </span>
              </div>
              <span className={styles["footer-text06"]}>
                <span>Get 10% off your first order</span>
              </span>
            </div>
            <div className={styles["footer-send-mail"]}>
              <span className={styles["footer-text08"]}>
                <span>Enter your email</span>
              </span>
              <img src={Submit} className={styles["footer-iconsend"]} />
            </div>
          </div>
          <div className={styles["footer-container-sub-1"]}>
            <span className={styles["footer-text10"]}>
              <span>Support</span>
            </span>
            <div className={styles["footer-container-sub-2"]}>
              <span className={styles["footer-text12"]}>
                <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
              </span>
              <span className={styles["footer-text14"]}>
                <span>exclusive@gmail.com</span>
              </span>
              <span className={styles["footer-text16"]}>
                <span>+88015-88888-9999</span>
              </span>
            </div>
          </div>
          <div className={styles["footer-container-sub-3"]}>
            <span className={styles["footer-text18"]}>
              <span>Account</span>
            </span>
            <div className={styles["footer-container-sub-4"]}>
              <span className={styles["footer-text20"]}>
                <span>My Account</span>
              </span>
              <span className={styles["footer-text22"]}>
                <span>Login / Register</span>
              </span>
              <span className={styles["footer-text24"]}>
                <span>Cart</span>
              </span>
              <span className={styles["footer-text26"]}>
                <span>Wishlist</span>
              </span>
              <span className={styles["footer-text28"]}>
                <span>Shop</span>
              </span>
            </div>
          </div>
          <div className={styles["footer-container-sub-5"]}>
            <span className={styles["footer-text30"]}>
              <span>Quick Link</span>
            </span>
            <div className={styles["footer-container-sub-6"]}>
              <span className={styles["footer-text32"]}>
                <span>Privacy Policy</span>
              </span>
              <span className={styles["footer-text34"]}>
                <span>Terms Of Use</span>
              </span>
              <span className={styles["footer-text36"]}>
                <span>FAQ</span>
              </span>
              <span className={styles["footer-text38"]}>
                <span>Contact</span>
              </span>
            </div>
          </div>
          <div className={styles["footer-container-sub-7"]}>
            <div className={styles["footer-container-sub-8"]}>
              <span className={styles["footer-text40"]}>
                <span>Download App</span>
              </span>
              <div className={styles["footer-container-sub-9"]}>
                <span className={styles["footer-text42"]}>
                  <span>Save $3 with App New User Only</span>
                </span>
                <div className={styles["footer-sub-10"]}>
                  <div className={styles["footer-qr-code"]}>
                    <img src={QRIcon} className={styles["footer-qrcode1"]} />
                  </div>
                  <div className={styles["footer-sub-11"]}>
                    <div className={styles["footer-google-play"]}>
                      <img src={Gplay} className={styles["footer-gplay"]} />
                    </div>
                    <div className={styles["footer-app-store"]}>
                      <img
                        src={AppStore}
                        className={styles["footer-downloadappstore"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["footer-frame741"]}>
              <img src={Facebook} className={styles["footer-icon-facebook"]} />
              <div className={styles["footer-icon-twitter"]}>
                <div className={styles["footer-group1"]}>
                  <img src={Twitter} className={styles["footer-icontwitter"]} />
                </div>
              </div>
              <div className={styles["footer-iconinstagram"]}>
                <div className={styles["footer-group2"]}>
                  <img
                    src={Instagram}
                    className={styles["footer-icon-insta"]}
                  />
                </div>
              </div>
              <img src={LinkedIn} className={styles["footer-icon-linkedin"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
