import { useEffect, useState } from "react";
import type { Product } from "../../app/models/product";
import ProductList from "./productList";


export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
      fetch('https://localhost:5173/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
  return (
    <>
      <ProductList products={products} />
    </>    
  )
}

