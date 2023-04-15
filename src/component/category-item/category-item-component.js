import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./category-item-styles.scss";

export const CategoryItem = ({ title, img }) => {
  const navigate = useNavigate();
  return (
    <div
      className="category-container"
      onClick={() => {
        navigate(`/shop/${title.toLowerCase()}`);
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
