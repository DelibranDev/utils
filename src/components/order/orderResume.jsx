import React, { useEffect, useState } from "react";
import { Button } from "./../button";
import "./orderResume.css";

const formatAmount = (amount) => Number(amount || 0).toFixed(2);
const invoiceNumber = (invoice) => invoice?.number ?? invoice?.invoiceNumber ?? invoice?.identifier ?? invoice?.code ?? "";

const unwrapResult = (result) => result?.data?.data ?? result?.data ?? result;

export const OrderResume = ({ data = {}, callbackPrintTicket = () => null, callbackCreateInvoice = () => null, callbackPrintInvoice = () => null, callbackRefreshOrder = null, canCreateInvoice = true, onDataChange = () => null }) => {
  const [localData, setLocalData] = useState(data);
  const [isCreatingInvoice, setIsCreatingInvoice] = useState(false);

  useEffect(() => setLocalData(data || {}), [data]);

  const discount = Number(localData.discountedTotal) === 0 ? 0 : Number(localData.total) - Number(localData.discountedTotal);
  const total = Number(localData.discountedTotal) === 0 ? Number(localData.total) : Number(localData.discountedTotal);
  const invoice = localData?.Invoice || null;

  const handleCreateInvoice = async () => {
    if (isCreatingInvoice) return;
    setIsCreatingInvoice(true);
    try {
      const rawResult = await callbackCreateInvoice(localData);
      let result = unwrapResult(rawResult);
      if (typeof callbackRefreshOrder === "function") {
        const refreshed = unwrapResult(await callbackRefreshOrder(localData));
        if (refreshed) result = refreshed;
      }
      let nextData = localData;
      if (result?.Invoice || result?.orderId || result?.products) nextData = { ...localData, ...result };
      else if (result && typeof result === "object") nextData = { ...localData, Invoice: result };
      setLocalData(nextData);
      onDataChange(nextData);
    } finally {
      setIsCreatingInvoice(false);
    }
  };

  return (
    <div className="invoiceResume">
      <div className="invoiceResumeHeader">
        <div><div className="invoiceResumeHeaderTitle">No. Factura</div><div className="invoiceResumeHeaderValue">{invoice ? (invoiceNumber(invoice) || "Creada") : "Sin factura"}</div></div>
        <div className="invoiceResumeChannel"><div className="invoiceResumeHeaderTitle">Canal de venta</div><div className="invoiceResumeHeaderValue">{localData?.SalesChannel?.name}</div></div>
      </div>
      <div className="invoiceResumeBody">
        <div className="invoiceResumeItem"><div>Subtotal</div><div className="invoiceResumeNote">{(localData.products || []).length} artículos</div><div className="invoiceResumeValue">{formatAmount(localData.total)} €</div></div>
        <div className="invoiceResumeItem"><div>Descuento</div><div /><div className="invoiceResumeValue">{formatAmount(discount)} €</div></div>
        <div className="invoiceResumeSeparator" />
        <div className="invoiceResumeItem"><strong>Total</strong><div /><div className="invoiceResumeValue">{formatAmount(total)} €</div></div>
      </div>
      <div className="invoiceResumeActions">
        {!invoice ? <><Button text="Imprimir ticket" customClass="w-100" action={callbackPrintTicket} />{canCreateInvoice && <Button text={isCreatingInvoice ? "Creando..." : "Crear factura"} customClass="w-100" action={handleCreateInvoice} />}</> : <Button text="Imprimir factura" customClass="w-100" action={() => callbackPrintInvoice(invoice, localData)} />}
      </div>
    </div>
  );
};
