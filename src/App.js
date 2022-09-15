import './App.css';
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const App = () => {

  return(
    <CartProvider>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element= {<Navigate to='/'/>}/>          
        </Routes>
    </BrowserRouter>
    </CartProvider>
  )

}

export default App;
