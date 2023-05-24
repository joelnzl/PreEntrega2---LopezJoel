import './NavB.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from "react-router-dom"


const NavB = () => {

    return (

      <header>
        
         <h1>LeFleur</h1>
         
     
        
      <nav className='nav-b'>
        <ul>
       <li> <Link to="/">   HOME  </Link> </li> 
         <li><NavLink to={`/category/2`}> CLOTHING </NavLink> </li>  
         <li><NavLink to={`/category/3`}> ACCESSORIES </NavLink>  </li>        
        </ul>
      </nav>

      <CartWidget />

      </header>
    
      
    )
    }


export default NavB