import './style/contact_form.css';


const Contact_form = () => {
  return(
      <>
          <section id="contact-form-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 col-sm-12">
                          <div className="contact-form-content">
                              <h3>SEND US MESSAGE</h3>
                              <p>Ultrices scelerisque habitant turpis eget ut fermentum sagittis at molestie. Dui nisl morbi velit pellentesque</p>
                              <input type="text" placeholder="Your Name"/>
                              <input type="email" placeholder="Email Address"/>
                              <textarea className="" placeholder="Message" rows="5" id="comment"></textarea>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                          <div className="contact-map-content"></div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Contact_form;