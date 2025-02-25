import React from "react";

export const OrderResume = ({ data }) => {
  return (
    <div className="pt-3">
      <div className="invoiceResume-Header">
        <div>
          <div className="invoiceResume-Header-title">No Factura</div>
          <div className="invoiceResume-Header-value">{data.number}</div>
        </div>
        <div>
          <div className="invoiceResume-Header-title text-align-right">Canal de venta</div>
          <div className="invoiceResume-Header-value text-align-right">{data.paymentMethod}</div>
        </div>
      </div>
      <div className="invoiceResume-Body">
        <div className="invoiceResume-Item">
          <div className="invoiceResume-title">Subtotal</div>
          <div className="invoiceResume-note">{(data.products || []).length > 0 && data.products.length} artículos</div>
          <div className="invoiceResume-value">{data.total} €</div>
        </div>
        <div className="invoiceResume-Item">
          <div className="invoiceResume-title">Descuento</div>
          <div className="invoiceResume-note"></div>
          <div className="invoiceResume-value">0,00 €</div>
        </div>
        <div className="invoiceResume-Separator"></div>
        <div className="invoiceResume-Item">
          <div className="invoiceResume-title">Total</div>
          <div></div>
          <div className="invoiceResume-value">{data.total} €</div>
        </div>
      </div>
    </div>
  );
};
