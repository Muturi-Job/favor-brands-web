import './App.css'; 
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}>Home</Route>
  <Route path='home' element={<Home/>}>Home</Route>
  <Route path='about' element={<About/>}>About</Route>
  <Route path='products' element={<Products/>}>Products</Route>
  <Route path='contact' element={<Contact/>}>Contacts</Route>
  <Route path='get-in-touch' element={<Footer/>}></Route>
</Routes>
<Footer/>
    </>
  )
}

export default App;
