import './style/hijab.css';
import hijab_right_colum_img from './image/gallery5-hightlight.jpg';
import hijab_left_colum_img_1 from './image/gallery1.jpg';
import hijab_left_colum_img_2 from './image/gallery2.jpg';
import hijab_left_colum_img_3 from './image/gallery3.jpg';
import hijab_left_colum_img_4 from './image/gallery4.jpg';


const Hijab = () => {
  return(
      <>
          <section id="hijab-content">
              {/*product-card-heading-content*/}
              <div className="product-card-heading-content">
                  <div className="container-fluid">
                      <div className="row mt-3">
                          <div className="col-md-12 text-center">
                              <div className="product-card-text-content">
                                  <p>GALLERY</p>
                                  <span>-</span>
                                  <h2>SHOW US HOW YOU HIJAB</h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/*hijab-container*/}
              <div className="hijab-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 col-sm-12">
                              <div className="hijab-left-colum-content">
                                  <div className="row ">
                                      <div className="col-md-6 col-sm-12">
                                          <div className="hijab-colum-left-img-content">
                                              <div className="overlay"></div>
                                          </div>
                                      </div>
                                      <div className="col-md-6 col-sm-12">
                                          <div className="hijab-colum-img-two-left-img-content">
                                              <div className="overlay"></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row ">
                                      <div className="col-md-6 col-sm-12">
                                          <div className="hijab-colum-img-three-left-img-content">
                                              <div className="overlay"></div>
                                          </div>
                                      </div>
                                      <div className="col-md-6 col-sm-12">
                                          <div className="hijab-colum-img-four-left-img-content">
                                              <div className="overlay"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                              <div className="hijab-colum-right-img-content">
                                  <img src={ hijab_right_colum_img } className="img-fluid" alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Hijab;