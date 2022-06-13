import React, { useEffect } from "react";
import Product from "./Product/Product";
import { getProducts } from "../../store/product/product.actions";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  }
  return (
    <div>
      <h1>Products</h1>
      <br />
      <div style={{ display: "flex", gap: "10px" }}>
        {data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
