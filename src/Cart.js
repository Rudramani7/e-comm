import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../src/redux/action/index";
import product from "./Product";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  const handleButton = (item) => {
    dispatch(delCart(item));
  };
  const product = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
          <div className="container">
            <button
              onClick={() => handleButton(product)}
              className="btn-close float-end"
              aria-label="close"
            ></button>
            <div className="row ">
              <div className="col-md-4">
                <img
                  src={product.img}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} = ${" "}
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleButton(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleButton(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <>{state.length !== 0 && state.map(product)}</>;
};

export default Cart;
