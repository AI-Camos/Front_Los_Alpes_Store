import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { Search } from "./Components/Search";

function App() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchvalue] = useState("");
  let filteredProducts = [];

  useEffect(() => {
    fetch("https://6344456c242c1f347f82db0d.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        return setProducts(data);
      });
  }, []);

  if (searchValue === "") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((product) => {
      console.log(product.name);
      const productText = product.name.toLowerCase();
      console.log(productText);
      const searchText = searchValue.toLowerCase();
      console.log(searchText);
      return productText.includes(searchText);
    });
  }

  return (
    <div className="App">
      <Header />
      <Search setSearchvalue={setSearchvalue} searchValue={searchValue} />
      <Products items={filteredProducts} />
      <h1>{searchValue}</h1>
    </div>
  );
}

export default App;
