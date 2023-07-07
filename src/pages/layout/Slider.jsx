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
              <div className="list-navbar-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 text-right col-sm-12">
                              <div className="list-navbar-list-content">
                                  <ul>
                                      <li><p href="">Home</p></li>
                                      <Link style={{textDecoration: "none", color:"inherit"}} to="/aboutme">
                                          <li><p href="">ABOUT US</p></li>
                                      </Link>
                                      <li>
                                          <div className="dropdown">
                                              <p type="button" className="btndropdown-toggle"
                                                 data-toggle="dropdown">
                                                  SHOP <span className="drop"></span>
                                              </p>
                                              <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="#">TRACK ORDER</a>
                                                  <a className="dropdown-item" href="#">LOGIN</a>
                                                  <a className="dropdown-item" href="#">PRODUCT DETAILS</a>
                                              </div>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-6 text-left col-sm-12">
                              <div className="list-navbar-right-list-content">
                                  <ul>
                                      <li>
                                          <div className="dropdown">
                                              <p type="button" className="btndropdown-toggle"
                                                 data-toggle="dropdown">
                                                  PAGES <span className="drop"></span>
                                              </p>
                                              <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="#">OUR LOCATIONS</a>
                                                  <a className="dropdown-item" href="#">OUR TEAM</a>
                                                  <a className="dropdown-item" href="#">PRICING</a>
                                                  <a className="dropdown-item" href="#">FAQ</a>
                                                  <a className="dropdown-item" href="#">TESTIMONIALS</a>
                                                  <a className="dropdown-item" href="#">404</a>
                                                  <a className="dropdown-item" href="#">COMING SOON</a>
                                                  <a className="dropdown-item" href="#">POPUPS BANNER</a>
                                              </div>
                                          </div>
                                      </li>
                                      <li><p href="">BLOG</p></li>
                                      <Link style={{textDecoration: "none", color:"inherit"}} to="/contact">
                                          <li><p href="">CONTACT US</p></li>
                                      </Link>
                                  </ul>
                              </div>
                          </div>
                          {/*<div className="col-md-12 text-center col-sm-12">*/}
                          {/*    <div className="list-navbar-list-content">*/}
                          {/*        <ul>*/}
                          {/*            <li><p href="">Home</p></li>*/}
                          {/*            <li><p href="">ABOUT US</p></li>*/}
                          {/*            <li>*/}
                          {/*                <div className="dropdown">*/}
                          {/*                    <p type="button" className="btndropdown-toggle"*/}
                          {/*                            data-toggle="dropdown">*/}
                          {/*                        SHOP <span className="drop"></span>*/}
                          {/*                    </p>*/}
                          {/*                    <div className="dropdown-menu">*/}
                          {/*                        <a className="dropdown-item" href="#">TRACK ORDER</a>*/}
                          {/*                        <a className="dropdown-item" href="#">LOGIN</a>*/}
                          {/*                        <a className="dropdown-item" href="#">PRODUCT DETAILS</a>*/}
                          {/*                    </div>*/}
                          {/*                </div>*/}
                          {/*            </li>*/}
                          {/*            <li>*/}
                          {/*                <div className="dropdown">*/}
                          {/*                    <p type="button" className="btndropdown-toggle"*/}
                          {/*                       data-toggle="dropdown">*/}
                          {/*                        PAGES <span className="drop"></span>*/}
                          {/*                    </p>*/}
                          {/*                    <div className="dropdown-menu">*/}
                          {/*                        <a className="dropdown-item" href="#">OUR LOCATIONS</a>*/}
                          {/*                        <a className="dropdown-item" href="#">OUR TEAM</a>*/}
                          {/*                        <a className="dropdown-item" href="#">PRICING</a>*/}
                          {/*                        <a className="dropdown-item" href="#">FAQ</a>*/}
                          {/*                        <a className="dropdown-item" href="#">TESTIMONIALS</a>*/}
                          {/*                        <a className="dropdown-item" href="#">404</a>*/}
                          {/*                        <a className="dropdown-item" href="#">COMING SOON</a>*/}
                          {/*                        <a className="dropdown-item" href="#">POPUPS BANNER</a>*/}
                          {/*                    </div>*/}
                          {/*                </div>*/}
                          {/*            </li>*/}
                          {/*            <li><p href="">BLOG</p></li>*/}
                          {/*            <li><p href="">CONTACT US</p></li>*/}
                          {/*        </ul>*/}
                          {/*    </div>*/}
                          {/*</div>*/}
                      </div>
                  </div>
              </div>
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