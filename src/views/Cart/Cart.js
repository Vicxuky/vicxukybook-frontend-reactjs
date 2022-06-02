import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { addProductCart, deleteProductCart } from "../../redux/cartSlice";

const Cart = () => {
  const [product, setProduct] = useState("");
  const dispath = useDispatch();
  const productsCart = useSelector((state) => state.cart.value);

  const handleInput = (e) => {
    setProduct(e.target.value);
  };
  const handleAdd = () => {
    // e.preventDefault();
    dispath(
      addProductCart({
        id: Math.floor(Math.random() * 9845637374375374),
        product,
      })
    );
  };
  console.log("p: ", product);
  const handleDelete = (item) => {
    dispath(deleteProductCart({ id: item.id }));
  };
  return (
    <>
      <Layout>
        <div className="container">
          <h3>Cart</h3>
          <input
            type="text"
            name={product}
            placeholder="Enter product.."
            onChange={(e) => handleInput(e)}
          />
          <button onClick={(e) => handleAdd(e)}>Add</button>
          {productsCart.map((item, index) => {
            return (
              <li key={index}>
                {item.product}
                <button onClick={() => handleDelete(item)}>Delete</button>
              </li>
            );
          })}
        </div>
      </Layout>
    </>
  );
};
export default Cart;
