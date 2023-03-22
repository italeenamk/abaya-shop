import './style/view_card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";


const Shop_card = () => {
  return(
      <>
          <section className="mt-5">
              {/*view-card-colum-img-content*/}
              <div className="view-card-colum-img-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-7 col-sm-12">
                              <div className="view-card-colum-img-one-background-content">
                                  <div className="view-card-colum-text-content">
                                      <h3>EVERYDAY ESSENTIALS</h3>
                                      <button>VIEW PRODUCTS <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                                  </div>
                              </div>
                              <div className="view-card-colum-img-two-background-content">
                                  <div className="view-card-colum-text-content">
                                      <h3>LIMITED EDITION</h3>
                                      <button>VIEW PRODUCTS <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-5 col-sm-12">
                              <div className="view-card-right-colum-img-background-content">
                                  <div className="view-card-colum-right-text-content">
                                      <h3>DREAM COLLECTION</h3>
                                      <button>VIEW PRODUCTS <FontAwesomeIcon icon={ faAngleRight } className="fa-1x" /></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Shop_card;