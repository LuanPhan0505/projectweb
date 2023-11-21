
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import ShopCategory from './Pages/ShopCategory';
import Menu from './Pages/Menu';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png' // cac compent de bo o duoi the 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/iPhone' element={<ShopCategory banner={men_banner} category="men"/>}/> 
        <Route path='/iPad' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/Mac' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/Watch' element={<ShopCategory category="Watch"/>}/>
        <Route path='/Promotion' element={<ShopCategory category="{Promotion}"/>}/>
        <Route path='/Support' element={<ShopCategory category="Support"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
