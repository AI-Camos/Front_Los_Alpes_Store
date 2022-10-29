import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { Search } from "./Components/Search";

function App() {
  const [products, setProducts] = useState([]);
  const [criteria, setCriteria] = useState("");
  let filteredProducts = [];

  useEffect(() => {
    fetch("https://6344456c242c1f347f82db0d.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        return setProducts(data);
      });
  }, []);

  if (criteria === "") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((product) => product.name.includes(criteria));
  }

  return (
    <div className="App">
      <Header />
      <Search setCriteria={setCriteria} />
      <Products items={filteredProducts} />
    </div>
  );
}

export default App;
