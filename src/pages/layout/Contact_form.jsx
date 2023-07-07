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
                                      <iframe
                                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106428.10877525054!2d72.72249275850982!3d33.530547068860535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9b8a0fbc4dbb%3A0x7a23bdc39fa31808!2sJangal%2C%20Attock%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688742769968!5m2!1sen!2s"
                                          width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                                          referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Contact_form;