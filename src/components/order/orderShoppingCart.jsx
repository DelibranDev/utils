import React from "react";

export const OrderShoppingCart = ({ data, CartActions }) => {
  const Product = ({ data }) => {
    return (
      <>
        <div className="product-cart">
          <div
            className="product-image background-image"
            style={{
              backgroundImage:
                data && data.Product && data.Product.images.length > 0 && data?.Product.images?.[0] ? `url('${data.Product.images[0]}')` : "no",
            }}
          ></div>
          <div className="product-cart-info">
            <div className="product-details">
              <div className="product-name">{data && data.Product && data.Product.name ? data.Product.name : ""}</div>
              <div className="product-description">{data?.Product?.description || ""}</div>
            </div>
            <div className="product-details-bottom">
              <div className="product-name">{data?.Product?.price ? data.Product.price.toFixed(2) : "0.00"}€</div>
              <div className="product-actions">
                <CartActions data={data} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="order-products">
      {Array.isArray(data?.ShoppingCartProducts) ? data.ShoppingCartProducts.map((item) => <Product data={item} />) : null}
    </div>
  );
};
