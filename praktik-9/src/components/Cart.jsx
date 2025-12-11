import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();
  const { theme } = useTheme();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart ${theme}`}>
      <div className="cart-header">
        <h2>Keranjang</h2>
      </div>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <p>{item.name}</p>

          <div className="item-controls">
            <div className="quantity-controls">
              <button onClick={() => updateQty(item.id, item.quantity - 1)}>−</button>
              <span className="quantity">{item.quantity}</span>
              <button onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
            </div>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Hapus
            </button>
          </div>
        </div>
      ))}

      <div className="cart-footer">
        <strong>Total: Rp {total.toLocaleString()}</strong>
      </div>
    </div>
  );
};

export default Cart;
