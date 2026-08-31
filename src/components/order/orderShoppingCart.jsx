import React from "react";
import "./orderShoppingCart.css";

export const OrderShoppingCart = ({ data, CartActions, size = "normal" }) => (
  <div className={`orderShoppingCart ${size !== "normal" ? "orderShoppingCartCompact" : ""}`}>
    {Array.isArray(data?.ShoppingCartProducts) ? data.ShoppingCartProducts.map((item, index) => (
      <div className="shoppingProduct" key={item?.shoppingCartProductId || item?.id || index}>
        {size === "normal" && <div className="shoppingProductImage" style={{ backgroundImage: item?.Product?.images?.[0] ? `url('${item.Product.images[0]}')` : "none" }} />}
        <div className="shoppingProductInfo">
          <div className="shoppingProductDetails"><div className="shoppingProductName">{item?.Product?.name || ""}</div>{size === "normal" && <div className="shoppingProductDescription">{item?.Product?.description || ""}</div>}</div>
          <div className="shoppingProductBottom"><div className="shoppingProductName">{Number(item?.Product?.price || 0).toFixed(2)}€</div><div className="shoppingProductActions">{CartActions ? <CartActions data={item} /> : null}</div></div>
        </div>
        {item?.info ? <div className="shoppingProductMeta">{item.info}</div> : null}
      </div>
    )) : null}
  </div>
);
