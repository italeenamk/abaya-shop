import Top_Nav from "../layout/Top_Nav";
import Footer from "../layout/Footer";
import Blog_slider from "../layout/Blog_slider";
import Blog from "../layout/Blog";
import Blog_file_top from "../layout/Blog_file_top";
import Blog_file_bottom from "../layout/Blog_file_bottom";


const Blog_main = () => {
  return(
      <>
          <Top_Nav/>
          <Blog_slider/>
          <Blog_file_top/>
          <Blog_file_bottom/>
          <Footer/>
      </>
  )
}

export default Blog_main;