import { createContext, useContext, useState } from "react";
import CartModal from "./cartModal";

const cardContext = createContext();

function useValue() {
  const value = useContext(cardContext);
  return value;
}

function CardContext({ children }) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isCart, setCart] = useState(false);
  const [cart, setshowCart] = useState([]);

  const handleAdd = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);

    if (index === -1) {
      setshowCart([...cart, { ...prod, qty: 1 }]);
      setTotal(total + prod.price);
    } else {
      cart[index].qty++;
      setshowCart(cart);
      setTotal(total + cart[index].price);
    }
    setCount(count + 1);
  };

  const handleDel = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart[index].qty--;
      setCount(count - 1);
      setTotal(total - cart[index].price);
      if (cart[index].qty === 0) {
        cart.splice(index, 1);
      }
    }
    setshowCart(cart);
  };

  const handleReset = () => {
    setCount(0);
    setTotal(0);
    setshowCart([]);
  };

  const handleCart = () => {
    setCart((prev) => !prev);
  };
  return (
    <cardContext.Provider
      value={{
        cart,
        isCart,
        setCart,
        count,
        total,
        handleAdd,
        handleDel,
        handleReset,
        handleCart,
      }}
    >
      {isCart && <CartModal />}
      {children}
    </cardContext.Provider>
  );
}

export { useValue };
export { cardContext };
export default CardContext;
