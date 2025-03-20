import React, { useState, useEffect } from 'react';

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

var css_248z$b = "@font-face {\r\n  font-family: 'DMSans';\r\n  src: local('DM Sans'), url(./fonts/DMSans/DMSans-Regular.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'DMSans-SemiBold';\r\n  src: local('DM Sans SemiBold'), url(./fonts/DMSans/DMSans-SemiBold.ttf) format('truetype');\r\n}\r\n\r\n\r\n\r\n:root {\r\n  --color-primary: #000;\r\n  --color-primary-background: #ece9e4;\r\n  --color-primary-shadow: rgba(182, 182, 182, 0.2);\r\n  --color-secondary: #fff;\r\n  --color-secondary-background: #fefcfa;\r\n  --color-terciary: #979796;\r\n  --color-terciary-2: lightgrey;\r\n  --color-terciary-3: grey;\r\n  --color-success: #00C76C;\r\n  --color-success-background: rgb(0, 199, 108, 0.2);\r\n  --color-pending: #EB9E1A;\r\n  --color-pending-background: rgb(235, 158, 26, 0.2);\r\n  --color-error: #FF5757;\r\n  --color-error-background: rgb(255, 87, 87, 0.2);\r\n  --color-process: #0057FF;\r\n  --color-process-background: rgb(0, 87, 255, 0.2);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-family: 'DMSans';\r\n  font-size: 0.8rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--color-terciary);\r\n}\r\n\r\nhr{\r\n  border-top: 3px solid var(--color-primary-background);\r\n}\r\n\r\ntextarea:focus, input:focus{\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"password\"]{\r\n  box-sizing: unset!important;\r\n  line-height: unset!important;\r\n  padding-left: 5px;\r\n}\r\n\r\ninput[type=\"text\"]:disabled{background-color:transparent; cursor:not-allowed;}\r\n\r\nbutton {\r\n  cursor: pointer!important;\r\n  height: 30px;\r\n}\r\ninput{\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.color-blue{\r\n  color: var(--color-process);\r\n}\r\n\r\n.MuiButtonBase-root{\r\n  color: var(--color-process)!important;\r\n}\r\n\r\n\r\n\r\n/****** CUSTOM BUTTONS ********/\r\n\r\n\r\n.button-1{\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px var(--color-secondary) solid;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.button-2{\r\n  border-radius: 5px;\r\n  background-color: var(--color-secondary);\r\n  border: 1px var(--color-terciary-2) solid;\r\n  cursor: pointer;\r\n  height: 27px;\r\n  width: fit-content;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n/*********************************/\r\n\r\n.adminPanel{\r\n  background: var(--color-secondary);\r\n  border: 1px solid var(--color-primary-background);\r\n  border-radius: 12px;\r\n  height: 100%;\r\n  width: auto;\r\n  padding: 15px;\r\n}\r\n\r\n.background-image {\r\n  background-color: var(--color-primary-background);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.loginArea{\r\n  background-color: var(--color-primary-background);\r\n}\r\n\r\n.flex{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.flex-gap{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.flex-start{\r\n  display: inline-flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.flex-end{\r\n  display: inline-flex;\r\n  justify-content: flex-end;\r\n  padding: 4px;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n}\r\n\r\n.w33{\r\n  width: 33%;\r\n}\r\n\r\n.w50{\r\n  width: 50%;\r\n}\r\n\r\n.w100{\r\n  width: 100%;\r\n}\r\n\r\n.h-100{\r\n  height: 100%;\r\n}\r\n\r\n.p-2{\r\n  padding: 2%;\r\n}\r\n\r\n.text-align-right{\r\n  text-align: right;\r\n}\r\n\r\n.text-align-left{\r\n  text-align: left;\r\n}\r\n\r\n.text-align-center{\r\n  text-align: center;\r\n}\r\n\r\n.text-overflow {\r\n  display: inline-block; /* O también block, según el diseño */\r\n  width: 100%; /* Ajusta el ancho según necesites */\r\n  white-space: nowrap; /* Evita que el texto haga saltos de línea */\r\n  overflow: hidden; /* Oculta el texto que no cabe en el contenedor */\r\n  text-overflow: ellipsis; /* Muestra \"...\" cuando el texto es muy largo */\r\n}\r\n\r\n.fixIconButton{\r\n  padding: 4px 0px 4px 4px!important;\r\n  min-width: auto!important;\r\n}\r\n\r\n.buttonNoBorder{\r\n  border: 0px!important;\r\n}\r\n\r\n\r\n.ellipsis {\r\n  white-space: nowrap; /* Evita que el texto se divida en varias líneas */\r\n  overflow: hidden; /* Oculta el texto que sobresale */\r\n  text-overflow: ellipsis; /* Muestra los puntos suspensivos (...) */\r\n  width: 75px; /* Ajusta el ancho según tus necesidades */\r\n}\r\n\r\n/************ CHECKBOX ************/\r\n.custom-checkbox {\r\n  /* Ocultar el diseño por defecto */\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  /* Dimensiones */\r\n  width: 24px;\r\n  height: 24px;\r\n\r\n  /* Estilo base */\r\n  border: 2px solid var(--color-primary-background); /* Azul oscuro */\r\n  border-radius: 4px;\r\n  background-color: var(--color-secondary);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n\r\n  /* Efecto al pasar el ratón */\r\n  transition: background-color 0.2s ease, border-color 0.2s ease;\r\n}\r\n\r\n.custom-checkbox:hover {\r\n  border-color: var(--color-process); /* Azul más oscuro */\r\n}\r\n\r\n.custom-checkbox:checked {\r\n  background-color: var(--color-process); /* Azul */\r\n  border-color: var(--color-process);\r\n\r\n  /* Añadir el check */\r\n  position: relative;\r\n}\r\n\r\n.custom-checkbox:checked::after {\r\n  content: \"\";\r\n  display: block;\r\n\r\n  /* Checkmark blanco */\r\n  width: 10px;\r\n  height: 5px;\r\n  border: solid var(--color-secondary);\r\n  border-width: 0 0 2px 2px;\r\n  transform: rotate(-45deg);\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n}\r\n\r\n\r\n\r\n/************ TOOLBAR ************/\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n  margin: 2px;\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--color-primary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n/**********************************/\r\n\r\n\r\n\r\n\r\n/****** MEDIA QUERIES *******/\r\n\r\n\r\n\r\n/* 1300px or less */\r\n@media (max-width: 1300px) {\r\n\r\n}\r\n\r\n/* 992px or less */\r\n@media (max-width: 992px) {\r\n\r\n  \r\n}\r\n\r\n/* 750px or less */\r\n@media (max-width: 750px) {\r\n  \r\n  \r\n}\r\n\r\n/* 600px or less */\r\n@media (max-width: 600px) {\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
var stylesheet="@font-face {\r\n  font-family: 'DMSans';\r\n  src: local('DM Sans'), url(./fonts/DMSans/DMSans-Regular.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'DMSans-SemiBold';\r\n  src: local('DM Sans SemiBold'), url(./fonts/DMSans/DMSans-SemiBold.ttf) format('truetype');\r\n}\r\n\r\n\r\n\r\n:root {\r\n  --color-primary: #000;\r\n  --color-primary-background: #ece9e4;\r\n  --color-primary-shadow: rgba(182, 182, 182, 0.2);\r\n  --color-secondary: #fff;\r\n  --color-secondary-background: #fefcfa;\r\n  --color-terciary: #979796;\r\n  --color-terciary-2: lightgrey;\r\n  --color-terciary-3: grey;\r\n  --color-success: #00C76C;\r\n  --color-success-background: rgb(0, 199, 108, 0.2);\r\n  --color-pending: #EB9E1A;\r\n  --color-pending-background: rgb(235, 158, 26, 0.2);\r\n  --color-error: #FF5757;\r\n  --color-error-background: rgb(255, 87, 87, 0.2);\r\n  --color-process: #0057FF;\r\n  --color-process-background: rgb(0, 87, 255, 0.2);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-family: 'DMSans';\r\n  font-size: 0.8rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--color-terciary);\r\n}\r\n\r\nhr{\r\n  border-top: 3px solid var(--color-primary-background);\r\n}\r\n\r\ntextarea:focus, input:focus{\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"password\"]{\r\n  box-sizing: unset!important;\r\n  line-height: unset!important;\r\n  padding-left: 5px;\r\n}\r\n\r\ninput[type=\"text\"]:disabled{background-color:transparent; cursor:not-allowed;}\r\n\r\nbutton {\r\n  cursor: pointer!important;\r\n  height: 30px;\r\n}\r\ninput{\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.color-blue{\r\n  color: var(--color-process);\r\n}\r\n\r\n.MuiButtonBase-root{\r\n  color: var(--color-process)!important;\r\n}\r\n\r\n\r\n\r\n/****** CUSTOM BUTTONS ********/\r\n\r\n\r\n.button-1{\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px var(--color-secondary) solid;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.button-2{\r\n  border-radius: 5px;\r\n  background-color: var(--color-secondary);\r\n  border: 1px var(--color-terciary-2) solid;\r\n  cursor: pointer;\r\n  height: 27px;\r\n  width: fit-content;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n/*********************************/\r\n\r\n.adminPanel{\r\n  background: var(--color-secondary);\r\n  border: 1px solid var(--color-primary-background);\r\n  border-radius: 12px;\r\n  height: 100%;\r\n  width: auto;\r\n  padding: 15px;\r\n}\r\n\r\n.background-image {\r\n  background-color: var(--color-primary-background);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.loginArea{\r\n  background-color: var(--color-primary-background);\r\n}\r\n\r\n.flex{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.flex-gap{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.flex-start{\r\n  display: inline-flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.flex-end{\r\n  display: inline-flex;\r\n  justify-content: flex-end;\r\n  padding: 4px;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n}\r\n\r\n.w33{\r\n  width: 33%;\r\n}\r\n\r\n.w50{\r\n  width: 50%;\r\n}\r\n\r\n.w100{\r\n  width: 100%;\r\n}\r\n\r\n.h-100{\r\n  height: 100%;\r\n}\r\n\r\n.p-2{\r\n  padding: 2%;\r\n}\r\n\r\n.text-align-right{\r\n  text-align: right;\r\n}\r\n\r\n.text-align-left{\r\n  text-align: left;\r\n}\r\n\r\n.text-align-center{\r\n  text-align: center;\r\n}\r\n\r\n.text-overflow {\r\n  display: inline-block; /* O también block, según el diseño */\r\n  width: 100%; /* Ajusta el ancho según necesites */\r\n  white-space: nowrap; /* Evita que el texto haga saltos de línea */\r\n  overflow: hidden; /* Oculta el texto que no cabe en el contenedor */\r\n  text-overflow: ellipsis; /* Muestra \"...\" cuando el texto es muy largo */\r\n}\r\n\r\n.fixIconButton{\r\n  padding: 4px 0px 4px 4px!important;\r\n  min-width: auto!important;\r\n}\r\n\r\n.buttonNoBorder{\r\n  border: 0px!important;\r\n}\r\n\r\n\r\n.ellipsis {\r\n  white-space: nowrap; /* Evita que el texto se divida en varias líneas */\r\n  overflow: hidden; /* Oculta el texto que sobresale */\r\n  text-overflow: ellipsis; /* Muestra los puntos suspensivos (...) */\r\n  width: 75px; /* Ajusta el ancho según tus necesidades */\r\n}\r\n\r\n/************ CHECKBOX ************/\r\n.custom-checkbox {\r\n  /* Ocultar el diseño por defecto */\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  /* Dimensiones */\r\n  width: 24px;\r\n  height: 24px;\r\n\r\n  /* Estilo base */\r\n  border: 2px solid var(--color-primary-background); /* Azul oscuro */\r\n  border-radius: 4px;\r\n  background-color: var(--color-secondary);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n\r\n  /* Efecto al pasar el ratón */\r\n  transition: background-color 0.2s ease, border-color 0.2s ease;\r\n}\r\n\r\n.custom-checkbox:hover {\r\n  border-color: var(--color-process); /* Azul más oscuro */\r\n}\r\n\r\n.custom-checkbox:checked {\r\n  background-color: var(--color-process); /* Azul */\r\n  border-color: var(--color-process);\r\n\r\n  /* Añadir el check */\r\n  position: relative;\r\n}\r\n\r\n.custom-checkbox:checked::after {\r\n  content: \"\";\r\n  display: block;\r\n\r\n  /* Checkmark blanco */\r\n  width: 10px;\r\n  height: 5px;\r\n  border: solid var(--color-secondary);\r\n  border-width: 0 0 2px 2px;\r\n  transform: rotate(-45deg);\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n}\r\n\r\n\r\n\r\n/************ TOOLBAR ************/\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n  margin: 2px;\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--color-primary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n/**********************************/\r\n\r\n\r\n\r\n\r\n/****** MEDIA QUERIES *******/\r\n\r\n\r\n\r\n/* 1300px or less */\r\n@media (max-width: 1300px) {\r\n\r\n}\r\n\r\n/* 992px or less */\r\n@media (max-width: 992px) {\r\n\r\n  \r\n}\r\n\r\n/* 750px or less */\r\n@media (max-width: 750px) {\r\n  \r\n  \r\n}\r\n\r\n/* 600px or less */\r\n@media (max-width: 600px) {\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
styleInject(css_248z$b);

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
const handleImage = (e, uniqueClassLabel) => {
  const label = e.target.parentElement;
  const file = e.target.files[0];
  console.log("=== handleImage ===");
  console.log(e);
  console.log(label);
  console.log(uniqueClassLabel);
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      // Establece la imagen como fondo del label
      label.style.color = "white"; // Cambia el color del texto si es necesario
      const elements = document.getElementsByClassName(uniqueClassLabel);
      console.log(elements);
      if (elements.length > 0) {
        elements[0].style.backgroundImage = `url(${e.target.result})`;
      }
    };
    reader.readAsDataURL(file); // Leer el archivo original como una URL base64
  }
};
const getFullAddress = address => {
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

var css_248z$a = ".state-label {\r\n    padding: 2px 10px;\r\n    font-size: 0.75rem;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    width: 125px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.state-pending {\r\n    color: var(--color-pending);\r\n    background-color: var(--color-pending-background);\r\n}\r\n\r\n\r\n.state-prepared {\r\n    color: var(--color-success);\r\n    background-color: var(--color-success-background);\r\n}\r\n\r\n.state-pending {\r\n    color: var(--color-pending);\r\n    background-color: var(--color-pending-background);\r\n}\r\n\r\n.state-canceled{\r\n    color: var(--color-error);\r\n    background-color: var(--color-error-background);\r\n}\r\n\r\n.state-process{\r\n    color: var(--color-process);\r\n    background-color: var(--color-process-background);\r\n}";
styleInject(css_248z$a);

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
      case "active":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-prepared"
        }, "Activo");
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
      case "inactive":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-canceled"
        }, "Inactivo");
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
  const [loc, setLoc] = useState({
    lat,
    lon,
    address
  });
  const [error, setError] = useState(null);
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
  useEffect(() => {
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

var css_248z$9 = ".selectContainer{\r\n  gap: 3px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  & .customSelect{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.customSelect{\r\n  height: 30px;\r\n  width: fit-content;\r\n  font-size: 0.7rem!important;\r\n  padding: 0 5px;\r\n  background-color: white;\r\n  border: 1px var(--color-terciary-2) solid;\r\n  border-radius: 5px;\r\n  & fieldset{\r\n    display: none;\r\n  }\r\n}\r\n\r\n.customSelectName{\r\n  margin-right: 10px;\r\n}\r\n\r\n.customSelectNameDropdown{\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: white;\r\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n}\r\n\r\n.dropdownSelect{\r\n    position: absolute;\r\n    background-color: white;\r\n    padding: 5px;\r\n    width: 141px;\r\n    border: 1px rgb(233 233 233) solid;\r\n    border-radius: 5px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.selectOption{\r\n    cursor:pointer;\r\n}\r\n\r\n.slide-bottom {\r\n\t-webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n\t        animation: slide-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\n @-webkit-keyframes slide-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(5px);\r\n              transform: translateY(5px);\r\n    }\r\n  }\r\n  @keyframes slide-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(5px);\r\n              transform: translateY(5px);\r\n    }\r\n  }\r\n  \r\n  ";
styleInject(css_248z$9);

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
  const [selected, setSelected] = useState(value ?? (Array.isArray(values) && values.length > 0 ? values[0].id : ""));
  const [visibility, changeVisibility] = useState(false);
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

var css_248z$8 = ".customButton {\r\n  background-color: var(--color-secondary);\r\n  border: 1px var(--color-terciary-2) solid;\r\n  font-size: 0.7rem;\r\n  padding: 0 12px;\r\n  border: 1px var(--color-terciary-2) solid;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  box-shadow: none;\r\n  text-transform: none;\r\n  align-items: center;\r\n  & svg {\r\n    padding-right: 5px;\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n\r\n.customButtonColor1 {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  & svg {\r\n    color: var(--color-primary);\r\n  }\r\n}\r\n\r\n.customButtonColor2 {\r\n  background-color: var(--color-primary);\r\n  & .customButtonText {\r\n    color: var(--color-secondary);\r\n  }\r\n  & svg {\r\n    color: var(--color-secondary);\r\n  }\r\n}\r\n\r\n.customButtonText {\r\n  margin-top: 1px;\r\n  color: var(--color-primary);\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n}\r\n\r\n.customButtonDisabled {\r\n  background-color: var(--color-terciary-2);\r\n  height: 25px;\r\n  & .customButtonText {\r\n    color: var(--color-terciary-3);\r\n    padding: 5px 20px;\r\n  }\r\n}\r\n\r\n.customButtonSuccess {\r\n  background-color: var(--color-success);\r\n  height: 25px;\r\n\r\n  & .customButtonText {\r\n    color: var(--color-secondary);\r\n    padding: 5px 20px;\r\n  }\r\n}\r\n\r\n.customButtonDanger {\r\n  background-color: var(--color-error);\r\n  & .customButtonText {\r\n    color: var(--color-secondary);\r\n  }\r\n}\r\n\r\n.justify-center{\r\n    justify-content: center;\r\n}\r\n";
styleInject(css_248z$8);

const Button = ({
  text,
  icon = null,
  customClass = "customButtonColor1",
  action = () => null
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: `customButton ${customClass} ${!icon && "justify-center"}`,
    onClick: action
  }, icon && icon, /*#__PURE__*/React.createElement("div", {
    className: "customButtonText"
  }, text));
};

var css_248z$7 = ".input-container{\r\n    display: flex;\r\n    align-items: center;\r\n    & input{\r\n        height: 30px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.inputType2Container{\r\n    gap: 3px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.inputLabel{\r\n    font-size: 0.7rem;\r\n    height: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.inputDescription{\r\n    font-size: 0.6rem;\r\n    color: grey;\r\n}\r\n\r\n.inputType2{\r\n    background-color: white;\r\n    border: 1px lightgrey solid;\r\n    border-radius: 5px;\r\n    height: 25px;\r\n}\r\n\r\ninput[type=\"date\"] {\r\n    background-color: white;\r\n    border: 1px lightgrey solid;\r\n    border-radius: 5px;\r\n    height: 30px;\r\n}\r\n\r\n.validationFail{\r\n    border: 1px darkred solid;\r\n}\r\n\r\n.validationFailMessage{\r\n    font-size: 0.6rem;\r\n    color: darkred;\r\n}\r\n\r\n.inputRight{\r\n    margin-left: -20px;\r\n    color: var(--color-terciary-3);\r\n}\r\n\r\n\r\n/*   SUGGESTIONS   */\r\n.suggestContainer{\r\n    background-color: white;\r\n    margin-top: 3px;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    position: absolute;\r\n    width: 200px;\r\n    border: 1px lightgrey solid;\r\n}\r\n\r\n.suggest{\r\n    cursor: pointer;\r\n    padding: 5px;\r\n}\r\n\r\n.suggest:hover {\r\n    background-color: rgb(239, 239, 239);\r\n}\r\n\r\n.suggest-name{\r\n    font-weight: bold;\r\n}\r\n\r\n.suggest-info{\r\n    font-size: 0.7rem;\r\n}";
styleInject(css_248z$7);

const Input = ({
  id,
  placeholder,
  type = "text",
  icon = null,
  iconType = null,
  classname = "",
  iconPositionRight = true,
  label = "",
  description = "",
  defaultValue = "",
  disabled = false,
  validation = null,
  onChange = () => null,
  onWritting = () => null,
  suggestions = [],
  suggestionsCallback = () => null
}) => {
  const [inputType, setInputType] = useState(type);
  const [validationControl, setValidationControl] = useState(true);
  const handleIcon = () => {
    if (iconType === "tooglePasswordVisibility") {
      inputType === "text" ? setInputType("password") : setInputType("text");
    }
  };
  const classIcon = iconPositionRight ? " inputRight " : " iconLeft ";
  const iconAction = iconType === null ? "" : " actionIcon ";
  const inputSpaceAtStart = iconPositionRight ? "" : " inputSpaceAtStart ";
  const handleValidation = e => {
    let isValid = true;
    const value = e.target.value;
    if (validation === "email") {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(value)) isValid = false;
    }
    if (validation === "dni" || validation === "nif") {
      const pattern = /^([XYZ]?)(\d{7,8})([A-Za-z])$/;
      if (!pattern.test(value)) isValid = false;
    }
    if (validation === "telefono") {
      const pattern = /^(\+34|0034)?[6789]\d{8}$/;
      if (!pattern.test(value)) isValid = false;
    }
    if (validation === "url") {
      const pattern = /^[A-Za-z]+$/;
      if (!pattern.test(value)) isValid = false;
    }
    if (validation === "number") {
      const pattern = /^\d+$/;
      if (!pattern.test(value)) isValid = false;
    }
    if (isValid) {
      onChange(value);
      setValidationControl(true);
    } else setValidationControl(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "inputType2Container"
  }, label !== "" && /*#__PURE__*/React.createElement("div", {
    className: "inputLabel"
  }, label), description !== "" && /*#__PURE__*/React.createElement("div", {
    className: "inputDescription"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: inputType,
    placeholder: placeholder,
    className: `inputType2 ${classname + inputSpaceAtStart} ${!validationControl && "validationFail"} `,
    onBlur: handleValidation,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: e => onWritting(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: classIcon + iconAction,
    onClick: handleIcon
  }, icon)), !validationControl && /*#__PURE__*/React.createElement("div", {
    className: "validationFailMessage"
  }, "El valor introducido no es v\xE1lido.")), suggestions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "suggestContainer"
  }, suggestions?.map(suggest => /*#__PURE__*/React.createElement("div", {
    className: "suggest",
    onClick: () => suggestionsCallback(suggest)
  }, /*#__PURE__*/React.createElement("div", {
    className: "suggest-name"
  }, suggest?.fullname || ""), /*#__PURE__*/React.createElement("div", {
    className: "suggest-info"
  }, suggest?.phone || "")))));
};

var css_248z$6 = ".inputType2Container{\r\n    gap: 3px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.inputLabel{\r\n    font-size: 0.7rem;\r\n    height: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.inputDescription{\r\n    font-size: 0.6rem;\r\n    color: grey;\r\n}\r\n\r\n.customTextarea{\r\n    background-color: white;\r\n    border: 1px lightgrey solid;\r\n    border-radius: 5px;\r\n    height: 50px;\r\n}";
styleInject(css_248z$6);

const Textarea = ({
  id,
  placeholder,
  classname = "",
  label,
  description,
  onChange = () => null
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "inputType2Container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inputLabel"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "inputDescription"
  }, description), /*#__PURE__*/React.createElement("textarea", {
    id: id,
    className: "customTextarea " + classname,
    onChange: onChange
  }, placeholder));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function autoconfigureTextDirection(el) {
    if (el) {
        var text = el.textContent;
        var rtlPattern = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
        el.style.direction = text && rtlPattern.test(text[0]) ? 'rtl' : 'ltr';
    }
}
function cls() {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return classNames.filter(Boolean).join(' ');
}
function getSelectedNode() {
    if (document.selection) {
        return document.selection.createRange().parentElement();
    }
    var selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        return selection.getRangeAt(0).startContainer.parentNode || undefined;
    }
    return undefined;
}
function normalizeHtml(str) {
    return str
        ? str.replace(/&nbsp;|\u202F|\u00A0/g, ' ').replace(/<br \/>/g, '<br>')
        : '';
}
function replaceCaret(el) {
    // Place the caret at the end of the element
    var target = document.createTextNode('');
    el.appendChild(target);
    // do not move caret if element was not focused
    var isTargetFocused = document.activeElement === el;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
        var sel = window.getSelection();
        if (sel !== null) {
            var range = document.createRange();
            range.setStart(target, target.nodeValue.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
        if (el instanceof HTMLElement)
            el.focus();
    }
}
function setForwardRef(el, ref) {
    if (typeof ref === 'function') {
        ref(el);
    }
    else if (typeof ref === 'object' && ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = el;
    }
}

/**
 * Based on https://github.com/lovasoa/react-contenteditable
 * A simple component for a html element with editable contents.
 */
var ContentEditable = React.memo(React.forwardRef(function ContentEditable(_a, ref) {
    var 
    // Some properties are used here only as useMemo dependencies
    className = _a.className, disabled = _a.disabled, tagName = _a.tagName, _b = _a.value, value = _b === void 0 ? '' : _b, placeholder = _a.placeholder, rest = __rest(_a, ["className", "disabled", "tagName", "value", "placeholder"]);
    var elRef = React.useRef();
    var htmlRef = React.useRef(value);
    var restRef = React.useRef(rest);
    React.useEffect(function () {
        restRef.current = rest;
        var el = elRef.current;
        if (el && normalizeHtml(htmlRef.current) !== normalizeHtml(value)) {
            htmlRef.current = value;
            el.innerHTML = value;
            replaceCaret(el);
        }
    });
    return React.useMemo(function () {
        function onSetRef($el) {
            elRef.current = $el;
            autoconfigureTextDirection($el);
            setForwardRef($el, ref);
        }
        function onChange(event) {
            var _a, _b;
            var el = elRef.current;
            if (!el) {
                return;
            }
            var elementHtml = el.innerHTML;
            if (elementHtml !== htmlRef.current) {
                (_b = (_a = restRef.current).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, __assign(__assign({}, event), { target: {
                        value: elementHtml,
                        name: rest.name,
                    } }));
            }
            autoconfigureTextDirection(el);
            htmlRef.current = elementHtml;
        }
        var cssClass = cls('rsw-ce', className);
        return React.createElement(tagName || 'div', __assign(__assign({}, rest), { className: cssClass, contentEditable: !disabled, dangerouslySetInnerHTML: { __html: value }, onBlur: function (e) {
                return (restRef.current.onBlur || onChange)(e);
            }, onInput: onChange, onKeyDown: function (e) {
                return (restRef.current.onKeyDown || onChange)(e);
            }, onKeyUp: function (e) {
                return (restRef.current.onKeyUp || onChange)(e);
            }, placeholder: placeholder, ref: onSetRef }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [className, disabled, placeholder, tagName]);
}));

var EditorContext = React.createContext(undefined);
function EditorProvider(_a) {
    var children = _a.children;
    var _b = React.useState({
        htmlMode: false,
        update: update,
    }), state = _b[0], setState = _b[1];
    function update(attrs) {
        setState(function (prevState) {
            return __assign(__assign({}, prevState), attrs);
        });
    }
    return (React.createElement(EditorContext.Provider, { value: state }, children));
}
function useEditorState() {
    var context = React.useContext(EditorContext);
    if (!context) {
        throw new Error('You should wrap your component by EditorProvider');
    }
    return context;
}

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=true===r.prepend?"prepend":"append",d=true===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".rsw-editor{border:1px solid #ddd;border-radius:.375rem;display:flex;flex-direction:column;min-height:100px;overflow:hidden}.rsw-ce{flex:1 0 auto;padding:.5rem}.rsw-ce:focus{outline:1px solid #668}.rsw-ce[contentEditable=true]:empty:not(:focus):before{color:grey;content:attr(placeholder);pointer-events:none}.rsw-html{background:transparent;border:none;font-family:monospace,Courier New}.rsw-separator{align-self:stretch;border-right:1px solid #ddd;display:flex;margin:0 3px}.rsw-dd{box-sizing:border-box;outline:none}.rsw-btn{background:transparent;border:0;color:#222;cursor:pointer;font-size:1em;height:2em;outline:none;padding:0;width:2em}.rsw-btn:hover{background:#eaeaea}.rsw-btn[data-active=true]{background:#e0e0e0}.rsw-toolbar{align-items:center;background-color:#f5f5f5;border-bottom:1px solid #ddd;display:flex}";
n(css,{});

var Editor = React.forwardRef(function Editor(_a, ref) {
    var autoFocus = _a.autoFocus, children = _a.children, containerProps = _a.containerProps, onSelect = _a.onSelect, rest = __rest(_a, ["autoFocus", "children", "containerProps", "onSelect"]);
    var editorState = useEditorState();
    React.useEffect(function () {
        document.addEventListener('click', onClickOutside);
        return function () { return document.removeEventListener('click', onClickOutside); };
    });
    function onClickOutside(event) {
        var _a;
        if (event.target === editorState.$el) {
            return;
        }
        if ((_a = editorState.$el) === null || _a === void 0 ? void 0 : _a.contains(event.target)) {
            return;
        }
        editorState.update({ $selection: undefined });
    }
    function onTextSelect(event) {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(event);
        editorState.update({ $selection: getSelectedNode() });
    }
    function setContentEditableRef($el) {
        editorState.update({ $el: $el });
        setForwardRef($el, ref);
        if (autoFocus && $el && editorState.$el === undefined) {
            $el.focus();
        }
    }
    var cssClass = cls('rsw-editor', containerProps === null || containerProps === void 0 ? void 0 : containerProps.className);
    if (editorState.htmlMode) {
        return (React.createElement("div", __assign({}, containerProps, { className: cssClass }),
            children,
            React.createElement("textarea", __assign({}, rest, { className: "rsw-ce rsw-html" }))));
    }
    return (React.createElement("div", __assign({}, containerProps, { className: cssClass }),
        children,
        React.createElement(ContentEditable, __assign({}, rest, { ref: setContentEditableRef, onSelect: onTextSelect }))));
});

function OrderedListIcon() {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", style: { verticalAlign: 'text-top' } },
        React.createElement("path", { fill: "currentColor", d: "M6.99938 12.998v-2H20.9994v2H6.99938zm0 6.0001v-2H20.9994v2H6.99938zm0-12.00001v-2H20.9994v2H6.99938zm-4 1v-3h-1v-1h2v4h-1zm-1 9.00001v-1h3v4h-3v-1h2v-.5h-1v-1h1v-.5h-2zM4.25 10c.41421 0 .75.3358.75.75 0 .2024-.08017.3861-.2105.521L3.11983 13H5v1H2v-.9218L4 11H2v-1h2.25z" })));
}

function UnorderedListIcon() {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", style: { verticalAlign: 'text-top' } },
        React.createElement("path", { fill: "currentColor", d: "M7 5h14v2H7V5zm0 8v-2h14v2H7zM4 4.50001c.83 0 1.5.66992 1.5 1.5 0 .83007-.67 1.5-1.5 1.5s-1.5-.66993-1.5-1.5c0-.83008.67-1.5 1.5-1.5zM4 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM7 19v-2h14v2H7zm-3-2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" })));
}

var BtnBold = createButton('Bold', '𝐁', 'bold');
var BtnBulletList = createButton('Bullet list', React.createElement(UnorderedListIcon, null), 'insertUnorderedList');
var BtnClearFormatting = createButton('Clear formatting', 'T̲ₓ', 'removeFormat');
var BtnItalic = createButton('Italic', '𝑰', 'italic');
var BtnStrikeThrough = createButton('Strike through', React.createElement("s", null, "ab"), 'strikeThrough');
var BtnLink = createButton('Link', '🔗', function (_a) {
    var $selection = _a.$selection;
    if (($selection === null || $selection === void 0 ? void 0 : $selection.nodeName) === 'A') {
        document.execCommand('unlink');
    }
    else {
        // eslint-disable-next-line no-alert
        document.execCommand('createLink', false, prompt('URL', '') || undefined);
    }
});
var BtnNumberedList = createButton('Numbered list', React.createElement(OrderedListIcon, null), 'insertOrderedList');
var BtnRedo = createButton('Redo', '↷', 'redo');
var BtnUnderline = createButton('Underline', React.createElement("span", { style: { textDecoration: 'underline' } }, "\uD835\uDC14"), 'underline');
var BtnUndo = createButton('Undo', '↶', 'undo');
function createButton(title, content, command) {
    ButtonFactory.displayName = title.replace(/\s/g, '');
    return ButtonFactory;
    function ButtonFactory(props) {
        var editorState = useEditorState();
        var $el = editorState.$el, $selection = editorState.$selection;
        var active = false;
        if (typeof command === 'string') {
            active = !!$selection && document.queryCommandState(command);
        }
        function onAction(e) {
            e.preventDefault();
            if (document.activeElement !== $el) {
                $el === null || $el === void 0 ? void 0 : $el.focus();
            }
            if (typeof command === 'function') {
                command(editorState);
            }
            else {
                document.execCommand(command);
            }
        }
        if (editorState.htmlMode) {
            return null;
        }
        return (React.createElement("button", __assign({ className: "rsw-btn", "data-active": active, onMouseDown: onAction, tabIndex: -1, title: title, type: "button" }, props), content));
    }
}

var BtnStyles = createDropdown('Styles', [
    ['Normal', 'formatBlock', 'DIV'],
    ['𝗛𝗲𝗮𝗱𝗲𝗿 𝟭', 'formatBlock', 'H1'],
    ['Header 2', 'formatBlock', 'H2'],
    ['𝙲𝚘𝚍𝚎', 'formatBlock', 'PRE'],
]);
function createDropdown(title, items) {
    DropdownFactory.displayName = title;
    return DropdownFactory;
    function DropdownFactory(props) {
        var editorState = useEditorState();
        var $el = editorState.$el, $selection = editorState.$selection, htmlMode = editorState.htmlMode;
        if (htmlMode) {
            return null;
        }
        var activeIndex = items.findIndex(function (item) { return item[1] === 'formatBlock' && ($selection === null || $selection === void 0 ? void 0 : $selection.nodeName) === item[2]; });
        return (React.createElement(Dropdown, __assign({}, props, { items: items, onChange: onChange, selected: activeIndex, tabIndex: -1, title: title })));
        function onChange(e) {
            var target = e.target;
            var selectedValue = target.value;
            var selectedIndex = parseInt(selectedValue, 10);
            var _a = items[selectedIndex] || [], command = _a[1], commandArgument = _a[2];
            e.preventDefault();
            if (document.activeElement !== $el) {
                $el === null || $el === void 0 ? void 0 : $el.focus();
            }
            if (typeof command === 'function') {
                command(editorState);
            }
            else if (command) {
                document.execCommand(command, false, commandArgument);
            }
            setTimeout(function () { return (target.value = selectedValue); }, 10);
        }
    }
}
function Dropdown(_a) {
    var items = _a.items, selected = _a.selected, inputProps = __rest(_a, ["items", "selected"]);
    return (React.createElement("select", __assign({}, inputProps, { value: selected, className: "rsw-dd" }),
        React.createElement("option", { hidden: true }, inputProps.title),
        items.map(function (item, index) { return (React.createElement("option", { key: item[2], value: index }, item[0])); })));
}

function HtmlButton(_a) {
    var rest = __rest(_a, []);
    var editorState = useEditorState();
    function onClick() {
        editorState.update({
            htmlMode: !editorState.htmlMode,
        });
    }
    return (React.createElement("button", __assign({ className: "rsw-btn", "data-active": editorState.htmlMode, onClick: onClick, tabIndex: -1, title: "HTML mode", type: "button" }, rest), "</>"));
}

function Separator() {
    var editorState = useEditorState();
    if (editorState.htmlMode) {
        return null;
    }
    return React.createElement("div", { className: "rsw-separator" });
}

function Toolbar(props) {
    return React.createElement("div", __assign({}, props, { className: "rsw-toolbar" }));
}

var DefaultEditor = React.forwardRef(function DefaultEditor(props, ref) {
    return (React.createElement(EditorProvider, null,
        React.createElement(Editor, __assign({}, props, { ref: ref }),
            React.createElement(Toolbar, null,
                React.createElement(BtnUndo, null),
                React.createElement(BtnRedo, null),
                React.createElement(Separator, null),
                React.createElement(BtnBold, null),
                React.createElement(BtnItalic, null),
                React.createElement(BtnUnderline, null),
                React.createElement(BtnStrikeThrough, null),
                React.createElement(Separator, null),
                React.createElement(BtnNumberedList, null),
                React.createElement(BtnBulletList, null),
                React.createElement(Separator, null),
                React.createElement(BtnLink, null),
                React.createElement(BtnClearFormatting, null),
                React.createElement(HtmlButton, null),
                React.createElement(Separator, null),
                React.createElement(BtnStyles, null)))));
});

const TextEditor = ({
  initialValue,
  id
}) => {
  const [html, setHtml] = useState(initialValue);
  function onChange(e) {
    setHtml(e.target.value);
  }
  return /*#__PURE__*/React.createElement(DefaultEditor, {
    id: id,
    value: html,
    onChange: onChange
  });
};

function Checkbox({
  text,
  clickEvent,
  checked,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      padding: "0px",
      marginTop: "15px",
      marginLeft: "-20px"
    },
    id: "privacyCheckbox",
    type: "checkbox",
    onClick: clickEvent,
    checked: checked
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: "30px",
      marginTop: "-20px"
    }
  }, text));
}

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
function IoImageOutline (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"rect","attr":{"width":"416","height":"352","x":"48","y":"80","fill":"none","strokeLinejoin":"round","strokeWidth":"32","rx":"48","ry":"48"},"child":[]},{"tag":"circle","attr":{"cx":"336","cy":"176","r":"32","fill":"none","strokeMiterlimit":"10","strokeWidth":"32"},"child":[]},{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32","d":"m304 335.79-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352m176 80 123.34-123.34a32 32 0 0 1 43.11-2L464 368"},"child":[]}]})(props);
}

var css_248z$5 = ".noImage{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--color-primary-background);\r\n    color: var(--color-terciary-3);\r\n    height: 100%;\r\n    font-size: 1.5rem;\r\n}";
styleInject(css_248z$5);

const NoImage = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "noImage"
  }, /*#__PURE__*/React.createElement(IoImageOutline, null));
};

// THIS FILE IS AUTO GENERATED
function RiCheckFill (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"},"child":[]}]})(props);
}function RiCloseFill (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"},"child":[]}]})(props);
}function RiDeleteBack2Line (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M6.53451 3H20.9993C21.5516 3 21.9993 3.44772 21.9993 4V20C21.9993 20.5523 21.5516 21 20.9993 21H6.53451C6.20015 21 5.88792 20.8329 5.70246 20.5547L0.369122 12.5547C0.145189 12.2188 0.145189 11.7812 0.369122 11.4453L5.70246 3.4453C5.88792 3.1671 6.20015 3 6.53451 3ZM7.06969 5L2.40302 12L7.06969 19H19.9993V5H7.06969ZM12.9993 10.5858L15.8277 7.75736L17.242 9.17157L14.4135 12L17.242 14.8284L15.8277 16.2426L12.9993 13.4142L10.1709 16.2426L8.75668 14.8284L11.5851 12L8.75668 9.17157L10.1709 7.75736L12.9993 10.5858Z"},"child":[]}]})(props);
}

var css_248z$4 = "\r\n.pinList{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    margin-top: 20px;\r\n    gap: 15px;\r\n}\r\n\r\n.cardPin{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-basis: calc(33.333% - 20px);\r\n    background-color: white;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    & .pinDigit{\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n.areaPin{\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.inputPwd{\r\n  margin-top: 10px;\r\n  width: 370px;\r\n  height: 36px;\r\n  font-size: 1.5rem;\r\n  text-align: center;\r\n  background: #ffffff;\r\n  border-radius: 5px;\r\n  margin: 0px;\r\n}\r\n\r\n.pinNumberButton{\r\n  background-color:black;\r\n  color: white;\r\n}\r\n\r\n.pinNotNumberButton .pinDigit{\r\n  font-size: 2.3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: -5px;\r\n}\r\n\r\n.pinLabel{\r\n  margin: 10px 0px 15px 0px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n /* 600px or less */\r\n @media (max-width: 600px) {\r\n  .areaPin{\r\n    width: 80vw;\r\n  }\r\n  .inputPwd{\r\n    width: 72vw;\r\n  }\r\n}";
styleInject(css_248z$4);

const PinPad = ({
  callback,
  inputText
}) => {
  const [pinValue, setPinValue] = useState("");
  const pinList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", /*#__PURE__*/React.createElement(RiCloseFill, {
    color: "var(--color-error)"
  }), "0", /*#__PURE__*/React.createElement(RiCheckFill, {
    color: "var(--color-success)"
  })];
  const handlePin = async () => {
    callback(pinValue);
    setPinValue("");
  };
  const handleDigit = (id, pin) => {
    if (id < 9 || pin === 10) setPinValue(pinValue + pin);
    if (id === 9) setPinValue("");
    if (id === 11) handlePin();
    if (id === 12) setPinValue(pinValue.slice(0, -1));
  };
  const CardPin = ({
    pin,
    id
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      className: `cardPin ${!isNaN(pin) ? "pinNumberButton" : "pinNotNumberButton"}`,
      onClick: () => handleDigit(id, pin)
    }, /*#__PURE__*/React.createElement("div", {
      className: "pinDigit"
    }, pin));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "areaPin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loginArea"
  }, /*#__PURE__*/React.createElement("div", {
    className: "containerSide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pinLabel"
  }, inputText), /*#__PURE__*/React.createElement("div", {
    className: "flex-gap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inputPwd"
  }, "●".repeat(pinValue.length)), /*#__PURE__*/React.createElement("div", {
    className: `cardPin pinNotNumberButton`,
    onClick: () => handleDigit(12, null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "pinDigit"
  }, /*#__PURE__*/React.createElement(RiDeleteBack2Line, null)))), /*#__PURE__*/React.createElement("div", {
    className: "pinList"
  }, pinList?.map((pin, id) => /*#__PURE__*/React.createElement(CardPin, {
    pin: pin,
    id: id
  }))))));
};

// THIS FILE IS AUTO GENERATED
function LuUser (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"7","r":"4"},"child":[]}]})(props);
}

var css_248z$3 = ".cardLabel{\r\n    margin: 10px 0px 15px 0px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n  }\r\n\r\n.cardList{\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.cardUser{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap:5px;\r\n    align-items: center;\r\n    background-color: white;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    width: 75px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    & svg{\r\n        font-size: 2rem;\r\n    }\r\n    & .username{\r\n        font-size: 0.7rem;\r\n    }\r\n}\r\n\r\n.cardUser:hover{\r\n    box-shadow: 0px 0px 4px 0px var(--color-terciary);\r\n}";
styleInject(css_248z$3);

const CardList = ({
  title = "",
  icon = /*#__PURE__*/React.createElement(LuUser, null),
  data,
  callback = () => null
}) => {
  const ItemCard = ({
    data
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "cardUser",
      onClick: () => callback(data)
    }, /*#__PURE__*/React.createElement("div", {
      className: "userIcon"
    }, icon), /*#__PURE__*/React.createElement("div", {
      className: "username ellipsis"
    }, data.fullname || data.name));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cardLabel"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "cardList"
  }, data.map(card => /*#__PURE__*/React.createElement(ItemCard, {
    data: card
  }))));
};

var css_248z$2 = ".inputImage{\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    display: block;\r\n}";
styleInject(css_248z$2);

const InputImage = ({
  uniqueId,
  className,
  image = null
}) => {
  const [imageLoaded, setImageLoaded] = useState(null);
  const updateImage = (e, uniqueId) => {
    setImageLoaded(true);
    handleImage(e, uniqueId);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: `inputImage ${className} ${uniqueId}`,
    style: {
      backgroundImage: image === null ? `url('${image}')` : ""
    }
  }, imageLoaded === null && image === null && /*#__PURE__*/React.createElement(NoImage, null), /*#__PURE__*/React.createElement("input", {
    type: "file",
    id: `${uniqueId}`,
    style: {
      display: "none"
    },
    onChange: e => updateImage(e, uniqueId)
  }));
};

const ClientDetails = ({
  data
}) => {
  const client = data && data.Customer ? data.Customer : {};
  const address = data && data.address ? data.address : [];

  // Verificar si hay una dirección completa para pasar al componente MapLocation
  const fullAddress = getFullAddress(address);
  return /*#__PURE__*/React.createElement("div", {
    className: "client-details"
  }, client.fullname === "Cliente contado" ? /*#__PURE__*/React.createElement("div", {
    className: "client-details-container"
  }, "Sin datos de cliente") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
  }, fullAddress))))));
};

var css_248z$1 = "/* HEADER */\r\n\r\n.order-header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 0.7rem;\r\n    height: 25px;\r\n}\r\n\r\n.order-header-status{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.order-number{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.order-header-time{\r\n    text-align: end;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.order-header-2{\r\n    margin-top: 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.order-value{\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* PRODUCTS */\r\n\r\n.order-products {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    margin-top: 15px;\r\n    height: calc(100vh - 455px); /* FIX TPV 10-03-2025 */\r\n    overflow-y: auto;  /* FIX TPV 11-03-2025 */\r\n\r\n    & .order-products-item {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 5px 10px 5px 5px;\r\n        border: var(--color-terciary-2) 1px solid;\r\n        border-radius: 8px;\r\n        height: 88px;\r\n\r\n\r\n        & .order-product-left {\r\n            display: flex;\r\n            flex-direction: row;\r\n            align-items: center;\r\n            gap: 15px;\r\n\r\n            & .order-product-image {\r\n                width: 70px;\r\n                height: 70px;\r\n                border-radius: 10px;\r\n                background-size: cover;\r\n                background-position: center; \r\n                background-repeat: no-repeat;\r\n            }\r\n\r\n            & .order-product-info {\r\n                & .order-product-name {\r\n                    color: var(--color-process);\r\n                    font-weight: 700;\r\n                    font-size: 14px;\r\n                    margin: 0;\r\n                }\r\n\r\n                & .order-product-ingredients {\r\n                    color: var(--color-terciary);\r\n                    font-size: 12px;\r\n                    font-weight: 500;\r\n                    margin: 0;\r\n                }\r\n\r\n                & .order-product-attributes {\r\n                    color: var(--color-terciary);\r\n                    font-size: 12px;\r\n                    font-weight: 500;\r\n                    margin: 0;\r\n                    font-style: italic;\r\n                }\r\n            }\r\n        }\r\n        & .order-product-total{\r\n            display: flex;\r\n            justify-content: space-between;\r\n            gap: 20px;\r\n        }\r\n\r\n        & .order-product-quantity{\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 5px;\r\n            color: var(--color-terciary);\r\n            font-size: 0.8rem;\r\n        }\r\n\r\n        & .order-product-price-container{\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 5px;\r\n            font-size: 0.8rem;\r\n            font-weight: bold;\r\n            text-align: end;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n/* CLIENT DETAILS */\r\n\r\n.client-details{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n\r\n    & .client-details-container{\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 5px;\r\n    }\r\n\r\n    & .client-details-header{\r\n        font-weight: bold;\r\n    }\r\n    \r\n    & .client-details-sub{\r\n        color: var(--color-process);\r\n    }\r\n\r\n    & .client-details-address{\r\n        display: flex;\r\n        gap: 5px;\r\n        border: 1px var(--color-terciary-2) solid;\r\n        border-radius: 5px;\r\n        padding: 5px;\r\n        height: 110px;\r\n    }\r\n\r\n    & .client-details-address-container{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/*   ORDER SHOPPING CART  */\r\n.product-cart{\r\n    border: 1px lightgrey solid;\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    height: auto;\r\n   \r\n    /*border-radius: 10px;*/\r\n    box-sizing: border-box;\r\n\r\n    & .product-image{\r\n        width: 80px;\r\n        height: 80px;\r\n        flex-shrink: 0;\r\n        /*border-radius: 10px;*/\r\n    }\r\n\r\n    & .background-image{\r\n        background-color: #f1f1f1;\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n    }\r\n\r\n    & .product-cart-info{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        gap: 10px;\r\n        flex-grow: 1;\r\n        padding: 10px;\r\n        width: 90%;\r\n    }\r\n\r\n    & .product-details{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-start;\r\n        gap: 0px;\r\n        line-height: 1rem;\r\n    }\r\n    \r\n    & .product-name {\r\n        font-weight: bold;\r\n        font-size: 0.9rem;\r\n        /*white-space: nowrap;*/ /* Evita que el texto ocupe varias líneas */\r\n        overflow: hidden; /* Oculta el texto que exceda los límites */\r\n        text-overflow: ellipsis; /* Muestra puntos suspensivos (...) si el texto es demasiado largo */\r\n    }\r\n    \r\n    & .product-description {\r\n        color: grey;\r\n        font-size: 0.75rem;\r\n        /*white-space: nowrap;*/ /* Evita saltos de línea */\r\n        overflow: hidden; /* Oculta el texto excedente */\r\n        text-overflow: ellipsis; /* Agrega puntos suspensivos para indicar truncamiento */\r\n    }\r\n    \r\n    & .product-details-bottom {\r\n        display: flex;\r\n        justify-content: space-between; /* Espaciado uniforme entre los elementos */\r\n        align-items: center;\r\n        gap: 5px; /* Espaciado entre el precio y las acciones */\r\n    }\r\n    \r\n    & .product-actions{\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        align-items: center;\r\n        gap: 10px;\r\n    \r\n        & svg{\r\n            cursor: pointer;\r\n            min-width: 1.5rem; /* Limita el tamaño de los íconos */\r\n            min-height: 1.5rem;\r\n            padding: 5px;\r\n            border-radius: 5px;\r\n            background-color: lightgrey;\r\n        }\r\n    }\r\n}\r\n";
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
  data,
  callbackPrintTicket = () => null,
  callbackCreateInvoice = () => null,
  callbackPrintInvoice = () => null
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
  }, data.total, " \u20AC"))), /*#__PURE__*/React.createElement("div", null, data.Invoice === null ? /*#__PURE__*/React.createElement("div", {
    className: "flex-gap",
    style: {
      paddingTop: "15px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    text: "Imprimir ticket",
    icon: null,
    customClass: "w-100",
    action: callbackPrintTicket
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    text: "Crear factura",
    icon: null,
    customClass: "w-100",
    action: callbackCreateInvoice
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "15px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Imprimir factura",
    icon: null,
    customClass: "w-100",
    action: callbackPrintInvoice
  }))));
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

const OrderShoppingCart = ({
  data,
  CartActions
}) => {
  const Product = ({
    data
  }) => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "product-cart"
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-image background-image",
      style: {
        backgroundImage: data?.Product.images?.[0] ? `url('${data.Product.images[0]}')` : "no"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "product-cart-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-details"
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-name"
    }, data.Product.name), /*#__PURE__*/React.createElement("div", {
      className: "product-description"
    }, data.Product.description)), /*#__PURE__*/React.createElement("div", {
      className: "product-details-bottom"
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-name"
    }, data.Product.price ? data.Product.price.toFixed(2) : "0.00", "\u20AC"), /*#__PURE__*/React.createElement("div", {
      className: "product-actions"
    }, /*#__PURE__*/React.createElement(CartActions, {
      data: data
    }))))));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "order-products"
  }, Array.isArray(data?.ShoppingCartProducts) ? data.ShoppingCartProducts.map(item => /*#__PURE__*/React.createElement(Product, {
    data: item
  })) : null);
};

var css_248z = ".datatable{\r\n    height: fit-content;\r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 20px;\r\n    & .adminPanel{\r\n        width: auto;\r\n        flex-grow: 1;\r\n        align-self: stretch;\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-start;\r\n        align-items: center;\r\n    }\r\n}\r\n\r\n\r\n.headerDatatable{\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.sectionsDatatable{\r\n    width: 100%;\r\n    justify-content: flex-start;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    & div{\r\n        padding: 5px;\r\n    }\r\n}\r\n\r\n.selectedHorizontalMenu{\r\n  color: var(--color-primary);\r\n  font-weight: 700;\r\n  border-bottom: 2px var(--color-primary) solid;\r\n}\r\n\r\n.actionsDatatable{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: end;\r\n    gap: 5px;\r\n    padding: 10px;\r\n}\r\n\r\n.pagination{\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 30px;\r\n}\r\n\r\n.paginationDropdown{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    width: 100%;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\n\r\n.paginationText{\r\n    margin-top: 3px;\r\n}\r\n\r\n.paginationPages{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    gap: 10px;\r\n    align-items: center;\r\n    padding-right: 5px;\r\n}\r\n\r\n.pageBtn{\r\n    padding: 4px 9px;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    margin-left: 3px; \r\n    cursor: pointer;\r\n}\r\n\r\n.pageBtnActive{\r\n    border: 1px #0057FF solid;\r\n}\r\n\r\n.selectMaxRows{\r\n    margin: 0px 10px;\r\n}\r\n\r\n\r\n.rowTableMobile {\r\n    padding: 5px 10px;\r\n    line-height: 1.8;\r\n}\r\n\r\n.table-image{\r\n    width: 80px;\r\n    height: 50px;\r\n}\r\n\r\n.desktopDatatable {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    align-self: stretch;\r\n    height: 100%; /* Ensures the div fills the available height */\r\n  }\r\n  \r\n  .table-container {\r\n    display: flex;\r\n    height: 100%; /* Ensures the container takes up the full height of the parent */\r\n  }\r\n  \r\n  table {\r\n    color: rgba(32, 32, 32, 1);\r\n    width: 100%;\r\n    height: fit-content;\r\n    margin: 10px;\r\n    border-radius: 10px;\r\n    border: 1px #ebebeb solid;\r\n    border-collapse: unset!important;\r\n  }\r\n\r\n  thead{\r\n    display: flex;\r\n    height: 40px;\r\n    align-items: center;\r\n    border-bottom: 1px #ebebeb solid!important;\r\n  }\r\n\r\n  tbody{\r\n    display: block;\r\n    height: 100%; /* Ensures tbody takes up the full height of the table */\r\n  }\r\n\r\n  tbody td{\r\n    cursor: pointer;\r\n    height: 50px;\r\n  }\r\n  tbody td.checkboxtd {\r\n    cursor: default;\r\n}\r\n  \r\n  thead th, tbody td {\r\n    padding: 5px;\r\n    text-align: left;\r\n  }\r\n  \r\n  \r\n  tbody tr:nth-child(odd) {\r\n    background-color: #F5F5F5;\r\n  }\r\n  \r\n  thead tr, tbody tr {\r\n    display: table; /* Ensures tr display as table-row within tbody */\r\n    width: 100%;\r\n    table-layout: fixed; /* Ensures each row respects the table's fixed layout */\r\n  }\r\n\r\n  .rowSelected{\r\n    background-color: #e8e8e8!important;\r\n  }\r\n\r\n/****** MEDIA QUERIES *******/\r\n\r\n\r\n\r\n/* 1300px or less */\r\n@media (max-width: 1300px) {\r\n  .headerDatatable{\r\n        flex-wrap: wrap;\r\n  }\r\n}\r\n\r\n/* 992px or less */\r\n@media (max-width: 992px) {\r\n\r\n  \r\n}\r\n\r\n/* 750px or less */\r\n@media (max-width: 750px) {\r\n  \r\n  \r\n}\r\n\r\n/* 600px or less */\r\n@media (max-width: 600px) {\r\n\r\n}";
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
  handleSelectRow = () => {},
  handleSelectAllRow = () => {}
}) => {
  console.log("DatatableComponent > data: ", data);
  console.log("DatatableComponent > rows: ", rows);
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
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "custom-checkbox",
    onChange: e => handleSelectAllRow(e.target.checked)
  })), data.length > 0 ? Object.keys(sortArrayByCustomOrder(customHeaders, data[0])).filter(field => field in customHeaders).map((field, index) => /*#__PURE__*/React.createElement("th", {
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
  deleteCallback = () => {},
  setSearch
}) => {
  const actions = [{
    id: "search",
    text: "Buscar",
    icon: /*#__PURE__*/React.createElement(HiOutlineSearch, null),
    callback: () => null
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
  const handleSearch = e => {
    setSearch(e);
  };
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
  })) : availableActions().filter(f => f.id !== "search").map((a, i) => /*#__PURE__*/React.createElement(Button, {
    key: i,
    text: a.text,
    icon: a.icon,
    action: a.callback
  })), availableActions().some(obj => obj.id === "search") && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    id: "",
    type: "",
    placeholder: "Buscar",
    classname: "text-align-right",
    icon: null,
    iconType: null,
    iconPositionRight: true,
    label: "",
    description: "",
    defaultValue: "",
    disabled: false,
    validation: null,
    onWritting: handleSearch
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
  console.log("Datatable > data: ", data);
  const [selectedRows, setSelectedRows] = useState(checkedRows && checkedRows.length > 0 ? checkedRows : []);
  const [rows, setRows] = useState([]);
  const [activeSection, setActiveSection] = useState(0);
  const [configuration, updateConfiguration] = useState({
    maxRows: 12,
    indexStart: 0,
    pages: [0],
    filterBy: {
      section: "",
      filter: []
    }
  });
  const [search, setSearch] = useState("");
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

  /*const handleSearch = (data) => {
    console.log("Datatable > handleSearch > data, search ", data, search);
    let dataUpdated = data;
    if (search !== "") {
      dataUpdated = data.filter((item) => item.name?.toLowerCase().includes(search?.toLowerCase()));
    }
    return dataUpdated;
  };*/
  const handleSearch = data => {
    console.log("Datatable > handleSearch > data, search ", data, search);
    let dataUpdated = data;
    if (search !== "") {
      const searchLower = search.toLowerCase();
      dataUpdated = data.filter(item => item.name?.toLowerCase().includes(searchLower) || item.number?.toString().toLowerCase().includes(searchLower) || item.Customer?.fullname?.toLowerCase().includes(searchLower));
    }
    return dataUpdated;
  };
  useEffect(() => {
    const maxRowsInteger = parseInt(configuration.maxRows);
    let dataUpdated = handleSearch(data);
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
  useEffect(() => {
    const maxRowsInteger = parseInt(configuration.maxRows);
    let dataUpdated = handleSearch(data);
    dataUpdated && updateDatatableConfiguration({
      ...configuration,
      pages: Array.from(Array(parseInt(data.length / maxRowsInteger) + 1).keys())
    });
    dataUpdated && setRows(data?.filter((f, index) => index > configuration.indexStart && index < configuration.indexStart + maxRowsInteger));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  useEffect(() => {
    let dataUpdated = handleSearch(data);
    setRows(dataUpdated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
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
    deleteCallback: deleteCallback,
    setSearch: setSearch
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

export { Button, CardList, Checkbox, ClientDetails, Datatable, Input, InputImage, MAPS_API_KEY, MapLocation, NoImage, OrderInfo, OrderNotes, OrderProducts, OrderResume, OrderShoppingCart, OrderTimeline, PinPad, Select, StateLabel, TextEditor, Textarea, addIdKeyIfMissing, checkUserAgent, generateCode, getFullAddress, getRequiredKeys, getTodayDate, handleImage, parseDate, parseDateAndHourToISO, sortArrayByCustomOrder, stylesheet };
