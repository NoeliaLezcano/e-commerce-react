import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer/Footer';
import { CartProvider } from './context/CartContext';
import Routes from './routes/Routes'


function App() {
  return (
    <div className="App">  
      <CartProvider>
        <Routes />
      </CartProvider>
      <Footer/>
    </div>
  );
}

export default App;
