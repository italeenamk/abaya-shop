import './style/slider.css';
import navbar_logo_img from './image/logo-aisha.png';
import {Link} from "react-router-dom";
import {faAngleRight, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Slider = () => {
  return(
      <>
          <section id="slider-content">
              {/*logo-navbar-content*/}
              <div className="logo-nav-content">
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
              
              {/*slider-text-colum-content*/}
              <div className="slider-text-colum-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 col-sm-12">
                              <div className="slider-text-column-container">
                                  <span>RAMADAN SALE</span>
                                  <hr/>
                                  <h2>HIJAB UP TO <br/>80% OFF</h2>
                                  <p>Nulla porta dictumst vitae scelerisque sollicitudin ut amet
                                      commodo pulvinar diam donec eu sit accumsan laoreet mattis aliquam justo</p>
                                  <button>SHOP NOW <FontAwesomeIcon icon={ faAngleRight } /></button>
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

export default Slider;