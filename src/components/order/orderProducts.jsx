import React, { useMemo } from "react";

export const OrderProducts = ({ data, size = "normal", variants, atributos }) => {
  const NormalSize = ({ product, index }) => {
    const selectedVariant = useMemo(() => {
      if (!product?.variantId || !variants) return null;
      return variants.find((variant) => variant.variantId === product.variantId) || null;
    }, [variants, product?.variantId]);

    const selectedAttributes = useMemo(() => {
      if (!Array.isArray(product?.itemIds) || !product.itemIds.length || !atributos) return [];

      const selectedItemIds = new Set(product.itemIds);

      return atributos.flatMap((attributeGroup) => {
        const matchedItems = (attributeGroup.items || []).filter((item) => selectedItemIds.has(item.itemId));

        return matchedItems.map((item) => ({
          itemGroupId: attributeGroup.itemGroupId,
          groupName: attributeGroup.name,
          itemId: item.itemId,
          itemName: item.name,
          price: item.price,
        }));
      });
    }, [atributos, product?.itemIds]);

    const getVariant = () => {
      if (!selectedVariant?.options?.length) return <></>;
      return (
        <>
          <div>
            <b>Variante:</b>
            {selectedVariant.options.map((option) => `${option.optionGroup?.name || ""}: ${option.name}`).join(", ")}
          </div>
        </>
      );
    };

    const getAttributes = () => {
      if (!selectedAttributes.length) return <></>;
      return (
        <>
          <div>
            <b>Atributos:</b>
            {selectedAttributes.map((attribute) => `${attribute.groupName}: ${attribute.itemName}`).join(", ")}
          </div>
        </>
      );
    };
    return (
      <div key={index} className="order-products-item">
        <div className="order-product-left">
          <div
            className="order-product-image"
            style={{
              backgroundImage: `url('${product?.images && product?.images.length > 0 ? product?.images[0] : ""}')`,
            }}
          ></div>
          <div className="order-product-info">
            <div className="order-product-name">{product?.name}</div>
            <div className="order-product-ingredients">
              {getVariant()}
              {getAttributes()}
            </div>
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
    );
  };

  const SmallSize = ({ product, index }) => {
    return (
      <div key={index} className="order-products-item-small">
        <div className="order-product-left-small">
          <div>{product?.quantity}</div>
          <div>{product?.name}</div>
        </div>
        <div className="order-product-total-small">
          <div>{product?.price * product?.quantity} €</div>
        </div>
      </div>
    );
  };

  return (
    <div className="order-products">
      {(data.products || []).length > 0 &&
        (data.products || []).map((product, index) =>
          size === "normal" ? <NormalSize product={product} index={index} /> : <SmallSize product={product} index={index} />,
        )}
    </div>
  );
};
