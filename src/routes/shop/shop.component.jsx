import shop_data from "../../shop-data.json";
import { useContext } from "react";
import { productContext } from "../../contexts/products.context";
import { categoriesContext } from "../../contexts/categories.context";

import "./shop.style.scss";

import ProductCard from "../../components/product-card/product-card.components";

export const Shop = () => {
  const { products } = useContext(productContext);
  console.log(products);
  // const { categoriesMap } = useContext(categoriesContext);
  return (
    <>
      {/* {products.map((title) => {
        <>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => {
              return <ProductCard key={product.id} productsData={product} />;
              // console.log(product);
            })}
          </div>
        </>;
      })} */}
    </>
  );
};
