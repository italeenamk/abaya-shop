import './style/about.css';
import './style/Mobile_screen.css';
import about_img from './image/about-sect-pp3fhw4ja78xfvqdo2w8z7qf2eqjytrkrsggclz08e.png';
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const About = () => {
  return(
      <>
          <section id="about-me-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 col-sm-12">
                          <div className="about-img-content">
                              <img src={ about_img } alt="" className="img-fluid"/>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                          <div className="about-text-content">
                              <p>ABOUT US</p>
                              <span>-</span>
                              <h3>ABOUT AISHA</h3>
                              <h5>Velit, condimentum nibh facilisi diam volutpat ullamcorper. Faucibus in dignissim nunc, eget molestie id Tempus amet vitae congue nulla. Aenean
                                  nec erat sed sociis sed neque. Sem ante leo Facilisis morbi convallis ornare justo condimentum dignissim.</h5>
                              <h5>Ultrices scelerisque habitant turpis eget ut fermentum sagittis at molestie. Dui
                                  nisl morbi velit pellentesque id et. Sed facilisis at arcu nisl condimentum cursus eu nullam nulla</h5>
                              <button>LEARN MORE <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default About;