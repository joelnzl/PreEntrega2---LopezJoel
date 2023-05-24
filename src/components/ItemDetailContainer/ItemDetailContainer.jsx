import {useState, useEffect} from 'react'
import {getProduct} from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);


    const {idItem} = useParams();

    useEffect( () => {

    getProduct(idItem)
    .then(res => setProduct(res))


    }, [idItem])

  return (
    <ItemDetail {...product} />
  )
}

export default ItemDetailContainer