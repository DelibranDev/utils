import React from "react";
import { OrderProductRow } from "./OrderProductRow";

export const OrderProductsCard = ({
  products,
  quantityDrafts,
  setQuantityDrafts,
  rowLoadingKey,
  updateQuantityProductToOrder,
  removeProductToOrder,
  variants,
  atributos,
}) => {
  return (
    <div className="editOrderCard">
      <h3 className="editOrderCardTitle">Productos del pedido</h3>

      {!products.length ? (
        <div className="editOrderEmptyBox">Este pedido no tiene productos.</div>
      ) : (
        <div className="editOrderProductsList">
          {products.map((product) => (
            <OrderProductRow
              key={`${product.productId}-${product.variantId || "no-variant"}-${JSON.stringify(product.itemIds || [])}`}
              product={product}
              quantityDrafts={quantityDrafts}
              setQuantityDrafts={setQuantityDrafts}
              rowLoadingKey={rowLoadingKey}
              updateQuantityProductToOrder={updateQuantityProductToOrder}
              removeProductToOrder={removeProductToOrder}
              variants={variants}
              atributos={atributos}
            />
          ))}
        </div>
      )}
    </div>
  );
};
