import React from "react";
import ProductDescriptonCard from "../components/ProductDescriptonCard";
import { useParams } from "react-router-dom";
import { productData } from "../config/constant";

const ProductDescription = () => {
  const { productType } = useParams();
  console.log(productType);
  const product = productData[productType];
  console.log(product)
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-red-600">Product not found</h2>
      </div>
    );
  }

  return <ProductDescriptonCard {...product} />;
};

export default ProductDescription;
