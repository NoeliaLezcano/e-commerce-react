import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/items-list-container/ItemListContainer';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />    
      <h1>BookStore</h1>   
      <ItemListContainer />  
    </div>
  );
}

export default App;
