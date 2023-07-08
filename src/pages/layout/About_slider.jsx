import './style/slider.css';
import navbar_logo_img from "./image/logo-aisha.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

const About_slider = () => {
  return(
      <>
          <section id="about-slider-content">
              {/*logo-navbar-content*/}
              <div className="-about-logo-nav-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-4 col-sm-12">
                              <div className="logo-navbar-icon-links">
                                  <ul>
                                      <li><i className="fa-brands fa-facebook-f fa-1x"></i></li>
                                      <li><i className="fa-brands fa-twitter fa-1x"></i></li>
                                      <li><i className="fa-brands fa-instagram fa-1x"></i></li>
                                      <li><i className="fa-brands fa-tiktok fa-1x"></i></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-4 col-sm-12 text-center">
                              <div className="logo-navbar-logo-content">
                                  <img src={ navbar_logo_img } alt=""/>
                              </div>
                          </div>
                          <div className="col-md-2"></div>
                          <div className="col-md-2 col-sm-12">
                              <div className="logo-nav-right-icon-link">
                                  <ul>
                                      <li><i className="fa-solid fa-magnifying-glass fa-1x"></i></li>
                                      <li><i className="fa-solid fa-user fa-1x"></i></li>
                                      <li><i className="fa-solid fa-dollar-sign fa-1x"></i></li>
                                      <li><i className="fa-solid fa-bag-shopping fa-1x"></i></li>
                                  </ul>
                              </div>
                          </div>
                          <hr/>
                      </div>
                  </div>
              </div>
              {/*list-navbar-content*/}
              hrllo
              {/*slider-text-colum-content*/}
              <div className="about-slider-text-colum-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 col-sm-12">
                              <div className="-about-slider-text-column-container">
                                  <span>ABOUT US</span>
                                  <hr/>
                                  <h2>ABOUT US</h2>
                                  <p>HOME > ABOUT</p>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-12"></div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default About_slider;