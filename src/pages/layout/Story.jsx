import story_img from "./image/founder-aisha-pp4cltczs4q4u3q58bbuk2kxkwyf5nip8x979iq7d4.jpg";


const Story = () => {
  return(
      <>
          <section id="services-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-5 col-sm-12">
                          <div className="story-container-testimonials-content">
                              <p>STORY</p>
                              <span></span>
                              <h3>FOUNDED IN 2020</h3>
                              <div className="story-text-content">
                                  <h5>Velit, condimentum nibh facilisi diam volutpat ullamcorper. Faucibus
                                      in dignissim nunc, eget molestie id Tempus amet vitae congue
                                      nulla. Aenean nec erat sed sociis sed neque. Sem ante leo Facilisis morbi convallis ornare justo</h5>
                                  <h5>Ultrices scelerisque habitant turpis eget ut fermentum sagittis at molestie. Dui
                                      nisl morbi velit pellentesque id et. Sed facilisis at arcu nisl</h5>
                                  <h4>“Ultrices scelerisque habitant turpis eget molestie condimentum cursus eu nullam nulla”</h4>
                              </div>
                              <div className="found-me-content">
                                  <h2>ZARIYAH NIXON</h2>
                                  <a href="">FOUNDER AISHA</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-7 col-sm-12">
                          <div className="story-right-img-content">
                              <img src={ story_img } alt="" className="img-fluid"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Story;