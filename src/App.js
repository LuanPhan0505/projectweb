
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import ShopCategory from './Pages/ShopCategory';
import Menu from './Pages/Menu';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/iPhone' element={<ShopCategory category="iPhone"/>}/>
        <Route path='/iPad' element={<ShopCategory category="Ipad"/>}/>
        <Route path='/Mac' element={<ShopCategory category="Mac"/>}/>
        <Route path='/Watch' element={<ShopCategory category="Watch"/>}/>
        <Route path='/Promotion' element={<ShopCategory category="{Promotion}"/>}/>
        <Route path='/Support' element={<ShopCategory category="Support"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
