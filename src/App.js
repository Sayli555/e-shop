import logo from './logo.svg';
import './App.css';
import Product from './components/products/Product';
import Mens from './pages/products/Mens';
import Women from './pages/products/Women';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import MainRoutes from './pages/MainRoutes';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
     <MainRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
