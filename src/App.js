import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import ShopCategory from './Pages/ShopCategory';
import Menu from './Pages/Menu';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import iphone_banner from './Components/Assets/banner/banner_iphone.jpg'
import mac_banner from './Components/Assets/banner/banner_mac.png'
import watch_banner from './Components/Assets/banner/banner_watch.jpg'
import ipad_banner from './Components/Assets/banner/banner_ipad.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/iPhone' element={<ShopCategory banner={iphone_banner} category="men"/>}/> 
        <Route path='/iPad' element={<ShopCategory banner={ipad_banner} category="women"/>}/>
        <Route path='/Mac' element={<ShopCategory banner={mac_banner} category="kid"/>}/>
        <Route path='/Watch' element={<ShopCategory banner={watch_banner} category="Watch"/>}/>
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
