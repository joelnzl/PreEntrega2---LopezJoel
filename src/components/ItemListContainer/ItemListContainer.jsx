import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCat } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {

    const prodFunction = idCategory ? getProductsByCat : getProducts;

    prodFunction(idCategory)
      .then(res => setProducts(res))
      .catch(error => console.error(error))
  }, [idCategory])

 

  return (
    <>
      <h2> {greeting} </h2>
      <ItemList products={products} />

    </>
  )
}

export default ItemListContainer