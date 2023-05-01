import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
// import { useContext } from "react";
import { ProductContext } from "./src/contexts/ProductContext";

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
			<div className="App">
				<Navigation cart={cart} />

				{/* Routelar */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
