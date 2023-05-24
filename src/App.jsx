


import './App.css';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import NavB from './components/NavB/NavB.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    
    <div className="App">

      <BrowserRouter>
      <NavB/>  
      <Routes>

      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:idCategory' element= {<ItemListContainer/>} />
      <Route path='/item/:idItem' element= {<ItemDetailContainer/>} />
    
      </Routes>
      
      
      
      </BrowserRouter>


    
    
    
    
  
    
    </div>
  )
}

export default App;
