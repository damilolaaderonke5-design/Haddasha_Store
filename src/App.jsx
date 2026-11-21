import { BrowserRouter, Routes, Route } from "react-router-dom";



import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import FavoritesProvider from "./context/FavoritesContext";
import CartProvider from "./context/CartContext";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";


function App() {
return (

<FavoritesProvider>
<CartProvider>
<BrowserRouter>
  <div className="min-h-screen bg-white text-gray-800">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />}  />

      <Route path="/about" element={<About />} />

      <Route path="/products" element={<Products />} />

      <Route path="/products/:id" element={<ProductDetails />} />

      <Route path="/favourites" element={<Favorites />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />
      
      <Route path="/register" element={<Register />} />
    </Routes>

    <Footer />

  </div>
</BrowserRouter>
  </CartProvider>
  </FavoritesProvider>


);
}

export default App;