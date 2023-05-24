
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='product-card'>
        <img className='product-image' src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p> {precio} </p>
        <p> {id} </p>
        <Link to={`/item/${id}`} className='product-button'> DETAILS </Link>
    </div>
  )
}

export default Item