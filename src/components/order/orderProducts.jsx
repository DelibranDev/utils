import React from "react";

export const OrderProducts = ({ data }) => {
  return (
    <div className="order-products">
      {(data.products || []).length > 0 &&
        (data.products || []).map((product, index) => (
          <div key={index} className="order-products-item">
            <div className="order-product-left">
              <div className="order-product-image" style={{ backgroundImage: `url('${product?.images[0]}')` }}></div>
              <div className="order-product-info">
                <div className="order-product-name">{product?.name}</div>
                <div className="order-product-ingredients">{product?.description || "Sin atributos"}</div>
              </div>
            </div>
            <div className="order-product-total">
              <div className="order-product-quantity">
                <div>x {product?.quantity}</div>
                <div>Descuento</div>
                <div>Total</div>
              </div>
              <div className="order-product-price-container">
                <div>{product?.price} €</div>
                <div className="order-product-price">0 €</div>
                <div>{product?.price * product?.quantity} €</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
