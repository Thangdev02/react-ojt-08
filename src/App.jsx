import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
// Dieu huong trang web, -> Bo dieu khien trung tam -> /product -> Compoenents( page nao )
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/LoginPage'
import CartPage from './pages/CartPage'
import Thanks from './pages/Thanks'
function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/detail/:id" element={<ProductDetail/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/thanks" element={<Thanks/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
