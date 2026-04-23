export const getProductRowKey = (product) =>
  `${product.productId}-${product.variantId || "no-variant"}-${JSON.stringify(product.itemIds || [])}`;

export const normalizeNotesToString = (notes) => {
  if (Array.isArray(notes)) return notes.join("\n");
  return notes || "";
};
