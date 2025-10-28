import React from "react";
import ItemCard from "./ItemCard";

export default function ItemList() {
  const items = [
    {
      id: 1,
      title: "Reusable Kraft Mailer",
      description: "Durable, eco-friendly mailer used for small product shipping.",
      material: "Recycled Paper",
      price: "$0.30",
    },
    {
      id: 2,
      title: "Biodegradable Bubble Wrap",
      description: "Cushioning made from compostable plant-based material.",
      material: "Cornstarch Film",
      price: "$0.45",
    },
    {
      id: 3,
      title: "Reused Padded Envelope",
      description: "Gently used envelopes given a second chance to ship safely.",
      material: "Mixed Paper + Bubble Liner",
      price: "$0.25",
    },
    {
      id: 4,
      title: "Reclaimed Gift Bag",
      description: "Clean, gently used gift bags perfect for local retailers.",
      material: "Recycled Paper",
      price: "$0.20",
    },
  ];

  return (
    <section className="item-list">
      <h2>Our Reused Packaging Collection</h2>
      <div className="card-grid">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            material={item.material}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
