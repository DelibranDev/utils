import React from "react";
import { useEffect, useMemo, useState } from "react";
import { MdAdd } from "react-icons/md";
import { Button } from "../../../button";

const capitalize = (str = "") => str.charAt(0).toUpperCase() + str.slice(1);

const AddProductVariantSelector = ({ productData, variantId, setVariantId }) => {
  const [selectedPrimaryOptionId, setSelectedPrimaryOptionId] = useState("");

  const variants = useMemo(() => {
    return (productData?.variants || []).filter((variant) => variant?.isActive);
  }, [productData]);

  const optionGroups = useMemo(() => {
    const map = new Map();

    variants.forEach((variant) => {
      (variant.options || []).forEach((option) => {
        if (option?.optionGroup?.optionGroupId) {
          map.set(option.optionGroup.optionGroupId, {
            optionGroupId: option.optionGroup.optionGroupId,
            name: option.optionGroup.name,
          });
        }
      });
    });

    return Array.from(map.values());
  }, [variants]);

  const primaryGroup = useMemo(() => {
    if (!optionGroups.length) return null;

    const preferredNames = ["Tamaño del pan", "Tamaño", "Size"];
    return (
      optionGroups.find((group) => preferredNames.some((name) => group.name?.toLowerCase() === name.toLowerCase())) ||
      optionGroups[0]
    );
  }, [optionGroups]);

  const groupedArray = useMemo(() => {
    if (!primaryGroup) return [];

    const groupedByPrimary = {};

    variants.forEach((variant) => {
      const options = variant.options || [];
      const primaryOption = options.find((option) => option.optionGroup?.optionGroupId === primaryGroup.optionGroupId);

      if (!primaryOption) return;

      const key = primaryOption.optionId;

      if (!groupedByPrimary[key]) {
        groupedByPrimary[key] = {
          primaryOption,
          variants: [],
        };
      }

      const secondaryOptions = options.filter((option) => option.optionGroup?.optionGroupId !== primaryGroup.optionGroupId);

      groupedByPrimary[key].variants.push({
        ...variant,
        secondaryOptions,
      });
    });

    return Object.values(groupedByPrimary);
  }, [variants, primaryGroup]);

  useEffect(() => {
    if (!groupedArray.length) {
      setSelectedPrimaryOptionId("");
      return;
    }

    if (!selectedPrimaryOptionId) {
      setSelectedPrimaryOptionId(groupedArray[0].primaryOption.optionId);
    }
  }, [groupedArray, selectedPrimaryOptionId]);

  const selectedGroup =
    groupedArray.find((group) => String(group.primaryOption.optionId) === String(selectedPrimaryOptionId)) || groupedArray[0];

  const variantsToShow = selectedGroup?.variants || [];

  if (!variants.length || !primaryGroup || !groupedArray.length) return null;

  return (
    <div className="editOrderConfigBlock">
      <div className="editOrderConfigTitle">Combinaciones</div>

      <div className="editOrderField">
        <div>{capitalize(primaryGroup.name)}</div>
        <select value={selectedPrimaryOptionId} onChange={(e) => setSelectedPrimaryOptionId(e.target.value)}>
          {groupedArray.map(({ primaryOption }) => (
            <option key={primaryOption.optionId} value={primaryOption.optionId}>
              {capitalize(primaryOption.name)}
            </option>
          ))}
        </select>
      </div>

      <div className="editOrderVariantList">
        {variantsToShow.map((variant) => {
          const inputId = `edit-order-variant-${variant.variantId}`;

          return (
            <label
              key={variant.variantId}
              htmlFor={inputId}
              className={`editOrderVariantItem ${variant.variantId === variantId ? "isSelected" : ""}`}
            >
              <div className="editOrderVariantInfo">
                <div className="editOrderVariantSecondaryOptions">
                  {(variant.secondaryOptions || []).map((option, index) => (
                    <span key={`${variant.variantId}-${option.optionId || index}`} className="editOrderTag">
                      {capitalize(option.name)}
                    </span>
                  ))}
                </div>
                <div className="editOrderVariantPrice">+{variant.price || 0}€</div>
              </div>

              <input
                id={inputId}
                type="radio"
                name="edit-order-variant"
                aria-label={`Seleccionar combinación ${variant.secondaryOptions?.map((option) => option.name).join(", ") || variant.variantId}`}
                checked={variant.variantId === variantId}
                onChange={() => setVariantId(variant.variantId)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

const AddProductAttributesSelector = ({ productData, itemIds, setItemIds, requirements, setRequirements }) => {
  const itemGroups = useMemo(() => {
    return (productData?.itemGroups || []).filter((group) => group?.isActive);
  }, [productData]);

  const upsertRequirement = (payload) => {
    setRequirements((prev) => {
      const index = prev.findIndex((item) => item.id === payload.id);

      if (index !== -1) {
        const next = [...prev];
        next[index] = payload;
        return next;
      }

      return [...prev, payload];
    });
  };

  const getGroupSelectedCount = (group) => {
    return (group.items || []).filter((item) => itemIds.includes(item.itemId)).length;
  };

  const validateGroup = (group, nextItemIds) => {
    const selectedCount = (group.items || []).filter((item) => nextItemIds.includes(item.itemId)).length;
    const isMandatory = !!group.mandatory;
    const maxItems = Number(group.maxItems || 0);

    let error = "";

    if (isMandatory && selectedCount === 0) {
      error = "Falta seleccionar un complemento obligatorio";
    }

    if (maxItems > 0 && selectedCount > maxItems) {
      error = "Límite de complementos superado";
    }

    upsertRequirement({
      id: group.itemGroupId,
      error,
    });
  };

  useEffect(() => {
    if (!itemGroups.length) {
      setRequirements([]);
      return;
    }

    const initialRequirements = itemGroups.map((group) => ({
      id: group.itemGroupId,
      error: group.mandatory ? "Falta seleccionar un complemento obligatorio" : "",
    }));

    setRequirements(initialRequirements);
  }, [itemGroups, setRequirements]);

  const handleToggleItem = (group, item) => {
    const isSelected = itemIds.includes(item.itemId);
    const currentGroupCount = getGroupSelectedCount(group);
    const maxItems = Number(group.maxItems || 0);

    if (!isSelected && maxItems > 0 && currentGroupCount >= maxItems) {
      upsertRequirement({
        id: group.itemGroupId,
        error: "Límite de complementos superado",
      });
      return;
    }

    const nextItemIds = isSelected ? itemIds.filter((id) => id !== item.itemId) : [...itemIds, item.itemId];

    setItemIds(nextItemIds);
    validateGroup(group, nextItemIds);
  };

  if (!itemGroups.length) return null;

  return (
    <div className="editOrderConfigBlock">
      <div className="editOrderConfigTitle">Atributos</div>

      <div className="editOrderAttributeGroups">
        {itemGroups.map((group, groupIndex) => {
          const selectedCount = getGroupSelectedCount(group);
          const requirement = requirements.find((item) => item.id === group.itemGroupId);
          const hasError = !!requirement?.error;

          return (
            <div key={group.itemGroupId || groupIndex} className="editOrderAttributeGroup">
              <div className="editOrderAttributeGroupHeader">
                <div className="editOrderAttributeGroupName">{group.name || "Completa tu pedido"}</div>

                <div className="editOrderAttributeMeta">
                  {!!group.mandatory && <span className="editOrderBadge">Obligatorio</span>}
                  {!!group.maxItems && <span className="editOrderBadge">{group.maxItems} máximo</span>}
                </div>
              </div>

              {hasError && <div className="editOrderConfigError">{requirement.error}</div>}

              <div className="editOrderAttributeItems">
                {(group.items || []).map((item) =>
                  item.name ? (
                    <div
                      key={item.itemId}
                      htmlFor={`edit-order-attribute-${item.itemId}`}
                      className={`editOrderAttributeItem ${itemIds.includes(item.itemId) ? "isSelected" : ""}`}
                    >
                      <div className="editOrderAttributeItemInfo">
                        <div>{capitalize(item.name)}</div>
                        <div className="editOrderAttributeItemPrice">+{item.price || 0} €</div>
                      </div>

                      <input
                        id={`edit-order-attribute-${item.itemId}`}
                        type="checkbox"
                        checked={itemIds.includes(item.itemId)}
                        onChange={() => handleToggleItem(group, item)}
                      />
                    </div>
                  ) : null,
                )}
              </div>

              <div className="editOrderAttributeCounter">Seleccionados: {selectedCount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const AddProductCard = ({
  products,
  addProductForm,
  setAddProductForm,
  isLoadingProducts,
  isAddingProduct,
  addProductOrder,
  fetchProductDetails,
}) => {
  const [requirements, setRequirements] = useState([]);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const [isLoadingProductDetails, setIsLoadingProductDetails] = useState(false);

  const availableProducts = useMemo(() => {
    return (products || []).filter((product) => product.status !== "DRAFT");
  }, [products]);

  const selectedProduct = useMemo(() => {
    return availableProducts.find((product) => product.productId === addProductForm.productId);
  }, [availableProducts, addProductForm.productId]);

  const hasErrors = useMemo(() => {
    return requirements.some((item) => item?.error);
  }, [requirements]);

  useEffect(() => {
    const query = async () => {
      if (!addProductForm.productId) {
        setSelectedProductDetails(null);
        setRequirements([]);
        return;
      }

      setIsLoadingProductDetails(true);

      try {
        if (typeof fetchProductDetails !== "function") {
          setSelectedProductDetails(null);
          return;
        }

        const response = await fetchProductDetails(addProductForm.productId);
        const nextDetails = response?.data || response || null;
        setSelectedProductDetails(nextDetails);
      } catch (error) {
        console.error("Error loading product details:", error);
        setSelectedProductDetails(null);
      } finally {
        setIsLoadingProductDetails(false);
      }
    };

    query();
  }, [addProductForm.productId]);

  useEffect(() => {
    setRequirements([]);
  }, [addProductForm.productId]);

  return (
    <div className="editOrderCard">
      <h3 className="editOrderCardTitle">Agregar producto</h3>

      <div className="editOrderGrid">
        <div className="editOrderSections">
          <div className="editOrderField">
            <div>Producto</div>
            <select
              value={addProductForm.productId}
              onChange={(e) =>
                setAddProductForm({
                  productId: e.target.value,
                  quantity: 1,
                  note: "",
                  variantId: "",
                  itemIds: [],
                })
              }
              disabled={isLoadingProducts}
            >
              <option value="">Selecciona un producto</option>
              {availableProducts.map((product) => (
                <option key={product.productId} value={product.productId}>
                  {product.name} {product.price !== null ? `- ${product.price}€` : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="editOrderField">
            <div>Cantidad</div>
            <input
              type="number"
              min="1"
              value={addProductForm.quantity}
              onChange={(e) =>
                setAddProductForm((prev) => ({
                  ...prev,
                  quantity: e.target.value,
                }))
              }
            />
          </div>
        </div>

        {isLoadingProductDetails && <div className="editOrderEmptyInline">Cargando configuración del producto...</div>}

        {!isLoadingProductDetails && selectedProductDetails && (
          <>
            <AddProductVariantSelector
              productData={selectedProductDetails}
              variantId={addProductForm.variantId}
              setVariantId={(value) =>
                setAddProductForm((prev) => ({
                  ...prev,
                  variantId: value,
                }))
              }
            />

            <AddProductAttributesSelector
              productData={selectedProductDetails}
              itemIds={addProductForm.itemIds}
              setItemIds={(value) =>
                setAddProductForm((prev) => ({
                  ...prev,
                  itemIds: value,
                }))
              }
              requirements={requirements}
              setRequirements={setRequirements}
            />
          </>
        )}

        <div className="editOrderField editOrderFieldFull">
          <div>Nota del producto</div>
          <textarea
            rows="3"
            value={addProductForm.note}
            onChange={(e) =>
              setAddProductForm((prev) => ({
                ...prev,
                note: e.target.value,
              }))
            }
          />
        </div>
      </div>

      <div className="editOrderSelectedProduct">
        {selectedProduct ? (
          <div className="editOrderSelectedProductInfo">
            <div className="editOrderSelectedProductName">{selectedProduct.name}</div>
            <div>Precio base: {selectedProduct.price ?? "-"}</div>
            <div>VariantId: {addProductForm.variantId || "-"}</div>
            <div>ItemIds: {addProductForm.itemIds?.length ? addProductForm.itemIds.join(", ") : "-"}</div>
          </div>
        ) : (
          <div className="editOrderEmptyInline">Selecciona un producto para ver el detalle.</div>
        )}
      </div>

      {hasErrors && (
        <div className="editOrderConfigError editOrderConfigErrorMain">{requirements.find((item) => item?.error)?.error}</div>
      )}

      <div className="editOrderActions">
        <Button
          text={isAddingProduct ? "Agregando..." : "Agregar producto al pedido"}
          icon={<MdAdd />}
          customClass={"customButtonColor2"}
          action={addProductOrder}
          disabled={!selectedProduct || isLoadingProductDetails || hasErrors}
        />
      </div>
    </div>
  );
};
