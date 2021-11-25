import logo from './logo.svg';
import './App.css';
import SimpleMenu from './components/SimpleMenu';
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';
import { Clicker } from './components/Clicker';

function App() {
  return (
    <div className="App">
      <SimpleMenu/>
      <CartWidget/>
      <ItemListContainer greeting="Aquí podrás ver el listado de todos los productos"/>
      <Clicker/>
      
    </div>
  );
}

export default App;
