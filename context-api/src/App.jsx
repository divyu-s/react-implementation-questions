import { Cart } from "./components/Cart";
import { Item } from "./components/Item";

function App() {
  return (
    <div className="app">
      <Item name="Macbook Pro" price={200} />
      <Item name="Pendrive" price={20} />
      <Item name="Mobail" price={50} />
      <Cart />
    </div>
  );
}

export default App;
