import './style/blog.css';
import blog_colum_img_1 from "./image/post-img1-768x427.jpg";
import blog_colum_img_2 from "./image/post-img2-768x427.jpg";
import blog_colum_img_3 from "./image/post-img3-768x427.jpg";
import blog_colum_img_4 from "./image/post-img4-768x427.jpg";
import blog_colum_img_5 from "./image/post-img5-768x427.jpg";
import blog_colum_img_6 from "./image/post-img6-768x427.jpg";


const Blog_file_bottom = () => {
  return(
      <>
          <div className="blog-bottom-content">
              <section id="blog-bottom-content">
                  {/*product-card-heading-content*/}
                  <div className="blog-bottom-card-heading-content">
                      <div className="container-fluid">
                          <div className="row mt-3">
                              <div className="col-md-12 text-center">
                                  <div className="blog-bottom-card-text-content">
                                      <h2>EXPLORE MORE BLOG</h2>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/*blog-content-colum*/}
                  <div className="blog-content">
                      <div className="container-fluid">
                          <div className="row">
                              <div className="col-md-4 col-sm-12 text-center">
                                  <div className="blog-card-content">
                                      <img src={ blog_colum_img_1 } className="img-fluid" alt=""/>
                                      <h3>FAUCIBUS MOLESTIE DICTUM TELLUS</h3>
                                      <p>May 22, 2022 No Comments</p>
                                  </div>
                              </div>
                              <div className="col-md-4 col-sm-12 text-center">
                                  <div className="blog-card-content">
                                      <img src={ blog_colum_img_2 } className="img-fluid" alt=""/>
                                      <h3>FAUCIBUS MOLESTIE DICTUM TELLUS</h3>
                                      <p>May 22, 2022 No Comments</p>
                                  </div>
                              </div>
                              <div className="col-md-4 col-sm-12 text-center">
                                  <div className="blog-card-content">
                                      <img src={ blog_colum_img_3 } className="img-fluid" alt=""/>
                                      <h3>FAUCIBUS MOLESTIE DICTUM TELLUS</h3>
                                      <p>May 22, 2022 No Comments</p>
                                  </div>
                              </div>
                          </div>
                          <div className="blog-bottom-card-img-content">
                              <div className="row">
                                  <div className="col-md-4 col-sm-12 text-center">
                                      <div className="blog-card-content">
                                          <img src={ blog_colum_img_4 } className="img-fluid" alt=""/>
                                          <h3>FAUCIBUS MOLESTIE DICTUM TELLUS</h3>
                                          <p>May 22, 2022 No Comments</p>
                                      </div>
                                  </div>
                                  <div className="col-md-4 col-sm-12 text-center">
                                      <div className="blog-card-content">
                                          <img src={ blog_colum_img_5 } className="img-fluid" alt=""/>
                                          <h3>FAUCIBUS MOLESTIE DICTUM TELLUS</h3>
                                          <p>May 22, 2022 No Comments</p>
                                      </div>
                                  </div>
                                  <div className="col-md-4 col-sm-12 text-center">
                                      <div className="blog-card-content">
                                          <img src={ blog_colum_img_6 } className="img-fluid" alt=""/>
                                          <h3>FAUCIBUS MOLESTIE DICTUM TELLUS</h3>
                                          <p>May 22, 2022 No Comments</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </>
  )
}

export default Blog_file_bottom;