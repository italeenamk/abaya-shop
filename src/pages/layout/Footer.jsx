import './style/footer.css';
import delivery_img from "./image/added-truck.png";
import dollar_img from "./image/dollar.png";
import credit_card_img from "./image/added-credit-card.png";
import support_img from "./image/support.png";



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
          </section>
      </>
  )
}

export default Footer;