import {Link} from "react-router-dom";


const Navbar = () => {
  return(
      <>
          <div className="list-navbar-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 text-right col-sm-12">
                          <div className="list-navbar-list-content">
                              <ul>
                                  <Link style={{textDecoration: "none", color:"inherit"}} to="/">
                                      <li><p href="">Home</p></li>
                                  </Link>
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
      </>
  )
}

export default Navbar;