import './style/view_card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const About_card = () => {
  return(
      <>
          <section id="product-content" className="mt-5">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-5 col-sm-12">
                          <div className="about-product-card-text-content">
                              <p>PRODUCTS</p>
                              <span>-</span>
                              <h2>CHECK OUR PRODUCTS</h2>
                          </div>
                      </div>
                      <div className="col-md-7 col-sm-12 pt-4">
                          <div className="about-text-content">
                              <h5>
                                  Ultrices scelerisque habitant turpis eget ut fermentum sagittis at molestie. Dui nisl morbi
                                  velit pellentesque id et. Sed facilisis at arcu nisl condimentum cursus eu nullam nulla</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="mt-5">
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
          </section>
      </>
  )
}

export default About_card;