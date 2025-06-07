import React from "react";
import ProductDescriptonCard from "../components/ProductDescriptonCard";
import { useParams } from "react-router-dom";
import { productData } from "../config/constant";

const ProductDescription = () => {
  const { productType } = useParams();
  const product = productData[productType];
  return (
    <>
  {product ? (

        <ProductDescriptonCard {...product} />
  ):(

    <div className="text-center py-20">
        <h2 className="text-2xl text-red-600">Product not found</h2>
      </div>
  )
}
  </>
)
};

export default ProductDescription;
