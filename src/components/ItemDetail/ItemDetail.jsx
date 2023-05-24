import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="item-detail-cont">
    <h2>Nombre: {nombre} </h2>
    <h3>Precio: {precio} </h3>
    <h3>ID: {id} </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing
         elit. At eveniet iste perspiciatis veniam, eligendi
          minima placeat! Laudantium autem quidem delectus 
          maxime magnam minus rem, sint totam temporibus amet,
           possimus labore?</p>
           <img src= {img} alt={nombre} />



    </div>
  )
}

export default ItemDetail