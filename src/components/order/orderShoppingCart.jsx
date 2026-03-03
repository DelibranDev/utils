import React from "react";

export const OrderShoppingCart = ({ data, CartActions, size = "normal" }) => {
  const Product = ({ data }) => {
    return (
      <>
        <div
          className="product-cart"
          style={
            size !== "normal"
              ? {
                  borderRadius: "0",
                  borderLeft: "0",
                  borderRight: "0",
                  borderBottom: "0",
                }
              : {}
          }
        >
          {size === "normal" && (
            <div
              className="product-image background-image"
              style={{
                backgroundImage:
                  data && data.Product && data.Product.images.length > 0 && data?.Product.images?.[0]
                    ? `url('${data.Product.images[0]}')`
                    : "no",
              }}
            ></div>
          )}
          <div
            className="product-cart-info"
            style={size === "normal" ? { flexDirection: "column", width: "100%" } : { flexDirection: "row", width: "100%" }}
          >
            <div
              className="product-details"
              style={
                size !== "normal"
                  ? {
                      borderRadius: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      borderBottom: "0",
                      marginTop: "4px",
                    }
                  : {}
              }
            >
              <div
                className="product-name"
                style={
                  size !== "normal"
                    ? {
                        fontWeight: "500",
                      }
                    : {}
                }
              >
                {data && data.Product && data.Product.name ? data.Product.name : ""}
              </div>
              {size === "normal" && <div className="product-description">{data?.Product?.description || ""}</div>}
            </div>
            <div className="product-details-bottom">
              <div className="product-name">{data?.Product?.price ? data.Product.price.toFixed(2) : "0.00"}€</div>
              <div
                className="product-actions"
                style={
                  size !== "normal"
                    ? {
                        marginLeft: "5px",
                      }
                    : {}
                }
              >
                <CartActions data={data} />
              </div>
            </div>
          </div>
          {data?.variantId !== null || data?.itemIds.length > 0 ? <div className="product-cart-details">Personalizado</div> : ""}
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
