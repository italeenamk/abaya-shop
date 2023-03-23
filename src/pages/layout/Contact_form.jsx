import './style/contact_form.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import map from './image/goole-map.jpg';


const Contact_form = () => {
  return(
      <>
          <section id="contact-form-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 col-sm-12">
                          <div className="contact-form-content">
                              <h3>SEND US MESSAGE</h3>
                              <p>Ultrices scelerisque habitant turpis eget ut fermentum sagittis at molestie. Dui nisl morbi velit pellentesque</p>
                              <input type="text" placeholder="Your Name"/>
                              <input type="email" placeholder="Email Address"/>
                              <textarea className="" placeholder="Message" rows="5" id="comment"></textarea>
                              <button>SEND MESSAGE <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                          <div className="contact-map-content">
                              <div className="row">
                                  <div className="col-md-8 col-sm-12">
                                      <div className="contact-me-location-content">
                                          <div className="card">
                                              <div className="row">
                                                  <div className="col-md-8 col-sm-12">
                                                      <div className="contact-page-card-left-content">
                                                          <h4>lastminute.com London Eye</h4>
                                                          <p>Riverside Building, County Hall, London SE1 7PB, United Kingdom</p>
                                                          <h5>4.5 <a href="">151,949 reviews</a></h5>
                                                          <span>View larger map</span>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-4 col-sm-12 text-center">
                                                      <div className="contact-page-right-content">
                                                          <i className="fa-solid fa-signs-post fa-1x"></i>
                                                          <div className="contact-page-card-left-content">
                                                              <span>Direction</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-4 col-sm-12"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Contact_form;