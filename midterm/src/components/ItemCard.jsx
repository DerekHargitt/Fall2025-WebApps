import React from "react";

export default function ItemCard({ id, title, description, material, price }) {
  const handleClick = () => {
    alert(`You clicked on ${title}`);
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add("hovered");
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove("hovered");
  };

  return (
    <div
      className="item-card"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{title}</h3>
      <img src={`${import.meta.env.BASE_URL}assets/${id}.png`} />
      <p>{description}</p>
      <p><strong>Material:</strong> {material}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
}
