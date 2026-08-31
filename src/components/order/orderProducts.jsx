import React from "react";
import "./orderProducts.css";

const formatAmount = (value) => Number(value || 0).toFixed(2);

const getVariantText = (product, variants = []) => {
  const selected = variants.find((variant) => variant?.variantId === product?.variantId);
  if (!selected?.options?.length) return "";
  return selected.options.map((option) => `${option.optionGroup?.name || "Variante"}: ${option.name}`).join(", ");
};

const getAttributeText = (product, atributos = []) => {
  if (!Array.isArray(product?.itemIds) || !product.itemIds.length) return "";
  const ids = new Set(product.itemIds);
  return atributos.flatMap((group) => (group?.items || []).filter((item) => ids.has(item.itemId)).map((item) => `${group.name || "Atributo"}: ${item.name}`)).join(", ");
};

export const OrderProducts = ({ data = {}, size = "normal", variants = [], atributos = [] }) => (
  <div className={`orderProducts ${size !== "normal" ? "orderProductsSmall" : ""}`}>
    {(data.products || []).map((product, index) => {
      const variantText = getVariantText(product, variants);
      const attributeText = getAttributeText(product, atributos);
      const details = [variantText, attributeText].filter(Boolean);

      if (size !== "normal") {
        return (
          <div key={product?.id || product?.orderProductId || index} className="orderProductSmallItem">
            <div className="orderProductSmallMain">
              <strong>{product?.quantity}</strong>
              <div>
                <div>{product?.name}</div>
                {details.map((detail) => <div key={detail} className="orderProductMeta">{detail}</div>)}
              </div>
            </div>
            <strong>{formatAmount(Number(product?.price || 0) * Number(product?.quantity || 0))} €</strong>
          </div>
        );
      }

      return (
        <div key={product?.id || product?.orderProductId || index} className="orderProductItem">
          <div className="orderProductLeft">
            <div className="orderProductImage" style={{ backgroundImage: product?.images?.[0] ? `url('${product.images[0]}')` : "none" }} />
            <div className="orderProductInfo">
              <div className="orderProductName">{product?.name}</div>
              {details.map((detail) => <div key={detail} className="orderProductMeta">{detail}</div>)}
            </div>
          </div>
          <div className="orderProductTotal">
            <div className="orderProductQuantity"><div>x {product?.quantity}</div><div>Descuento</div><div>Total</div></div>
            <div className="orderProductPrices"><div>{formatAmount(product?.price)} €</div><div>0.00 €</div><div>{formatAmount(Number(product?.price || 0) * Number(product?.quantity || 0))} €</div></div>
          </div>
        </div>
      );
    })}
  </div>
);
