import React, { useEffect, useState } from "react";
import styles from "../modules/Products.module.scss";
import heartIcon from "../assets/heart-icon.png";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const renderStars = (rating) => {
    const goldStars = rating;
    const grayStars = 5 - goldStars;

    const stars = [];
    for (let i = 0; i < goldStars; i++) {
      stars.push(<div key={i} className={styles["star"]}></div>);
    }
    for (let i = 0; i < grayStars; i++) {
      stars.push(
        <div key={goldStars + i} className={styles["gray-star"]}></div>
      );
    }
    return stars;
  };

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["header-container"]}>
          <div className={styles["subtitle-container"]}>
            <div className={styles["rectangle"]}></div>
            <p className={styles["subtitle"]}>Our Products</p>
          </div>
          <h1 className={styles["title"]}>Explore our products</h1>
        </div>
        <div className={styles["container"]}>
          {products &&
            products.map((product) => (
              <div key={product._id} className={styles["card"]}>
                {product.category && (
                  <div className={styles["category-box"]}>
                    {product.category}
                  </div>
                )}
                <img src={product.photo} className={styles["img"]} />
                <div className={styles["favoriteButton"]}>
                  <img src={heartIcon} className={styles["heartIcon"]} />
                </div>

                <div className={styles["product-details"]}>
                  <div className={styles["product-title"]}>{product.title}</div>
                  <div className={styles["underInfo"]}>
                    <div className={styles["price"]}>${product.price}</div>
                    <div className={styles["rating"]}>
                      {renderStars(product.rating)}
                      <span>({product.ratingAmt})</span>
                    </div>
                  </div>
                  {product.options && (
                    <div className={styles["options"]}>
                      {product.options.split(", ").map((color, index) => (
                        <button
                          key={index}
                          className={styles["colorButton"]}
                          style={{ backgroundColor: color }}
                          onClick={() => {}}
                        ></button>
                      ))}
                    </div>
                  )}
                  <div className={styles["add-to-cart-button"]}>
                    Add to Cart
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
