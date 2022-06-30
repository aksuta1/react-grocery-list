import './App.css';
import image from './shopping.jpeg';
import fruit from './fruit.jpeg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={image} alt='veg' width="200px" />
      </div>
      <div className="container">
        <h1>Grocery list</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={fruit} alt='fruit' width="200px" />
      </div>

    </div>
  );
}

export default App;
