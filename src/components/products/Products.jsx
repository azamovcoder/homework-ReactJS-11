import "./products.scss";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import axios from "../../api";
import star from "../../assets/images/star.svg";

function Products() {
  const [products, setProducts] = useState(null);
  const [offset, setOfset] = useState(1);
  const [loading, setLoading] = useState(false);
  const [load, setload] = useState(false);
  let limit = 8;

  useEffect(() => {
    setLoading(true);
    setload(true);
    axios
      .get(`products`, {
        params: {
          limit: offset * limit,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        setload(false);
      });
  }, [offset]);

  let productsData = products?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__card__img">
        <Link to={`/product/${el.id}`}>
          <img src={el.image} alt="" />
        </Link>
      </div>
      <div className="products__card__info">
        <h4>
          <span>Name: </span> {el.title}
        </h4>
        <p className="products__card__title">
          {" "}
          <span>Category: </span> {el.category}
        </p>
        <p className="products__card__desc">
          Cost: <span> {el.price}$</span>
        </p>
      </div>
    </div>
  ));
  return (
    <section className="products container">
      <div className="products__top">
        <div className="products__top__red"></div>
        <p>Our Products</p>
      </div>
      <div className="products__cards">{productsData}</div>
      {loading ? <Loading /> : <></>}
      <button
        disabled={load}
        className="products__btn"
        onClick={() => setOfset((p) => p + 1)}
      >
        View All Products
      </button>
    </section>
  );
}

export default Products;
