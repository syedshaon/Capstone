import shop_data from "../../shop-data.json";
import { useContext } from "react";
import { productContext } from "../../contexts/products.context";
import { categoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.components";
import "./shop.style.scss";

export const Hats = () => {
  // const { products } = useContext(productContext);
  const { categoriesMap } = useContext(categoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <div key={title}>
            <h2>{title}</h2>

            <div className="products-container">
              {categoriesMap["hats"].map((product) => {
                return <ProductCard key={product.id} productsData={product} />;
                // console.log(product);
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
