import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { productsListAll } from "../action/productAction";
import Corosul from "../components/Corosul";
// import axios from "axios";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("api/products/all");
  //     setProducts(data);
  //     console.log(data);
  //   };
  //   fetchProducts();
  // }, []);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(productsListAll());
  }, [dispatch]);

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Corosul />
      </div>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          <div className="row clearfix">
            {products.map((product) => (
              <div className="col-lg-3 col-sm-6 col-md-3" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
