import React, { useMemo } from "react";
import { Button } from "../../../button";
import { MdDelete, MdEdit } from "react-icons/md";
import { getProductRowKey } from "../utils/edit.helpers";

export const OrderProductRow = ({
  product,
  quantityDrafts,
  setQuantityDrafts,
  rowLoadingKey,
  updateQuantityProductToOrder,
  removeProductToOrder,
  variants = [],
  atributos = [],
}) => {
  const rowKey = getProductRowKey(product);
  const isUpdating = rowLoadingKey === `${rowKey}-update`;
  const isRemoving = rowLoadingKey === `${rowKey}-remove`;

  const selectedVariant = useMemo(() => {
    if (!product?.variantId) return null;
    return variants.find((variant) => variant.variantId === product.variantId) || null;
  }, [variants, product?.variantId]);

  const selectedAttributes = useMemo(() => {
    if (!Array.isArray(product?.itemIds) || !product.itemIds.length) return [];

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
        <p>
          <b>Variante:</b>
          {selectedVariant.options.map((option) => `${option.optionGroup?.name || ""}: ${option.name}`).join(", ")}
        </p>
      </>
    );
  };

  const getAttributes = () => {
    if (!selectedAttributes.length) return <></>;
    return (
      <>
        <p>
          <b>Atributos:</b>
          {selectedAttributes.map((attribute) => `${attribute.groupName}: ${attribute.itemName}`).join(", ")}
        </p>
      </>
    );
  };

  return (
    <div className="editOrderProductRow">
      <div className="editOrderProductMain">
        <div className="editOrderProductThumb">
          {product.images?.[0] ? (
            <img src={product.images[0]} alt={product.name} />
          ) : (
            <div className="editOrderProductThumbPlaceholder">Sin imagen</div>
          )}
        </div>

        <div className="editOrderProductData">
          <h4>{product.name}</h4>
          <p>Precio: {product.price ?? "-"}</p>
          {getVariant()}
          {getAttributes()}
        </div>
      </div>

      <div className="editOrderProductControls">
        <div className="editOrderQuantityBox">
          <button
            type="button"
            className="editOrderQtyBtn"
            onClick={() =>
              setQuantityDrafts((prev) => ({
                ...prev,
                [rowKey]: Math.max(0, Number(prev[rowKey] || 0) - 1),
              }))
            }
          >
            -
          </button>

          <input
            type="number"
            min="0"
            value={quantityDrafts[rowKey] ?? 0}
            onChange={(e) =>
              setQuantityDrafts((prev) => ({
                ...prev,
                [rowKey]: e.target.value,
              }))
            }
          />

          <button
            type="button"
            className="editOrderQtyBtn"
            onClick={() =>
              setQuantityDrafts((prev) => ({
                ...prev,
                [rowKey]: Number(prev[rowKey] || 0) + 1,
              }))
            }
          >
            +
          </button>
        </div>

        <div className="editOrderRowButtons">
          <Button
            text={isUpdating ? "Actualizando..." : "Actualizar cantidad"}
            icon={<MdEdit />}
            customClass="customButtonColor2"
            action={() => updateQuantityProductToOrder(product)}
          />

          <Button
            text={isRemoving ? "Eliminando..." : "Eliminar"}
            icon={<MdDelete />}
            customClass="customButtonColor3"
            action={() => removeProductToOrder(product)}
          />
        </div>
      </div>
    </div>
  );
};
