import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Product() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <div>
      <h1 className="m-3">Category: {category}</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th>Title</th>
        <th>Price</th>
        <th>Description</th>
        <th>Image</th>
        </tr>
        {products.map((product) => (
        <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className=" p-2">{product.title}</td>
          <td >{product.price}</td>
          <td className="p-4">{product.description}</td>
          <td ><img src={product.image} alt="Image" className="h-30 w-96 object-scale-down ..." /></td>
        </tr>
        )) }
      </table>
    </div>
  );
}

export default Product;
