import './style/services.css';
import './style/Mobile_screen.css';
import services_img_1 from './image/testimonial-sect1-pp3gh7w78ij1y0dp5ubh7fkpl7yut14n9hqerbzvkg.jpg';
import services_img_2 from './image/testimonials-sect2-pp69otm3d2ciebud2t5ghzcq714075zc7nkd0ll85s.jpg';
import {faAngleRight, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Services = () => {
  return(
      <>
          <section id="services-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-4 col-sm-12">
                          <div className="services-container-testimonials-content">
                              <p>TESTIMONIALS</p>
                              <span></span>
                              <h3>WHAT PEOPLE<br/> SAYS!</h3>
                              <h5>ltrices scelerisque habitant turpis eget ut fermentum<br/> sagittis molestie. Dui nisl morbi velit
                                  pellentesque <br/>id et. Sed facilisis at arcu nisl condimentum cursu<br/> nullam ut fermentum sagittis molestie.</h5>
                              <button>VIEW ALL <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-12 p-0">
                          <div className="services-container-img-content">
                              <img src={ services_img_1 } title="testimonial-sect1" alt="" className="img-fluid"/>
                              <img src={ services_img_2 } title="testimonials-sect2" alt="" className="img-fluid"/>
                          </div>
                      </div>
                      <div className="col-md-5 col-sm-12">
                          <div className="services-container-card-content">
                              <div className="card">
                                  <div className="services-header-content">
                                      <div className="services-header-left-content">
                                          <p>CUSTOMER REVIEWS</p>
                                          <span>-</span>
                                      </div>
                                      <div className="services-header-right-content">
                                          <i className="fa-solid fa-quote-right fa-1x"></i>
                                      </div>
                                  </div>
                                  <div className="services-card-star-content">
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" title="5/5" />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" title="5/5"  />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" title="5/5"  />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" title="5/5"  />
                                      <FontAwesomeIcon icon={ faStar } className="fa-1x" title="5/5"  />
                                  </div>
                                  <h3>AWESOME SERVICES!</h3>
                                  <h5>“The products and services are very good, shopping here has nothing to lose and with a very comfortable style”</h5>
                                  <a href="">BY SAMANTHA WILLIAM</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Services;