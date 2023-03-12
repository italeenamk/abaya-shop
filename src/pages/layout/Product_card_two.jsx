import './style/product_card.css';
import product_img_1 from "./image/product-dummy11-300x300.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import product_img_2 from "./image/product-dummy2-300x300.jpg";
import product_img_3 from "./image/product-dummy3-300x300.jpg";
import product_img_4 from "./image/product-dummy4-300x300.jpg";


const Product_card_two = () => {
  return(
      <>
          <section id="product-card-content">
              {/*product-card-heading-content*/}
              <div className="product-card-heading-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-12 text-center">
                              <div className="product-card-text-content">
                                  <p>POPULAR</p>
                                  <span>-</span>
                                  <h2>POPULAR PRODUCTS</h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/*product-card-img-card-content*/}
              <div className="product-card-img-card-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="product-card-element-content">
                                  <img src={ product_img_1 } alt="" className="img-fluid"/>
                                  <h3>INSTANT PREMIUM HIJAB</h3>
                                  <div className="product-card-star-content">
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                  </div>
                                  <p>$23</p>
                                  <button>ADD TO CART</button>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="product-card-element-content">
                                  <img src={ product_img_2 } alt="" className="img-fluid"/>
                                  <h3>INSTANT PREMIUM HIJAB</h3>
                                  <div className="product-card-star-content">
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                  </div>
                                  <p>$23</p>
                                  <button>ADD TO CART</button>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="product-card-element-content">
                                  <img src={ product_img_3 } alt="" className="img-fluid"/>
                                  <h3>INSTANT PREMIUM HIJAB</h3>
                                  <div className="product-card-star-content">
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                  </div>
                                  <p>$23</p>
                                  <button>ADD TO CART</button>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="product-card-element-content">
                                  <img src={ product_img_4 } alt="" className="img-fluid"/>
                                  <h3>INSTANT PREMIUM HIJAB</h3>
                                  <div className="product-card-star-content">
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                  </div>
                                  <p>$23</p>
                                  <button>ADD TO CART</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/*product-card-img-card-content*/}
              <div className="product-card-img-card-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="product-card-element-content">
                                  <img src={ product_img_1 } alt="" className="img-fluid"/>
                                  <h3>INSTANT PREMIUM HIJAB</h3>
                                  <div className="product-card-star-content">
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                  </div>
                                  <p>$23</p>
                                  <button>ADD TO CART</button>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="product-card-element-content">
                                  <img src={ product_img_2 } alt="" className="img-fluid"/>
                                  <h3>INSTANT PREMIUM HIJAB</h3>
                                  <div className="product-card-star-content">
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                  </div>
                                  <p>$23</p>
                                  <button>ADD TO CART</button>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="product-card-element-content">
                                  <img src={ product_img_3 } alt="" className="img-fluid"/>
                                  <h3>INSTANT PREMIUM HIJAB</h3>
                                  <div className="product-card-star-content">
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                  </div>
                                  <p>$23</p>
                                  <button>ADD TO CART</button>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="product-card-element-content">
                                  <img src={ product_img_4 } alt="" className="img-fluid"/>
                                  <h3>INSTANT PREMIUM HIJAB</h3>
                                  <div className="product-card-star-content">
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" />
                                  </div>
                                  <p>$23</p>
                                  <button>ADD TO CART</button>
                              </div>
                          </div>
                          <hr/>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Product_card_two;