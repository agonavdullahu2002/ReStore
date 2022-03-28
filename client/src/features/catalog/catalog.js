import React, { Fragment, useState, useEffect } from "react";
import ProductList from "./productList";

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5182/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
}
