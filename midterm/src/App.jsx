import React from "react";
import Header from "./components/Header";
import FeaturedItem from "./components/FeaturedItem";
import ItemList from "./components/ItemList";
import FunFact from "./components/FunFact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <FeaturedItem />
      <ItemList />
      <p>*Note: images are an approximation of the product you will receive. Products are reused and may appear slightly different, but the sizes are as described.</p>
      <FunFact />
      <Footer />
    </div>
  );
}
