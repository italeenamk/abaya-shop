import './style/about.css';
import about_img from "./image/contact-sect.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

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
                          <div className="about-text-content">
                              <p>CONTACT</p>
                              <span>-</span>
                              <h3>GET IN TOUCH</h3>
                              <h5>Ultrices scelerisque habitant turpis eget ut fermentum sagittis at molestie. Dui nisl morbi
                                  velit pellentesque id et. Sed facilisis at arcu nisl condimentum cursus eu nullam nulla</h5>
                              <hr/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Contact_me;