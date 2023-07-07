import {render} from "react-dom";
import {Router, Routes, BrowserRouter as Route, BrowserRouter} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Contact_us from "./pages/home/Contact_us";

const Main = () => {

    const currentUser = true;
    const user = false;
  return(
      <>
          <Router>
              <Topbar/>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/login" element={user ? <Home/> :<Login/>}/>
                  <Route exact path="/register" element={user ? <Home/> :<Registor/>}/>
                  <Route exact path="/post" element={<Post/>}/>
                  <Route path="/write" element={user ? <Write/> :<Registor/>}/>
                  <Route path="/settings" element={user ? <Settings/> :<Registor/>}/>
                  <Route path="/post/:postId" element={<Single/>}/>
              </Routes>
          </Router>

            {/*<Contact_us/>*/}
          {/*<Home/>*/}
          {/*<About_main/>*/}
          {/*<Shop/>*/}
          {/*<Blog_main/>*/}
          {/*<Contact_us/>*/}
      </>
  )
}

export default Main;