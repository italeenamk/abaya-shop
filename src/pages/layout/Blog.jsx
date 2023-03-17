import './style/blog.css';
import './style/Mobile_screen.css';
import blog_colum_img_1 from './image/post-img1-768x427.jpg';
import blog_colum_img_2 from './image/post-img2-768x427.jpg';
import blog_colum_img_3 from './image/post-img3-768x427.jpg';


const Blog = () => {
  return(
      <>
          <section id="blog-content">
              {/*product-card-heading-content*/}
              <div className="product-card-heading-content">
                  <div className="container-fluid">
                      <div className="row mt-3">
                          <div className="col-md-12 text-center">
                              <div className="product-card-text-content">
                                  <p>BLOG</p>
                                  <span>-</span>
                                  <h2>AISHA BLOG & NEWS</h2>
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
                  </div>
              </div>
          </section>
      </>
  )
}

export default Blog;