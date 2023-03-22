import './style/about.css';
import about_img from "./image/quality-sect-pp4d3oajmg6evvh03kzourw0yyuo46y0teakiymjfw.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";


const Quality = () => {
  return(
      <>
          <section className="quality-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 col-sm-12">
                          <div className="quality-left-colum-img">
                              <img src={ about_img } alt="" className="img-fluid"/>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12 pl-5">
                          <div className="about-text-content">
                              <p>QUALITY</p>
                              <span>-</span>
                              <h3>QUALITY OVER<br/> EVERYTHING</h3>
                              <h5>Ultrices scelerisque habitant turpis eget ut fermentum sagittis at molestie. Dui nisl morbi velit
                                  pellentesque id et. Sed facilisis at arcu nisl condimentum cursus eu nullam nulla</h5>
                              <h5>Velit, condimentum nibh facilisi diam volutpat ullamcorper. Faucibus in dignissim nunc,
                                  eget molestie id Tempus amet vitae congue nulla. Aenean nec erat sed sociis
                                  sed neque. Sem ante leo Facilisis morbi convallis ornare justo condimentum dignissim.</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Quality;