import './style/top_nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';



const Top_Nav = () => {
  return(
      <>
         <section id="top-nav-content">
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-md-12 text-center">
                         <div className="top-nav-link-content">
                             <p>FREE & FAST SHIPPING ON ALL USA ORDERS OVER $50
                                 <button>SHOP NOW <FontAwesomeIcon icon={ faAngleRight } /></button>
                             </p>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
      </>
  )
}

export default Top_Nav;