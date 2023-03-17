import './style/view_card.css';
import './style/Mobile_screen.css';
import delivery_img from './image/added-truck.png'
import dollar_img from './image/dollar.png'
import credit_card_img from './image/added-credit-card.png'
import support_img from './image/support.png'
import logoismp_img_1 from './image/logoipsum1.png'
import logoismp_img_2 from './image/logoipsum2.png'
import logoismp_img_3 from './image/logoipsum3.png'
import logoismp_img_4 from './image/logoipsum4.png'
import logoismp_img_5 from './image/logoipsum5.png'
import logoismp_img_6 from './image/logoipsum6.png'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const View_card = () => {
  return(
      <>
          <section id="view-card-content">
              {/*icon-card-link*/}
              <div className="icon-card-link-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12">
                              <div className="view-crad-icon-link-content">
                                  <img src={ delivery_img } alt=""/>
                                  <div className="view-card-text-content">
                                      <h4>FREE DELIVERY</h4>
                                      <p>Nulla porta dictumst vitae</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="view-crad-icon-link-content">
                                  <img src={ dollar_img } alt=""/>
                                  <div className="view-card-text-content">
                                      <h4>30 DAYS RETURN</h4>
                                      <p>Nulla porta dictumst vitae</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="view-crad-icon-link-content">
                                  <img src={ credit_card_img } alt=""/>
                                  <div className="view-card-text-content">
                                      <h4>SECURE PAYMENT</h4>
                                      <p>Nulla porta dictumst vitae</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="view-crad-icon-link-content">
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
              {/*view-card-colum-img-content*/}
              <div className="view-card-colum-img-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-7 col-sm-12">
                              <div className="view-card-colum-img-one-background-content">
                                  <div className="view-card-colum-text-content">
                                      <h3>EVERYDAY ESSENTIALS</h3>
                                      <button>VIEW PRODUCTS <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                                  </div>
                              </div>
                              <div className="view-card-colum-img-two-background-content">
                                  <div className="view-card-colum-text-content">
                                      <h3>LIMITED EDITION</h3>
                                      <button>VIEW PRODUCTS <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-5 col-sm-12">
                              <div className="view-card-right-colum-img-background-content">
                                  <div className="view-card-colum-right-text-content">
                                      <h3>DREAM COLLECTION</h3>
                                      <button>VIEW PRODUCTS <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/*view-card-brand-content*/}
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <div className="brand-text-content">
                              <h3>OUR BRANDS</h3>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="view-card-brand-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-2 col-sm-12">
                              <div className="brand-logo-content">
                                  <img src={ logoismp_img_1 } alt=""/>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                              <div className="brand-logo-content">
                                  <img src={ logoismp_img_2 } alt=""/>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                              <div className="brand-logo-content">
                                  <img src={ logoismp_img_3 } alt=""/>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                              <div className="brand-logo-content">
                                  <img src={ logoismp_img_4 } alt=""/>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                              <div className="brand-logo-content">
                                  <img src={ logoismp_img_5 } alt=""/>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                              <div className="brand-logo-content">
                                  <img src={ logoismp_img_6 } alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default View_card;