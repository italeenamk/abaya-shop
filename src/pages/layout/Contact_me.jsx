import './style/about.css';
import about_img from "./image/contact-sect.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import footer_logo_img from "./image/logo-aisha-dark.png";

const Contact_me = () => {
  return(
      <>
          <section id="contact-me-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 col-sm-12">
                          <div className="about-img-content">
                              <img src={ about_img } alt="" className="img-fluid"/>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12 pl-5">
                          <div className="about-text-content contact-me-content">
                              <p>CONTACT</p>
                              <span>-</span>
                              <h3>GET IN TOUCH</h3>
                              <h5>Ultrices scelerisque habitant turpis eget ut fermentum sagittis at molestie. Dui nisl morbi
                                  velit pellentesque id et. Sed facilisis at arcu nisl condimentum cursus eu nullam nulla</h5>
                              <hr/>
                          </div>
                          <div className="contact-me-address-content">
                              <div className="contact-me-list-second-colum-content">
                                  <img src={ footer_logo_img } alt=""/>
                                  <ul>
                                      <li><span href="">50A - Wetland Avenue Coastline Boulevard, NY USA</span></li>
                                      <li><span href="">hello@aisha.com</span></li>
                                      <li><span href="">023-4567-890</span></li>
                                      <div className="footer-icon-list-content">
                                          <i className="fa-brands fa-facebook-f fa-1x"></i>
                                          <i className="fa-brands fa-twitter fa-1x"></i>
                                          <i className="fa-brands fa-instagram fa-1x"></i>
                                          <i className="fa-brands fa-tiktok fa-1x"></i>
                                      </div>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Contact_me;