import Top_Nav from "../layout/Top_Nav";
import Slider from "../layout/Slider";
import View_card from "../layout/View_card";
import Product_card from "../layout/Product_card";
import Product_card_two from "../layout/Product_card_two";
import Sale_theme from "../layout/Sale_theme";
import About from "../layout/About";
import Services from "../layout/Services";
import Blog from "../layout/Blog";
import Hijab from "../layout/Hijab";


const Home = () => {
  return(
      <>
          <Top_Nav/>
          <Slider/>
          <View_card/>
          <Product_card/>
          <Product_card_two/>
          <Sale_theme/>
          <About/>
          <Services/>
          <Blog/>
          <Hijab/>
      </>
  )
}

export default Home;