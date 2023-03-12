import './style/sale_theme.css';
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Sale_theme = () => {
  return(
      <>
          <section id="sale-theme-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 col-sm-12 text-right">
                          <div className="sale-theme-left-colum-background-content">
                              <div className="sale-theme-text-content">
                                  <h2>MID SEASON<br/> UP TO 50%<br/> OFF</h2>
                                  <button>VIEW PRODUCTS <FontAwesomeIcon icon={ faAngleRight } /></button>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12 text-left">
                          <div className="sale-theme-right-colum-background-content">
                              <div className="sale-theme-text-content">
                                  <h2>SPECIAL TODAYS<br/> UP TO 30% OFF</h2>
                                  <button>VIEW PRODUCTS <FontAwesomeIcon icon={ faAngleRight } /></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Sale_theme;