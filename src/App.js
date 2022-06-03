import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import Login from "./views/Login/Login";
import Signin from "./views/Signin/Signin";
import Contact from "./views/Contact";
import System from "./views/System/System";
import Products from "./views/Products/Products";
import Cart from "./views/Cart/Cart";
import About from "./views/About/About";
import Review from "./views/Review/Review";
import Default from "./views/Default/Default";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/system/*" element={<System />}></Route>
        <Route path="/*" element={<Default />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
