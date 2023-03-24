import Top_Nav from "../layout/Top_Nav";
import About_slider from "../layout/About_slider";
import About from "../layout/About";
import Footer from "../layout/Footer";
import Hijab from "../layout/Hijab";
import About_card from "../layout/About_card";
import Quality from "../layout/Quality";
import Story from "../layout/Story";


const About_main = () => {
  return(
      <>
          <Top_Nav/>
          <About_slider/>
          <About/>
          <Story/>
          <Quality/>
          <About_card/>
          <Hijab/>
          <Footer/>
      </>
  )
}

export default About_main;