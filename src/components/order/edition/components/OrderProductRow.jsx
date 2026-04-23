import React from "react";
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
}) => {
  const rowKey = getProductRowKey(product);
  const isUpdating = rowLoadingKey === `${rowKey}-update`;
  const isRemoving = rowLoadingKey === `${rowKey}-remove`;

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
          <p>Variantes: {product.variantId || "-"}</p>
          <p>Atributos: {product.itemIds?.length ? product.itemIds.join(", ") : "-"}</p>
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
            customClass={"customButtonColor2"}
            action={() => updateQuantityProductToOrder(product)}
          />

          <Button
            text={isRemoving ? "Eliminando..." : "Eliminar"}
            icon={<MdDelete />}
            customClass={"customButtonColor3"}
            action={() => removeProductToOrder(product)}
          />
        </div>
      </div>
    </div>
  );
};
