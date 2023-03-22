import Top_Nav from "../layout/Top_Nav";
import Slider from "../layout/Slider";
import About_slider from "../layout/About_slider";
import About from "../layout/About";
import Footer from "../layout/Footer";
import Hijab from "../layout/Hijab";
import View_card from "../layout/View_card";
import About_card from "../layout/About_card";
import Quality from "../layout/Quality";
import Story from "../layout/Story";
import Services from "../layout/Services";


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