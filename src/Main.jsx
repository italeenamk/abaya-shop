import {render} from "react-dom";
import {Router, Routes, BrowserRouter as Route, BrowserRouter} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Contact_us from "./pages/home/Contact_us";

const Main = () => {

    const currentUser = true;
    const user = false;
  return(
      <>
            {/*<Contact_us/>*/}
          {/*<Home/>*/}
          {/*<About_main/>*/}
          {/*<Shop/>*/}
          {/*<Blog_main/>*/}
          <Contact_us/>
      </>
  )
}

export default Main;