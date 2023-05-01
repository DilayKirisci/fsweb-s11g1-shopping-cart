import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data.js";
// import { useContext } from "react";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	const [products] = useState(data);
	console.log("products", products);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		setCart([...cart, item]);
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart }}>
				<div className="App">
					<Navigation />

					{/* Routelar */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
