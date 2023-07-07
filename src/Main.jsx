import {render} from "react-dom";
import {Router, Routes, BrowserRouter as Route, BrowserRouter} from "react-router-dom";
import About_main from "./pages/home/About_main";
import Shop from "./pages/home/Shop";
import Blog_main from "./pages/home/Blog_main";
import Contact_us from "./pages/home/Contact_us";
import Home from "./pages/home/Home";

const Main = () => {
  return(
      <>
            <Contact_us/>
          {/*<Home/>*/}
          {/*<About_main/>*/}
          {/*<Shop/>*/}
          {/*<Blog_main/>*/}
          {/*<Contact_us/>*/}
      </>
  )
}

export default Main;