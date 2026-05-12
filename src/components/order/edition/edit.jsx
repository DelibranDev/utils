import React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { translateMessage } from "../../../function";
import { Button } from "../../button";
import { MdClose, MdEdit } from "react-icons/md";

import "./edit.css";
import { getProductRowKey, normalizeNotesToString } from "./utils/edit.helpers";
import { OrderHeader } from "./components/OrderHeader";
import { OrderDataCard } from "./components/OrderDataCard";
import { OrderProductsCard } from "./components/OrderProductsCard";
import { AddProductCard } from "./components/AddProductCard";

export const Edit = ({
  data,
  clients = [],
  products = [],
  fetchOrderDetails,
  fetchClients,
  fetchProducts,
  fetchProductDetails,
  onUpdateOrder,
  onAddProduct,
  onRemoveProduct,
  onUpdateProductQuantity,
  onShowAlert,
  onRefresh,
  onUpdatePanelData,
  variants,
  atributos,
}) => {
  console.log("=== Edit ===");
  const orderId = data?.orderId;
  const status = data?.status;
  const paymentStatus = data?.paymentStatus;

  const [showPanelEdition, handlePanelEdition] = useState(false);
  const [order, updateOrder] = useState(data || null);
  const [clientsState, setClients] = useState(clients || []);
  const [productsState, setProducts] = useState(products || []);

  const [isLoadingOrder, setIsLoadingOrder] = useState(false);
  const [isLoadingClients, setIsLoadingClients] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isSavingOrder, setIsSavingOrder] = useState(false);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [rowLoadingKey, setRowLoadingKey] = useState("");

  const [orderForm, setOrderForm] = useState({
    customerId: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [addProductForm, setAddProductForm] = useState({
    productId: "",
    quantity: 1,
    note: "",
    variantId: "",
    itemIds: [],
  });

  const [quantityDrafts, setQuantityDrafts] = useState({});

  const lastSyncedOrderRef = useRef(null);
  const hasOpenedPanelRef = useRef(false);

  const showAlert = useCallback(
    (message) => {
      if (typeof onShowAlert === "function") {
        onShowAlert(translateMessage(message || "Bad request"));
      }
    },
    [onShowAlert],
  );

  const buildOrderSignature = useCallback((nextData) => {
    if (!nextData) return "null";

    return JSON.stringify({
      orderId: nextData.orderId || null,
      customerId: nextData.customerId || null,
      email: nextData.email || nextData?.Customer?.email || "",
      phone: nextData.phone || nextData?.Customer?.phone || "",
      notes: normalizeNotesToString(nextData?.notes),
      products: (nextData?.products || []).map((product) => ({
        key: getProductRowKey(product),
        quantity: Number(product.quantity) || 0,
      })),
    });
  }, []);

  const syncOrderStates = useCallback((nextData) => {
    updateOrder(nextData);

    setOrderForm({
      customerId: nextData?.customerId || "",
      email: nextData?.email || nextData?.Customer?.email || "",
      phone: nextData?.phone || nextData?.Customer?.phone || "",
      notes: normalizeNotesToString(nextData?.notes),
    });

    const nextDrafts = {};
    (nextData?.products || []).forEach((product) => {
      nextDrafts[getProductRowKey(product)] = Number(product.quantity) || 0;
    });
    setQuantityDrafts(nextDrafts);
  }, []);

  const resolveResponseData = useCallback((response) => {
    if (response?.data) return response.data;
    return response;
  }, []);

  const pushOrderToParent = useCallback(
    (nextOrder) => {
      if (typeof onUpdatePanelData === "function") {
        onUpdatePanelData(nextOrder);
      }
    },
    [onUpdatePanelData],
  );

  const getAllClients = useCallback(async () => {
    if (typeof fetchClients !== "function") return;

    setIsLoadingClients(true);
    try {
      const response = await fetchClients();
      const nextClients = Array.isArray(response?.data) ? response.data : Array.isArray(response) ? response : [];
      setClients(nextClients);
    } catch (error) {
      console.error("Error en la petición:", error);
      showAlert("Error loading clients");
    } finally {
      setIsLoadingClients(false);
    }
  }, [fetchClients, showAlert]);

  const getAllProducts = useCallback(async () => {
    if (typeof fetchProducts !== "function") return;

    setIsLoadingProducts(true);
    try {
      const response = await fetchProducts();
      const nextProducts = Array.isArray(response?.data) ? response.data : Array.isArray(response) ? response : [];
      setProducts(nextProducts);
    } catch (error) {
      console.error("Error en la petición:", error);
      showAlert("Error loading products");
    } finally {
      setIsLoadingProducts(false);
    }
  }, [fetchProducts, showAlert]);

  const getOrder = useCallback(async () => {
    if (!orderId || typeof fetchOrderDetails !== "function") return;

    setIsLoadingOrder(true);
    try {
      const response = await fetchOrderDetails(orderId);
      const nextOrder = resolveResponseData(response);

      if (nextOrder) {
        syncOrderStates(nextOrder);
        pushOrderToParent(nextOrder);
      } else {
        showAlert(response?.message || "Bad request");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      showAlert("Error loading order");
    } finally {
      setIsLoadingOrder(false);
    }
  }, [orderId, fetchOrderDetails, resolveResponseData, syncOrderStates, pushOrderToParent, showAlert]);

  const refreshAllData = useCallback(async () => {
    if (typeof onRefresh === "function") {
      await onRefresh();
    }

    await Promise.all([getOrder(), getAllClients(), getAllProducts()]);
  }, [onRefresh, getOrder, getAllClients, getAllProducts]);

  const updatePendingOrderData = async () => {
    if (!order?.orderId || typeof onUpdateOrder !== "function") return;

    const payload = {
      customerId: orderForm.customerId || null,
      notes: orderForm.notes || "",
      email: orderForm.email || "",
      phone: orderForm.phone || "",
    };

    setIsSavingOrder(true);

    try {
      const response = await onUpdateOrder(payload, order.orderId);
      const nextOrder = resolveResponseData(response);

      if (nextOrder) {
        syncOrderStates(nextOrder);
        pushOrderToParent(nextOrder);
        showAlert(response?.message || "Order updated successfully");
      } else {
        await getOrder();
        showAlert(response?.message || "Bad request");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      showAlert("Error updating order");
    } finally {
      setIsSavingOrder(false);
    }
  };

  const addProductOrder = async () => {
    if (!addProductForm.productId) {
      showAlert("You must select a product");
      return;
    }

    if (typeof onAddProduct !== "function") return;

    const payload = {
      productId: addProductForm.productId,
      quantity: Number(addProductForm.quantity) || 1,
      variantId: addProductForm.variantId || null,
      itemIds: Array.isArray(addProductForm.itemIds) ? addProductForm.itemIds : [],
      note: addProductForm.note || "",
    };

    setIsAddingProduct(true);

    try {
      const response = await onAddProduct(payload, order.orderId);
      const nextOrder = resolveResponseData(response);

      setAddProductForm({
        productId: "",
        quantity: 1,
        note: "",
        variantId: "",
        itemIds: [],
      });

      if (nextOrder) {
        syncOrderStates(nextOrder);
        pushOrderToParent(nextOrder);
      } else {
        await getOrder();
      }

      showAlert(response?.message || "Product added successfully");
    } catch (error) {
      console.error("Error en la petición:", error);
      showAlert("Error adding product");
    } finally {
      setIsAddingProduct(false);
    }
  };

  const updateQuantityProductToOrder = async (product) => {
    if (typeof onUpdateProductQuantity !== "function") return;

    const rowKey = getProductRowKey(product);
    const quantity = Number(quantityDrafts[rowKey]);

    if (Number.isNaN(quantity) || quantity < 0) {
      showAlert("Invalid quantity");
      return;
    }

    const payload = {
      productId: product.productId,
      quantity,
      variantId: product.variantId || null,
      itemIds: product.itemIds || [],
    };

    setRowLoadingKey(`${rowKey}-update`);

    try {
      const response = await onUpdateProductQuantity(payload, order.orderId);
      const nextOrder = resolveResponseData(response);

      if (nextOrder) {
        syncOrderStates(nextOrder);
        pushOrderToParent(nextOrder);
      } else {
        await getOrder();
      }

      showAlert(response?.message || "Quantity updated successfully");
    } catch (error) {
      console.error("Error en la petición:", error);
      showAlert("Error updating quantity");
    } finally {
      setRowLoadingKey("");
    }
  };

  const removeProductToOrder = async (product) => {
    if (typeof onRemoveProduct !== "function") return;

    const rowKey = getProductRowKey(product);
    const payload = {
      productId: product.productId,
      variantId: product.variantId || null,
      itemIds: product.itemIds || [],
    };

    setRowLoadingKey(`${rowKey}-remove`);

    try {
      const response = await onRemoveProduct(payload, order.orderId);
      const nextOrder = resolveResponseData(response);

      if (nextOrder) {
        syncOrderStates(nextOrder);
        pushOrderToParent(nextOrder);
      } else {
        await getOrder();
      }

      showAlert(response?.message || "Product removed successfully");
    } catch (error) {
      console.error("Error en la petición:", error);
      showAlert("Error removing product");
    } finally {
      setRowLoadingKey("");
    }
  };

  const currentCustomer = useMemo(() => {
    return clientsState.find((client) => client.customerId === orderForm.customerId);
  }, [clientsState, orderForm.customerId]);

  useEffect(() => {
    if (showPanelEdition) {
      refreshAllData();
    }
  }, [showPanelEdition]);

  const handleOpenPanel = () => {
    handlePanelEdition(true);
  };

  const handleClosePanel = () => {
    handlePanelEdition(false);
  };

  return (
    <>
      {status === "pending" && paymentStatus === "pending" && (
        <Button
          text={"Modificar pedido"}
          icon={<MdEdit />}
          customClass={"customButtonColor2 buttonOrderEdit"}
          action={handleOpenPanel}
        />
      )}

      {showPanelEdition && (
        <div className="backgroundBox">
          <div className="editOrderFloatingBox">
            <div className="editOrderContent">
              <OrderHeader order={order} refreshAllData={refreshAllData} handleClosePanel={handleClosePanel} />

              {isLoadingOrder ? (
                <div className="editOrderEmptyBox">Cargando pedido...</div>
              ) : !order ? (
                <div className="editOrderEmptyBox">No se ha podido cargar el pedido.</div>
              ) : (
                <div className="editOrderSections">
                  <div className="editOrderMainColumn">
                    <OrderProductsCard
                      products={order?.products || []}
                      quantityDrafts={quantityDrafts}
                      setQuantityDrafts={setQuantityDrafts}
                      rowLoadingKey={rowLoadingKey}
                      updateQuantityProductToOrder={updateQuantityProductToOrder}
                      removeProductToOrder={removeProductToOrder}
                      variants={variants}
                      atributos={atributos}
                    />

                    <AddProductCard
                      products={productsState}
                      addProductForm={addProductForm}
                      setAddProductForm={setAddProductForm}
                      isLoadingProducts={isLoadingProducts}
                      isAddingProduct={isAddingProduct}
                      addProductOrder={addProductOrder}
                      fetchProductDetails={fetchProductDetails}
                    />
                  </div>

                  <div className="editOrderSideColumn">
                    <OrderDataCard
                      orderForm={orderForm}
                      setOrderForm={setOrderForm}
                      clients={clientsState}
                      isLoadingClients={isLoadingClients}
                      isSavingOrder={isSavingOrder}
                      updatePendingOrderData={updatePendingOrderData}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
