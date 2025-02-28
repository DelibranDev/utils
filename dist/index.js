'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = "@font-face {\r\n  font-family: 'DMSans';\r\n  src: local('DM Sans'), url(./fonts/DMSans/DMSans-Regular.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'DMSans-SemiBold';\r\n  src: local('DM Sans SemiBold'), url(./fonts/DMSans/DMSans-SemiBold.ttf) format('truetype');\r\n}\r\n\r\n\r\n\r\n:root {\r\n  --color-primary: #000;\r\n  --color-primary-background: #ece9e4;\r\n  --color-primary-shadow: rgba(182, 182, 182, 0.2);\r\n  --color-secondary: #fff;\r\n  --color-secondary-background: #fefcfa;\r\n  --color-terciary: #979796;\r\n  --color-terciary-2: lightgrey;\r\n  --color-terciary-3: grey;\r\n  --color-success: #00C76C;\r\n  --color-success-background: rgb(0, 199, 108, 0.2);\r\n  --color-pending: #EB9E1A;\r\n  --color-pending-background: rgb(235, 158, 26, 0.2);\r\n  --color-error: #FF5757;\r\n  --color-error-background: rgb(255, 87, 87, 0.2);\r\n  --color-process: #0057FF;\r\n  --color-process-background: rgb(0, 87, 255, 0.2);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-family: 'DMSans';\r\n  font-size: 0.8rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--color-terciary);\r\n}\r\n\r\nhr{\r\n  border-top: 3px solid var(--color-primary-background);\r\n}\r\n\r\ntextarea:focus, input:focus{\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"password\"]{\r\n  box-sizing: unset!important;\r\n  line-height: unset!important;\r\n}\r\n\r\ninput[type=\"text\"]:disabled{background-color:transparent; cursor:not-allowed;}\r\n\r\n.color-blue{\r\n  color: var(--color-process);\r\n}\r\n\r\n.MuiButtonBase-root{\r\n  color: var(--color-process)!important;\r\n}\r\n\r\n\r\n\r\n/****** CUSTOM BUTTONS ********/\r\n.button-1{\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px var(--color-secondary) solid;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-2{\r\n  border-radius: 5px;\r\n  background-color: var(--color-secondary);\r\n  border: 1px var(--color-terciary-2) solid;\r\n  cursor: pointer;\r\n  height: 27px;\r\n  width: fit-content;\r\n}\r\n\r\n\r\n\r\n/*********************************/\r\n\r\n.adminPanel{\r\n  background: var(--color-secondary);\r\n  border: 1px solid var(--color-primary-background);\r\n  border-radius: 12px;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 15px;\r\n}\r\n\r\n.background-image {\r\n  background-color: var(--color-primary-background);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.flex{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.flex-gap{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.flex-start{\r\n  display: inline-flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.flex-end{\r\n  display: inline-flex;\r\n  justify-content: flex-end;\r\n  padding: 4px;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n}\r\n\r\n.w33{\r\n  width: 33%;\r\n}\r\n\r\n.w50{\r\n  width: 50%;\r\n}\r\n\r\n.w100{\r\n  width: 100%;\r\n}\r\n\r\n.h-100{\r\n  height: 100%;\r\n}\r\n\r\n.p-2{\r\n  padding: 2%;\r\n}\r\n\r\n.text-align-right{\r\n  text-align: right;\r\n}\r\n\r\n.text-align-left{\r\n  text-align: left;\r\n}\r\n\r\n.text-align-center{\r\n  text-align: center;\r\n}\r\n\r\n.text-overflow {\r\n  display: inline-block; /* O también block, según el diseño */\r\n  width: 100%; /* Ajusta el ancho según necesites */\r\n  white-space: nowrap; /* Evita que el texto haga saltos de línea */\r\n  overflow: hidden; /* Oculta el texto que no cabe en el contenedor */\r\n  text-overflow: ellipsis; /* Muestra \"...\" cuando el texto es muy largo */\r\n}\r\n\r\n.fixIconButton{\r\n  padding: 4px 0px 4px 4px!important;\r\n  min-width: auto!important;\r\n}\r\n\r\n.buttonNoBorder{\r\n  border: 0px!important;\r\n}\r\n\r\n\r\n/************ CHECKBOX ************/\r\n.custom-checkbox {\r\n  /* Ocultar el diseño por defecto */\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  /* Dimensiones */\r\n  width: 24px;\r\n  height: 24px;\r\n\r\n  /* Estilo base */\r\n  border: 2px solid var(--color-primary-background); /* Azul oscuro */\r\n  border-radius: 4px;\r\n  background-color: var(--color-secondary);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n\r\n  /* Efecto al pasar el ratón */\r\n  transition: background-color 0.2s ease, border-color 0.2s ease;\r\n}\r\n\r\n.custom-checkbox:hover {\r\n  border-color: var(--color-process); /* Azul más oscuro */\r\n}\r\n\r\n.custom-checkbox:checked {\r\n  background-color: var(--color-process); /* Azul */\r\n  border-color: var(--color-process);\r\n\r\n  /* Añadir el check */\r\n  position: relative;\r\n}\r\n\r\n.custom-checkbox:checked::after {\r\n  content: \"\";\r\n  display: block;\r\n\r\n  /* Checkmark blanco */\r\n  width: 10px;\r\n  height: 5px;\r\n  border: solid var(--color-secondary);\r\n  border-width: 0 0 2px 2px;\r\n  transform: rotate(-45deg);\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n\r\n/************ TOOLBAR ************/\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n  margin: 2px;\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--color-primary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n/**********************************/\r\n\r\n\r\n\r\n\r\n/****** MEDIA QUERIES *******/\r\n\r\n\r\n\r\n/* 1300px or less */\r\n@media (max-width: 1300px) {\r\n\r\n}\r\n\r\n/* 992px or less */\r\n@media (max-width: 992px) {\r\n\r\n  \r\n}\r\n\r\n/* 750px or less */\r\n@media (max-width: 750px) {\r\n  \r\n  \r\n}\r\n\r\n/* 600px or less */\r\n@media (max-width: 600px) {\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
var stylesheet="@font-face {\r\n  font-family: 'DMSans';\r\n  src: local('DM Sans'), url(./fonts/DMSans/DMSans-Regular.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'DMSans-SemiBold';\r\n  src: local('DM Sans SemiBold'), url(./fonts/DMSans/DMSans-SemiBold.ttf) format('truetype');\r\n}\r\n\r\n\r\n\r\n:root {\r\n  --color-primary: #000;\r\n  --color-primary-background: #ece9e4;\r\n  --color-primary-shadow: rgba(182, 182, 182, 0.2);\r\n  --color-secondary: #fff;\r\n  --color-secondary-background: #fefcfa;\r\n  --color-terciary: #979796;\r\n  --color-terciary-2: lightgrey;\r\n  --color-terciary-3: grey;\r\n  --color-success: #00C76C;\r\n  --color-success-background: rgb(0, 199, 108, 0.2);\r\n  --color-pending: #EB9E1A;\r\n  --color-pending-background: rgb(235, 158, 26, 0.2);\r\n  --color-error: #FF5757;\r\n  --color-error-background: rgb(255, 87, 87, 0.2);\r\n  --color-process: #0057FF;\r\n  --color-process-background: rgb(0, 87, 255, 0.2);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-family: 'DMSans';\r\n  font-size: 0.8rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--color-terciary);\r\n}\r\n\r\nhr{\r\n  border-top: 3px solid var(--color-primary-background);\r\n}\r\n\r\ntextarea:focus, input:focus{\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"password\"]{\r\n  box-sizing: unset!important;\r\n  line-height: unset!important;\r\n}\r\n\r\ninput[type=\"text\"]:disabled{background-color:transparent; cursor:not-allowed;}\r\n\r\n.color-blue{\r\n  color: var(--color-process);\r\n}\r\n\r\n.MuiButtonBase-root{\r\n  color: var(--color-process)!important;\r\n}\r\n\r\n\r\n\r\n/****** CUSTOM BUTTONS ********/\r\n.button-1{\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px var(--color-secondary) solid;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-2{\r\n  border-radius: 5px;\r\n  background-color: var(--color-secondary);\r\n  border: 1px var(--color-terciary-2) solid;\r\n  cursor: pointer;\r\n  height: 27px;\r\n  width: fit-content;\r\n}\r\n\r\n\r\n\r\n/*********************************/\r\n\r\n.adminPanel{\r\n  background: var(--color-secondary);\r\n  border: 1px solid var(--color-primary-background);\r\n  border-radius: 12px;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 15px;\r\n}\r\n\r\n.background-image {\r\n  background-color: var(--color-primary-background);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.flex{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.flex-gap{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.flex-start{\r\n  display: inline-flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.flex-end{\r\n  display: inline-flex;\r\n  justify-content: flex-end;\r\n  padding: 4px;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n}\r\n\r\n.w33{\r\n  width: 33%;\r\n}\r\n\r\n.w50{\r\n  width: 50%;\r\n}\r\n\r\n.w100{\r\n  width: 100%;\r\n}\r\n\r\n.h-100{\r\n  height: 100%;\r\n}\r\n\r\n.p-2{\r\n  padding: 2%;\r\n}\r\n\r\n.text-align-right{\r\n  text-align: right;\r\n}\r\n\r\n.text-align-left{\r\n  text-align: left;\r\n}\r\n\r\n.text-align-center{\r\n  text-align: center;\r\n}\r\n\r\n.text-overflow {\r\n  display: inline-block; /* O también block, según el diseño */\r\n  width: 100%; /* Ajusta el ancho según necesites */\r\n  white-space: nowrap; /* Evita que el texto haga saltos de línea */\r\n  overflow: hidden; /* Oculta el texto que no cabe en el contenedor */\r\n  text-overflow: ellipsis; /* Muestra \"...\" cuando el texto es muy largo */\r\n}\r\n\r\n.fixIconButton{\r\n  padding: 4px 0px 4px 4px!important;\r\n  min-width: auto!important;\r\n}\r\n\r\n.buttonNoBorder{\r\n  border: 0px!important;\r\n}\r\n\r\n\r\n/************ CHECKBOX ************/\r\n.custom-checkbox {\r\n  /* Ocultar el diseño por defecto */\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  /* Dimensiones */\r\n  width: 24px;\r\n  height: 24px;\r\n\r\n  /* Estilo base */\r\n  border: 2px solid var(--color-primary-background); /* Azul oscuro */\r\n  border-radius: 4px;\r\n  background-color: var(--color-secondary);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n\r\n  /* Efecto al pasar el ratón */\r\n  transition: background-color 0.2s ease, border-color 0.2s ease;\r\n}\r\n\r\n.custom-checkbox:hover {\r\n  border-color: var(--color-process); /* Azul más oscuro */\r\n}\r\n\r\n.custom-checkbox:checked {\r\n  background-color: var(--color-process); /* Azul */\r\n  border-color: var(--color-process);\r\n\r\n  /* Añadir el check */\r\n  position: relative;\r\n}\r\n\r\n.custom-checkbox:checked::after {\r\n  content: \"\";\r\n  display: block;\r\n\r\n  /* Checkmark blanco */\r\n  width: 10px;\r\n  height: 5px;\r\n  border: solid var(--color-secondary);\r\n  border-width: 0 0 2px 2px;\r\n  transform: rotate(-45deg);\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n\r\n/************ TOOLBAR ************/\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n  margin: 2px;\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--color-primary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n/**********************************/\r\n\r\n\r\n\r\n\r\n/****** MEDIA QUERIES *******/\r\n\r\n\r\n\r\n/* 1300px or less */\r\n@media (max-width: 1300px) {\r\n\r\n}\r\n\r\n/* 992px or less */\r\n@media (max-width: 992px) {\r\n\r\n  \r\n}\r\n\r\n/* 750px or less */\r\n@media (max-width: 750px) {\r\n  \r\n  \r\n}\r\n\r\n/* 600px or less */\r\n@media (max-width: 600px) {\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
styleInject(css_248z$5);

const parseDate = value => {
  // Convertir la cadena de fecha en un objeto de fecha
  var fecha = new Date(value);

  // Obtener el día, mes y hora de la fecha
  var dia = fecha.getDate();
  var mes = fecha.toLocaleDateString("es-ES", {
    month: "long"
  }); // Obtener el nombre del mes en español
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();

  // Formatear la cadena de fecha en el formato deseado
  var fechaFormateada = `${dia} de ${mes} a las ${hora}:${minutos < 10 ? "0" : ""}${minutos}`;
  return fechaFormateada;
};
const getTodayDate = (daysToAdd = 0) => {
  const today = new Date();
  today.setDate(today.getDate() + daysToAdd); // Sumar o restar días
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // Mes con dos dígitos
  const dd = String(today.getDate()).padStart(2, "0"); // Día con dos dígitos
  return `${yyyy}-${mm}-${dd}`;
};
const generateCode = (length = 10) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    code += chars[randomIndex];
  }
  return code;
};
const checkUserAgent = () => {
  let userAgent = "";
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
    userAgent = "Opera";
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    userAgent = "Edge"; //Usado por Bing
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    userAgent = "Chrome"; //Usado por Opera
  } else if (navigator.userAgent.indexOf("CriOS") != -1) {
    userAgent = "ChromeIOS";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    userAgent = "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    userAgent = "Firefox";
  } else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
    //IF IE > 10
    userAgent = "IE";
  } else {
    userAgent = "";
  }
  return userAgent;
};
const parseDateAndHourToISO = (idDate, idHour) => {
  const day = document.getElementById(idDate).value;
  const hour = document.getElementById(idHour + "-hour").value;
  const minute = document.getElementById(idHour + "-minute").value;
  return `${day}T${hour}:${minute}:00.000Z`;
};
function addIdKeyIfMissing(array) {
  if (!Array.isArray(array) || array.length === 0) return [];
  return array?.map(item => {
    if (!item.id) {
      const idKey = ["categoryId", "productId", "catalogId", "discountId", "itemId", "itemGroupId", "optionId", "optionGroupId", "orderId", "salesChannelId", "customerId"].find(key => item[key]);
      if (idKey) {
        item.id = item[idKey];
      }
    }
    return item;
  });
}
function sortArrayByCustomOrder(keysOrdered, array) {
  const orderedArray = {};
  // Ordenar las claves de array según keysOrdered
  Object.keys(keysOrdered).forEach(key => {
    if (array.hasOwnProperty(key)) {
      orderedArray[key] = array[key];
    }
  });
  return orderedArray;
}
function getRequiredKeys(obj) {
  const dictionary = {
    identifier: " identificador",
    name: " nombre",
    age: " edad",
    email: " email",
    phone: " teléfono",
    address: " dirección"
  };
  return Object.keys(obj).filter(key => obj[key] === "required")?.map(key => dictionary[key] || key);
}

var css_248z$4 = ".state-label {\r\n    padding: 2px 10px;\r\n    font-size: 0.75rem;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    width: 125px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.state-pending {\r\n    color: var(--color-pending);\r\n    background-color: var(--color-pending-background);\r\n}\r\n\r\n\r\n.state-prepared {\r\n    color: var(--color-success);\r\n    background-color: var(--color-success-background);\r\n}\r\n\r\n.state-pending {\r\n    color: var(--color-pending);\r\n    background-color: var(--color-pending-background);\r\n}\r\n\r\n.state-canceled{\r\n    color: var(--color-error);\r\n    background-color: var(--color-error-background);\r\n}\r\n\r\n.state-process{\r\n    color: var(--color-process);\r\n    background-color: var(--color-process-background);\r\n}";
styleInject(css_248z$4);

const StateLabel = ({
  state
}) => {
  /*const dictionary = [
    {pending: "Pendiente", value:"pending"},
    {prepared: "Preparado", value:"ready"},
  ];*/
  const Label = () => {
    switch (state) {
      case "pending":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-pending"
        }, "Pendiente");
      case "prepared":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-prepared"
        }, "Preparado");
      case "paid":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-prepared"
        }, "Pagado");
      case "delivered":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-delivered"
        }, "Entregado");
      case "inPreparation":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-process"
        }, "En preparaci\xF3n");
      case "inDelivery":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-process"
        }, "Enviando");
      case "cancelled":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-canceled"
        }, "Cancelado");
      default:
        return /*#__PURE__*/React.createElement("div", null, "-");
    }
  };
  return /*#__PURE__*/React.createElement(Label, null);
};

const MAPS_API_KEY = "AIzaSyArOoqzUgxtt2rxD8v6MLPbXFMp4YPUIz4";
const MapLocation = ({
  lat = null,
  lon = null,
  address = null,
  height = "300px"
}) => {
  const [loc, setLoc] = React.useState({
    lat,
    lon,
    address
  });
  const [error, setError] = React.useState(null);
  const normalizeAddress = rawAddress => {
    return rawAddress.replace(/([a-zA-Z]+)(\d+)/g, "$1 $2").replace(/,/g, " ").replace(/\s+/g, "+");
  };
  const getGeocode = async rawAddress => {
    if (!rawAddress) return;
    try {
      const normalizedAddress = encodeURIComponent(normalizeAddress(rawAddress)) + "+España";
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${normalizedAddress}&key=${MAPS_API_KEY}`);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        const {
          lat,
          lng
        } = data.results[0].geometry.location;
        setLoc({
          lat,
          lon: lng,
          address: rawAddress
        });
        setError(null); // Se limpia el error porque se encontró una dirección válida
      } else {
        setLoc({
          lat: null,
          lon: null,
          address: rawAddress
        });
        setError(`No se encontró la dirección: "${rawAddress}"`);
      }
    } catch (err) {
      setLoc({
        lat: null,
        lon: null,
        address: rawAddress
      });
      setError("Error al conectar con el servidor de mapas");
    }
  };
  React.useEffect(() => {
    if (!lat && !lon && address) {
      getGeocode(address);
    } else {
      setLoc({
        lat,
        lon,
        address
      });
      setError(null); // Si hay coordenadas, no hay error
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);
  const googleMapsUrl = loc.lat && loc.lon ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${loc.lat},${loc.lon}&zoom=15` : address ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(address)}&zoom=15` : null;
  return /*#__PURE__*/React.createElement("div", null, error && !googleMapsUrl && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "red"
    }
  }, error), googleMapsUrl ? /*#__PURE__*/React.createElement("iframe", {
    title: "mapLocation",
    width: "100%",
    height: "100%",
    frameBorder: "0",
    style: {
      border: 0,
      minHeight: height,
      borderRadius: "5px"
    },
    src: googleMapsUrl,
    allowFullScreen: true
  }) : !error && /*#__PURE__*/React.createElement("p", null, "Cargando mapa..."));
};

var css_248z$3 = ".selectContainer{\r\n  gap: 3px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  & .customSelect{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.customSelect{\r\n  height: 30px;\r\n  width: fit-content;\r\n  font-size: 0.7rem!important;\r\n  padding: 0 5px;\r\n  background-color: white;\r\n  border: 1px var(--color-terciary-2) solid;\r\n  border-radius: 5px;\r\n  & fieldset{\r\n    display: none;\r\n  }\r\n}\r\n\r\n.customSelectName{\r\n  margin-right: 10px;\r\n}\r\n\r\n.customSelectNameDropdown{\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: white;\r\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n}\r\n\r\n.dropdownSelect{\r\n    position: absolute;\r\n    background-color: white;\r\n    padding: 5px;\r\n    width: 141px;\r\n    border: 1px rgb(233 233 233) solid;\r\n    border-radius: 5px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.selectOption{\r\n    cursor:pointer;\r\n}\r\n\r\n.slide-bottom {\r\n\t-webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n\t        animation: slide-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\n @-webkit-keyframes slide-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(5px);\r\n              transform: translateY(5px);\r\n    }\r\n  }\r\n  @keyframes slide-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(5px);\r\n              transform: translateY(5px);\r\n    }\r\n  }\r\n  \r\n  ";
styleInject(css_248z$3);

const Select = ({
  value = "",
  values,
  isMenu = false,
  className = "",
  callback = null,
  label = null,
  description = null,
  id = null
}) => {
  const [selected, setSelected] = React.useState(value ? value : values[0].id);
  const [visibility, changeVisibility] = React.useState(false);
  const handleOption = e => {
    const option = e.target.value;
    if (!isMenu) {
      setSelected(option);
      changeVisibility(!visibility);
      if (callback) callback(option);
    } else {
      changeVisibility(!visibility);
      option.function();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "selectContainer"
  }, label !== null && /*#__PURE__*/React.createElement("div", {
    className: "inputLabel"
  }, label), label !== null && /*#__PURE__*/React.createElement("div", {
    className: "inputDescription"
  }, description), /*#__PURE__*/React.createElement("select", {
    className: "customSelect " + className,
    id: id,
    value: selected,
    onChange: handleOption
  }, values?.map((v, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: v.id
  }, v.name))));
};

var css_248z$2 = ".customButton {\r\n    background-color: var(--color-secondary);\r\n    border: 1px var(--color-terciary-2) solid;\r\n    font-size: 0.7rem;\r\n    padding: 0 12px;\r\n    border: 1px var(--color-terciary-2) solid;\r\n    border-radius: 5px;\r\n    height: 30px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    box-shadow: none;\r\n    text-transform:none;\r\n    align-items: center;\r\n    & svg{\r\n        padding-right: 5px;\r\n        font-size: 1.1rem;\r\n    }\r\n}\r\n\r\n.customButtonColor1{\r\n    background-color: var(--color-secondary);\r\n    color: var(--color-primary);\r\n    & svg{\r\n        color: var(--color-primary);\r\n    }\r\n}\r\n\r\n.customButtonColor2 {\r\n    background-color: var(--color-primary);\r\n    & .customButtonText{\r\n        color: var(--color-secondary);\r\n    }\r\n    & svg{\r\n        color: var(--color-secondary);\r\n    }\r\n}\r\n\r\n.customButtonText{\r\n    margin-top: 1px;\r\n    color: var(--color-primary);\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n.customButtonDisabled {\r\n    background-color: var(--color-terciary-2);\r\n    height: 25px;\r\n    & .customButtonText{\r\n        color: var(--color-terciary-3);\r\n        padding: 5px 20px;\r\n    }\r\n}\r\n\r\n.customButtonGreen {\r\n    \r\n    background-color: var(--color-success);\r\n    height: 25px;\r\n    \r\n    & .customButtonText{\r\n        color: var(--color-secondary);\r\n        padding: 5px 20px;\r\n    }\r\n}\r\n\r\n.customButtonRed {\r\n    background-color: var(--color-error);\r\n    & .customButtonText{\r\n        color: var(--color-secondary);\r\n    }\r\n}";
styleInject(css_248z$2);

const Button = ({
  text,
  icon = null,
  customClass = "customButtonColor1",
  action = () => null
}) => {
  return /*#__PURE__*/React__namespace.createElement("button", {
    className: "customButton " + customClass,
    onClick: action
  }, icon && icon, /*#__PURE__*/React__namespace.createElement("div", {
    className: "customButtonText"
  }, text));
};

const ClientDetails = ({
  data
}) => {
  const client = data && data.Customer ? data.Customer : {};
  const address = data && data.address ? data.address : [];
  const getFullAddress = () => {
    const {
      street,
      zipCode,
      city,
      country
    } = address;
    let fullAddress = "";
    if (street) fullAddress += street;
    if (zipCode) fullAddress += ` ${zipCode}`;
    if (city) fullAddress += `, ${city}`;
    if (country) fullAddress += `, ${country}`;
    return fullAddress.trim();
  };

  // Verificar si hay una dirección completa para pasar al componente MapLocation
  const fullAddress = getFullAddress();
  return /*#__PURE__*/React.createElement("div", {
    className: "client-details"
  }, /*#__PURE__*/React.createElement("div", {
    className: "client-details-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "client-details-header"
  }, "Cliente"), /*#__PURE__*/React.createElement("div", {
    className: "client-details-sub"
  }, client.fullname), /*#__PURE__*/React.createElement("div", {
    className: "client-details-sub"
  }, "0 pedidos")), /*#__PURE__*/React.createElement("div", {
    className: "client-details-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "client-details-header"
  }, "Informaci\xF3n de contacto"), /*#__PURE__*/React.createElement("div", {
    className: "client-details-sub"
  }, client.email), /*#__PURE__*/React.createElement("div", {
    className: "client-details-sub"
  }, client.phone)), /*#__PURE__*/React.createElement("div", {
    className: "client-details-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "client-details-header"
  }, "Direcci\xF3n de env\xEDo"), /*#__PURE__*/React.createElement("div", {
    className: "client-details-address"
  }, fullAddress && /*#__PURE__*/React.createElement(MapLocation, {
    address: fullAddress,
    height: "100px"
  }), /*#__PURE__*/React.createElement("div", {
    className: "client-details-address-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "client-details-address-name"
  }, address.name), /*#__PURE__*/React.createElement("div", {
    className: "client-details-header"
  }, client.fullname), /*#__PURE__*/React.createElement("div", {
    className: "client-details-third"
  }, fullAddress)))));
};

var css_248z$1 = "/* HEADER */\r\n\r\n.order-header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 0.7rem;\r\n    height: 25px;\r\n}\r\n\r\n.order-header-status{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.order-number{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.order-header-time{\r\n    text-align: end;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.order-header-2{\r\n    margin-top: 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.order-value{\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* PRODUCTS */\r\n\r\n.order-products {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    margin-top: 15px;\r\n\r\n    & .order-products-item {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 5px 10px 5px 5px;\r\n        border: var(--color-terciary-2) 1px solid;\r\n        border-radius: 8px;\r\n        height: 88px;\r\n\r\n\r\n        & .order-product-left {\r\n            display: flex;\r\n            flex-direction: row;\r\n            align-items: center;\r\n            gap: 15px;\r\n\r\n            & .order-product-image {\r\n                width: 70px;\r\n                height: 70px;\r\n                border-radius: 10px;\r\n                background-size: cover;\r\n                background-position: center; \r\n                background-repeat: no-repeat;\r\n            }\r\n\r\n            & .order-product-info {\r\n                & .order-product-name {\r\n                    color: var(--color-process);\r\n                    font-weight: 700;\r\n                    font-size: 14px;\r\n                    margin: 0;\r\n                }\r\n\r\n                & .order-product-ingredients {\r\n                    color: var(--color-terciary);\r\n                    font-size: 12px;\r\n                    font-weight: 500;\r\n                    margin: 0;\r\n                }\r\n\r\n                & .order-product-attributes {\r\n                    color: var(--color-terciary);\r\n                    font-size: 12px;\r\n                    font-weight: 500;\r\n                    margin: 0;\r\n                    font-style: italic;\r\n                }\r\n            }\r\n        }\r\n        & .order-product-total{\r\n            display: flex;\r\n            justify-content: space-between;\r\n            gap: 20px;\r\n        }\r\n\r\n        & .order-product-quantity{\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 5px;\r\n            color: var(--color-terciary);\r\n            font-size: 0.8rem;\r\n        }\r\n\r\n        & .order-product-price-container{\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 5px;\r\n            font-size: 0.8rem;\r\n            font-weight: bold;\r\n            text-align: end;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n/* CLIENT DETAILS */\r\n\r\n.client-details{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n\r\n    & .client-details-container{\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 5px;\r\n    }\r\n\r\n    & .client-details-header{\r\n        font-weight: bold;\r\n    }\r\n    \r\n    & .client-details-sub{\r\n        color: var(--color-process);\r\n    }\r\n\r\n    & .client-details-address{\r\n        display: flex;\r\n        gap: 5px;\r\n        border: 1px var(--color-terciary-2) solid;\r\n        border-radius: 5px;\r\n        padding: 5px;\r\n        height: 110px;\r\n    }\r\n\r\n    & .client-details-address-container{\r\n        width: 80%;\r\n    }\r\n}\r\n";
styleInject(css_248z$1);

const OrderInfo = ({
  data
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "order-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-header-status"
  }, /*#__PURE__*/React.createElement(StateLabel, {
    state: data.status
  }), /*#__PURE__*/React.createElement("div", {
    className: "order-number"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-label"
  }, "No. Pedido"), /*#__PURE__*/React.createElement("div", {
    className: "order-value"
  }, data?.number))), /*#__PURE__*/React.createElement("div", {
    className: "order-header-time"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-label"
  }, "Tiempo de preparaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    className: "order-value"
  }, "00:00:00"))), /*#__PURE__*/React.createElement("div", {
    className: "order-header-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-info-time"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-label"
  }, "Fecha del pedido"), /*#__PURE__*/React.createElement("div", {
    className: "order-value"
  }, parseDate(data?.createdAt))))));
};

const OrderNotes = ({
  data
}) => {
  const notes = data?.notes?.toString();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Notas")), /*#__PURE__*/React.createElement("div", null, notes === "" ? "Sin notas" : notes));
};

const OrderProducts = ({
  data
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "order-products"
  }, (data.products || []).length > 0 && (data.products || []).map((product, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "order-products-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-product-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-product-image",
    style: {
      backgroundImage: `url('${product?.images[0]}')`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "order-product-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-product-name"
  }, product?.name), /*#__PURE__*/React.createElement("div", {
    className: "order-product-ingredients"
  }, product?.description || "Sin atributos"))), /*#__PURE__*/React.createElement("div", {
    className: "order-product-total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-product-quantity"
  }, /*#__PURE__*/React.createElement("div", null, "x ", product?.quantity), /*#__PURE__*/React.createElement("div", null, "Descuento"), /*#__PURE__*/React.createElement("div", null, "Total")), /*#__PURE__*/React.createElement("div", {
    className: "order-product-price-container"
  }, /*#__PURE__*/React.createElement("div", null, product?.price, " \u20AC"), /*#__PURE__*/React.createElement("div", {
    className: "order-product-price"
  }, "0 \u20AC"), /*#__PURE__*/React.createElement("div", null, product?.price * product?.quantity, " \u20AC"))))));
};

const OrderResume = ({
  data
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Header-title"
  }, "No Factura"), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Header-value"
  }, data.number)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Header-title text-align-right"
  }, "Canal de venta"), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Header-value text-align-right"
  }, data.paymentMethod))), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-title"
  }, "Subtotal"), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-note"
  }, (data.products || []).length > 0 && data.products.length, " art\xEDculos"), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-value"
  }, data.total, " \u20AC")), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-title"
  }, "Descuento"), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-note"
  }), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-value"
  }, "0,00 \u20AC")), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Separator"
  }), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-Item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-title"
  }, "Total"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "invoiceResume-value"
  }, data.total, " \u20AC"))));
};

const OrderTimeline = ({
  data
}) => {
  console.log(data?.OrderLog);
  const orderLog = data?.OrderLog;
  function transformOrderLog(orderLog) {
    if (!orderLog || typeof orderLog !== "object") return [];
    const statusMap = {
      peding: "Productos añadidos al carrito",
      inPreparation: "Pedido en preparación",
      prepared: "Pedido preparado",
      inDelivery: "Pedido en reparto",
      delivered: "Pedido entregado",
      notDelivered: "Entrega fallida",
      returned: "Pedido devuelto",
      canceled: "Pedido cancelado",
      abandoned: "Pedido abandonado",
      reactivated: "Pedido reactivado",
      recoveryEmailSent: "Correo de recuperación enviado",
      paymentCompleted: "Pago completado",
      createdAt: "Pedido creado"
      /*updatedAt: "Pedido actualizado",*/
    };
    let events = Object.entries(orderLog).filter(([key, value]) => statusMap[key] && value) // Filtra valores no nulos
    .map(([key, value], index) => {
      const dateObj = new Date(value);
      const formattedDate = `${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, "0")} de ${dateObj.toLocaleString("es-ES", {
        month: "short"
      })}, ${dateObj.getFullYear()}`;
      return {
        id: index,
        name: statusMap[key],
        date: formattedDate,
        timestamp: dateObj.getTime() // Guarda la fecha en timestamp para ordenación
      };
    }).sort((a, b) => a.timestamp - b.timestamp) // Ordena por timestamp de menor a mayor
    .map(({
      id,
      name,
      date
    }) => ({
      id,
      name,
      date
    })); // Elimina el timestamp del resultado final

    return events;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "timeline-container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "timeline"
  }, orderLog && transformOrderLog(orderLog)?.map(timeline => /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: "circleRounded"
  }, /*#__PURE__*/React.createElement("div", {
    className: "circle"
  })), /*#__PURE__*/React.createElement("div", {
    className: "event"
  }, /*#__PURE__*/React.createElement("div", {
    className: "event-name"
  }, timeline.name), /*#__PURE__*/React.createElement("div", {
    className: "event-date"
  }, timeline.date))))));
};

var css_248z = ".datatable{\r\n    height: fit-content;\r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 20px;\r\n    & .adminPanel{\r\n        width: 100%;\r\n        flex-grow: 1;\r\n        align-self: stretch;\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-start;\r\n        align-items: center;\r\n    }\r\n}\r\n\r\n\r\n.headerDatatable{\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.sectionsDatatable{\r\n    width: 100%;\r\n    justify-content: flex-start;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    & div{\r\n        padding: 5px;\r\n    }\r\n}\r\n\r\n.selectedHorizontalMenu{\r\n  color: var(--color-primary);\r\n  font-weight: 700;\r\n  border-bottom: 2px var(--color-primary) solid;\r\n}\r\n\r\n.actionsDatatable{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: end;\r\n    gap: 5px;\r\n    padding: 10px;\r\n}\r\n\r\n.pagination{\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 30px;\r\n}\r\n\r\n.paginationDropdown{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    width: 100%;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\n\r\n.paginationText{\r\n    margin-top: 3px;\r\n}\r\n\r\n.paginationPages{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    gap: 10px;\r\n    align-items: center;\r\n    padding-right: 5px;\r\n}\r\n\r\n.pageBtn{\r\n    padding: 4px 9px;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    margin-left: 3px; \r\n    cursor: pointer;\r\n}\r\n\r\n.pageBtnActive{\r\n    border: 1px #0057FF solid;\r\n}\r\n\r\n.selectMaxRows{\r\n    margin: 0px 10px;\r\n}\r\n\r\n\r\n.rowTableMobile {\r\n    padding: 5px 10px;\r\n    line-height: 1.8;\r\n}\r\n\r\n.table-image{\r\n    width: 80px;\r\n    height: 50px;\r\n}\r\n\r\n.desktopDatatable {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    align-self: stretch;\r\n    height: 100%; /* Ensures the div fills the available height */\r\n  }\r\n  \r\n  .table-container {\r\n    display: flex;\r\n    height: 100%; /* Ensures the container takes up the full height of the parent */\r\n  }\r\n  \r\n  table {\r\n    color: rgba(32, 32, 32, 1);\r\n    width: 100%;\r\n    height: fit-content;\r\n    margin: 10px;\r\n    border-radius: 10px;\r\n    border: 1px #ebebeb solid;\r\n    border-collapse: unset!important;\r\n  }\r\n\r\n  thead{\r\n    display: flex;\r\n    height: 40px;\r\n    align-items: center;\r\n    border-bottom: 1px #ebebeb solid!important;\r\n  }\r\n\r\n  tbody{\r\n    display: block;\r\n    height: 100%; /* Ensures tbody takes up the full height of the table */\r\n  }\r\n\r\n  tbody td{\r\n    cursor: pointer;\r\n    height: 50px;\r\n  }\r\n  tbody td.checkboxtd {\r\n    cursor: default;\r\n}\r\n  \r\n  thead th, tbody td {\r\n    padding: 5px;\r\n    text-align: left;\r\n  }\r\n  \r\n  \r\n  tbody tr:nth-child(odd) {\r\n    background-color: #F5F5F5;\r\n  }\r\n  \r\n  thead tr, tbody tr {\r\n    display: table; /* Ensures tr display as table-row within tbody */\r\n    width: 100%;\r\n    table-layout: fixed; /* Ensures each row respects the table's fixed layout */\r\n  }\r\n\r\n  .rowSelected{\r\n    background-color: #e8e8e8!important;\r\n  }\r\n\r\n/****** MEDIA QUERIES *******/\r\n\r\n\r\n\r\n/* 1300px or less */\r\n@media (max-width: 1300px) {\r\n  .headerDatatable{\r\n        flex-wrap: wrap;\r\n  }\r\n}\r\n\r\n/* 992px or less */\r\n@media (max-width: 992px) {\r\n\r\n  \r\n}\r\n\r\n/* 750px or less */\r\n@media (max-width: 750px) {\r\n  \r\n  \r\n}\r\n\r\n/* 600px or less */\r\n@media (max-width: 600px) {\r\n\r\n}";
styleInject(css_248z);

const Pagination = ({
  configuration,
  maxRowsAvailable,
  handleMaxRows,
  handlePage
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "pagination"
  }, maxRowsAvailable && /*#__PURE__*/React.createElement("div", {
    className: "paginationDropdown"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paginationText"
  }, "Mostrar"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Select, {
    values: [{
      id: 0,
      name: "12"
    }, {
      id: 1,
      name: "24"
    }],
    callback: handleMaxRows
  })), /*#__PURE__*/React.createElement("div", {
    className: "paginationText"
  }, "por p\xE1gina")), /*#__PURE__*/React.createElement("div", {
    className: "paginationPages"
  }, configuration.pages?.map(p => {
    return /*#__PURE__*/React.createElement("div", {
      className: (configuration.indexStart + 12) / configuration.maxRows === p + 1 ? "pageBtn pageBtnActive" : "pageBtn",
      onClick: () => handlePage(p)
    }, p + 1);
  })));
};

const DatatableComponent = ({
  checkColumn = false,
  data = [],
  customHeaders = {},
  rows = [],
  selectedRows = [],
  customData = {},
  rowCallback = () => {},
  handleSelectRow = () => {}
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "desktopDatatable"
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/React.createElement("table", {
    cellSpacing: "0"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, checkColumn && /*#__PURE__*/React.createElement("th", {
    className: "text-align-center",
    style: {
      width: "50px"
    }
  }), data.length > 0 ? Object.keys(sortArrayByCustomOrder(customHeaders, data[0])).filter(field => field in customHeaders).map((field, index) => /*#__PURE__*/React.createElement("th", {
    key: index,
    className: "text-align-center"
  }, customHeaders[field])) : Object.values(customHeaders)?.map((value, index) => /*#__PURE__*/React.createElement("th", {
    key: index,
    className: "text-align-center"
  }, value)))), /*#__PURE__*/React.createElement("tbody", {
    id: "datatableTBody"
  }, rows.map((d, i) => /*#__PURE__*/React.createElement("tr", {
    key: d.id || i,
    className: selectedRows.includes(d.id) ? "rowSelected" : ""
  }, checkColumn && /*#__PURE__*/React.createElement("td", {
    className: "text-align-center",
    style: {
      width: "50px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "custom-checkbox",
    onChange: e => handleSelectRow(d.id, e.target.checked),
    checked: selectedRows.includes(d.id)
  })), Object.keys(sortArrayByCustomOrder(customHeaders, d)).filter(field => field in customHeaders).map((field, index) => /*#__PURE__*/React.createElement("td", {
    key: index,
    className: "text-align-center",
    onClick: typeof d[field] === "boolean" || d[field] === "PUBLISHED" || d[field] === "DRAFT" ? null : () => rowCallback(d)
  }, customData[field] ? customData[field](d[field], d) : d[field]))))))));
};

const Sections = ({
  sections,
  activeSection,
  handleSectionData
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "sectionsDatatable"
  }, sections && sections?.map((s, i) => {
    return s.text !== null && /*#__PURE__*/React.createElement("div", {
      className: i === activeSection ? "selectedHorizontalMenu" : "",
      onClick: () => handleSectionData(i, s.callback)
    }, s.text);
  }));
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function HiOutlineSearch (props) {
  return GenIcon({"attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},"child":[]}]})(props);
}

const Actions = ({
  checkColumn = false,
  activeSection = "",
  sections = {},
  handleCheckColumn = () => {},
  selectedRows = [],
  cloneCallback = () => {},
  deleteCallback = () => {}
}) => {
  const actions = [{
    id: "search",
    text: "Buscar",
    icon: /*#__PURE__*/React.createElement(HiOutlineSearch, null),
    callback: () => console.log("Buscar action")
  }, {
    id: "filter",
    text: "Filtrar",
    icon: /*#__PURE__*/React.createElement(HiOutlineSearch, null),
    callback: () => null
  }, {
    id: "order",
    text: "Ordenar",
    icon: /*#__PURE__*/React.createElement(HiOutlineSearch, null),
    callback: () => null
  }, {
    id: "select",
    text: "Seleccionar",
    icon: "",
    callback: handleCheckColumn
  }];
  const actionsWithSelected = [{
    id: "clone",
    text: "Duplicar",
    icon: /*#__PURE__*/React.createElement(HiOutlineSearch, null),
    callback: () => cloneCallback(selectedRows),
    customClass: "customButtonColor1"
  }, {
    id: "delete",
    text: "Eliminar",
    icon: /*#__PURE__*/React.createElement(HiOutlineSearch, null),
    callback: () => deleteCallback(selectedRows),
    customClass: "customButtonColor1"
  }, {
    id: "cancel",
    text: "Cancelar",
    icon: "",
    callback: handleCheckColumn,
    customClass: "customButtonColor2"
  }];
  const availableActions = () => {
    return sections?.[activeSection]?.actions ? actions.filter(f => sections[activeSection].actions.includes(f.id)) : [];
  };
  const availableActionsWithSelected = () => {
    return sections?.[activeSection]?.actionsWithSelect ? actionsWithSelected.filter(f => sections[activeSection].actionsWithSelect.includes(f.id)) : [];
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "actionsDatatable"
  }, activeSection && checkColumn ? availableActionsWithSelected().map((a, i) => /*#__PURE__*/React.createElement(Button, {
    key: i,
    text: a.text,
    icon: a.icon,
    action: a.callback,
    customClass: a.customClass || ""
  })) : availableActions().map((a, i) => /*#__PURE__*/React.createElement(Button, {
    key: i,
    text: a.text,
    icon: a.icon,
    action: a.callback
  })));
};

const Datatable = ({
  title = "",
  subtitle = "",
  data,
  customHeaders = {
    name: "Nombre",
    description: "Descripción"
  },
  customData,
  sections = [{
    text: null,
    callback: () => null,
    actions: ["search"],
    actionsWithSelect: []
  }],
  identificator = "default",
  rowCallback = () => null,
  deleteCallback = () => null,
  cloneCallback = () => null,
  handleCheckColumn = () => null,
  handleSelectedRows = () => null,
  checkColumn,
  checkedRows
}) => {
  console.log("==== ( Datatable ) ====");
  console.log(data);
  const [selectedRows, setSelectedRows] = React.useState(checkedRows && checkedRows.length > 0 ? checkedRows : []);
  const [rows, setRows] = React.useState([]);
  const [activeSection, setActiveSection] = React.useState(0);
  const [configuration, updateConfiguration] = React.useState({
    maxRows: 12,
    indexStart: 0,
    pages: [0],
    filterBy: {
      section: "",
      filter: []
    }
  });
  const handleMaxRows = value => {
    updateDatatableConfiguration({
      ...configuration,
      maxRows: value
    });
  };
  const handlePage = page => {
    updateDatatableConfiguration({
      ...configuration,
      indexStart: page * configuration.maxRows
    });
  };
  const updateDatatableConfiguration = config => {
    updateConfiguration(config);
  };
  const handleSectionData = (section, callback) => {
    setActiveSection(section);
    callback();
  };
  const handleSelectRow = (id, isChecked) => {
    let updatedSelectedRows;
    setSelectedRows(prevSelectedRows => {
      if (isChecked) {
        // Añadir el id a la lista si está marcado
        updatedSelectedRows = [...prevSelectedRows, id];
      } else {
        // Eliminar el id de la lista si está desmarcado
        updatedSelectedRows = prevSelectedRows?.filter(rowId => rowId !== id);
      }
      handleSelectedRows(updatedSelectedRows);
      return updatedSelectedRows;
    });
  };
  React.useEffect(() => {
    const maxRowsInteger = parseInt(configuration.maxRows);
    let dataUpdated = data;
    //Filter
    const filtersActive = configuration?.filterBy?.filter?.filter(f => f.value !== "");
    if (filtersActive && filtersActive.length > 0) {
      filtersActive?.map(filter => {
        dataUpdated = dataUpdated?.filter(f => f[filter.columns] === filter.value);
      });
    }

    //Pagination
    dataUpdated = dataUpdated?.filter((f, index) => index > configuration.indexStart - 1 && index < configuration.indexStart + maxRowsInteger);
    var tbody = document.getElementById("datatableTBody");
    tbody.scrollTop = 0;
    setRows(dataUpdated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configuration]);
  React.useEffect(() => {
    const maxRowsInteger = parseInt(configuration.maxRows);
    data && updateDatatableConfiguration({
      ...configuration,
      pages: Array.from(Array(parseInt(data.length / maxRowsInteger) + 1).keys())
    });
    data && setRows(data?.filter((f, index) => index > configuration.indexStart && index < configuration.indexStart + maxRowsInteger));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return /*#__PURE__*/React.createElement("div", {
    className: "datatable"
  }, title !== "" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inputLabel"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "inputDescription"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "adminPanel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "headerDatatable"
  }, /*#__PURE__*/React.createElement(Sections, {
    sections: sections,
    activeSection: activeSection,
    handleSectionData: handleSectionData
  }), /*#__PURE__*/React.createElement(Actions, {
    checkColumn: checkColumn,
    activeSection: activeSection,
    sections: sections,
    handleCheckColumn: handleCheckColumn,
    selectedRows: selectedRows,
    cloneCallback: cloneCallback,
    deleteCallback: deleteCallback
  })), /*#__PURE__*/React.createElement(DatatableComponent, {
    checkColumn: checkColumn,
    data: data,
    customHeaders: customHeaders,
    rows: rows,
    selectedRows: selectedRows,
    customData: customData,
    rowCallback: rowCallback,
    handleSelectRow: handleSelectRow
  })), /*#__PURE__*/React.createElement(Pagination, {
    configuration: configuration,
    maxRowsAvailable: false,
    handleMaxRows: handleMaxRows,
    handlePage: handlePage
  }));
};

exports.Button = Button;
exports.ClientDetails = ClientDetails;
exports.Datatable = Datatable;
exports.MAPS_API_KEY = MAPS_API_KEY;
exports.MapLocation = MapLocation;
exports.OrderInfo = OrderInfo;
exports.OrderNotes = OrderNotes;
exports.OrderProducts = OrderProducts;
exports.OrderResume = OrderResume;
exports.OrderTimeline = OrderTimeline;
exports.Select = Select;
exports.StateLabel = StateLabel;
exports.addIdKeyIfMissing = addIdKeyIfMissing;
exports.checkUserAgent = checkUserAgent;
exports.generateCode = generateCode;
exports.getRequiredKeys = getRequiredKeys;
exports.getTodayDate = getTodayDate;
exports.parseDate = parseDate;
exports.parseDateAndHourToISO = parseDateAndHourToISO;
exports.sortArrayByCustomOrder = sortArrayByCustomOrder;
exports.stylesheet = stylesheet;
