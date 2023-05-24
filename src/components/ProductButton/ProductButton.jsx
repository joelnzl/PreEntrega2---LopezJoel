import './ProductButton.css'


import {useState, useEffect} from 'react'

const ProductButton = ({ stock, inicial}) => {

  const [contador, setContador] = useState(inicial);
  const [color, setColor] = useState("white");

  useEffect( ()=> {
    


     if( contador === 10) {

      setColor("red");

     } else{
      
      setColor("white");

     }
     
  

     }, [contador])

   


  const agregarAlCarrito = () => {
    console.log (`Agregaste ${contador} productos al carrito`);
  }

  const aumentarContador = () => {
    if (contador < stock) { 
    setContador(contador + 1 );
    }

  }

  const disminuirContador = () => {
    if (contador > inicial) {
    setContador(contador - 1);
    }
  }


  return (
    <div>

      <button onClick={ disminuirContador } className='inc-dec'> - </button>
      <strong> {contador} </strong>
      <button onClick={ aumentarContador } id="boton" style={{color:color}} className='inc-dec'> + </button>
     <br /> <br />
      <button onClick={ agregarAlCarrito } className='product-button'>Agregar al carrito</button>
      </div>

  )
}




export default ProductButton

