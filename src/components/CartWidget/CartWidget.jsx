import './CartWidget.css'

const CartWidget = () => {
    const carritoLogo = "https://cdn-icons-png.flaticon.com/512/107/107831.png";

  return (
    <div>
        <img className='carritoLogo' src={carritoLogo} alt="carrito"></img>
        <strong> 0 </strong>
    </div>
  )
}

export default CartWidget