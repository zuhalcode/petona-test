import { useEffect, useState } from "react";
import ProductComp from "./ProductComp";
const axios = require("axios");
const API_URL = "http://localhost:8000/api/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API_URL);
      setProducts(result.data.products);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto grid max-h-max max-w-[100%] grid-cols-5 gap-1 px-4 pb-5 sm:grid sm:items-center sm:justify-center sm:gap-2">
      {products.map((fruit) => (
        <ProductComp key={fruit.id} img={fruit.image} name={fruit.name} price={fruit.price} min={fruit.amount} />
      ))}
    </div>
  );
};
export default ProductList;
