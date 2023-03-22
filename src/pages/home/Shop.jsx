import About_card from "../layout/About_card";
import View_card from "../layout/View_card";
import Top_Nav from "../layout/Top_Nav";
import About_slider from "../layout/About_slider";
import Product_card from "../layout/Product_card";
import Sale_theme from "../layout/Sale_theme";
import Footer from "../layout/Footer";
import Product_card_two from "../layout/Product_card_two";
import Shop_Slider from "../layout/Shop_Slider";
import Shop_card from "../layout/Shop_card";


const Shop = () => {
  return(
      <>
          <Top_Nav/>
          <Shop_Slider/>
          <Shop_card/>
          <Product_card_two/>
          <Sale_theme/>
          <Footer/>
      </>
  )
}

export default Shop;