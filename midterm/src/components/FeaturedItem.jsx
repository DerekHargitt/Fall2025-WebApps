import React from "react";

export default function FeaturedItem() {
  const featured = {
    id: 0,
    name: "Reclaimed Shipping Box",
    description:
      "Once discarded, now reborn - this sturdy corrugated box has been reused and reinforced for another delivery journey.",
    material: "Reused Cardboard",
    price: "$0.50 per box",
  };

  return (
    <section className="featured">
      <h2>Featured Item</h2>
      <div className="featured-card">
        <h3>{featured.name}</h3>
        <img src={`../assets/${featured.id}.png`} />
        <p>{featured.description}</p>
        <p><strong>Material:</strong> {featured.material}</p>
        <p><strong>Price:</strong> {featured.price}</p>
      </div>
    </section>
  );
}
