import React from "react";
import "./orderShoppingCart.css";

const getPriceWithTax = (product) => {
  const price = Number(product?.price || 0);
  let tax = product?.tax;
  if (typeof tax === "string") {
    try {
      tax = JSON.parse(tax);
    } catch {
      tax = null;
    }
  }

  const rate = String(tax?.type || "").toLowerCase() === "percentage" ? Number(tax?.value || 0) : 0;
  return price * (1 + rate / 100);
};

export const OrderShoppingCart = ({ data, CartActions, size = "normal" }) => (
  <div className={`orderShoppingCart ${size !== "normal" ? "orderShoppingCartCompact" : ""}`}>
    {Array.isArray(data?.ShoppingCartProducts) ? data.ShoppingCartProducts.map((item, index) => (
      <div className="shoppingProduct" key={item?.shoppingCartProductId || item?.id || index}>
        {size === "normal" && <div className="shoppingProductImage" style={{ backgroundImage: item?.Product?.images?.[0] ? `url('${item.Product.images[0]}')` : "none" }} />}
        <div className="shoppingProductInfo">
          <div className="shoppingProductDetails"><div className="shoppingProductName">{item?.Product?.shortName ?? item?.shortName ?? item?.Product?.name ?? item?.name ?? ""}</div>{size === "normal" && <div className="shoppingProductDescription">{item?.Product?.description || ""}</div>}</div>
          <div className="shoppingProductBottom"><div className="shoppingProductName">{getPriceWithTax(item?.Product).toFixed(2)}€</div><div className="shoppingProductActions">{CartActions ? <CartActions data={item} /> : null}</div></div>
        </div>
        {item?.info ? <div className="shoppingProductMeta">{item.info}</div> : null}
      </div>
    )) : null}
  </div>
);
