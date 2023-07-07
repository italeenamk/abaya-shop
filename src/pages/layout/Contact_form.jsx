import './style/contact_form.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import map from './image/Screen-Shot-2016-06-23-at-3.31.37-PM.jpg';


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
                                      {/*<div className="contact-me-location-content">*/}
                                      {/*    <div className="card">*/}
                                      {/*        <div className="row">*/}
                                      {/*            <div className="col-md-8 col-sm-12">*/}
                                      {/*                <div className="contact-page-card-left-content">*/}
                                      {/*                    <h4>lastminute.com London Eye</h4>*/}
                                      {/*                    <p>Riverside Building, County Hall, London SE1 7PB, United Kingdom</p>*/}
                                      {/*                    <h5>4.5 <a href="">151,949 reviews</a></h5>*/}
                                      {/*                    <span>View larger map</span>*/}
                                      {/*                </div>*/}
                                      {/*            </div>*/}
                                      {/*            <div className="col-md-4 col-sm-12 text-center">*/}
                                      {/*                <div className="contact-page-right-content">*/}
                                      {/*                    <i className="fa-solid fa-signs-post fa-1x"></i>*/}
                                      {/*                    <div className="contact-page-card-left-content">*/}
                                      {/*                        <span>Direction</span>*/}
                                      {/*                    </div>*/}
                                      {/*                </div>*/}
                                      {/*            </div>*/}
                                      {/*        </div>*/}
                                      {/*    </div>*/}
                                      {/*</div>*/}
                                      <iframe
                                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106428.10877525054!2d72.72249275850982!3d33.530547068860535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9b8a0fbc4dbb%3A0x7a23bdc39fa31808!2sJangal%2C%20Attock%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688742769968!5m2!1sen!2s"
                                          width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
                                          referrerPolicy="no-referrer-when-downgrade"></iframe>
                                  </div>
                                  <div className="col-md-4 col-sm-12"></div>
                              </div>
                              <div className="contact-me-bottom-content">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="contact-me-bottom-map-content">
                                              <img src={ map } alt=""/>
                                          </div>
                                      </div>
                                      <div className="col-md-6 text-right">
                                          <div className="contact-me-bottom-right-content">
                                              <div className="card">
                                                  <i className="fa-solid fa-plus fa-1x"></i>
                                                  <hr/>
                                                  <i className="fa-solid fa-minus fa-1x"></i>
                                              </div>
                                          </div>
                                      </div>
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

export default Contact_form;