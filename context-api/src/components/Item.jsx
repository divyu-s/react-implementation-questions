import { useCart } from "../context/Cart";

// eslint-disable-next-line react/prop-types
export const Item = ({ name, price }) => {
  const cart = useCart();

  return (
    <div className="item-card">
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button
        onClick={() => {
          cart.setItems([...cart.items, { name, price }]);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};
