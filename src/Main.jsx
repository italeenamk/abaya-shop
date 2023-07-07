import {render} from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Contact_us from "./pages/home/Contact_us";
import Home from "./pages/home/Home";
import About_main from "./pages/home/About_main";
import Shop from "./pages/home/Shop";
import Blog_main from "./pages/home/Blog_main";
import About from "./pages/layout/About";

const Main = () => {

    const currentUser = true;
    const user = false;
  return(
      <>
          <Router>
              <Home/>
              <Routes>
                  <Route exact path="/shop" element={<Shop/>}/>
                  <Route exact path="/blog" element={<Blog_main/>}/>
                  <Route exact path="/about" element={<About/>}/>
                  <Route exact path="/contact" element={<Contact_us/>}/>
              </Routes>
          </Router>


          {/*<Home/>*/}
          {/*<About_main/>*/}
          {/*<Shop/>*/}
          {/*<Blog_main/>*/}
          {/*<Contact_us/>*/}
      </>
  )
}

export default Main;