import shop_data from "../../shop-data.json";
import { useContext } from "react";
import { productContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.components";
import "./shop.style.scss";

export const Shop = () => {
  const { products } = useContext(productContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} productsData={product} />;
        // console.log(product);
      })}
    </div>
  );
};
