import './style/footer.css';
import './style/Mobile_screen.css';
import delivery_img from "./image/added-truck.png";
import dollar_img from "./image/dollar.png";
import credit_card_img from "./image/added-credit-card.png";
import support_img from "./image/support.png";
import footer_logo_img from "./image/logo-aisha.png";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Footer = () => {
  return(
      <>
          <section id="footer-background-color-content">
              {/*delivery-card-content*/}
              <div className="delivery-card-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12">
                              <div className="footer-card-icon-link-content">
                                  <img src={ delivery_img } alt=""/>
                                  <div className="view-card-text-content">
                                      <h4>FREE DELIVERY</h4>
                                      <p>Nulla porta dictumst vitae</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="footer-card-icon-link-content">
                                  <img src={ dollar_img } alt=""/>
                                  <div className="view-card-text-content">
                                      <h4>30 DAYS RETURN</h4>
                                      <p>Nulla porta dictumst vitae</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="footer-card-icon-link-content">
                                  <img src={ credit_card_img } alt=""/>
                                  <div className="view-card-text-content">
                                      <h4>SECURE PAYMENT</h4>
                                      <p>Nulla porta dictumst vitae</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="footer-card-icon-link-content">
                                  <img src={ support_img } alt=""/>
                                  <div className="view-card-text-content">
                                      <h4>24/7 SUPPORT</h4>
                                      <p>Nulla porta dictumst vitae</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/*footer-input-content*/}
              <div className="footer-input-content">
                  <div className="container-fluid">
                      <div className="row">
                              <div className="col-md-6 col-sm-12">
                                  <div className="footer-link-heading-content">
                                      <p>NEWSLETTER</p>
                                      <span></span>
                                      <h3>JOIN OUR NEWSLETTER</h3>
                                  </div>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                  <div className="footer-input-content">
                                      <p>ltrices scelerisque habitant turpis eget ut fermentum sagittis.</p>
                                      <div className="footer-input-btn-content">
                                          <input type="text" placeholder="Email address"/>
                                          <button>subscribe <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                                      </div>
                                  </div>
                              </div>
                      </div>
                  </div>
              </div>
              {/*footer-list-content*/}
              <div className="footer-list-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12">
                              <div className="footer-list-first-colum-content">
                                  <h3>CUSTOMER CARE</h3>
                                  <ul>
                                      <li><a href="">Account</a></li>
                                      <li><a href="">Contact Us</a></li>
                                      <li><a href="">Shipping & Delivery</a></li>
                                      <li><a href="">Returns & Exchanges</a></li>
                                      <li><a href="">Size Guide</a></li>
                                      <li><a href="">FAQ</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                              <div className="footer-list-first-colum-content">
                                  <h3>INFORMATION</h3>
                                  <ul>
                                      <li><a href="">Veiled Rewards</a></li>
                                      <li><a href="">Reviews</a></li>
                                      <li><a href="">Our Brand</a></li>
                                      <li><a href="">Blog</a></li>
                                      <li><a href="">Privacy Policy</a></li>
                                      <li><a href="">Brand Ambassadors</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="footer-list-first-colum-content">
                                  <h3>COMMUNITY</h3>
                                  <ul>
                                      <li><a href="">Aisha Community</a></li>
                                      <li><a href="">Community Rewards</a></li>
                                      <li><a href="">Hijab Style Guide</a></li>
                                      <li><a href="">Ethics & Sustainability</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-4 col-sm-12">
                              <div className="footer-list-second-colum-content">
                                  <img src={ footer_logo_img } alt=""/>
                                  <ul>
                                      <li><span href="">50A - Wetland Avenue Coastline Boulevard, NY USA</span></li>
                                      <li><span href="">hello@aisha.com</span></li>
                                      <li><span href="">023-4567-890</span></li>
                                      <div className="footer-icon-list-content">
                                          <i className="fa-brands fa-facebook-f"></i>
                                          <i className="fa-brands fa-twitter"></i>
                                          <i className="fa-brands fa-instagram"></i>
                                          <i className="fa-brands fa-tiktok"></i>
                                      </div>
                                  </ul>
                              </div>
                          </div>
                          <hr/>
                      </div>
                  </div>
              </div>
              {/*footer-end-point-content*/}
              <div className="footer-end-point-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 col-sm-12">
                              <div className="footer-copy-right-text-content">
                                  <p>Copyright © 2022 Aisha. All rights reserved.</p>
                              </div>
                          </div>
                          <div className="col-md-6 text-right col-sm-12">
                              <div className="footer-logo-img-content">
                                  <i className="fa-brands fa-cc-mastercard"></i>
                                  <i className="fa-brands fa-cc-paypal"></i>
                                  <i className="fa-brands fa-cc-visa"></i>
                                  <i className="fa-brands fa-cc-stripe"></i>
                                  <i className="fa-brands fa-cc-discover"></i>
                                  <i className="fa-brands fa-cc-jcb"></i>
                                  <i className="fa-brands fa-cc-apple-pay"></i>
                                  <i className="fa-brands fa-cc-amazon-pay"></i>
                                  <i className="fa-brands fa-cc-amex"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Footer;