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

var css_248z$d = "@font-face {\r\n  font-family: 'DMSans';\r\n  src: local('DM Sans'), url(./fonts/DMSans/DMSans-Regular.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'DMSans-SemiBold';\r\n  src: local('DM Sans SemiBold'), url(./fonts/DMSans/DMSans-SemiBold.ttf) format('truetype');\r\n}\r\n\r\n\r\n\r\n:root {\r\n  --color-primary: #000;\r\n  --color-primary-background: #ece9e4;\r\n  --color-primary-shadow: rgba(182, 182, 182, 0.2);\r\n  --color-secondary: #fff;\r\n  --color-secondary-background: #fefcfa;\r\n  --color-terciary: #979796;\r\n  --color-terciary-2: lightgrey;\r\n  --color-terciary-3: grey;\r\n  --color-success: #00C76C;\r\n  --color-success-background: rgb(0, 199, 108, 0.2);\r\n  --color-pending: #EB9E1A;\r\n  --color-pending-background: rgb(235, 158, 26, 0.2);\r\n  --color-error: #FF5757;\r\n  --color-error-background: rgb(255, 87, 87, 0.2);\r\n  --color-process: #0057FF;\r\n  --color-process-background: rgb(0, 87, 255, 0.2);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-family: 'DMSans';\r\n  font-size: 0.8rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--color-terciary);\r\n}\r\n\r\nhr{\r\n  border-top: 3px solid var(--color-primary-background);\r\n}\r\n\r\ntextarea:focus, input:focus{\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"password\"]{\r\n  box-sizing: unset!important;\r\n  line-height: unset!important;\r\n  padding-left: 5px;\r\n}\r\n\r\ninput[type=\"text\"]:disabled{background-color:transparent; cursor:not-allowed;}\r\n\r\nbutton {\r\n  cursor: pointer!important;\r\n  height: 30px;\r\n}\r\ninput{\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  width: 28px;\r\n  height: 28px;\r\n}\r\n\r\n.color-blue{\r\n  color: var(--color-process);\r\n}\r\n\r\n.MuiButtonBase-root{\r\n  color: var(--color-process)!important;\r\n}\r\n\r\n\r\n\r\n/****** CUSTOM BUTTONS ********/\r\n\r\n\r\n.button-1{\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px var(--color-secondary) solid;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.button-2{\r\n  border-radius: 5px;\r\n  background-color: var(--color-secondary);\r\n  border: 1px var(--color-terciary-2) solid;\r\n  cursor: pointer;\r\n  height: 27px;\r\n  width: fit-content;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n/*********************************/\r\n\r\n.adminPanel{\r\n  background: var(--color-secondary);\r\n  border: 1px solid var(--color-primary-background);\r\n  border-radius: 12px;\r\n  height: 100%;\r\n  width: auto;\r\n  padding: 15px;\r\n}\r\n\r\n.background-image {\r\n  background-color: var(--color-primary-background);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.loginArea{\r\n  background-color: var(--color-primary-background);\r\n}\r\n\r\n.flex{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.flex-gap{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.flex-start{\r\n  display: inline-flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.flex-end{\r\n  display: inline-flex;\r\n  justify-content: flex-end;\r\n  padding: 4px;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n}\r\n\r\n.w33{\r\n  width: 33%;\r\n}\r\n\r\n.w50{\r\n  width: 50%;\r\n}\r\n\r\n.w100{\r\n  width: 100%;\r\n}\r\n\r\n.h-100{\r\n  height: 100%;\r\n}\r\n\r\n.p-2{\r\n  padding: 2%;\r\n}\r\n\r\n.text-align-right{\r\n  text-align: right;\r\n}\r\n\r\n.text-align-left{\r\n  text-align: left;\r\n}\r\n\r\n.text-align-center{\r\n  text-align: center;\r\n}\r\n\r\n.text-overflow {\r\n  display: inline-block; /* O también block, según el diseño */\r\n  width: 100%; /* Ajusta el ancho según necesites */\r\n  white-space: nowrap; /* Evita que el texto haga saltos de línea */\r\n  overflow: hidden; /* Oculta el texto que no cabe en el contenedor */\r\n  text-overflow: ellipsis; /* Muestra \"...\" cuando el texto es muy largo */\r\n}\r\n\r\n.fixIconButton{\r\n  padding: 4px 0px 4px 4px!important;\r\n  min-width: auto!important;\r\n}\r\n\r\n.buttonNoBorder{\r\n  border: 0px!important;\r\n}\r\n\r\n\r\n.ellipsis {\r\n  white-space: nowrap; /* Evita que el texto se divida en varias líneas */\r\n  overflow: hidden; /* Oculta el texto que sobresale */\r\n  text-overflow: ellipsis; /* Muestra los puntos suspensivos (...) */\r\n  width: 75px; /* Ajusta el ancho según tus necesidades */\r\n}\r\n\r\n.appVersion{\r\n  position: absolute;\r\n  bottom: 1px;\r\n  right: 1px;\r\n  font-size: 0.5rem;\r\n  z-index: 10;\r\n}\r\n\r\n/************ CHECKBOX ************/\r\n.custom-checkbox {\r\n  /* Ocultar el diseño por defecto */\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  /* Dimensiones */\r\n  width: 24px;\r\n  height: 24px;\r\n\r\n  /* Estilo base */\r\n  border: 2px solid var(--color-primary-background); /* Azul oscuro */\r\n  border-radius: 4px;\r\n  background-color: var(--color-secondary);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n\r\n  /* Efecto al pasar el ratón */\r\n  transition: background-color 0.2s ease, border-color 0.2s ease;\r\n}\r\n\r\n.custom-checkbox:hover {\r\n  border-color: var(--color-process); /* Azul más oscuro */\r\n}\r\n\r\n.custom-checkbox:checked {\r\n  background-color: var(--color-process); /* Azul */\r\n  border-color: var(--color-process);\r\n\r\n  /* Añadir el check */\r\n  position: relative;\r\n}\r\n\r\n.custom-checkbox:checked::after {\r\n  content: \"\";\r\n  display: block;\r\n\r\n  /* Checkmark blanco */\r\n  width: 10px;\r\n  height: 5px;\r\n  border: solid var(--color-secondary);\r\n  border-width: 0 0 2px 2px;\r\n  transform: rotate(-45deg);\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n}\r\n\r\n\r\n\r\n/************ ScrollBar ************/\r\n::-webkit-scrollbar {\r\n  width: 5px;  /* Para el scrollbar vertical */\r\n  height: 5px; /* Para el scrollbar horizontal */\r\n  margin: 2px;\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--color-primary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n/**********************************/\r\n\r\n\r\n\r\n\r\n/****** MEDIA QUERIES *******/\r\n\r\n\r\n\r\n/* 1300px or less */\r\n@media (max-width: 1300px) {\r\n\r\n}\r\n\r\n/* 992px or less */\r\n@media (max-width: 992px) {\r\n\r\n  \r\n}\r\n\r\n/* 750px or less */\r\n@media (max-width: 750px) {\r\n  \r\n  \r\n}\r\n\r\n/* 600px or less */\r\n@media (max-width: 600px) {\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
var stylesheet="@font-face {\r\n  font-family: 'DMSans';\r\n  src: local('DM Sans'), url(./fonts/DMSans/DMSans-Regular.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'DMSans-SemiBold';\r\n  src: local('DM Sans SemiBold'), url(./fonts/DMSans/DMSans-SemiBold.ttf) format('truetype');\r\n}\r\n\r\n\r\n\r\n:root {\r\n  --color-primary: #000;\r\n  --color-primary-background: #ece9e4;\r\n  --color-primary-shadow: rgba(182, 182, 182, 0.2);\r\n  --color-secondary: #fff;\r\n  --color-secondary-background: #fefcfa;\r\n  --color-terciary: #979796;\r\n  --color-terciary-2: lightgrey;\r\n  --color-terciary-3: grey;\r\n  --color-success: #00C76C;\r\n  --color-success-background: rgb(0, 199, 108, 0.2);\r\n  --color-pending: #EB9E1A;\r\n  --color-pending-background: rgb(235, 158, 26, 0.2);\r\n  --color-error: #FF5757;\r\n  --color-error-background: rgb(255, 87, 87, 0.2);\r\n  --color-process: #0057FF;\r\n  --color-process-background: rgb(0, 87, 255, 0.2);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-family: 'DMSans';\r\n  font-size: 0.8rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--color-terciary);\r\n}\r\n\r\nhr{\r\n  border-top: 3px solid var(--color-primary-background);\r\n}\r\n\r\ntextarea:focus, input:focus{\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"password\"]{\r\n  box-sizing: unset!important;\r\n  line-height: unset!important;\r\n  padding-left: 5px;\r\n}\r\n\r\ninput[type=\"text\"]:disabled{background-color:transparent; cursor:not-allowed;}\r\n\r\nbutton {\r\n  cursor: pointer!important;\r\n  height: 30px;\r\n}\r\ninput{\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  width: 28px;\r\n  height: 28px;\r\n}\r\n\r\n.color-blue{\r\n  color: var(--color-process);\r\n}\r\n\r\n.MuiButtonBase-root{\r\n  color: var(--color-process)!important;\r\n}\r\n\r\n\r\n\r\n/****** CUSTOM BUTTONS ********/\r\n\r\n\r\n.button-1{\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px var(--color-secondary) solid;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.button-2{\r\n  border-radius: 5px;\r\n  background-color: var(--color-secondary);\r\n  border: 1px var(--color-terciary-2) solid;\r\n  cursor: pointer;\r\n  height: 27px;\r\n  width: fit-content;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n/*********************************/\r\n\r\n.adminPanel{\r\n  background: var(--color-secondary);\r\n  border: 1px solid var(--color-primary-background);\r\n  border-radius: 12px;\r\n  height: 100%;\r\n  width: auto;\r\n  padding: 15px;\r\n}\r\n\r\n.background-image {\r\n  background-color: var(--color-primary-background);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.loginArea{\r\n  background-color: var(--color-primary-background);\r\n}\r\n\r\n.flex{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.flex-gap{\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.flex-start{\r\n  display: inline-flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.flex-end{\r\n  display: inline-flex;\r\n  justify-content: flex-end;\r\n  padding: 4px;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n}\r\n\r\n.w33{\r\n  width: 33%;\r\n}\r\n\r\n.w50{\r\n  width: 50%;\r\n}\r\n\r\n.w100{\r\n  width: 100%;\r\n}\r\n\r\n.h-100{\r\n  height: 100%;\r\n}\r\n\r\n.p-2{\r\n  padding: 2%;\r\n}\r\n\r\n.text-align-right{\r\n  text-align: right;\r\n}\r\n\r\n.text-align-left{\r\n  text-align: left;\r\n}\r\n\r\n.text-align-center{\r\n  text-align: center;\r\n}\r\n\r\n.text-overflow {\r\n  display: inline-block; /* O también block, según el diseño */\r\n  width: 100%; /* Ajusta el ancho según necesites */\r\n  white-space: nowrap; /* Evita que el texto haga saltos de línea */\r\n  overflow: hidden; /* Oculta el texto que no cabe en el contenedor */\r\n  text-overflow: ellipsis; /* Muestra \"...\" cuando el texto es muy largo */\r\n}\r\n\r\n.fixIconButton{\r\n  padding: 4px 0px 4px 4px!important;\r\n  min-width: auto!important;\r\n}\r\n\r\n.buttonNoBorder{\r\n  border: 0px!important;\r\n}\r\n\r\n\r\n.ellipsis {\r\n  white-space: nowrap; /* Evita que el texto se divida en varias líneas */\r\n  overflow: hidden; /* Oculta el texto que sobresale */\r\n  text-overflow: ellipsis; /* Muestra los puntos suspensivos (...) */\r\n  width: 75px; /* Ajusta el ancho según tus necesidades */\r\n}\r\n\r\n.appVersion{\r\n  position: absolute;\r\n  bottom: 1px;\r\n  right: 1px;\r\n  font-size: 0.5rem;\r\n  z-index: 10;\r\n}\r\n\r\n/************ CHECKBOX ************/\r\n.custom-checkbox {\r\n  /* Ocultar el diseño por defecto */\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  /* Dimensiones */\r\n  width: 24px;\r\n  height: 24px;\r\n\r\n  /* Estilo base */\r\n  border: 2px solid var(--color-primary-background); /* Azul oscuro */\r\n  border-radius: 4px;\r\n  background-color: var(--color-secondary);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n\r\n  /* Efecto al pasar el ratón */\r\n  transition: background-color 0.2s ease, border-color 0.2s ease;\r\n}\r\n\r\n.custom-checkbox:hover {\r\n  border-color: var(--color-process); /* Azul más oscuro */\r\n}\r\n\r\n.custom-checkbox:checked {\r\n  background-color: var(--color-process); /* Azul */\r\n  border-color: var(--color-process);\r\n\r\n  /* Añadir el check */\r\n  position: relative;\r\n}\r\n\r\n.custom-checkbox:checked::after {\r\n  content: \"\";\r\n  display: block;\r\n\r\n  /* Checkmark blanco */\r\n  width: 10px;\r\n  height: 5px;\r\n  border: solid var(--color-secondary);\r\n  border-width: 0 0 2px 2px;\r\n  transform: rotate(-45deg);\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n}\r\n\r\n\r\n\r\n/************ ScrollBar ************/\r\n::-webkit-scrollbar {\r\n  width: 5px;  /* Para el scrollbar vertical */\r\n  height: 5px; /* Para el scrollbar horizontal */\r\n  margin: 2px;\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--color-primary);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--color-terciary);\r\n  border-radius: 5px;\r\n  border: 3px solid var(--color-secondary);\r\n}\r\n/**********************************/\r\n\r\n\r\n\r\n\r\n/****** MEDIA QUERIES *******/\r\n\r\n\r\n\r\n/* 1300px or less */\r\n@media (max-width: 1300px) {\r\n\r\n}\r\n\r\n/* 992px or less */\r\n@media (max-width: 992px) {\r\n\r\n  \r\n}\r\n\r\n/* 750px or less */\r\n@media (max-width: 750px) {\r\n  \r\n  \r\n}\r\n\r\n/* 600px or less */\r\n@media (max-width: 600px) {\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
styleInject(css_248z$d);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var cryptoJs$1 = {exports: {}};

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var core$1 = {exports: {}};

var core = core$1.exports;

var hasRequiredCore;

function requireCore () {
	if (hasRequiredCore) return core$1.exports;
	hasRequiredCore = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory();
			}
		}(core, function () {

			/*globals window, global, require*/

			/**
			 * CryptoJS core components.
			 */
			var CryptoJS = CryptoJS || (function (Math, undefined$1) {

			    var crypto;

			    // Native crypto from window (Browser)
			    if (typeof window !== 'undefined' && window.crypto) {
			        crypto = window.crypto;
			    }

			    // Native crypto in web worker (Browser)
			    if (typeof self !== 'undefined' && self.crypto) {
			        crypto = self.crypto;
			    }

			    // Native crypto from worker
			    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
			        crypto = globalThis.crypto;
			    }

			    // Native (experimental IE 11) crypto from window (Browser)
			    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
			        crypto = window.msCrypto;
			    }

			    // Native crypto from global (NodeJS)
			    if (!crypto && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
			        crypto = commonjsGlobal.crypto;
			    }

			    // Native crypto import via require (NodeJS)
			    if (!crypto && typeof commonjsRequire === 'function') {
			        try {
			            crypto = require('crypto');
			        } catch (err) {}
			    }

			    /*
			     * Cryptographically secure pseudorandom number generator
			     *
			     * As Math.random() is cryptographically not safe to use
			     */
			    var cryptoSecureRandomInt = function () {
			        if (crypto) {
			            // Use getRandomValues method (Browser)
			            if (typeof crypto.getRandomValues === 'function') {
			                try {
			                    return crypto.getRandomValues(new Uint32Array(1))[0];
			                } catch (err) {}
			            }

			            // Use randomBytes method (NodeJS)
			            if (typeof crypto.randomBytes === 'function') {
			                try {
			                    return crypto.randomBytes(4).readInt32LE();
			                } catch (err) {}
			            }
			        }

			        throw new Error('Native crypto module could not be used to get secure random number.');
			    };

			    /*
			     * Local polyfill of Object.create

			     */
			    var create = Object.create || (function () {
			        function F() {}

			        return function (obj) {
			            var subtype;

			            F.prototype = obj;

			            subtype = new F();

			            F.prototype = null;

			            return subtype;
			        };
			    }());

			    /**
			     * CryptoJS namespace.
			     */
			    var C = {};

			    /**
			     * Library namespace.
			     */
			    var C_lib = C.lib = {};

			    /**
			     * Base object for prototypal inheritance.
			     */
			    var Base = C_lib.Base = (function () {


			        return {
			            /**
			             * Creates a new object that inherits from this object.
			             *
			             * @param {Object} overrides Properties to copy into the new object.
			             *
			             * @return {Object} The new object.
			             *
			             * @static
			             *
			             * @example
			             *
			             *     var MyType = CryptoJS.lib.Base.extend({
			             *         field: 'value',
			             *
			             *         method: function () {
			             *         }
			             *     });
			             */
			            extend: function (overrides) {
			                // Spawn
			                var subtype = create(this);

			                // Augment
			                if (overrides) {
			                    subtype.mixIn(overrides);
			                }

			                // Create default initializer
			                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
			                    subtype.init = function () {
			                        subtype.$super.init.apply(this, arguments);
			                    };
			                }

			                // Initializer's prototype is the subtype object
			                subtype.init.prototype = subtype;

			                // Reference supertype
			                subtype.$super = this;

			                return subtype;
			            },

			            /**
			             * Extends this object and runs the init method.
			             * Arguments to create() will be passed to init().
			             *
			             * @return {Object} The new object.
			             *
			             * @static
			             *
			             * @example
			             *
			             *     var instance = MyType.create();
			             */
			            create: function () {
			                var instance = this.extend();
			                instance.init.apply(instance, arguments);

			                return instance;
			            },

			            /**
			             * Initializes a newly created object.
			             * Override this method to add some logic when your objects are created.
			             *
			             * @example
			             *
			             *     var MyType = CryptoJS.lib.Base.extend({
			             *         init: function () {
			             *             // ...
			             *         }
			             *     });
			             */
			            init: function () {
			            },

			            /**
			             * Copies properties into this object.
			             *
			             * @param {Object} properties The properties to mix in.
			             *
			             * @example
			             *
			             *     MyType.mixIn({
			             *         field: 'value'
			             *     });
			             */
			            mixIn: function (properties) {
			                for (var propertyName in properties) {
			                    if (properties.hasOwnProperty(propertyName)) {
			                        this[propertyName] = properties[propertyName];
			                    }
			                }

			                // IE won't copy toString using the loop above
			                if (properties.hasOwnProperty('toString')) {
			                    this.toString = properties.toString;
			                }
			            },

			            /**
			             * Creates a copy of this object.
			             *
			             * @return {Object} The clone.
			             *
			             * @example
			             *
			             *     var clone = instance.clone();
			             */
			            clone: function () {
			                return this.init.prototype.extend(this);
			            }
			        };
			    }());

			    /**
			     * An array of 32-bit words.
			     *
			     * @property {Array} words The array of 32-bit words.
			     * @property {number} sigBytes The number of significant bytes in this word array.
			     */
			    var WordArray = C_lib.WordArray = Base.extend({
			        /**
			         * Initializes a newly created word array.
			         *
			         * @param {Array} words (Optional) An array of 32-bit words.
			         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.lib.WordArray.create();
			         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
			         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
			         */
			        init: function (words, sigBytes) {
			            words = this.words = words || [];

			            if (sigBytes != undefined$1) {
			                this.sigBytes = sigBytes;
			            } else {
			                this.sigBytes = words.length * 4;
			            }
			        },

			        /**
			         * Converts this word array to a string.
			         *
			         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
			         *
			         * @return {string} The stringified word array.
			         *
			         * @example
			         *
			         *     var string = wordArray + '';
			         *     var string = wordArray.toString();
			         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
			         */
			        toString: function (encoder) {
			            return (encoder || Hex).stringify(this);
			        },

			        /**
			         * Concatenates a word array to this word array.
			         *
			         * @param {WordArray} wordArray The word array to append.
			         *
			         * @return {WordArray} This word array.
			         *
			         * @example
			         *
			         *     wordArray1.concat(wordArray2);
			         */
			        concat: function (wordArray) {
			            // Shortcuts
			            var thisWords = this.words;
			            var thatWords = wordArray.words;
			            var thisSigBytes = this.sigBytes;
			            var thatSigBytes = wordArray.sigBytes;

			            // Clamp excess bits
			            this.clamp();

			            // Concat
			            if (thisSigBytes % 4) {
			                // Copy one byte at a time
			                for (var i = 0; i < thatSigBytes; i++) {
			                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
			                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
			                }
			            } else {
			                // Copy one word at a time
			                for (var j = 0; j < thatSigBytes; j += 4) {
			                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
			                }
			            }
			            this.sigBytes += thatSigBytes;

			            // Chainable
			            return this;
			        },

			        /**
			         * Removes insignificant bits.
			         *
			         * @example
			         *
			         *     wordArray.clamp();
			         */
			        clamp: function () {
			            // Shortcuts
			            var words = this.words;
			            var sigBytes = this.sigBytes;

			            // Clamp
			            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
			            words.length = Math.ceil(sigBytes / 4);
			        },

			        /**
			         * Creates a copy of this word array.
			         *
			         * @return {WordArray} The clone.
			         *
			         * @example
			         *
			         *     var clone = wordArray.clone();
			         */
			        clone: function () {
			            var clone = Base.clone.call(this);
			            clone.words = this.words.slice(0);

			            return clone;
			        },

			        /**
			         * Creates a word array filled with random bytes.
			         *
			         * @param {number} nBytes The number of random bytes to generate.
			         *
			         * @return {WordArray} The random word array.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.lib.WordArray.random(16);
			         */
			        random: function (nBytes) {
			            var words = [];

			            for (var i = 0; i < nBytes; i += 4) {
			                words.push(cryptoSecureRandomInt());
			            }

			            return new WordArray.init(words, nBytes);
			        }
			    });

			    /**
			     * Encoder namespace.
			     */
			    var C_enc = C.enc = {};

			    /**
			     * Hex encoding strategy.
			     */
			    var Hex = C_enc.Hex = {
			        /**
			         * Converts a word array to a hex string.
			         *
			         * @param {WordArray} wordArray The word array.
			         *
			         * @return {string} The hex string.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
			         */
			        stringify: function (wordArray) {
			            // Shortcuts
			            var words = wordArray.words;
			            var sigBytes = wordArray.sigBytes;

			            // Convert
			            var hexChars = [];
			            for (var i = 0; i < sigBytes; i++) {
			                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
			                hexChars.push((bite >>> 4).toString(16));
			                hexChars.push((bite & 0x0f).toString(16));
			            }

			            return hexChars.join('');
			        },

			        /**
			         * Converts a hex string to a word array.
			         *
			         * @param {string} hexStr The hex string.
			         *
			         * @return {WordArray} The word array.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
			         */
			        parse: function (hexStr) {
			            // Shortcut
			            var hexStrLength = hexStr.length;

			            // Convert
			            var words = [];
			            for (var i = 0; i < hexStrLength; i += 2) {
			                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
			            }

			            return new WordArray.init(words, hexStrLength / 2);
			        }
			    };

			    /**
			     * Latin1 encoding strategy.
			     */
			    var Latin1 = C_enc.Latin1 = {
			        /**
			         * Converts a word array to a Latin1 string.
			         *
			         * @param {WordArray} wordArray The word array.
			         *
			         * @return {string} The Latin1 string.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
			         */
			        stringify: function (wordArray) {
			            // Shortcuts
			            var words = wordArray.words;
			            var sigBytes = wordArray.sigBytes;

			            // Convert
			            var latin1Chars = [];
			            for (var i = 0; i < sigBytes; i++) {
			                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
			                latin1Chars.push(String.fromCharCode(bite));
			            }

			            return latin1Chars.join('');
			        },

			        /**
			         * Converts a Latin1 string to a word array.
			         *
			         * @param {string} latin1Str The Latin1 string.
			         *
			         * @return {WordArray} The word array.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
			         */
			        parse: function (latin1Str) {
			            // Shortcut
			            var latin1StrLength = latin1Str.length;

			            // Convert
			            var words = [];
			            for (var i = 0; i < latin1StrLength; i++) {
			                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
			            }

			            return new WordArray.init(words, latin1StrLength);
			        }
			    };

			    /**
			     * UTF-8 encoding strategy.
			     */
			    var Utf8 = C_enc.Utf8 = {
			        /**
			         * Converts a word array to a UTF-8 string.
			         *
			         * @param {WordArray} wordArray The word array.
			         *
			         * @return {string} The UTF-8 string.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
			         */
			        stringify: function (wordArray) {
			            try {
			                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
			            } catch (e) {
			                throw new Error('Malformed UTF-8 data');
			            }
			        },

			        /**
			         * Converts a UTF-8 string to a word array.
			         *
			         * @param {string} utf8Str The UTF-8 string.
			         *
			         * @return {WordArray} The word array.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
			         */
			        parse: function (utf8Str) {
			            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
			        }
			    };

			    /**
			     * Abstract buffered block algorithm template.
			     *
			     * The property blockSize must be implemented in a concrete subtype.
			     *
			     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
			     */
			    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
			        /**
			         * Resets this block algorithm's data buffer to its initial state.
			         *
			         * @example
			         *
			         *     bufferedBlockAlgorithm.reset();
			         */
			        reset: function () {
			            // Initial values
			            this._data = new WordArray.init();
			            this._nDataBytes = 0;
			        },

			        /**
			         * Adds new data to this block algorithm's buffer.
			         *
			         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
			         *
			         * @example
			         *
			         *     bufferedBlockAlgorithm._append('data');
			         *     bufferedBlockAlgorithm._append(wordArray);
			         */
			        _append: function (data) {
			            // Convert string to WordArray, else assume WordArray already
			            if (typeof data == 'string') {
			                data = Utf8.parse(data);
			            }

			            // Append
			            this._data.concat(data);
			            this._nDataBytes += data.sigBytes;
			        },

			        /**
			         * Processes available data blocks.
			         *
			         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
			         *
			         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
			         *
			         * @return {WordArray} The processed data.
			         *
			         * @example
			         *
			         *     var processedData = bufferedBlockAlgorithm._process();
			         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
			         */
			        _process: function (doFlush) {
			            var processedWords;

			            // Shortcuts
			            var data = this._data;
			            var dataWords = data.words;
			            var dataSigBytes = data.sigBytes;
			            var blockSize = this.blockSize;
			            var blockSizeBytes = blockSize * 4;

			            // Count blocks ready
			            var nBlocksReady = dataSigBytes / blockSizeBytes;
			            if (doFlush) {
			                // Round up to include partial blocks
			                nBlocksReady = Math.ceil(nBlocksReady);
			            } else {
			                // Round down to include only full blocks,
			                // less the number of blocks that must remain in the buffer
			                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
			            }

			            // Count words ready
			            var nWordsReady = nBlocksReady * blockSize;

			            // Count bytes ready
			            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

			            // Process blocks
			            if (nWordsReady) {
			                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
			                    // Perform concrete-algorithm logic
			                    this._doProcessBlock(dataWords, offset);
			                }

			                // Remove processed words
			                processedWords = dataWords.splice(0, nWordsReady);
			                data.sigBytes -= nBytesReady;
			            }

			            // Return processed words
			            return new WordArray.init(processedWords, nBytesReady);
			        },

			        /**
			         * Creates a copy of this object.
			         *
			         * @return {Object} The clone.
			         *
			         * @example
			         *
			         *     var clone = bufferedBlockAlgorithm.clone();
			         */
			        clone: function () {
			            var clone = Base.clone.call(this);
			            clone._data = this._data.clone();

			            return clone;
			        },

			        _minBufferSize: 0
			    });

			    /**
			     * Abstract hasher template.
			     *
			     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
			     */
			    C_lib.Hasher = BufferedBlockAlgorithm.extend({
			        /**
			         * Configuration options.
			         */
			        cfg: Base.extend(),

			        /**
			         * Initializes a newly created hasher.
			         *
			         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
			         *
			         * @example
			         *
			         *     var hasher = CryptoJS.algo.SHA256.create();
			         */
			        init: function (cfg) {
			            // Apply config defaults
			            this.cfg = this.cfg.extend(cfg);

			            // Set initial values
			            this.reset();
			        },

			        /**
			         * Resets this hasher to its initial state.
			         *
			         * @example
			         *
			         *     hasher.reset();
			         */
			        reset: function () {
			            // Reset data buffer
			            BufferedBlockAlgorithm.reset.call(this);

			            // Perform concrete-hasher logic
			            this._doReset();
			        },

			        /**
			         * Updates this hasher with a message.
			         *
			         * @param {WordArray|string} messageUpdate The message to append.
			         *
			         * @return {Hasher} This hasher.
			         *
			         * @example
			         *
			         *     hasher.update('message');
			         *     hasher.update(wordArray);
			         */
			        update: function (messageUpdate) {
			            // Append
			            this._append(messageUpdate);

			            // Update the hash
			            this._process();

			            // Chainable
			            return this;
			        },

			        /**
			         * Finalizes the hash computation.
			         * Note that the finalize operation is effectively a destructive, read-once operation.
			         *
			         * @param {WordArray|string} messageUpdate (Optional) A final message update.
			         *
			         * @return {WordArray} The hash.
			         *
			         * @example
			         *
			         *     var hash = hasher.finalize();
			         *     var hash = hasher.finalize('message');
			         *     var hash = hasher.finalize(wordArray);
			         */
			        finalize: function (messageUpdate) {
			            // Final message update
			            if (messageUpdate) {
			                this._append(messageUpdate);
			            }

			            // Perform concrete-hasher logic
			            var hash = this._doFinalize();

			            return hash;
			        },

			        blockSize: 512/32,

			        /**
			         * Creates a shortcut function to a hasher's object interface.
			         *
			         * @param {Hasher} hasher The hasher to create a helper for.
			         *
			         * @return {Function} The shortcut function.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
			         */
			        _createHelper: function (hasher) {
			            return function (message, cfg) {
			                return new hasher.init(cfg).finalize(message);
			            };
			        },

			        /**
			         * Creates a shortcut function to the HMAC's object interface.
			         *
			         * @param {Hasher} hasher The hasher to use in this HMAC helper.
			         *
			         * @return {Function} The shortcut function.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
			         */
			        _createHmacHelper: function (hasher) {
			            return function (message, key) {
			                return new C_algo.HMAC.init(hasher, key).finalize(message);
			            };
			        }
			    });

			    /**
			     * Algorithm namespace.
			     */
			    var C_algo = C.algo = {};

			    return C;
			}(Math));


			return CryptoJS;

		})); 
	} (core$1));
	return core$1.exports;
}

var x64Core$1 = {exports: {}};

var x64Core = x64Core$1.exports;

var hasRequiredX64Core;

function requireX64Core () {
	if (hasRequiredX64Core) return x64Core$1.exports;
	hasRequiredX64Core = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(x64Core, function (CryptoJS) {

			(function (undefined$1) {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var Base = C_lib.Base;
			    var X32WordArray = C_lib.WordArray;

			    /**
			     * x64 namespace.
			     */
			    var C_x64 = C.x64 = {};

			    /**
			     * A 64-bit word.
			     */
			    C_x64.Word = Base.extend({
			        /**
			         * Initializes a newly created 64-bit word.
			         *
			         * @param {number} high The high 32 bits.
			         * @param {number} low The low 32 bits.
			         *
			         * @example
			         *
			         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
			         */
			        init: function (high, low) {
			            this.high = high;
			            this.low = low;
			        }

			        /**
			         * Bitwise NOTs this word.
			         *
			         * @return {X64Word} A new x64-Word object after negating.
			         *
			         * @example
			         *
			         *     var negated = x64Word.not();
			         */
			        // not: function () {
			            // var high = ~this.high;
			            // var low = ~this.low;

			            // return X64Word.create(high, low);
			        // },

			        /**
			         * Bitwise ANDs this word with the passed word.
			         *
			         * @param {X64Word} word The x64-Word to AND with this word.
			         *
			         * @return {X64Word} A new x64-Word object after ANDing.
			         *
			         * @example
			         *
			         *     var anded = x64Word.and(anotherX64Word);
			         */
			        // and: function (word) {
			            // var high = this.high & word.high;
			            // var low = this.low & word.low;

			            // return X64Word.create(high, low);
			        // },

			        /**
			         * Bitwise ORs this word with the passed word.
			         *
			         * @param {X64Word} word The x64-Word to OR with this word.
			         *
			         * @return {X64Word} A new x64-Word object after ORing.
			         *
			         * @example
			         *
			         *     var ored = x64Word.or(anotherX64Word);
			         */
			        // or: function (word) {
			            // var high = this.high | word.high;
			            // var low = this.low | word.low;

			            // return X64Word.create(high, low);
			        // },

			        /**
			         * Bitwise XORs this word with the passed word.
			         *
			         * @param {X64Word} word The x64-Word to XOR with this word.
			         *
			         * @return {X64Word} A new x64-Word object after XORing.
			         *
			         * @example
			         *
			         *     var xored = x64Word.xor(anotherX64Word);
			         */
			        // xor: function (word) {
			            // var high = this.high ^ word.high;
			            // var low = this.low ^ word.low;

			            // return X64Word.create(high, low);
			        // },

			        /**
			         * Shifts this word n bits to the left.
			         *
			         * @param {number} n The number of bits to shift.
			         *
			         * @return {X64Word} A new x64-Word object after shifting.
			         *
			         * @example
			         *
			         *     var shifted = x64Word.shiftL(25);
			         */
			        // shiftL: function (n) {
			            // if (n < 32) {
			                // var high = (this.high << n) | (this.low >>> (32 - n));
			                // var low = this.low << n;
			            // } else {
			                // var high = this.low << (n - 32);
			                // var low = 0;
			            // }

			            // return X64Word.create(high, low);
			        // },

			        /**
			         * Shifts this word n bits to the right.
			         *
			         * @param {number} n The number of bits to shift.
			         *
			         * @return {X64Word} A new x64-Word object after shifting.
			         *
			         * @example
			         *
			         *     var shifted = x64Word.shiftR(7);
			         */
			        // shiftR: function (n) {
			            // if (n < 32) {
			                // var low = (this.low >>> n) | (this.high << (32 - n));
			                // var high = this.high >>> n;
			            // } else {
			                // var low = this.high >>> (n - 32);
			                // var high = 0;
			            // }

			            // return X64Word.create(high, low);
			        // },

			        /**
			         * Rotates this word n bits to the left.
			         *
			         * @param {number} n The number of bits to rotate.
			         *
			         * @return {X64Word} A new x64-Word object after rotating.
			         *
			         * @example
			         *
			         *     var rotated = x64Word.rotL(25);
			         */
			        // rotL: function (n) {
			            // return this.shiftL(n).or(this.shiftR(64 - n));
			        // },

			        /**
			         * Rotates this word n bits to the right.
			         *
			         * @param {number} n The number of bits to rotate.
			         *
			         * @return {X64Word} A new x64-Word object after rotating.
			         *
			         * @example
			         *
			         *     var rotated = x64Word.rotR(7);
			         */
			        // rotR: function (n) {
			            // return this.shiftR(n).or(this.shiftL(64 - n));
			        // },

			        /**
			         * Adds this word with the passed word.
			         *
			         * @param {X64Word} word The x64-Word to add with this word.
			         *
			         * @return {X64Word} A new x64-Word object after adding.
			         *
			         * @example
			         *
			         *     var added = x64Word.add(anotherX64Word);
			         */
			        // add: function (word) {
			            // var low = (this.low + word.low) | 0;
			            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
			            // var high = (this.high + word.high + carry) | 0;

			            // return X64Word.create(high, low);
			        // }
			    });

			    /**
			     * An array of 64-bit words.
			     *
			     * @property {Array} words The array of CryptoJS.x64.Word objects.
			     * @property {number} sigBytes The number of significant bytes in this word array.
			     */
			    C_x64.WordArray = Base.extend({
			        /**
			         * Initializes a newly created word array.
			         *
			         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
			         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.x64.WordArray.create();
			         *
			         *     var wordArray = CryptoJS.x64.WordArray.create([
			         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
			         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
			         *     ]);
			         *
			         *     var wordArray = CryptoJS.x64.WordArray.create([
			         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
			         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
			         *     ], 10);
			         */
			        init: function (words, sigBytes) {
			            words = this.words = words || [];

			            if (sigBytes != undefined$1) {
			                this.sigBytes = sigBytes;
			            } else {
			                this.sigBytes = words.length * 8;
			            }
			        },

			        /**
			         * Converts this 64-bit word array to a 32-bit word array.
			         *
			         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
			         *
			         * @example
			         *
			         *     var x32WordArray = x64WordArray.toX32();
			         */
			        toX32: function () {
			            // Shortcuts
			            var x64Words = this.words;
			            var x64WordsLength = x64Words.length;

			            // Convert
			            var x32Words = [];
			            for (var i = 0; i < x64WordsLength; i++) {
			                var x64Word = x64Words[i];
			                x32Words.push(x64Word.high);
			                x32Words.push(x64Word.low);
			            }

			            return X32WordArray.create(x32Words, this.sigBytes);
			        },

			        /**
			         * Creates a copy of this word array.
			         *
			         * @return {X64WordArray} The clone.
			         *
			         * @example
			         *
			         *     var clone = x64WordArray.clone();
			         */
			        clone: function () {
			            var clone = Base.clone.call(this);

			            // Clone "words" array
			            var words = clone.words = this.words.slice(0);

			            // Clone each X64Word object
			            var wordsLength = words.length;
			            for (var i = 0; i < wordsLength; i++) {
			                words[i] = words[i].clone();
			            }

			            return clone;
			        }
			    });
			}());


			return CryptoJS;

		})); 
	} (x64Core$1));
	return x64Core$1.exports;
}

var libTypedarrays$1 = {exports: {}};

var libTypedarrays = libTypedarrays$1.exports;

var hasRequiredLibTypedarrays;

function requireLibTypedarrays () {
	if (hasRequiredLibTypedarrays) return libTypedarrays$1.exports;
	hasRequiredLibTypedarrays = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(libTypedarrays, function (CryptoJS) {

			(function () {
			    // Check if typed arrays are supported
			    if (typeof ArrayBuffer != 'function') {
			        return;
			    }

			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;

			    // Reference original init
			    var superInit = WordArray.init;

			    // Augment WordArray.init to handle typed arrays
			    var subInit = WordArray.init = function (typedArray) {
			        // Convert buffers to uint8
			        if (typedArray instanceof ArrayBuffer) {
			            typedArray = new Uint8Array(typedArray);
			        }

			        // Convert other array views to uint8
			        if (
			            typedArray instanceof Int8Array ||
			            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
			            typedArray instanceof Int16Array ||
			            typedArray instanceof Uint16Array ||
			            typedArray instanceof Int32Array ||
			            typedArray instanceof Uint32Array ||
			            typedArray instanceof Float32Array ||
			            typedArray instanceof Float64Array
			        ) {
			            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
			        }

			        // Handle Uint8Array
			        if (typedArray instanceof Uint8Array) {
			            // Shortcut
			            var typedArrayByteLength = typedArray.byteLength;

			            // Extract bytes
			            var words = [];
			            for (var i = 0; i < typedArrayByteLength; i++) {
			                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
			            }

			            // Initialize this word array
			            superInit.call(this, words, typedArrayByteLength);
			        } else {
			            // Else call normal init
			            superInit.apply(this, arguments);
			        }
			    };

			    subInit.prototype = WordArray;
			}());


			return CryptoJS.lib.WordArray;

		})); 
	} (libTypedarrays$1));
	return libTypedarrays$1.exports;
}

var encUtf16$1 = {exports: {}};

var encUtf16 = encUtf16$1.exports;

var hasRequiredEncUtf16;

function requireEncUtf16 () {
	if (hasRequiredEncUtf16) return encUtf16$1.exports;
	hasRequiredEncUtf16 = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(encUtf16, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var C_enc = C.enc;

			    /**
			     * UTF-16 BE encoding strategy.
			     */
			    C_enc.Utf16 = C_enc.Utf16BE = {
			        /**
			         * Converts a word array to a UTF-16 BE string.
			         *
			         * @param {WordArray} wordArray The word array.
			         *
			         * @return {string} The UTF-16 BE string.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
			         */
			        stringify: function (wordArray) {
			            // Shortcuts
			            var words = wordArray.words;
			            var sigBytes = wordArray.sigBytes;

			            // Convert
			            var utf16Chars = [];
			            for (var i = 0; i < sigBytes; i += 2) {
			                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
			                utf16Chars.push(String.fromCharCode(codePoint));
			            }

			            return utf16Chars.join('');
			        },

			        /**
			         * Converts a UTF-16 BE string to a word array.
			         *
			         * @param {string} utf16Str The UTF-16 BE string.
			         *
			         * @return {WordArray} The word array.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
			         */
			        parse: function (utf16Str) {
			            // Shortcut
			            var utf16StrLength = utf16Str.length;

			            // Convert
			            var words = [];
			            for (var i = 0; i < utf16StrLength; i++) {
			                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
			            }

			            return WordArray.create(words, utf16StrLength * 2);
			        }
			    };

			    /**
			     * UTF-16 LE encoding strategy.
			     */
			    C_enc.Utf16LE = {
			        /**
			         * Converts a word array to a UTF-16 LE string.
			         *
			         * @param {WordArray} wordArray The word array.
			         *
			         * @return {string} The UTF-16 LE string.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
			         */
			        stringify: function (wordArray) {
			            // Shortcuts
			            var words = wordArray.words;
			            var sigBytes = wordArray.sigBytes;

			            // Convert
			            var utf16Chars = [];
			            for (var i = 0; i < sigBytes; i += 2) {
			                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
			                utf16Chars.push(String.fromCharCode(codePoint));
			            }

			            return utf16Chars.join('');
			        },

			        /**
			         * Converts a UTF-16 LE string to a word array.
			         *
			         * @param {string} utf16Str The UTF-16 LE string.
			         *
			         * @return {WordArray} The word array.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
			         */
			        parse: function (utf16Str) {
			            // Shortcut
			            var utf16StrLength = utf16Str.length;

			            // Convert
			            var words = [];
			            for (var i = 0; i < utf16StrLength; i++) {
			                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
			            }

			            return WordArray.create(words, utf16StrLength * 2);
			        }
			    };

			    function swapEndian(word) {
			        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
			    }
			}());


			return CryptoJS.enc.Utf16;

		})); 
	} (encUtf16$1));
	return encUtf16$1.exports;
}

var encBase64$1 = {exports: {}};

var encBase64 = encBase64$1.exports;

var hasRequiredEncBase64;

function requireEncBase64 () {
	if (hasRequiredEncBase64) return encBase64$1.exports;
	hasRequiredEncBase64 = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(encBase64, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var C_enc = C.enc;

			    /**
			     * Base64 encoding strategy.
			     */
			    C_enc.Base64 = {
			        /**
			         * Converts a word array to a Base64 string.
			         *
			         * @param {WordArray} wordArray The word array.
			         *
			         * @return {string} The Base64 string.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
			         */
			        stringify: function (wordArray) {
			            // Shortcuts
			            var words = wordArray.words;
			            var sigBytes = wordArray.sigBytes;
			            var map = this._map;

			            // Clamp excess bits
			            wordArray.clamp();

			            // Convert
			            var base64Chars = [];
			            for (var i = 0; i < sigBytes; i += 3) {
			                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
			                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
			                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

			                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

			                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
			                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
			                }
			            }

			            // Add padding
			            var paddingChar = map.charAt(64);
			            if (paddingChar) {
			                while (base64Chars.length % 4) {
			                    base64Chars.push(paddingChar);
			                }
			            }

			            return base64Chars.join('');
			        },

			        /**
			         * Converts a Base64 string to a word array.
			         *
			         * @param {string} base64Str The Base64 string.
			         *
			         * @return {WordArray} The word array.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
			         */
			        parse: function (base64Str) {
			            // Shortcuts
			            var base64StrLength = base64Str.length;
			            var map = this._map;
			            var reverseMap = this._reverseMap;

			            if (!reverseMap) {
			                    reverseMap = this._reverseMap = [];
			                    for (var j = 0; j < map.length; j++) {
			                        reverseMap[map.charCodeAt(j)] = j;
			                    }
			            }

			            // Ignore padding
			            var paddingChar = map.charAt(64);
			            if (paddingChar) {
			                var paddingIndex = base64Str.indexOf(paddingChar);
			                if (paddingIndex !== -1) {
			                    base64StrLength = paddingIndex;
			                }
			            }

			            // Convert
			            return parseLoop(base64Str, base64StrLength, reverseMap);

			        },

			        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
			    };

			    function parseLoop(base64Str, base64StrLength, reverseMap) {
			      var words = [];
			      var nBytes = 0;
			      for (var i = 0; i < base64StrLength; i++) {
			          if (i % 4) {
			              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
			              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
			              var bitsCombined = bits1 | bits2;
			              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
			              nBytes++;
			          }
			      }
			      return WordArray.create(words, nBytes);
			    }
			}());


			return CryptoJS.enc.Base64;

		})); 
	} (encBase64$1));
	return encBase64$1.exports;
}

var encBase64url$1 = {exports: {}};

var encBase64url = encBase64url$1.exports;

var hasRequiredEncBase64url;

function requireEncBase64url () {
	if (hasRequiredEncBase64url) return encBase64url$1.exports;
	hasRequiredEncBase64url = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(encBase64url, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var C_enc = C.enc;

			    /**
			     * Base64url encoding strategy.
			     */
			    C_enc.Base64url = {
			        /**
			         * Converts a word array to a Base64url string.
			         *
			         * @param {WordArray} wordArray The word array.
			         *
			         * @param {boolean} urlSafe Whether to use url safe
			         *
			         * @return {string} The Base64url string.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
			         */
			        stringify: function (wordArray, urlSafe) {
			            if (urlSafe === undefined) {
			                urlSafe = true;
			            }
			            // Shortcuts
			            var words = wordArray.words;
			            var sigBytes = wordArray.sigBytes;
			            var map = urlSafe ? this._safe_map : this._map;

			            // Clamp excess bits
			            wordArray.clamp();

			            // Convert
			            var base64Chars = [];
			            for (var i = 0; i < sigBytes; i += 3) {
			                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
			                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
			                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

			                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

			                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
			                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
			                }
			            }

			            // Add padding
			            var paddingChar = map.charAt(64);
			            if (paddingChar) {
			                while (base64Chars.length % 4) {
			                    base64Chars.push(paddingChar);
			                }
			            }

			            return base64Chars.join('');
			        },

			        /**
			         * Converts a Base64url string to a word array.
			         *
			         * @param {string} base64Str The Base64url string.
			         *
			         * @param {boolean} urlSafe Whether to use url safe
			         *
			         * @return {WordArray} The word array.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
			         */
			        parse: function (base64Str, urlSafe) {
			            if (urlSafe === undefined) {
			                urlSafe = true;
			            }

			            // Shortcuts
			            var base64StrLength = base64Str.length;
			            var map = urlSafe ? this._safe_map : this._map;
			            var reverseMap = this._reverseMap;

			            if (!reverseMap) {
			                reverseMap = this._reverseMap = [];
			                for (var j = 0; j < map.length; j++) {
			                    reverseMap[map.charCodeAt(j)] = j;
			                }
			            }

			            // Ignore padding
			            var paddingChar = map.charAt(64);
			            if (paddingChar) {
			                var paddingIndex = base64Str.indexOf(paddingChar);
			                if (paddingIndex !== -1) {
			                    base64StrLength = paddingIndex;
			                }
			            }

			            // Convert
			            return parseLoop(base64Str, base64StrLength, reverseMap);

			        },

			        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
			        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
			    };

			    function parseLoop(base64Str, base64StrLength, reverseMap) {
			        var words = [];
			        var nBytes = 0;
			        for (var i = 0; i < base64StrLength; i++) {
			            if (i % 4) {
			                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
			                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
			                var bitsCombined = bits1 | bits2;
			                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
			                nBytes++;
			            }
			        }
			        return WordArray.create(words, nBytes);
			    }
			}());


			return CryptoJS.enc.Base64url;

		})); 
	} (encBase64url$1));
	return encBase64url$1.exports;
}

var md5$1 = {exports: {}};

var md5 = md5$1.exports;

var hasRequiredMd5;

function requireMd5 () {
	if (hasRequiredMd5) return md5$1.exports;
	hasRequiredMd5 = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(md5, function (CryptoJS) {

			(function (Math) {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var Hasher = C_lib.Hasher;
			    var C_algo = C.algo;

			    // Constants table
			    var T = [];

			    // Compute constants
			    (function () {
			        for (var i = 0; i < 64; i++) {
			            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
			        }
			    }());

			    /**
			     * MD5 hash algorithm.
			     */
			    var MD5 = C_algo.MD5 = Hasher.extend({
			        _doReset: function () {
			            this._hash = new WordArray.init([
			                0x67452301, 0xefcdab89,
			                0x98badcfe, 0x10325476
			            ]);
			        },

			        _doProcessBlock: function (M, offset) {
			            // Swap endian
			            for (var i = 0; i < 16; i++) {
			                // Shortcuts
			                var offset_i = offset + i;
			                var M_offset_i = M[offset_i];

			                M[offset_i] = (
			                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
			                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
			                );
			            }

			            // Shortcuts
			            var H = this._hash.words;

			            var M_offset_0  = M[offset + 0];
			            var M_offset_1  = M[offset + 1];
			            var M_offset_2  = M[offset + 2];
			            var M_offset_3  = M[offset + 3];
			            var M_offset_4  = M[offset + 4];
			            var M_offset_5  = M[offset + 5];
			            var M_offset_6  = M[offset + 6];
			            var M_offset_7  = M[offset + 7];
			            var M_offset_8  = M[offset + 8];
			            var M_offset_9  = M[offset + 9];
			            var M_offset_10 = M[offset + 10];
			            var M_offset_11 = M[offset + 11];
			            var M_offset_12 = M[offset + 12];
			            var M_offset_13 = M[offset + 13];
			            var M_offset_14 = M[offset + 14];
			            var M_offset_15 = M[offset + 15];

			            // Working variables
			            var a = H[0];
			            var b = H[1];
			            var c = H[2];
			            var d = H[3];

			            // Computation
			            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
			            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
			            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
			            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
			            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
			            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
			            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
			            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
			            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
			            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
			            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
			            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
			            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
			            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
			            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
			            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

			            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
			            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
			            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
			            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
			            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
			            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
			            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
			            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
			            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
			            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
			            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
			            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
			            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
			            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
			            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
			            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

			            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
			            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
			            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
			            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
			            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
			            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
			            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
			            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
			            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
			            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
			            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
			            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
			            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
			            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
			            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
			            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

			            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
			            d = II(d, a, b, c, M_offset_7,  10, T[49]);
			            c = II(c, d, a, b, M_offset_14, 15, T[50]);
			            b = II(b, c, d, a, M_offset_5,  21, T[51]);
			            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
			            d = II(d, a, b, c, M_offset_3,  10, T[53]);
			            c = II(c, d, a, b, M_offset_10, 15, T[54]);
			            b = II(b, c, d, a, M_offset_1,  21, T[55]);
			            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
			            d = II(d, a, b, c, M_offset_15, 10, T[57]);
			            c = II(c, d, a, b, M_offset_6,  15, T[58]);
			            b = II(b, c, d, a, M_offset_13, 21, T[59]);
			            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
			            d = II(d, a, b, c, M_offset_11, 10, T[61]);
			            c = II(c, d, a, b, M_offset_2,  15, T[62]);
			            b = II(b, c, d, a, M_offset_9,  21, T[63]);

			            // Intermediate hash value
			            H[0] = (H[0] + a) | 0;
			            H[1] = (H[1] + b) | 0;
			            H[2] = (H[2] + c) | 0;
			            H[3] = (H[3] + d) | 0;
			        },

			        _doFinalize: function () {
			            // Shortcuts
			            var data = this._data;
			            var dataWords = data.words;

			            var nBitsTotal = this._nDataBytes * 8;
			            var nBitsLeft = data.sigBytes * 8;

			            // Add padding
			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

			            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
			            var nBitsTotalL = nBitsTotal;
			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
			                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
			                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
			            );
			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
			                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
			                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
			            );

			            data.sigBytes = (dataWords.length + 1) * 4;

			            // Hash final blocks
			            this._process();

			            // Shortcuts
			            var hash = this._hash;
			            var H = hash.words;

			            // Swap endian
			            for (var i = 0; i < 4; i++) {
			                // Shortcut
			                var H_i = H[i];

			                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
			                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
			            }

			            // Return final computed hash
			            return hash;
			        },

			        clone: function () {
			            var clone = Hasher.clone.call(this);
			            clone._hash = this._hash.clone();

			            return clone;
			        }
			    });

			    function FF(a, b, c, d, x, s, t) {
			        var n = a + ((b & c) | (~b & d)) + x + t;
			        return ((n << s) | (n >>> (32 - s))) + b;
			    }

			    function GG(a, b, c, d, x, s, t) {
			        var n = a + ((b & d) | (c & ~d)) + x + t;
			        return ((n << s) | (n >>> (32 - s))) + b;
			    }

			    function HH(a, b, c, d, x, s, t) {
			        var n = a + (b ^ c ^ d) + x + t;
			        return ((n << s) | (n >>> (32 - s))) + b;
			    }

			    function II(a, b, c, d, x, s, t) {
			        var n = a + (c ^ (b | ~d)) + x + t;
			        return ((n << s) | (n >>> (32 - s))) + b;
			    }

			    /**
			     * Shortcut function to the hasher's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     *
			     * @return {WordArray} The hash.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hash = CryptoJS.MD5('message');
			     *     var hash = CryptoJS.MD5(wordArray);
			     */
			    C.MD5 = Hasher._createHelper(MD5);

			    /**
			     * Shortcut function to the HMAC's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     * @param {WordArray|string} key The secret key.
			     *
			     * @return {WordArray} The HMAC.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hmac = CryptoJS.HmacMD5(message, key);
			     */
			    C.HmacMD5 = Hasher._createHmacHelper(MD5);
			}(Math));


			return CryptoJS.MD5;

		})); 
	} (md5$1));
	return md5$1.exports;
}

var sha1$1 = {exports: {}};

var sha1 = sha1$1.exports;

var hasRequiredSha1;

function requireSha1 () {
	if (hasRequiredSha1) return sha1$1.exports;
	hasRequiredSha1 = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(sha1, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var Hasher = C_lib.Hasher;
			    var C_algo = C.algo;

			    // Reusable object
			    var W = [];

			    /**
			     * SHA-1 hash algorithm.
			     */
			    var SHA1 = C_algo.SHA1 = Hasher.extend({
			        _doReset: function () {
			            this._hash = new WordArray.init([
			                0x67452301, 0xefcdab89,
			                0x98badcfe, 0x10325476,
			                0xc3d2e1f0
			            ]);
			        },

			        _doProcessBlock: function (M, offset) {
			            // Shortcut
			            var H = this._hash.words;

			            // Working variables
			            var a = H[0];
			            var b = H[1];
			            var c = H[2];
			            var d = H[3];
			            var e = H[4];

			            // Computation
			            for (var i = 0; i < 80; i++) {
			                if (i < 16) {
			                    W[i] = M[offset + i] | 0;
			                } else {
			                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
			                    W[i] = (n << 1) | (n >>> 31);
			                }

			                var t = ((a << 5) | (a >>> 27)) + e + W[i];
			                if (i < 20) {
			                    t += ((b & c) | (~b & d)) + 0x5a827999;
			                } else if (i < 40) {
			                    t += (b ^ c ^ d) + 0x6ed9eba1;
			                } else if (i < 60) {
			                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
			                } else /* if (i < 80) */ {
			                    t += (b ^ c ^ d) - 0x359d3e2a;
			                }

			                e = d;
			                d = c;
			                c = (b << 30) | (b >>> 2);
			                b = a;
			                a = t;
			            }

			            // Intermediate hash value
			            H[0] = (H[0] + a) | 0;
			            H[1] = (H[1] + b) | 0;
			            H[2] = (H[2] + c) | 0;
			            H[3] = (H[3] + d) | 0;
			            H[4] = (H[4] + e) | 0;
			        },

			        _doFinalize: function () {
			            // Shortcuts
			            var data = this._data;
			            var dataWords = data.words;

			            var nBitsTotal = this._nDataBytes * 8;
			            var nBitsLeft = data.sigBytes * 8;

			            // Add padding
			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
			            data.sigBytes = dataWords.length * 4;

			            // Hash final blocks
			            this._process();

			            // Return final computed hash
			            return this._hash;
			        },

			        clone: function () {
			            var clone = Hasher.clone.call(this);
			            clone._hash = this._hash.clone();

			            return clone;
			        }
			    });

			    /**
			     * Shortcut function to the hasher's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     *
			     * @return {WordArray} The hash.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hash = CryptoJS.SHA1('message');
			     *     var hash = CryptoJS.SHA1(wordArray);
			     */
			    C.SHA1 = Hasher._createHelper(SHA1);

			    /**
			     * Shortcut function to the HMAC's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     * @param {WordArray|string} key The secret key.
			     *
			     * @return {WordArray} The HMAC.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hmac = CryptoJS.HmacSHA1(message, key);
			     */
			    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
			}());


			return CryptoJS.SHA1;

		})); 
	} (sha1$1));
	return sha1$1.exports;
}

var sha256$1 = {exports: {}};

var sha256 = sha256$1.exports;

var hasRequiredSha256;

function requireSha256 () {
	if (hasRequiredSha256) return sha256$1.exports;
	hasRequiredSha256 = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(sha256, function (CryptoJS) {

			(function (Math) {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var Hasher = C_lib.Hasher;
			    var C_algo = C.algo;

			    // Initialization and round constants tables
			    var H = [];
			    var K = [];

			    // Compute constants
			    (function () {
			        function isPrime(n) {
			            var sqrtN = Math.sqrt(n);
			            for (var factor = 2; factor <= sqrtN; factor++) {
			                if (!(n % factor)) {
			                    return false;
			                }
			            }

			            return true;
			        }

			        function getFractionalBits(n) {
			            return ((n - (n | 0)) * 0x100000000) | 0;
			        }

			        var n = 2;
			        var nPrime = 0;
			        while (nPrime < 64) {
			            if (isPrime(n)) {
			                if (nPrime < 8) {
			                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
			                }
			                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

			                nPrime++;
			            }

			            n++;
			        }
			    }());

			    // Reusable object
			    var W = [];

			    /**
			     * SHA-256 hash algorithm.
			     */
			    var SHA256 = C_algo.SHA256 = Hasher.extend({
			        _doReset: function () {
			            this._hash = new WordArray.init(H.slice(0));
			        },

			        _doProcessBlock: function (M, offset) {
			            // Shortcut
			            var H = this._hash.words;

			            // Working variables
			            var a = H[0];
			            var b = H[1];
			            var c = H[2];
			            var d = H[3];
			            var e = H[4];
			            var f = H[5];
			            var g = H[6];
			            var h = H[7];

			            // Computation
			            for (var i = 0; i < 64; i++) {
			                if (i < 16) {
			                    W[i] = M[offset + i] | 0;
			                } else {
			                    var gamma0x = W[i - 15];
			                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
			                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
			                                   (gamma0x >>> 3);

			                    var gamma1x = W[i - 2];
			                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
			                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
			                                   (gamma1x >>> 10);

			                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
			                }

			                var ch  = (e & f) ^ (~e & g);
			                var maj = (a & b) ^ (a & c) ^ (b & c);

			                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
			                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

			                var t1 = h + sigma1 + ch + K[i] + W[i];
			                var t2 = sigma0 + maj;

			                h = g;
			                g = f;
			                f = e;
			                e = (d + t1) | 0;
			                d = c;
			                c = b;
			                b = a;
			                a = (t1 + t2) | 0;
			            }

			            // Intermediate hash value
			            H[0] = (H[0] + a) | 0;
			            H[1] = (H[1] + b) | 0;
			            H[2] = (H[2] + c) | 0;
			            H[3] = (H[3] + d) | 0;
			            H[4] = (H[4] + e) | 0;
			            H[5] = (H[5] + f) | 0;
			            H[6] = (H[6] + g) | 0;
			            H[7] = (H[7] + h) | 0;
			        },

			        _doFinalize: function () {
			            // Shortcuts
			            var data = this._data;
			            var dataWords = data.words;

			            var nBitsTotal = this._nDataBytes * 8;
			            var nBitsLeft = data.sigBytes * 8;

			            // Add padding
			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
			            data.sigBytes = dataWords.length * 4;

			            // Hash final blocks
			            this._process();

			            // Return final computed hash
			            return this._hash;
			        },

			        clone: function () {
			            var clone = Hasher.clone.call(this);
			            clone._hash = this._hash.clone();

			            return clone;
			        }
			    });

			    /**
			     * Shortcut function to the hasher's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     *
			     * @return {WordArray} The hash.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hash = CryptoJS.SHA256('message');
			     *     var hash = CryptoJS.SHA256(wordArray);
			     */
			    C.SHA256 = Hasher._createHelper(SHA256);

			    /**
			     * Shortcut function to the HMAC's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     * @param {WordArray|string} key The secret key.
			     *
			     * @return {WordArray} The HMAC.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hmac = CryptoJS.HmacSHA256(message, key);
			     */
			    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
			}(Math));


			return CryptoJS.SHA256;

		})); 
	} (sha256$1));
	return sha256$1.exports;
}

var sha224$1 = {exports: {}};

var sha224 = sha224$1.exports;

var hasRequiredSha224;

function requireSha224 () {
	if (hasRequiredSha224) return sha224$1.exports;
	hasRequiredSha224 = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireSha256());
			}
		}(sha224, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var C_algo = C.algo;
			    var SHA256 = C_algo.SHA256;

			    /**
			     * SHA-224 hash algorithm.
			     */
			    var SHA224 = C_algo.SHA224 = SHA256.extend({
			        _doReset: function () {
			            this._hash = new WordArray.init([
			                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
			                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
			            ]);
			        },

			        _doFinalize: function () {
			            var hash = SHA256._doFinalize.call(this);

			            hash.sigBytes -= 4;

			            return hash;
			        }
			    });

			    /**
			     * Shortcut function to the hasher's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     *
			     * @return {WordArray} The hash.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hash = CryptoJS.SHA224('message');
			     *     var hash = CryptoJS.SHA224(wordArray);
			     */
			    C.SHA224 = SHA256._createHelper(SHA224);

			    /**
			     * Shortcut function to the HMAC's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     * @param {WordArray|string} key The secret key.
			     *
			     * @return {WordArray} The HMAC.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hmac = CryptoJS.HmacSHA224(message, key);
			     */
			    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
			}());


			return CryptoJS.SHA224;

		})); 
	} (sha224$1));
	return sha224$1.exports;
}

var sha512$1 = {exports: {}};

var sha512 = sha512$1.exports;

var hasRequiredSha512;

function requireSha512 () {
	if (hasRequiredSha512) return sha512$1.exports;
	hasRequiredSha512 = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireX64Core());
			}
		}(sha512, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var Hasher = C_lib.Hasher;
			    var C_x64 = C.x64;
			    var X64Word = C_x64.Word;
			    var X64WordArray = C_x64.WordArray;
			    var C_algo = C.algo;

			    function X64Word_create() {
			        return X64Word.create.apply(X64Word, arguments);
			    }

			    // Constants
			    var K = [
			        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
			        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
			        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
			        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
			        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
			        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
			        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
			        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
			        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
			        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
			        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
			        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
			        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
			        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
			        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
			        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
			        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
			        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
			        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
			        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
			        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
			        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
			        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
			        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
			        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
			        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
			        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
			        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
			        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
			        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
			        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
			        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
			        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
			        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
			        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
			        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
			        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
			        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
			        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
			        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
			    ];

			    // Reusable objects
			    var W = [];
			    (function () {
			        for (var i = 0; i < 80; i++) {
			            W[i] = X64Word_create();
			        }
			    }());

			    /**
			     * SHA-512 hash algorithm.
			     */
			    var SHA512 = C_algo.SHA512 = Hasher.extend({
			        _doReset: function () {
			            this._hash = new X64WordArray.init([
			                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
			                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
			                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
			                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
			            ]);
			        },

			        _doProcessBlock: function (M, offset) {
			            // Shortcuts
			            var H = this._hash.words;

			            var H0 = H[0];
			            var H1 = H[1];
			            var H2 = H[2];
			            var H3 = H[3];
			            var H4 = H[4];
			            var H5 = H[5];
			            var H6 = H[6];
			            var H7 = H[7];

			            var H0h = H0.high;
			            var H0l = H0.low;
			            var H1h = H1.high;
			            var H1l = H1.low;
			            var H2h = H2.high;
			            var H2l = H2.low;
			            var H3h = H3.high;
			            var H3l = H3.low;
			            var H4h = H4.high;
			            var H4l = H4.low;
			            var H5h = H5.high;
			            var H5l = H5.low;
			            var H6h = H6.high;
			            var H6l = H6.low;
			            var H7h = H7.high;
			            var H7l = H7.low;

			            // Working variables
			            var ah = H0h;
			            var al = H0l;
			            var bh = H1h;
			            var bl = H1l;
			            var ch = H2h;
			            var cl = H2l;
			            var dh = H3h;
			            var dl = H3l;
			            var eh = H4h;
			            var el = H4l;
			            var fh = H5h;
			            var fl = H5l;
			            var gh = H6h;
			            var gl = H6l;
			            var hh = H7h;
			            var hl = H7l;

			            // Rounds
			            for (var i = 0; i < 80; i++) {
			                var Wil;
			                var Wih;

			                // Shortcut
			                var Wi = W[i];

			                // Extend message
			                if (i < 16) {
			                    Wih = Wi.high = M[offset + i * 2]     | 0;
			                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
			                } else {
			                    // Gamma0
			                    var gamma0x  = W[i - 15];
			                    var gamma0xh = gamma0x.high;
			                    var gamma0xl = gamma0x.low;
			                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
			                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

			                    // Gamma1
			                    var gamma1x  = W[i - 2];
			                    var gamma1xh = gamma1x.high;
			                    var gamma1xl = gamma1x.low;
			                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
			                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

			                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
			                    var Wi7  = W[i - 7];
			                    var Wi7h = Wi7.high;
			                    var Wi7l = Wi7.low;

			                    var Wi16  = W[i - 16];
			                    var Wi16h = Wi16.high;
			                    var Wi16l = Wi16.low;

			                    Wil = gamma0l + Wi7l;
			                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
			                    Wil = Wil + gamma1l;
			                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
			                    Wil = Wil + Wi16l;
			                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

			                    Wi.high = Wih;
			                    Wi.low  = Wil;
			                }

			                var chh  = (eh & fh) ^ (~eh & gh);
			                var chl  = (el & fl) ^ (~el & gl);
			                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
			                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

			                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
			                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
			                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
			                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

			                // t1 = h + sigma1 + ch + K[i] + W[i]
			                var Ki  = K[i];
			                var Kih = Ki.high;
			                var Kil = Ki.low;

			                var t1l = hl + sigma1l;
			                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
			                var t1l = t1l + chl;
			                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
			                var t1l = t1l + Kil;
			                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
			                var t1l = t1l + Wil;
			                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

			                // t2 = sigma0 + maj
			                var t2l = sigma0l + majl;
			                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

			                // Update working variables
			                hh = gh;
			                hl = gl;
			                gh = fh;
			                gl = fl;
			                fh = eh;
			                fl = el;
			                el = (dl + t1l) | 0;
			                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
			                dh = ch;
			                dl = cl;
			                ch = bh;
			                cl = bl;
			                bh = ah;
			                bl = al;
			                al = (t1l + t2l) | 0;
			                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
			            }

			            // Intermediate hash value
			            H0l = H0.low  = (H0l + al);
			            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
			            H1l = H1.low  = (H1l + bl);
			            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
			            H2l = H2.low  = (H2l + cl);
			            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
			            H3l = H3.low  = (H3l + dl);
			            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
			            H4l = H4.low  = (H4l + el);
			            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
			            H5l = H5.low  = (H5l + fl);
			            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
			            H6l = H6.low  = (H6l + gl);
			            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
			            H7l = H7.low  = (H7l + hl);
			            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
			        },

			        _doFinalize: function () {
			            // Shortcuts
			            var data = this._data;
			            var dataWords = data.words;

			            var nBitsTotal = this._nDataBytes * 8;
			            var nBitsLeft = data.sigBytes * 8;

			            // Add padding
			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
			            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
			            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
			            data.sigBytes = dataWords.length * 4;

			            // Hash final blocks
			            this._process();

			            // Convert hash to 32-bit word array before returning
			            var hash = this._hash.toX32();

			            // Return final computed hash
			            return hash;
			        },

			        clone: function () {
			            var clone = Hasher.clone.call(this);
			            clone._hash = this._hash.clone();

			            return clone;
			        },

			        blockSize: 1024/32
			    });

			    /**
			     * Shortcut function to the hasher's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     *
			     * @return {WordArray} The hash.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hash = CryptoJS.SHA512('message');
			     *     var hash = CryptoJS.SHA512(wordArray);
			     */
			    C.SHA512 = Hasher._createHelper(SHA512);

			    /**
			     * Shortcut function to the HMAC's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     * @param {WordArray|string} key The secret key.
			     *
			     * @return {WordArray} The HMAC.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hmac = CryptoJS.HmacSHA512(message, key);
			     */
			    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
			}());


			return CryptoJS.SHA512;

		})); 
	} (sha512$1));
	return sha512$1.exports;
}

var sha384$1 = {exports: {}};

var sha384 = sha384$1.exports;

var hasRequiredSha384;

function requireSha384 () {
	if (hasRequiredSha384) return sha384$1.exports;
	hasRequiredSha384 = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireX64Core(), requireSha512());
			}
		}(sha384, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_x64 = C.x64;
			    var X64Word = C_x64.Word;
			    var X64WordArray = C_x64.WordArray;
			    var C_algo = C.algo;
			    var SHA512 = C_algo.SHA512;

			    /**
			     * SHA-384 hash algorithm.
			     */
			    var SHA384 = C_algo.SHA384 = SHA512.extend({
			        _doReset: function () {
			            this._hash = new X64WordArray.init([
			                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
			                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
			                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
			                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
			            ]);
			        },

			        _doFinalize: function () {
			            var hash = SHA512._doFinalize.call(this);

			            hash.sigBytes -= 16;

			            return hash;
			        }
			    });

			    /**
			     * Shortcut function to the hasher's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     *
			     * @return {WordArray} The hash.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hash = CryptoJS.SHA384('message');
			     *     var hash = CryptoJS.SHA384(wordArray);
			     */
			    C.SHA384 = SHA512._createHelper(SHA384);

			    /**
			     * Shortcut function to the HMAC's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     * @param {WordArray|string} key The secret key.
			     *
			     * @return {WordArray} The HMAC.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hmac = CryptoJS.HmacSHA384(message, key);
			     */
			    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
			}());


			return CryptoJS.SHA384;

		})); 
	} (sha384$1));
	return sha384$1.exports;
}

var sha3$1 = {exports: {}};

var sha3 = sha3$1.exports;

var hasRequiredSha3;

function requireSha3 () {
	if (hasRequiredSha3) return sha3$1.exports;
	hasRequiredSha3 = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireX64Core());
			}
		}(sha3, function (CryptoJS) {

			(function (Math) {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var Hasher = C_lib.Hasher;
			    var C_x64 = C.x64;
			    var X64Word = C_x64.Word;
			    var C_algo = C.algo;

			    // Constants tables
			    var RHO_OFFSETS = [];
			    var PI_INDEXES  = [];
			    var ROUND_CONSTANTS = [];

			    // Compute Constants
			    (function () {
			        // Compute rho offset constants
			        var x = 1, y = 0;
			        for (var t = 0; t < 24; t++) {
			            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

			            var newX = y % 5;
			            var newY = (2 * x + 3 * y) % 5;
			            x = newX;
			            y = newY;
			        }

			        // Compute pi index constants
			        for (var x = 0; x < 5; x++) {
			            for (var y = 0; y < 5; y++) {
			                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
			            }
			        }

			        // Compute round constants
			        var LFSR = 0x01;
			        for (var i = 0; i < 24; i++) {
			            var roundConstantMsw = 0;
			            var roundConstantLsw = 0;

			            for (var j = 0; j < 7; j++) {
			                if (LFSR & 0x01) {
			                    var bitPosition = (1 << j) - 1;
			                    if (bitPosition < 32) {
			                        roundConstantLsw ^= 1 << bitPosition;
			                    } else /* if (bitPosition >= 32) */ {
			                        roundConstantMsw ^= 1 << (bitPosition - 32);
			                    }
			                }

			                // Compute next LFSR
			                if (LFSR & 0x80) {
			                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
			                    LFSR = (LFSR << 1) ^ 0x71;
			                } else {
			                    LFSR <<= 1;
			                }
			            }

			            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
			        }
			    }());

			    // Reusable objects for temporary values
			    var T = [];
			    (function () {
			        for (var i = 0; i < 25; i++) {
			            T[i] = X64Word.create();
			        }
			    }());

			    /**
			     * SHA-3 hash algorithm.
			     */
			    var SHA3 = C_algo.SHA3 = Hasher.extend({
			        /**
			         * Configuration options.
			         *
			         * @property {number} outputLength
			         *   The desired number of bits in the output hash.
			         *   Only values permitted are: 224, 256, 384, 512.
			         *   Default: 512
			         */
			        cfg: Hasher.cfg.extend({
			            outputLength: 512
			        }),

			        _doReset: function () {
			            var state = this._state = [];
			            for (var i = 0; i < 25; i++) {
			                state[i] = new X64Word.init();
			            }

			            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
			        },

			        _doProcessBlock: function (M, offset) {
			            // Shortcuts
			            var state = this._state;
			            var nBlockSizeLanes = this.blockSize / 2;

			            // Absorb
			            for (var i = 0; i < nBlockSizeLanes; i++) {
			                // Shortcuts
			                var M2i  = M[offset + 2 * i];
			                var M2i1 = M[offset + 2 * i + 1];

			                // Swap endian
			                M2i = (
			                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
			                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
			                );
			                M2i1 = (
			                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
			                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
			                );

			                // Absorb message into state
			                var lane = state[i];
			                lane.high ^= M2i1;
			                lane.low  ^= M2i;
			            }

			            // Rounds
			            for (var round = 0; round < 24; round++) {
			                // Theta
			                for (var x = 0; x < 5; x++) {
			                    // Mix column lanes
			                    var tMsw = 0, tLsw = 0;
			                    for (var y = 0; y < 5; y++) {
			                        var lane = state[x + 5 * y];
			                        tMsw ^= lane.high;
			                        tLsw ^= lane.low;
			                    }

			                    // Temporary values
			                    var Tx = T[x];
			                    Tx.high = tMsw;
			                    Tx.low  = tLsw;
			                }
			                for (var x = 0; x < 5; x++) {
			                    // Shortcuts
			                    var Tx4 = T[(x + 4) % 5];
			                    var Tx1 = T[(x + 1) % 5];
			                    var Tx1Msw = Tx1.high;
			                    var Tx1Lsw = Tx1.low;

			                    // Mix surrounding columns
			                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
			                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
			                    for (var y = 0; y < 5; y++) {
			                        var lane = state[x + 5 * y];
			                        lane.high ^= tMsw;
			                        lane.low  ^= tLsw;
			                    }
			                }

			                // Rho Pi
			                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
			                    var tMsw;
			                    var tLsw;

			                    // Shortcuts
			                    var lane = state[laneIndex];
			                    var laneMsw = lane.high;
			                    var laneLsw = lane.low;
			                    var rhoOffset = RHO_OFFSETS[laneIndex];

			                    // Rotate lanes
			                    if (rhoOffset < 32) {
			                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
			                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
			                    } else /* if (rhoOffset >= 32) */ {
			                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
			                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
			                    }

			                    // Transpose lanes
			                    var TPiLane = T[PI_INDEXES[laneIndex]];
			                    TPiLane.high = tMsw;
			                    TPiLane.low  = tLsw;
			                }

			                // Rho pi at x = y = 0
			                var T0 = T[0];
			                var state0 = state[0];
			                T0.high = state0.high;
			                T0.low  = state0.low;

			                // Chi
			                for (var x = 0; x < 5; x++) {
			                    for (var y = 0; y < 5; y++) {
			                        // Shortcuts
			                        var laneIndex = x + 5 * y;
			                        var lane = state[laneIndex];
			                        var TLane = T[laneIndex];
			                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
			                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

			                        // Mix rows
			                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
			                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
			                    }
			                }

			                // Iota
			                var lane = state[0];
			                var roundConstant = ROUND_CONSTANTS[round];
			                lane.high ^= roundConstant.high;
			                lane.low  ^= roundConstant.low;
			            }
			        },

			        _doFinalize: function () {
			            // Shortcuts
			            var data = this._data;
			            var dataWords = data.words;
			            this._nDataBytes * 8;
			            var nBitsLeft = data.sigBytes * 8;
			            var blockSizeBits = this.blockSize * 32;

			            // Add padding
			            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
			            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
			            data.sigBytes = dataWords.length * 4;

			            // Hash final blocks
			            this._process();

			            // Shortcuts
			            var state = this._state;
			            var outputLengthBytes = this.cfg.outputLength / 8;
			            var outputLengthLanes = outputLengthBytes / 8;

			            // Squeeze
			            var hashWords = [];
			            for (var i = 0; i < outputLengthLanes; i++) {
			                // Shortcuts
			                var lane = state[i];
			                var laneMsw = lane.high;
			                var laneLsw = lane.low;

			                // Swap endian
			                laneMsw = (
			                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
			                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
			                );
			                laneLsw = (
			                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
			                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
			                );

			                // Squeeze state to retrieve hash
			                hashWords.push(laneLsw);
			                hashWords.push(laneMsw);
			            }

			            // Return final computed hash
			            return new WordArray.init(hashWords, outputLengthBytes);
			        },

			        clone: function () {
			            var clone = Hasher.clone.call(this);

			            var state = clone._state = this._state.slice(0);
			            for (var i = 0; i < 25; i++) {
			                state[i] = state[i].clone();
			            }

			            return clone;
			        }
			    });

			    /**
			     * Shortcut function to the hasher's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     *
			     * @return {WordArray} The hash.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hash = CryptoJS.SHA3('message');
			     *     var hash = CryptoJS.SHA3(wordArray);
			     */
			    C.SHA3 = Hasher._createHelper(SHA3);

			    /**
			     * Shortcut function to the HMAC's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     * @param {WordArray|string} key The secret key.
			     *
			     * @return {WordArray} The HMAC.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hmac = CryptoJS.HmacSHA3(message, key);
			     */
			    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
			}(Math));


			return CryptoJS.SHA3;

		})); 
	} (sha3$1));
	return sha3$1.exports;
}

var ripemd160$1 = {exports: {}};

var ripemd160 = ripemd160$1.exports;

var hasRequiredRipemd160;

function requireRipemd160 () {
	if (hasRequiredRipemd160) return ripemd160$1.exports;
	hasRequiredRipemd160 = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(ripemd160, function (CryptoJS) {

			/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/

			(function (Math) {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var Hasher = C_lib.Hasher;
			    var C_algo = C.algo;

			    // Constants table
			    var _zl = WordArray.create([
			        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
			        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
			        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
			        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
			        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
			    var _zr = WordArray.create([
			        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
			        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
			        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
			        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
			        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
			    var _sl = WordArray.create([
			         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
			        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
			        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
			          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
			        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
			    var _sr = WordArray.create([
			        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
			        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
			        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
			        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
			        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

			    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
			    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

			    /**
			     * RIPEMD160 hash algorithm.
			     */
			    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
			        _doReset: function () {
			            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
			        },

			        _doProcessBlock: function (M, offset) {

			            // Swap endian
			            for (var i = 0; i < 16; i++) {
			                // Shortcuts
			                var offset_i = offset + i;
			                var M_offset_i = M[offset_i];

			                // Swap
			                M[offset_i] = (
			                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
			                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
			                );
			            }
			            // Shortcut
			            var H  = this._hash.words;
			            var hl = _hl.words;
			            var hr = _hr.words;
			            var zl = _zl.words;
			            var zr = _zr.words;
			            var sl = _sl.words;
			            var sr = _sr.words;

			            // Working variables
			            var al, bl, cl, dl, el;
			            var ar, br, cr, dr, er;

			            ar = al = H[0];
			            br = bl = H[1];
			            cr = cl = H[2];
			            dr = dl = H[3];
			            er = el = H[4];
			            // Computation
			            var t;
			            for (var i = 0; i < 80; i += 1) {
			                t = (al +  M[offset+zl[i]])|0;
			                if (i<16){
				            t +=  f1(bl,cl,dl) + hl[0];
			                } else if (i<32) {
				            t +=  f2(bl,cl,dl) + hl[1];
			                } else if (i<48) {
				            t +=  f3(bl,cl,dl) + hl[2];
			                } else if (i<64) {
				            t +=  f4(bl,cl,dl) + hl[3];
			                } else {// if (i<80) {
				            t +=  f5(bl,cl,dl) + hl[4];
			                }
			                t = t|0;
			                t =  rotl(t,sl[i]);
			                t = (t+el)|0;
			                al = el;
			                el = dl;
			                dl = rotl(cl, 10);
			                cl = bl;
			                bl = t;

			                t = (ar + M[offset+zr[i]])|0;
			                if (i<16){
				            t +=  f5(br,cr,dr) + hr[0];
			                } else if (i<32) {
				            t +=  f4(br,cr,dr) + hr[1];
			                } else if (i<48) {
				            t +=  f3(br,cr,dr) + hr[2];
			                } else if (i<64) {
				            t +=  f2(br,cr,dr) + hr[3];
			                } else {// if (i<80) {
				            t +=  f1(br,cr,dr) + hr[4];
			                }
			                t = t|0;
			                t =  rotl(t,sr[i]) ;
			                t = (t+er)|0;
			                ar = er;
			                er = dr;
			                dr = rotl(cr, 10);
			                cr = br;
			                br = t;
			            }
			            // Intermediate hash value
			            t    = (H[1] + cl + dr)|0;
			            H[1] = (H[2] + dl + er)|0;
			            H[2] = (H[3] + el + ar)|0;
			            H[3] = (H[4] + al + br)|0;
			            H[4] = (H[0] + bl + cr)|0;
			            H[0] =  t;
			        },

			        _doFinalize: function () {
			            // Shortcuts
			            var data = this._data;
			            var dataWords = data.words;

			            var nBitsTotal = this._nDataBytes * 8;
			            var nBitsLeft = data.sigBytes * 8;

			            // Add padding
			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
			                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
			                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
			            );
			            data.sigBytes = (dataWords.length + 1) * 4;

			            // Hash final blocks
			            this._process();

			            // Shortcuts
			            var hash = this._hash;
			            var H = hash.words;

			            // Swap endian
			            for (var i = 0; i < 5; i++) {
			                // Shortcut
			                var H_i = H[i];

			                // Swap
			                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
			                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
			            }

			            // Return final computed hash
			            return hash;
			        },

			        clone: function () {
			            var clone = Hasher.clone.call(this);
			            clone._hash = this._hash.clone();

			            return clone;
			        }
			    });


			    function f1(x, y, z) {
			        return ((x) ^ (y) ^ (z));

			    }

			    function f2(x, y, z) {
			        return (((x)&(y)) | ((~x)&(z)));
			    }

			    function f3(x, y, z) {
			        return (((x) | (~(y))) ^ (z));
			    }

			    function f4(x, y, z) {
			        return (((x) & (z)) | ((y)&(~(z))));
			    }

			    function f5(x, y, z) {
			        return ((x) ^ ((y) |(~(z))));

			    }

			    function rotl(x,n) {
			        return (x<<n) | (x>>>(32-n));
			    }


			    /**
			     * Shortcut function to the hasher's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     *
			     * @return {WordArray} The hash.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hash = CryptoJS.RIPEMD160('message');
			     *     var hash = CryptoJS.RIPEMD160(wordArray);
			     */
			    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

			    /**
			     * Shortcut function to the HMAC's object interface.
			     *
			     * @param {WordArray|string} message The message to hash.
			     * @param {WordArray|string} key The secret key.
			     *
			     * @return {WordArray} The HMAC.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
			     */
			    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
			}());


			return CryptoJS.RIPEMD160;

		})); 
	} (ripemd160$1));
	return ripemd160$1.exports;
}

var hmac$1 = {exports: {}};

var hmac = hmac$1.exports;

var hasRequiredHmac;

function requireHmac () {
	if (hasRequiredHmac) return hmac$1.exports;
	hasRequiredHmac = 1;
	(function (module, exports) {
(function (root, factory) {
			{
				// CommonJS
				module.exports = factory(requireCore());
			}
		}(hmac, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var Base = C_lib.Base;
			    var C_enc = C.enc;
			    var Utf8 = C_enc.Utf8;
			    var C_algo = C.algo;

			    /**
			     * HMAC algorithm.
			     */
			    C_algo.HMAC = Base.extend({
			        /**
			         * Initializes a newly created HMAC.
			         *
			         * @param {Hasher} hasher The hash algorithm to use.
			         * @param {WordArray|string} key The secret key.
			         *
			         * @example
			         *
			         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
			         */
			        init: function (hasher, key) {
			            // Init hasher
			            hasher = this._hasher = new hasher.init();

			            // Convert string to WordArray, else assume WordArray already
			            if (typeof key == 'string') {
			                key = Utf8.parse(key);
			            }

			            // Shortcuts
			            var hasherBlockSize = hasher.blockSize;
			            var hasherBlockSizeBytes = hasherBlockSize * 4;

			            // Allow arbitrary length keys
			            if (key.sigBytes > hasherBlockSizeBytes) {
			                key = hasher.finalize(key);
			            }

			            // Clamp excess bits
			            key.clamp();

			            // Clone key for inner and outer pads
			            var oKey = this._oKey = key.clone();
			            var iKey = this._iKey = key.clone();

			            // Shortcuts
			            var oKeyWords = oKey.words;
			            var iKeyWords = iKey.words;

			            // XOR keys with pad constants
			            for (var i = 0; i < hasherBlockSize; i++) {
			                oKeyWords[i] ^= 0x5c5c5c5c;
			                iKeyWords[i] ^= 0x36363636;
			            }
			            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

			            // Set initial values
			            this.reset();
			        },

			        /**
			         * Resets this HMAC to its initial state.
			         *
			         * @example
			         *
			         *     hmacHasher.reset();
			         */
			        reset: function () {
			            // Shortcut
			            var hasher = this._hasher;

			            // Reset
			            hasher.reset();
			            hasher.update(this._iKey);
			        },

			        /**
			         * Updates this HMAC with a message.
			         *
			         * @param {WordArray|string} messageUpdate The message to append.
			         *
			         * @return {HMAC} This HMAC instance.
			         *
			         * @example
			         *
			         *     hmacHasher.update('message');
			         *     hmacHasher.update(wordArray);
			         */
			        update: function (messageUpdate) {
			            this._hasher.update(messageUpdate);

			            // Chainable
			            return this;
			        },

			        /**
			         * Finalizes the HMAC computation.
			         * Note that the finalize operation is effectively a destructive, read-once operation.
			         *
			         * @param {WordArray|string} messageUpdate (Optional) A final message update.
			         *
			         * @return {WordArray} The HMAC.
			         *
			         * @example
			         *
			         *     var hmac = hmacHasher.finalize();
			         *     var hmac = hmacHasher.finalize('message');
			         *     var hmac = hmacHasher.finalize(wordArray);
			         */
			        finalize: function (messageUpdate) {
			            // Shortcut
			            var hasher = this._hasher;

			            // Compute HMAC
			            var innerHash = hasher.finalize(messageUpdate);
			            hasher.reset();
			            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

			            return hmac;
			        }
			    });
			}());


		})); 
	} (hmac$1));
	return hmac$1.exports;
}

var pbkdf2$1 = {exports: {}};

var pbkdf2 = pbkdf2$1.exports;

var hasRequiredPbkdf2;

function requirePbkdf2 () {
	if (hasRequiredPbkdf2) return pbkdf2$1.exports;
	hasRequiredPbkdf2 = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireSha256(), requireHmac());
			}
		}(pbkdf2, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var Base = C_lib.Base;
			    var WordArray = C_lib.WordArray;
			    var C_algo = C.algo;
			    var SHA256 = C_algo.SHA256;
			    var HMAC = C_algo.HMAC;

			    /**
			     * Password-Based Key Derivation Function 2 algorithm.
			     */
			    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
			        /**
			         * Configuration options.
			         *
			         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
			         * @property {Hasher} hasher The hasher to use. Default: SHA256
			         * @property {number} iterations The number of iterations to perform. Default: 250000
			         */
			        cfg: Base.extend({
			            keySize: 128/32,
			            hasher: SHA256,
			            iterations: 250000
			        }),

			        /**
			         * Initializes a newly created key derivation function.
			         *
			         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
			         *
			         * @example
			         *
			         *     var kdf = CryptoJS.algo.PBKDF2.create();
			         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
			         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
			         */
			        init: function (cfg) {
			            this.cfg = this.cfg.extend(cfg);
			        },

			        /**
			         * Computes the Password-Based Key Derivation Function 2.
			         *
			         * @param {WordArray|string} password The password.
			         * @param {WordArray|string} salt A salt.
			         *
			         * @return {WordArray} The derived key.
			         *
			         * @example
			         *
			         *     var key = kdf.compute(password, salt);
			         */
			        compute: function (password, salt) {
			            // Shortcut
			            var cfg = this.cfg;

			            // Init HMAC
			            var hmac = HMAC.create(cfg.hasher, password);

			            // Initial values
			            var derivedKey = WordArray.create();
			            var blockIndex = WordArray.create([0x00000001]);

			            // Shortcuts
			            var derivedKeyWords = derivedKey.words;
			            var blockIndexWords = blockIndex.words;
			            var keySize = cfg.keySize;
			            var iterations = cfg.iterations;

			            // Generate key
			            while (derivedKeyWords.length < keySize) {
			                var block = hmac.update(salt).finalize(blockIndex);
			                hmac.reset();

			                // Shortcuts
			                var blockWords = block.words;
			                var blockWordsLength = blockWords.length;

			                // Iterations
			                var intermediate = block;
			                for (var i = 1; i < iterations; i++) {
			                    intermediate = hmac.finalize(intermediate);
			                    hmac.reset();

			                    // Shortcut
			                    var intermediateWords = intermediate.words;

			                    // XOR intermediate with block
			                    for (var j = 0; j < blockWordsLength; j++) {
			                        blockWords[j] ^= intermediateWords[j];
			                    }
			                }

			                derivedKey.concat(block);
			                blockIndexWords[0]++;
			            }
			            derivedKey.sigBytes = keySize * 4;

			            return derivedKey;
			        }
			    });

			    /**
			     * Computes the Password-Based Key Derivation Function 2.
			     *
			     * @param {WordArray|string} password The password.
			     * @param {WordArray|string} salt A salt.
			     * @param {Object} cfg (Optional) The configuration options to use for this computation.
			     *
			     * @return {WordArray} The derived key.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var key = CryptoJS.PBKDF2(password, salt);
			     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
			     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
			     */
			    C.PBKDF2 = function (password, salt, cfg) {
			        return PBKDF2.create(cfg).compute(password, salt);
			    };
			}());


			return CryptoJS.PBKDF2;

		})); 
	} (pbkdf2$1));
	return pbkdf2$1.exports;
}

var evpkdf$1 = {exports: {}};

var evpkdf = evpkdf$1.exports;

var hasRequiredEvpkdf;

function requireEvpkdf () {
	if (hasRequiredEvpkdf) return evpkdf$1.exports;
	hasRequiredEvpkdf = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireSha1(), requireHmac());
			}
		}(evpkdf, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var Base = C_lib.Base;
			    var WordArray = C_lib.WordArray;
			    var C_algo = C.algo;
			    var MD5 = C_algo.MD5;

			    /**
			     * This key derivation function is meant to conform with EVP_BytesToKey.
			     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
			     */
			    var EvpKDF = C_algo.EvpKDF = Base.extend({
			        /**
			         * Configuration options.
			         *
			         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
			         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
			         * @property {number} iterations The number of iterations to perform. Default: 1
			         */
			        cfg: Base.extend({
			            keySize: 128/32,
			            hasher: MD5,
			            iterations: 1
			        }),

			        /**
			         * Initializes a newly created key derivation function.
			         *
			         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
			         *
			         * @example
			         *
			         *     var kdf = CryptoJS.algo.EvpKDF.create();
			         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
			         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
			         */
			        init: function (cfg) {
			            this.cfg = this.cfg.extend(cfg);
			        },

			        /**
			         * Derives a key from a password.
			         *
			         * @param {WordArray|string} password The password.
			         * @param {WordArray|string} salt A salt.
			         *
			         * @return {WordArray} The derived key.
			         *
			         * @example
			         *
			         *     var key = kdf.compute(password, salt);
			         */
			        compute: function (password, salt) {
			            var block;

			            // Shortcut
			            var cfg = this.cfg;

			            // Init hasher
			            var hasher = cfg.hasher.create();

			            // Initial values
			            var derivedKey = WordArray.create();

			            // Shortcuts
			            var derivedKeyWords = derivedKey.words;
			            var keySize = cfg.keySize;
			            var iterations = cfg.iterations;

			            // Generate key
			            while (derivedKeyWords.length < keySize) {
			                if (block) {
			                    hasher.update(block);
			                }
			                block = hasher.update(password).finalize(salt);
			                hasher.reset();

			                // Iterations
			                for (var i = 1; i < iterations; i++) {
			                    block = hasher.finalize(block);
			                    hasher.reset();
			                }

			                derivedKey.concat(block);
			            }
			            derivedKey.sigBytes = keySize * 4;

			            return derivedKey;
			        }
			    });

			    /**
			     * Derives a key from a password.
			     *
			     * @param {WordArray|string} password The password.
			     * @param {WordArray|string} salt A salt.
			     * @param {Object} cfg (Optional) The configuration options to use for this computation.
			     *
			     * @return {WordArray} The derived key.
			     *
			     * @static
			     *
			     * @example
			     *
			     *     var key = CryptoJS.EvpKDF(password, salt);
			     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
			     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
			     */
			    C.EvpKDF = function (password, salt, cfg) {
			        return EvpKDF.create(cfg).compute(password, salt);
			    };
			}());


			return CryptoJS.EvpKDF;

		})); 
	} (evpkdf$1));
	return evpkdf$1.exports;
}

var cipherCore$1 = {exports: {}};

var cipherCore = cipherCore$1.exports;

var hasRequiredCipherCore;

function requireCipherCore () {
	if (hasRequiredCipherCore) return cipherCore$1.exports;
	hasRequiredCipherCore = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireEvpkdf());
			}
		}(cipherCore, function (CryptoJS) {

			/**
			 * Cipher core components.
			 */
			CryptoJS.lib.Cipher || (function (undefined$1) {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var Base = C_lib.Base;
			    var WordArray = C_lib.WordArray;
			    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
			    var C_enc = C.enc;
			    C_enc.Utf8;
			    var Base64 = C_enc.Base64;
			    var C_algo = C.algo;
			    var EvpKDF = C_algo.EvpKDF;

			    /**
			     * Abstract base cipher template.
			     *
			     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
			     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
			     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
			     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
			     */
			    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
			        /**
			         * Configuration options.
			         *
			         * @property {WordArray} iv The IV to use for this operation.
			         */
			        cfg: Base.extend(),

			        /**
			         * Creates this cipher in encryption mode.
			         *
			         * @param {WordArray} key The key.
			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
			         *
			         * @return {Cipher} A cipher instance.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
			         */
			        createEncryptor: function (key, cfg) {
			            return this.create(this._ENC_XFORM_MODE, key, cfg);
			        },

			        /**
			         * Creates this cipher in decryption mode.
			         *
			         * @param {WordArray} key The key.
			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
			         *
			         * @return {Cipher} A cipher instance.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
			         */
			        createDecryptor: function (key, cfg) {
			            return this.create(this._DEC_XFORM_MODE, key, cfg);
			        },

			        /**
			         * Initializes a newly created cipher.
			         *
			         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
			         * @param {WordArray} key The key.
			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
			         *
			         * @example
			         *
			         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
			         */
			        init: function (xformMode, key, cfg) {
			            // Apply config defaults
			            this.cfg = this.cfg.extend(cfg);

			            // Store transform mode and key
			            this._xformMode = xformMode;
			            this._key = key;

			            // Set initial values
			            this.reset();
			        },

			        /**
			         * Resets this cipher to its initial state.
			         *
			         * @example
			         *
			         *     cipher.reset();
			         */
			        reset: function () {
			            // Reset data buffer
			            BufferedBlockAlgorithm.reset.call(this);

			            // Perform concrete-cipher logic
			            this._doReset();
			        },

			        /**
			         * Adds data to be encrypted or decrypted.
			         *
			         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
			         *
			         * @return {WordArray} The data after processing.
			         *
			         * @example
			         *
			         *     var encrypted = cipher.process('data');
			         *     var encrypted = cipher.process(wordArray);
			         */
			        process: function (dataUpdate) {
			            // Append
			            this._append(dataUpdate);

			            // Process available blocks
			            return this._process();
			        },

			        /**
			         * Finalizes the encryption or decryption process.
			         * Note that the finalize operation is effectively a destructive, read-once operation.
			         *
			         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
			         *
			         * @return {WordArray} The data after final processing.
			         *
			         * @example
			         *
			         *     var encrypted = cipher.finalize();
			         *     var encrypted = cipher.finalize('data');
			         *     var encrypted = cipher.finalize(wordArray);
			         */
			        finalize: function (dataUpdate) {
			            // Final data update
			            if (dataUpdate) {
			                this._append(dataUpdate);
			            }

			            // Perform concrete-cipher logic
			            var finalProcessedData = this._doFinalize();

			            return finalProcessedData;
			        },

			        keySize: 128/32,

			        ivSize: 128/32,

			        _ENC_XFORM_MODE: 1,

			        _DEC_XFORM_MODE: 2,

			        /**
			         * Creates shortcut functions to a cipher's object interface.
			         *
			         * @param {Cipher} cipher The cipher to create a helper for.
			         *
			         * @return {Object} An object with encrypt and decrypt shortcut functions.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
			         */
			        _createHelper: (function () {
			            function selectCipherStrategy(key) {
			                if (typeof key == 'string') {
			                    return PasswordBasedCipher;
			                } else {
			                    return SerializableCipher;
			                }
			            }

			            return function (cipher) {
			                return {
			                    encrypt: function (message, key, cfg) {
			                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
			                    },

			                    decrypt: function (ciphertext, key, cfg) {
			                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
			                    }
			                };
			            };
			        }())
			    });

			    /**
			     * Abstract base stream cipher template.
			     *
			     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
			     */
			    C_lib.StreamCipher = Cipher.extend({
			        _doFinalize: function () {
			            // Process partial blocks
			            var finalProcessedBlocks = this._process(true);

			            return finalProcessedBlocks;
			        },

			        blockSize: 1
			    });

			    /**
			     * Mode namespace.
			     */
			    var C_mode = C.mode = {};

			    /**
			     * Abstract base block cipher mode template.
			     */
			    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
			        /**
			         * Creates this mode for encryption.
			         *
			         * @param {Cipher} cipher A block cipher instance.
			         * @param {Array} iv The IV words.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
			         */
			        createEncryptor: function (cipher, iv) {
			            return this.Encryptor.create(cipher, iv);
			        },

			        /**
			         * Creates this mode for decryption.
			         *
			         * @param {Cipher} cipher A block cipher instance.
			         * @param {Array} iv The IV words.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
			         */
			        createDecryptor: function (cipher, iv) {
			            return this.Decryptor.create(cipher, iv);
			        },

			        /**
			         * Initializes a newly created mode.
			         *
			         * @param {Cipher} cipher A block cipher instance.
			         * @param {Array} iv The IV words.
			         *
			         * @example
			         *
			         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
			         */
			        init: function (cipher, iv) {
			            this._cipher = cipher;
			            this._iv = iv;
			        }
			    });

			    /**
			     * Cipher Block Chaining mode.
			     */
			    var CBC = C_mode.CBC = (function () {
			        /**
			         * Abstract base CBC mode.
			         */
			        var CBC = BlockCipherMode.extend();

			        /**
			         * CBC encryptor.
			         */
			        CBC.Encryptor = CBC.extend({
			            /**
			             * Processes the data block at offset.
			             *
			             * @param {Array} words The data words to operate on.
			             * @param {number} offset The offset where the block starts.
			             *
			             * @example
			             *
			             *     mode.processBlock(data.words, offset);
			             */
			            processBlock: function (words, offset) {
			                // Shortcuts
			                var cipher = this._cipher;
			                var blockSize = cipher.blockSize;

			                // XOR and encrypt
			                xorBlock.call(this, words, offset, blockSize);
			                cipher.encryptBlock(words, offset);

			                // Remember this block to use with next block
			                this._prevBlock = words.slice(offset, offset + blockSize);
			            }
			        });

			        /**
			         * CBC decryptor.
			         */
			        CBC.Decryptor = CBC.extend({
			            /**
			             * Processes the data block at offset.
			             *
			             * @param {Array} words The data words to operate on.
			             * @param {number} offset The offset where the block starts.
			             *
			             * @example
			             *
			             *     mode.processBlock(data.words, offset);
			             */
			            processBlock: function (words, offset) {
			                // Shortcuts
			                var cipher = this._cipher;
			                var blockSize = cipher.blockSize;

			                // Remember this block to use with next block
			                var thisBlock = words.slice(offset, offset + blockSize);

			                // Decrypt and XOR
			                cipher.decryptBlock(words, offset);
			                xorBlock.call(this, words, offset, blockSize);

			                // This block becomes the previous block
			                this._prevBlock = thisBlock;
			            }
			        });

			        function xorBlock(words, offset, blockSize) {
			            var block;

			            // Shortcut
			            var iv = this._iv;

			            // Choose mixing block
			            if (iv) {
			                block = iv;

			                // Remove IV for subsequent blocks
			                this._iv = undefined$1;
			            } else {
			                block = this._prevBlock;
			            }

			            // XOR blocks
			            for (var i = 0; i < blockSize; i++) {
			                words[offset + i] ^= block[i];
			            }
			        }

			        return CBC;
			    }());

			    /**
			     * Padding namespace.
			     */
			    var C_pad = C.pad = {};

			    /**
			     * PKCS #5/7 padding strategy.
			     */
			    var Pkcs7 = C_pad.Pkcs7 = {
			        /**
			         * Pads data using the algorithm defined in PKCS #5/7.
			         *
			         * @param {WordArray} data The data to pad.
			         * @param {number} blockSize The multiple that the data should be padded to.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
			         */
			        pad: function (data, blockSize) {
			            // Shortcut
			            var blockSizeBytes = blockSize * 4;

			            // Count padding bytes
			            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

			            // Create padding word
			            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

			            // Create padding
			            var paddingWords = [];
			            for (var i = 0; i < nPaddingBytes; i += 4) {
			                paddingWords.push(paddingWord);
			            }
			            var padding = WordArray.create(paddingWords, nPaddingBytes);

			            // Add padding
			            data.concat(padding);
			        },

			        /**
			         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
			         *
			         * @param {WordArray} data The data to unpad.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
			         */
			        unpad: function (data) {
			            // Get number of padding bytes from last byte
			            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

			            // Remove padding
			            data.sigBytes -= nPaddingBytes;
			        }
			    };

			    /**
			     * Abstract base block cipher template.
			     *
			     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
			     */
			    C_lib.BlockCipher = Cipher.extend({
			        /**
			         * Configuration options.
			         *
			         * @property {Mode} mode The block mode to use. Default: CBC
			         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
			         */
			        cfg: Cipher.cfg.extend({
			            mode: CBC,
			            padding: Pkcs7
			        }),

			        reset: function () {
			            var modeCreator;

			            // Reset cipher
			            Cipher.reset.call(this);

			            // Shortcuts
			            var cfg = this.cfg;
			            var iv = cfg.iv;
			            var mode = cfg.mode;

			            // Reset block mode
			            if (this._xformMode == this._ENC_XFORM_MODE) {
			                modeCreator = mode.createEncryptor;
			            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
			                modeCreator = mode.createDecryptor;
			                // Keep at least one block in the buffer for unpadding
			                this._minBufferSize = 1;
			            }

			            if (this._mode && this._mode.__creator == modeCreator) {
			                this._mode.init(this, iv && iv.words);
			            } else {
			                this._mode = modeCreator.call(mode, this, iv && iv.words);
			                this._mode.__creator = modeCreator;
			            }
			        },

			        _doProcessBlock: function (words, offset) {
			            this._mode.processBlock(words, offset);
			        },

			        _doFinalize: function () {
			            var finalProcessedBlocks;

			            // Shortcut
			            var padding = this.cfg.padding;

			            // Finalize
			            if (this._xformMode == this._ENC_XFORM_MODE) {
			                // Pad data
			                padding.pad(this._data, this.blockSize);

			                // Process final blocks
			                finalProcessedBlocks = this._process(true);
			            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
			                // Process final blocks
			                finalProcessedBlocks = this._process(true);

			                // Unpad data
			                padding.unpad(finalProcessedBlocks);
			            }

			            return finalProcessedBlocks;
			        },

			        blockSize: 128/32
			    });

			    /**
			     * A collection of cipher parameters.
			     *
			     * @property {WordArray} ciphertext The raw ciphertext.
			     * @property {WordArray} key The key to this ciphertext.
			     * @property {WordArray} iv The IV used in the ciphering operation.
			     * @property {WordArray} salt The salt used with a key derivation function.
			     * @property {Cipher} algorithm The cipher algorithm.
			     * @property {Mode} mode The block mode used in the ciphering operation.
			     * @property {Padding} padding The padding scheme used in the ciphering operation.
			     * @property {number} blockSize The block size of the cipher.
			     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
			     */
			    var CipherParams = C_lib.CipherParams = Base.extend({
			        /**
			         * Initializes a newly created cipher params object.
			         *
			         * @param {Object} cipherParams An object with any of the possible cipher parameters.
			         *
			         * @example
			         *
			         *     var cipherParams = CryptoJS.lib.CipherParams.create({
			         *         ciphertext: ciphertextWordArray,
			         *         key: keyWordArray,
			         *         iv: ivWordArray,
			         *         salt: saltWordArray,
			         *         algorithm: CryptoJS.algo.AES,
			         *         mode: CryptoJS.mode.CBC,
			         *         padding: CryptoJS.pad.PKCS7,
			         *         blockSize: 4,
			         *         formatter: CryptoJS.format.OpenSSL
			         *     });
			         */
			        init: function (cipherParams) {
			            this.mixIn(cipherParams);
			        },

			        /**
			         * Converts this cipher params object to a string.
			         *
			         * @param {Format} formatter (Optional) The formatting strategy to use.
			         *
			         * @return {string} The stringified cipher params.
			         *
			         * @throws Error If neither the formatter nor the default formatter is set.
			         *
			         * @example
			         *
			         *     var string = cipherParams + '';
			         *     var string = cipherParams.toString();
			         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
			         */
			        toString: function (formatter) {
			            return (formatter || this.formatter).stringify(this);
			        }
			    });

			    /**
			     * Format namespace.
			     */
			    var C_format = C.format = {};

			    /**
			     * OpenSSL formatting strategy.
			     */
			    var OpenSSLFormatter = C_format.OpenSSL = {
			        /**
			         * Converts a cipher params object to an OpenSSL-compatible string.
			         *
			         * @param {CipherParams} cipherParams The cipher params object.
			         *
			         * @return {string} The OpenSSL-compatible string.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
			         */
			        stringify: function (cipherParams) {
			            var wordArray;

			            // Shortcuts
			            var ciphertext = cipherParams.ciphertext;
			            var salt = cipherParams.salt;

			            // Format
			            if (salt) {
			                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
			            } else {
			                wordArray = ciphertext;
			            }

			            return wordArray.toString(Base64);
			        },

			        /**
			         * Converts an OpenSSL-compatible string to a cipher params object.
			         *
			         * @param {string} openSSLStr The OpenSSL-compatible string.
			         *
			         * @return {CipherParams} The cipher params object.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
			         */
			        parse: function (openSSLStr) {
			            var salt;

			            // Parse base64
			            var ciphertext = Base64.parse(openSSLStr);

			            // Shortcut
			            var ciphertextWords = ciphertext.words;

			            // Test for salt
			            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
			                // Extract salt
			                salt = WordArray.create(ciphertextWords.slice(2, 4));

			                // Remove salt from ciphertext
			                ciphertextWords.splice(0, 4);
			                ciphertext.sigBytes -= 16;
			            }

			            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
			        }
			    };

			    /**
			     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
			     */
			    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
			        /**
			         * Configuration options.
			         *
			         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
			         */
			        cfg: Base.extend({
			            format: OpenSSLFormatter
			        }),

			        /**
			         * Encrypts a message.
			         *
			         * @param {Cipher} cipher The cipher algorithm to use.
			         * @param {WordArray|string} message The message to encrypt.
			         * @param {WordArray} key The key.
			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
			         *
			         * @return {CipherParams} A cipher params object.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
			         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
			         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
			         */
			        encrypt: function (cipher, message, key, cfg) {
			            // Apply config defaults
			            cfg = this.cfg.extend(cfg);

			            // Encrypt
			            var encryptor = cipher.createEncryptor(key, cfg);
			            var ciphertext = encryptor.finalize(message);

			            // Shortcut
			            var cipherCfg = encryptor.cfg;

			            // Create and return serializable cipher params
			            return CipherParams.create({
			                ciphertext: ciphertext,
			                key: key,
			                iv: cipherCfg.iv,
			                algorithm: cipher,
			                mode: cipherCfg.mode,
			                padding: cipherCfg.padding,
			                blockSize: cipher.blockSize,
			                formatter: cfg.format
			            });
			        },

			        /**
			         * Decrypts serialized ciphertext.
			         *
			         * @param {Cipher} cipher The cipher algorithm to use.
			         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
			         * @param {WordArray} key The key.
			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
			         *
			         * @return {WordArray} The plaintext.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
			         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
			         */
			        decrypt: function (cipher, ciphertext, key, cfg) {
			            // Apply config defaults
			            cfg = this.cfg.extend(cfg);

			            // Convert string to CipherParams
			            ciphertext = this._parse(ciphertext, cfg.format);

			            // Decrypt
			            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

			            return plaintext;
			        },

			        /**
			         * Converts serialized ciphertext to CipherParams,
			         * else assumed CipherParams already and returns ciphertext unchanged.
			         *
			         * @param {CipherParams|string} ciphertext The ciphertext.
			         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
			         *
			         * @return {CipherParams} The unserialized ciphertext.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
			         */
			        _parse: function (ciphertext, format) {
			            if (typeof ciphertext == 'string') {
			                return format.parse(ciphertext, this);
			            } else {
			                return ciphertext;
			            }
			        }
			    });

			    /**
			     * Key derivation function namespace.
			     */
			    var C_kdf = C.kdf = {};

			    /**
			     * OpenSSL key derivation function.
			     */
			    var OpenSSLKdf = C_kdf.OpenSSL = {
			        /**
			         * Derives a key and IV from a password.
			         *
			         * @param {string} password The password to derive from.
			         * @param {number} keySize The size in words of the key to generate.
			         * @param {number} ivSize The size in words of the IV to generate.
			         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
			         *
			         * @return {CipherParams} A cipher params object with the key, IV, and salt.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
			         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
			         */
			        execute: function (password, keySize, ivSize, salt, hasher) {
			            // Generate random salt
			            if (!salt) {
			                salt = WordArray.random(64/8);
			            }

			            // Derive key and IV
			            if (!hasher) {
			                var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
			            } else {
			                var key = EvpKDF.create({ keySize: keySize + ivSize, hasher: hasher }).compute(password, salt);
			            }


			            // Separate key and IV
			            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
			            key.sigBytes = keySize * 4;

			            // Return params
			            return CipherParams.create({ key: key, iv: iv, salt: salt });
			        }
			    };

			    /**
			     * A serializable cipher wrapper that derives the key from a password,
			     * and returns ciphertext as a serializable cipher params object.
			     */
			    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
			        /**
			         * Configuration options.
			         *
			         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
			         */
			        cfg: SerializableCipher.cfg.extend({
			            kdf: OpenSSLKdf
			        }),

			        /**
			         * Encrypts a message using a password.
			         *
			         * @param {Cipher} cipher The cipher algorithm to use.
			         * @param {WordArray|string} message The message to encrypt.
			         * @param {string} password The password.
			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
			         *
			         * @return {CipherParams} A cipher params object.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
			         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
			         */
			        encrypt: function (cipher, message, password, cfg) {
			            // Apply config defaults
			            cfg = this.cfg.extend(cfg);

			            // Derive key and other params
			            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);

			            // Add IV to config
			            cfg.iv = derivedParams.iv;

			            // Encrypt
			            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

			            // Mix in derived params
			            ciphertext.mixIn(derivedParams);

			            return ciphertext;
			        },

			        /**
			         * Decrypts serialized ciphertext using a password.
			         *
			         * @param {Cipher} cipher The cipher algorithm to use.
			         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
			         * @param {string} password The password.
			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
			         *
			         * @return {WordArray} The plaintext.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
			         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
			         */
			        decrypt: function (cipher, ciphertext, password, cfg) {
			            // Apply config defaults
			            cfg = this.cfg.extend(cfg);

			            // Convert string to CipherParams
			            ciphertext = this._parse(ciphertext, cfg.format);

			            // Derive key and other params
			            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);

			            // Add IV to config
			            cfg.iv = derivedParams.iv;

			            // Decrypt
			            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

			            return plaintext;
			        }
			    });
			}());


		})); 
	} (cipherCore$1));
	return cipherCore$1.exports;
}

var modeCfb$1 = {exports: {}};

var modeCfb = modeCfb$1.exports;

var hasRequiredModeCfb;

function requireModeCfb () {
	if (hasRequiredModeCfb) return modeCfb$1.exports;
	hasRequiredModeCfb = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(modeCfb, function (CryptoJS) {

			/**
			 * Cipher Feedback block mode.
			 */
			CryptoJS.mode.CFB = (function () {
			    var CFB = CryptoJS.lib.BlockCipherMode.extend();

			    CFB.Encryptor = CFB.extend({
			        processBlock: function (words, offset) {
			            // Shortcuts
			            var cipher = this._cipher;
			            var blockSize = cipher.blockSize;

			            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

			            // Remember this block to use with next block
			            this._prevBlock = words.slice(offset, offset + blockSize);
			        }
			    });

			    CFB.Decryptor = CFB.extend({
			        processBlock: function (words, offset) {
			            // Shortcuts
			            var cipher = this._cipher;
			            var blockSize = cipher.blockSize;

			            // Remember this block to use with next block
			            var thisBlock = words.slice(offset, offset + blockSize);

			            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

			            // This block becomes the previous block
			            this._prevBlock = thisBlock;
			        }
			    });

			    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
			        var keystream;

			        // Shortcut
			        var iv = this._iv;

			        // Generate keystream
			        if (iv) {
			            keystream = iv.slice(0);

			            // Remove IV for subsequent blocks
			            this._iv = undefined;
			        } else {
			            keystream = this._prevBlock;
			        }
			        cipher.encryptBlock(keystream, 0);

			        // Encrypt
			        for (var i = 0; i < blockSize; i++) {
			            words[offset + i] ^= keystream[i];
			        }
			    }

			    return CFB;
			}());


			return CryptoJS.mode.CFB;

		})); 
	} (modeCfb$1));
	return modeCfb$1.exports;
}

var modeCtr$1 = {exports: {}};

var modeCtr = modeCtr$1.exports;

var hasRequiredModeCtr;

function requireModeCtr () {
	if (hasRequiredModeCtr) return modeCtr$1.exports;
	hasRequiredModeCtr = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(modeCtr, function (CryptoJS) {

			/**
			 * Counter block mode.
			 */
			CryptoJS.mode.CTR = (function () {
			    var CTR = CryptoJS.lib.BlockCipherMode.extend();

			    var Encryptor = CTR.Encryptor = CTR.extend({
			        processBlock: function (words, offset) {
			            // Shortcuts
			            var cipher = this._cipher;
			            var blockSize = cipher.blockSize;
			            var iv = this._iv;
			            var counter = this._counter;

			            // Generate keystream
			            if (iv) {
			                counter = this._counter = iv.slice(0);

			                // Remove IV for subsequent blocks
			                this._iv = undefined;
			            }
			            var keystream = counter.slice(0);
			            cipher.encryptBlock(keystream, 0);

			            // Increment counter
			            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

			            // Encrypt
			            for (var i = 0; i < blockSize; i++) {
			                words[offset + i] ^= keystream[i];
			            }
			        }
			    });

			    CTR.Decryptor = Encryptor;

			    return CTR;
			}());


			return CryptoJS.mode.CTR;

		})); 
	} (modeCtr$1));
	return modeCtr$1.exports;
}

var modeCtrGladman$1 = {exports: {}};

var modeCtrGladman = modeCtrGladman$1.exports;

var hasRequiredModeCtrGladman;

function requireModeCtrGladman () {
	if (hasRequiredModeCtrGladman) return modeCtrGladman$1.exports;
	hasRequiredModeCtrGladman = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(modeCtrGladman, function (CryptoJS) {

			/** @preserve
			 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
			 * derived from CryptoJS.mode.CTR
			 * Jan Hruby jhruby.web@gmail.com
			 */
			CryptoJS.mode.CTRGladman = (function () {
			    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

				function incWord(word)
				{
					if (((word >> 24) & 0xff) === 0xff) { //overflow
					var b1 = (word >> 16)&0xff;
					var b2 = (word >> 8)&0xff;
					var b3 = word & 0xff;

					if (b1 === 0xff) // overflow b1
					{
					b1 = 0;
					if (b2 === 0xff)
					{
						b2 = 0;
						if (b3 === 0xff)
						{
							b3 = 0;
						}
						else
						{
							++b3;
						}
					}
					else
					{
						++b2;
					}
					}
					else
					{
					++b1;
					}

					word = 0;
					word += (b1 << 16);
					word += (b2 << 8);
					word += b3;
					}
					else
					{
					word += (0x01 << 24);
					}
					return word;
				}

				function incCounter(counter)
				{
					if ((counter[0] = incWord(counter[0])) === 0)
					{
						// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
						counter[1] = incWord(counter[1]);
					}
					return counter;
				}

			    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
			        processBlock: function (words, offset) {
			            // Shortcuts
			            var cipher = this._cipher;
			            var blockSize = cipher.blockSize;
			            var iv = this._iv;
			            var counter = this._counter;

			            // Generate keystream
			            if (iv) {
			                counter = this._counter = iv.slice(0);

			                // Remove IV for subsequent blocks
			                this._iv = undefined;
			            }

						incCounter(counter);

						var keystream = counter.slice(0);
			            cipher.encryptBlock(keystream, 0);

			            // Encrypt
			            for (var i = 0; i < blockSize; i++) {
			                words[offset + i] ^= keystream[i];
			            }
			        }
			    });

			    CTRGladman.Decryptor = Encryptor;

			    return CTRGladman;
			}());




			return CryptoJS.mode.CTRGladman;

		})); 
	} (modeCtrGladman$1));
	return modeCtrGladman$1.exports;
}

var modeOfb$1 = {exports: {}};

var modeOfb = modeOfb$1.exports;

var hasRequiredModeOfb;

function requireModeOfb () {
	if (hasRequiredModeOfb) return modeOfb$1.exports;
	hasRequiredModeOfb = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(modeOfb, function (CryptoJS) {

			/**
			 * Output Feedback block mode.
			 */
			CryptoJS.mode.OFB = (function () {
			    var OFB = CryptoJS.lib.BlockCipherMode.extend();

			    var Encryptor = OFB.Encryptor = OFB.extend({
			        processBlock: function (words, offset) {
			            // Shortcuts
			            var cipher = this._cipher;
			            var blockSize = cipher.blockSize;
			            var iv = this._iv;
			            var keystream = this._keystream;

			            // Generate keystream
			            if (iv) {
			                keystream = this._keystream = iv.slice(0);

			                // Remove IV for subsequent blocks
			                this._iv = undefined;
			            }
			            cipher.encryptBlock(keystream, 0);

			            // Encrypt
			            for (var i = 0; i < blockSize; i++) {
			                words[offset + i] ^= keystream[i];
			            }
			        }
			    });

			    OFB.Decryptor = Encryptor;

			    return OFB;
			}());


			return CryptoJS.mode.OFB;

		})); 
	} (modeOfb$1));
	return modeOfb$1.exports;
}

var modeEcb$1 = {exports: {}};

var modeEcb = modeEcb$1.exports;

var hasRequiredModeEcb;

function requireModeEcb () {
	if (hasRequiredModeEcb) return modeEcb$1.exports;
	hasRequiredModeEcb = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(modeEcb, function (CryptoJS) {

			/**
			 * Electronic Codebook block mode.
			 */
			CryptoJS.mode.ECB = (function () {
			    var ECB = CryptoJS.lib.BlockCipherMode.extend();

			    ECB.Encryptor = ECB.extend({
			        processBlock: function (words, offset) {
			            this._cipher.encryptBlock(words, offset);
			        }
			    });

			    ECB.Decryptor = ECB.extend({
			        processBlock: function (words, offset) {
			            this._cipher.decryptBlock(words, offset);
			        }
			    });

			    return ECB;
			}());


			return CryptoJS.mode.ECB;

		})); 
	} (modeEcb$1));
	return modeEcb$1.exports;
}

var padAnsix923$1 = {exports: {}};

var padAnsix923 = padAnsix923$1.exports;

var hasRequiredPadAnsix923;

function requirePadAnsix923 () {
	if (hasRequiredPadAnsix923) return padAnsix923$1.exports;
	hasRequiredPadAnsix923 = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(padAnsix923, function (CryptoJS) {

			/**
			 * ANSI X.923 padding strategy.
			 */
			CryptoJS.pad.AnsiX923 = {
			    pad: function (data, blockSize) {
			        // Shortcuts
			        var dataSigBytes = data.sigBytes;
			        var blockSizeBytes = blockSize * 4;

			        // Count padding bytes
			        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

			        // Compute last byte position
			        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

			        // Pad
			        data.clamp();
			        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
			        data.sigBytes += nPaddingBytes;
			    },

			    unpad: function (data) {
			        // Get number of padding bytes from last byte
			        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

			        // Remove padding
			        data.sigBytes -= nPaddingBytes;
			    }
			};


			return CryptoJS.pad.Ansix923;

		})); 
	} (padAnsix923$1));
	return padAnsix923$1.exports;
}

var padIso10126$1 = {exports: {}};

var padIso10126 = padIso10126$1.exports;

var hasRequiredPadIso10126;

function requirePadIso10126 () {
	if (hasRequiredPadIso10126) return padIso10126$1.exports;
	hasRequiredPadIso10126 = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(padIso10126, function (CryptoJS) {

			/**
			 * ISO 10126 padding strategy.
			 */
			CryptoJS.pad.Iso10126 = {
			    pad: function (data, blockSize) {
			        // Shortcut
			        var blockSizeBytes = blockSize * 4;

			        // Count padding bytes
			        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

			        // Pad
			        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
			             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
			    },

			    unpad: function (data) {
			        // Get number of padding bytes from last byte
			        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

			        // Remove padding
			        data.sigBytes -= nPaddingBytes;
			    }
			};


			return CryptoJS.pad.Iso10126;

		})); 
	} (padIso10126$1));
	return padIso10126$1.exports;
}

var padIso97971$1 = {exports: {}};

var padIso97971 = padIso97971$1.exports;

var hasRequiredPadIso97971;

function requirePadIso97971 () {
	if (hasRequiredPadIso97971) return padIso97971$1.exports;
	hasRequiredPadIso97971 = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(padIso97971, function (CryptoJS) {

			/**
			 * ISO/IEC 9797-1 Padding Method 2.
			 */
			CryptoJS.pad.Iso97971 = {
			    pad: function (data, blockSize) {
			        // Add 0x80 byte
			        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

			        // Zero pad the rest
			        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
			    },

			    unpad: function (data) {
			        // Remove zero padding
			        CryptoJS.pad.ZeroPadding.unpad(data);

			        // Remove one more byte -- the 0x80 byte
			        data.sigBytes--;
			    }
			};


			return CryptoJS.pad.Iso97971;

		})); 
	} (padIso97971$1));
	return padIso97971$1.exports;
}

var padZeropadding$1 = {exports: {}};

var padZeropadding = padZeropadding$1.exports;

var hasRequiredPadZeropadding;

function requirePadZeropadding () {
	if (hasRequiredPadZeropadding) return padZeropadding$1.exports;
	hasRequiredPadZeropadding = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(padZeropadding, function (CryptoJS) {

			/**
			 * Zero padding strategy.
			 */
			CryptoJS.pad.ZeroPadding = {
			    pad: function (data, blockSize) {
			        // Shortcut
			        var blockSizeBytes = blockSize * 4;

			        // Pad
			        data.clamp();
			        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
			    },

			    unpad: function (data) {
			        // Shortcut
			        var dataWords = data.words;

			        // Unpad
			        var i = data.sigBytes - 1;
			        for (var i = data.sigBytes - 1; i >= 0; i--) {
			            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
			                data.sigBytes = i + 1;
			                break;
			            }
			        }
			    }
			};


			return CryptoJS.pad.ZeroPadding;

		})); 
	} (padZeropadding$1));
	return padZeropadding$1.exports;
}

var padNopadding$1 = {exports: {}};

var padNopadding = padNopadding$1.exports;

var hasRequiredPadNopadding;

function requirePadNopadding () {
	if (hasRequiredPadNopadding) return padNopadding$1.exports;
	hasRequiredPadNopadding = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(padNopadding, function (CryptoJS) {

			/**
			 * A noop padding strategy.
			 */
			CryptoJS.pad.NoPadding = {
			    pad: function () {
			    },

			    unpad: function () {
			    }
			};


			return CryptoJS.pad.NoPadding;

		})); 
	} (padNopadding$1));
	return padNopadding$1.exports;
}

var formatHex$1 = {exports: {}};

var formatHex = formatHex$1.exports;

var hasRequiredFormatHex;

function requireFormatHex () {
	if (hasRequiredFormatHex) return formatHex$1.exports;
	hasRequiredFormatHex = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireCipherCore());
			}
		}(formatHex, function (CryptoJS) {

			(function (undefined$1) {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var CipherParams = C_lib.CipherParams;
			    var C_enc = C.enc;
			    var Hex = C_enc.Hex;
			    var C_format = C.format;

			    C_format.Hex = {
			        /**
			         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
			         *
			         * @param {CipherParams} cipherParams The cipher params object.
			         *
			         * @return {string} The hexadecimally encoded string.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
			         */
			        stringify: function (cipherParams) {
			            return cipherParams.ciphertext.toString(Hex);
			        },

			        /**
			         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
			         *
			         * @param {string} input The hexadecimally encoded string.
			         *
			         * @return {CipherParams} The cipher params object.
			         *
			         * @static
			         *
			         * @example
			         *
			         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
			         */
			        parse: function (input) {
			            var ciphertext = Hex.parse(input);
			            return CipherParams.create({ ciphertext: ciphertext });
			        }
			    };
			}());


			return CryptoJS.format.Hex;

		})); 
	} (formatHex$1));
	return formatHex$1.exports;
}

var aes$1 = {exports: {}};

var aes = aes$1.exports;

var hasRequiredAes;

function requireAes () {
	if (hasRequiredAes) return aes$1.exports;
	hasRequiredAes = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
			}
		}(aes, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var BlockCipher = C_lib.BlockCipher;
			    var C_algo = C.algo;

			    // Lookup tables
			    var SBOX = [];
			    var INV_SBOX = [];
			    var SUB_MIX_0 = [];
			    var SUB_MIX_1 = [];
			    var SUB_MIX_2 = [];
			    var SUB_MIX_3 = [];
			    var INV_SUB_MIX_0 = [];
			    var INV_SUB_MIX_1 = [];
			    var INV_SUB_MIX_2 = [];
			    var INV_SUB_MIX_3 = [];

			    // Compute lookup tables
			    (function () {
			        // Compute double table
			        var d = [];
			        for (var i = 0; i < 256; i++) {
			            if (i < 128) {
			                d[i] = i << 1;
			            } else {
			                d[i] = (i << 1) ^ 0x11b;
			            }
			        }

			        // Walk GF(2^8)
			        var x = 0;
			        var xi = 0;
			        for (var i = 0; i < 256; i++) {
			            // Compute sbox
			            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
			            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
			            SBOX[x] = sx;
			            INV_SBOX[sx] = x;

			            // Compute multiplication
			            var x2 = d[x];
			            var x4 = d[x2];
			            var x8 = d[x4];

			            // Compute sub bytes, mix columns tables
			            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
			            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
			            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
			            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
			            SUB_MIX_3[x] = t;

			            // Compute inv sub bytes, inv mix columns tables
			            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
			            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
			            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
			            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
			            INV_SUB_MIX_3[sx] = t;

			            // Compute next counter
			            if (!x) {
			                x = xi = 1;
			            } else {
			                x = x2 ^ d[d[d[x8 ^ x2]]];
			                xi ^= d[d[xi]];
			            }
			        }
			    }());

			    // Precomputed Rcon lookup
			    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

			    /**
			     * AES block cipher algorithm.
			     */
			    var AES = C_algo.AES = BlockCipher.extend({
			        _doReset: function () {
			            var t;

			            // Skip reset of nRounds has been set before and key did not change
			            if (this._nRounds && this._keyPriorReset === this._key) {
			                return;
			            }

			            // Shortcuts
			            var key = this._keyPriorReset = this._key;
			            var keyWords = key.words;
			            var keySize = key.sigBytes / 4;

			            // Compute number of rounds
			            var nRounds = this._nRounds = keySize + 6;

			            // Compute number of key schedule rows
			            var ksRows = (nRounds + 1) * 4;

			            // Compute key schedule
			            var keySchedule = this._keySchedule = [];
			            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
			                if (ksRow < keySize) {
			                    keySchedule[ksRow] = keyWords[ksRow];
			                } else {
			                    t = keySchedule[ksRow - 1];

			                    if (!(ksRow % keySize)) {
			                        // Rot word
			                        t = (t << 8) | (t >>> 24);

			                        // Sub word
			                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

			                        // Mix Rcon
			                        t ^= RCON[(ksRow / keySize) | 0] << 24;
			                    } else if (keySize > 6 && ksRow % keySize == 4) {
			                        // Sub word
			                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
			                    }

			                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
			                }
			            }

			            // Compute inv key schedule
			            var invKeySchedule = this._invKeySchedule = [];
			            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
			                var ksRow = ksRows - invKsRow;

			                if (invKsRow % 4) {
			                    var t = keySchedule[ksRow];
			                } else {
			                    var t = keySchedule[ksRow - 4];
			                }

			                if (invKsRow < 4 || ksRow <= 4) {
			                    invKeySchedule[invKsRow] = t;
			                } else {
			                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
			                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
			                }
			            }
			        },

			        encryptBlock: function (M, offset) {
			            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
			        },

			        decryptBlock: function (M, offset) {
			            // Swap 2nd and 4th rows
			            var t = M[offset + 1];
			            M[offset + 1] = M[offset + 3];
			            M[offset + 3] = t;

			            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

			            // Inv swap 2nd and 4th rows
			            var t = M[offset + 1];
			            M[offset + 1] = M[offset + 3];
			            M[offset + 3] = t;
			        },

			        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
			            // Shortcut
			            var nRounds = this._nRounds;

			            // Get input, add round key
			            var s0 = M[offset]     ^ keySchedule[0];
			            var s1 = M[offset + 1] ^ keySchedule[1];
			            var s2 = M[offset + 2] ^ keySchedule[2];
			            var s3 = M[offset + 3] ^ keySchedule[3];

			            // Key schedule row counter
			            var ksRow = 4;

			            // Rounds
			            for (var round = 1; round < nRounds; round++) {
			                // Shift rows, sub bytes, mix columns, add round key
			                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
			                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
			                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
			                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

			                // Update state
			                s0 = t0;
			                s1 = t1;
			                s2 = t2;
			                s3 = t3;
			            }

			            // Shift rows, sub bytes, add round key
			            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
			            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
			            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
			            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

			            // Set output
			            M[offset]     = t0;
			            M[offset + 1] = t1;
			            M[offset + 2] = t2;
			            M[offset + 3] = t3;
			        },

			        keySize: 256/32
			    });

			    /**
			     * Shortcut functions to the cipher's object interface.
			     *
			     * @example
			     *
			     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
			     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
			     */
			    C.AES = BlockCipher._createHelper(AES);
			}());


			return CryptoJS.AES;

		})); 
	} (aes$1));
	return aes$1.exports;
}

var tripledes$1 = {exports: {}};

var tripledes = tripledes$1.exports;

var hasRequiredTripledes;

function requireTripledes () {
	if (hasRequiredTripledes) return tripledes$1.exports;
	hasRequiredTripledes = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
			}
		}(tripledes, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var WordArray = C_lib.WordArray;
			    var BlockCipher = C_lib.BlockCipher;
			    var C_algo = C.algo;

			    // Permuted Choice 1 constants
			    var PC1 = [
			        57, 49, 41, 33, 25, 17, 9,  1,
			        58, 50, 42, 34, 26, 18, 10, 2,
			        59, 51, 43, 35, 27, 19, 11, 3,
			        60, 52, 44, 36, 63, 55, 47, 39,
			        31, 23, 15, 7,  62, 54, 46, 38,
			        30, 22, 14, 6,  61, 53, 45, 37,
			        29, 21, 13, 5,  28, 20, 12, 4
			    ];

			    // Permuted Choice 2 constants
			    var PC2 = [
			        14, 17, 11, 24, 1,  5,
			        3,  28, 15, 6,  21, 10,
			        23, 19, 12, 4,  26, 8,
			        16, 7,  27, 20, 13, 2,
			        41, 52, 31, 37, 47, 55,
			        30, 40, 51, 45, 33, 48,
			        44, 49, 39, 56, 34, 53,
			        46, 42, 50, 36, 29, 32
			    ];

			    // Cumulative bit shift constants
			    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

			    // SBOXes and round permutation constants
			    var SBOX_P = [
			        {
			            0x0: 0x808200,
			            0x10000000: 0x8000,
			            0x20000000: 0x808002,
			            0x30000000: 0x2,
			            0x40000000: 0x200,
			            0x50000000: 0x808202,
			            0x60000000: 0x800202,
			            0x70000000: 0x800000,
			            0x80000000: 0x202,
			            0x90000000: 0x800200,
			            0xa0000000: 0x8200,
			            0xb0000000: 0x808000,
			            0xc0000000: 0x8002,
			            0xd0000000: 0x800002,
			            0xe0000000: 0x0,
			            0xf0000000: 0x8202,
			            0x8000000: 0x0,
			            0x18000000: 0x808202,
			            0x28000000: 0x8202,
			            0x38000000: 0x8000,
			            0x48000000: 0x808200,
			            0x58000000: 0x200,
			            0x68000000: 0x808002,
			            0x78000000: 0x2,
			            0x88000000: 0x800200,
			            0x98000000: 0x8200,
			            0xa8000000: 0x808000,
			            0xb8000000: 0x800202,
			            0xc8000000: 0x800002,
			            0xd8000000: 0x8002,
			            0xe8000000: 0x202,
			            0xf8000000: 0x800000,
			            0x1: 0x8000,
			            0x10000001: 0x2,
			            0x20000001: 0x808200,
			            0x30000001: 0x800000,
			            0x40000001: 0x808002,
			            0x50000001: 0x8200,
			            0x60000001: 0x200,
			            0x70000001: 0x800202,
			            0x80000001: 0x808202,
			            0x90000001: 0x808000,
			            0xa0000001: 0x800002,
			            0xb0000001: 0x8202,
			            0xc0000001: 0x202,
			            0xd0000001: 0x800200,
			            0xe0000001: 0x8002,
			            0xf0000001: 0x0,
			            0x8000001: 0x808202,
			            0x18000001: 0x808000,
			            0x28000001: 0x800000,
			            0x38000001: 0x200,
			            0x48000001: 0x8000,
			            0x58000001: 0x800002,
			            0x68000001: 0x2,
			            0x78000001: 0x8202,
			            0x88000001: 0x8002,
			            0x98000001: 0x800202,
			            0xa8000001: 0x202,
			            0xb8000001: 0x808200,
			            0xc8000001: 0x800200,
			            0xd8000001: 0x0,
			            0xe8000001: 0x8200,
			            0xf8000001: 0x808002
			        },
			        {
			            0x0: 0x40084010,
			            0x1000000: 0x4000,
			            0x2000000: 0x80000,
			            0x3000000: 0x40080010,
			            0x4000000: 0x40000010,
			            0x5000000: 0x40084000,
			            0x6000000: 0x40004000,
			            0x7000000: 0x10,
			            0x8000000: 0x84000,
			            0x9000000: 0x40004010,
			            0xa000000: 0x40000000,
			            0xb000000: 0x84010,
			            0xc000000: 0x80010,
			            0xd000000: 0x0,
			            0xe000000: 0x4010,
			            0xf000000: 0x40080000,
			            0x800000: 0x40004000,
			            0x1800000: 0x84010,
			            0x2800000: 0x10,
			            0x3800000: 0x40004010,
			            0x4800000: 0x40084010,
			            0x5800000: 0x40000000,
			            0x6800000: 0x80000,
			            0x7800000: 0x40080010,
			            0x8800000: 0x80010,
			            0x9800000: 0x0,
			            0xa800000: 0x4000,
			            0xb800000: 0x40080000,
			            0xc800000: 0x40000010,
			            0xd800000: 0x84000,
			            0xe800000: 0x40084000,
			            0xf800000: 0x4010,
			            0x10000000: 0x0,
			            0x11000000: 0x40080010,
			            0x12000000: 0x40004010,
			            0x13000000: 0x40084000,
			            0x14000000: 0x40080000,
			            0x15000000: 0x10,
			            0x16000000: 0x84010,
			            0x17000000: 0x4000,
			            0x18000000: 0x4010,
			            0x19000000: 0x80000,
			            0x1a000000: 0x80010,
			            0x1b000000: 0x40000010,
			            0x1c000000: 0x84000,
			            0x1d000000: 0x40004000,
			            0x1e000000: 0x40000000,
			            0x1f000000: 0x40084010,
			            0x10800000: 0x84010,
			            0x11800000: 0x80000,
			            0x12800000: 0x40080000,
			            0x13800000: 0x4000,
			            0x14800000: 0x40004000,
			            0x15800000: 0x40084010,
			            0x16800000: 0x10,
			            0x17800000: 0x40000000,
			            0x18800000: 0x40084000,
			            0x19800000: 0x40000010,
			            0x1a800000: 0x40004010,
			            0x1b800000: 0x80010,
			            0x1c800000: 0x0,
			            0x1d800000: 0x4010,
			            0x1e800000: 0x40080010,
			            0x1f800000: 0x84000
			        },
			        {
			            0x0: 0x104,
			            0x100000: 0x0,
			            0x200000: 0x4000100,
			            0x300000: 0x10104,
			            0x400000: 0x10004,
			            0x500000: 0x4000004,
			            0x600000: 0x4010104,
			            0x700000: 0x4010000,
			            0x800000: 0x4000000,
			            0x900000: 0x4010100,
			            0xa00000: 0x10100,
			            0xb00000: 0x4010004,
			            0xc00000: 0x4000104,
			            0xd00000: 0x10000,
			            0xe00000: 0x4,
			            0xf00000: 0x100,
			            0x80000: 0x4010100,
			            0x180000: 0x4010004,
			            0x280000: 0x0,
			            0x380000: 0x4000100,
			            0x480000: 0x4000004,
			            0x580000: 0x10000,
			            0x680000: 0x10004,
			            0x780000: 0x104,
			            0x880000: 0x4,
			            0x980000: 0x100,
			            0xa80000: 0x4010000,
			            0xb80000: 0x10104,
			            0xc80000: 0x10100,
			            0xd80000: 0x4000104,
			            0xe80000: 0x4010104,
			            0xf80000: 0x4000000,
			            0x1000000: 0x4010100,
			            0x1100000: 0x10004,
			            0x1200000: 0x10000,
			            0x1300000: 0x4000100,
			            0x1400000: 0x100,
			            0x1500000: 0x4010104,
			            0x1600000: 0x4000004,
			            0x1700000: 0x0,
			            0x1800000: 0x4000104,
			            0x1900000: 0x4000000,
			            0x1a00000: 0x4,
			            0x1b00000: 0x10100,
			            0x1c00000: 0x4010000,
			            0x1d00000: 0x104,
			            0x1e00000: 0x10104,
			            0x1f00000: 0x4010004,
			            0x1080000: 0x4000000,
			            0x1180000: 0x104,
			            0x1280000: 0x4010100,
			            0x1380000: 0x0,
			            0x1480000: 0x10004,
			            0x1580000: 0x4000100,
			            0x1680000: 0x100,
			            0x1780000: 0x4010004,
			            0x1880000: 0x10000,
			            0x1980000: 0x4010104,
			            0x1a80000: 0x10104,
			            0x1b80000: 0x4000004,
			            0x1c80000: 0x4000104,
			            0x1d80000: 0x4010000,
			            0x1e80000: 0x4,
			            0x1f80000: 0x10100
			        },
			        {
			            0x0: 0x80401000,
			            0x10000: 0x80001040,
			            0x20000: 0x401040,
			            0x30000: 0x80400000,
			            0x40000: 0x0,
			            0x50000: 0x401000,
			            0x60000: 0x80000040,
			            0x70000: 0x400040,
			            0x80000: 0x80000000,
			            0x90000: 0x400000,
			            0xa0000: 0x40,
			            0xb0000: 0x80001000,
			            0xc0000: 0x80400040,
			            0xd0000: 0x1040,
			            0xe0000: 0x1000,
			            0xf0000: 0x80401040,
			            0x8000: 0x80001040,
			            0x18000: 0x40,
			            0x28000: 0x80400040,
			            0x38000: 0x80001000,
			            0x48000: 0x401000,
			            0x58000: 0x80401040,
			            0x68000: 0x0,
			            0x78000: 0x80400000,
			            0x88000: 0x1000,
			            0x98000: 0x80401000,
			            0xa8000: 0x400000,
			            0xb8000: 0x1040,
			            0xc8000: 0x80000000,
			            0xd8000: 0x400040,
			            0xe8000: 0x401040,
			            0xf8000: 0x80000040,
			            0x100000: 0x400040,
			            0x110000: 0x401000,
			            0x120000: 0x80000040,
			            0x130000: 0x0,
			            0x140000: 0x1040,
			            0x150000: 0x80400040,
			            0x160000: 0x80401000,
			            0x170000: 0x80001040,
			            0x180000: 0x80401040,
			            0x190000: 0x80000000,
			            0x1a0000: 0x80400000,
			            0x1b0000: 0x401040,
			            0x1c0000: 0x80001000,
			            0x1d0000: 0x400000,
			            0x1e0000: 0x40,
			            0x1f0000: 0x1000,
			            0x108000: 0x80400000,
			            0x118000: 0x80401040,
			            0x128000: 0x0,
			            0x138000: 0x401000,
			            0x148000: 0x400040,
			            0x158000: 0x80000000,
			            0x168000: 0x80001040,
			            0x178000: 0x40,
			            0x188000: 0x80000040,
			            0x198000: 0x1000,
			            0x1a8000: 0x80001000,
			            0x1b8000: 0x80400040,
			            0x1c8000: 0x1040,
			            0x1d8000: 0x80401000,
			            0x1e8000: 0x400000,
			            0x1f8000: 0x401040
			        },
			        {
			            0x0: 0x80,
			            0x1000: 0x1040000,
			            0x2000: 0x40000,
			            0x3000: 0x20000000,
			            0x4000: 0x20040080,
			            0x5000: 0x1000080,
			            0x6000: 0x21000080,
			            0x7000: 0x40080,
			            0x8000: 0x1000000,
			            0x9000: 0x20040000,
			            0xa000: 0x20000080,
			            0xb000: 0x21040080,
			            0xc000: 0x21040000,
			            0xd000: 0x0,
			            0xe000: 0x1040080,
			            0xf000: 0x21000000,
			            0x800: 0x1040080,
			            0x1800: 0x21000080,
			            0x2800: 0x80,
			            0x3800: 0x1040000,
			            0x4800: 0x40000,
			            0x5800: 0x20040080,
			            0x6800: 0x21040000,
			            0x7800: 0x20000000,
			            0x8800: 0x20040000,
			            0x9800: 0x0,
			            0xa800: 0x21040080,
			            0xb800: 0x1000080,
			            0xc800: 0x20000080,
			            0xd800: 0x21000000,
			            0xe800: 0x1000000,
			            0xf800: 0x40080,
			            0x10000: 0x40000,
			            0x11000: 0x80,
			            0x12000: 0x20000000,
			            0x13000: 0x21000080,
			            0x14000: 0x1000080,
			            0x15000: 0x21040000,
			            0x16000: 0x20040080,
			            0x17000: 0x1000000,
			            0x18000: 0x21040080,
			            0x19000: 0x21000000,
			            0x1a000: 0x1040000,
			            0x1b000: 0x20040000,
			            0x1c000: 0x40080,
			            0x1d000: 0x20000080,
			            0x1e000: 0x0,
			            0x1f000: 0x1040080,
			            0x10800: 0x21000080,
			            0x11800: 0x1000000,
			            0x12800: 0x1040000,
			            0x13800: 0x20040080,
			            0x14800: 0x20000000,
			            0x15800: 0x1040080,
			            0x16800: 0x80,
			            0x17800: 0x21040000,
			            0x18800: 0x40080,
			            0x19800: 0x21040080,
			            0x1a800: 0x0,
			            0x1b800: 0x21000000,
			            0x1c800: 0x1000080,
			            0x1d800: 0x40000,
			            0x1e800: 0x20040000,
			            0x1f800: 0x20000080
			        },
			        {
			            0x0: 0x10000008,
			            0x100: 0x2000,
			            0x200: 0x10200000,
			            0x300: 0x10202008,
			            0x400: 0x10002000,
			            0x500: 0x200000,
			            0x600: 0x200008,
			            0x700: 0x10000000,
			            0x800: 0x0,
			            0x900: 0x10002008,
			            0xa00: 0x202000,
			            0xb00: 0x8,
			            0xc00: 0x10200008,
			            0xd00: 0x202008,
			            0xe00: 0x2008,
			            0xf00: 0x10202000,
			            0x80: 0x10200000,
			            0x180: 0x10202008,
			            0x280: 0x8,
			            0x380: 0x200000,
			            0x480: 0x202008,
			            0x580: 0x10000008,
			            0x680: 0x10002000,
			            0x780: 0x2008,
			            0x880: 0x200008,
			            0x980: 0x2000,
			            0xa80: 0x10002008,
			            0xb80: 0x10200008,
			            0xc80: 0x0,
			            0xd80: 0x10202000,
			            0xe80: 0x202000,
			            0xf80: 0x10000000,
			            0x1000: 0x10002000,
			            0x1100: 0x10200008,
			            0x1200: 0x10202008,
			            0x1300: 0x2008,
			            0x1400: 0x200000,
			            0x1500: 0x10000000,
			            0x1600: 0x10000008,
			            0x1700: 0x202000,
			            0x1800: 0x202008,
			            0x1900: 0x0,
			            0x1a00: 0x8,
			            0x1b00: 0x10200000,
			            0x1c00: 0x2000,
			            0x1d00: 0x10002008,
			            0x1e00: 0x10202000,
			            0x1f00: 0x200008,
			            0x1080: 0x8,
			            0x1180: 0x202000,
			            0x1280: 0x200000,
			            0x1380: 0x10000008,
			            0x1480: 0x10002000,
			            0x1580: 0x2008,
			            0x1680: 0x10202008,
			            0x1780: 0x10200000,
			            0x1880: 0x10202000,
			            0x1980: 0x10200008,
			            0x1a80: 0x2000,
			            0x1b80: 0x202008,
			            0x1c80: 0x200008,
			            0x1d80: 0x0,
			            0x1e80: 0x10000000,
			            0x1f80: 0x10002008
			        },
			        {
			            0x0: 0x100000,
			            0x10: 0x2000401,
			            0x20: 0x400,
			            0x30: 0x100401,
			            0x40: 0x2100401,
			            0x50: 0x0,
			            0x60: 0x1,
			            0x70: 0x2100001,
			            0x80: 0x2000400,
			            0x90: 0x100001,
			            0xa0: 0x2000001,
			            0xb0: 0x2100400,
			            0xc0: 0x2100000,
			            0xd0: 0x401,
			            0xe0: 0x100400,
			            0xf0: 0x2000000,
			            0x8: 0x2100001,
			            0x18: 0x0,
			            0x28: 0x2000401,
			            0x38: 0x2100400,
			            0x48: 0x100000,
			            0x58: 0x2000001,
			            0x68: 0x2000000,
			            0x78: 0x401,
			            0x88: 0x100401,
			            0x98: 0x2000400,
			            0xa8: 0x2100000,
			            0xb8: 0x100001,
			            0xc8: 0x400,
			            0xd8: 0x2100401,
			            0xe8: 0x1,
			            0xf8: 0x100400,
			            0x100: 0x2000000,
			            0x110: 0x100000,
			            0x120: 0x2000401,
			            0x130: 0x2100001,
			            0x140: 0x100001,
			            0x150: 0x2000400,
			            0x160: 0x2100400,
			            0x170: 0x100401,
			            0x180: 0x401,
			            0x190: 0x2100401,
			            0x1a0: 0x100400,
			            0x1b0: 0x1,
			            0x1c0: 0x0,
			            0x1d0: 0x2100000,
			            0x1e0: 0x2000001,
			            0x1f0: 0x400,
			            0x108: 0x100400,
			            0x118: 0x2000401,
			            0x128: 0x2100001,
			            0x138: 0x1,
			            0x148: 0x2000000,
			            0x158: 0x100000,
			            0x168: 0x401,
			            0x178: 0x2100400,
			            0x188: 0x2000001,
			            0x198: 0x2100000,
			            0x1a8: 0x0,
			            0x1b8: 0x2100401,
			            0x1c8: 0x100401,
			            0x1d8: 0x400,
			            0x1e8: 0x2000400,
			            0x1f8: 0x100001
			        },
			        {
			            0x0: 0x8000820,
			            0x1: 0x20000,
			            0x2: 0x8000000,
			            0x3: 0x20,
			            0x4: 0x20020,
			            0x5: 0x8020820,
			            0x6: 0x8020800,
			            0x7: 0x800,
			            0x8: 0x8020000,
			            0x9: 0x8000800,
			            0xa: 0x20800,
			            0xb: 0x8020020,
			            0xc: 0x820,
			            0xd: 0x0,
			            0xe: 0x8000020,
			            0xf: 0x20820,
			            0x80000000: 0x800,
			            0x80000001: 0x8020820,
			            0x80000002: 0x8000820,
			            0x80000003: 0x8000000,
			            0x80000004: 0x8020000,
			            0x80000005: 0x20800,
			            0x80000006: 0x20820,
			            0x80000007: 0x20,
			            0x80000008: 0x8000020,
			            0x80000009: 0x820,
			            0x8000000a: 0x20020,
			            0x8000000b: 0x8020800,
			            0x8000000c: 0x0,
			            0x8000000d: 0x8020020,
			            0x8000000e: 0x8000800,
			            0x8000000f: 0x20000,
			            0x10: 0x20820,
			            0x11: 0x8020800,
			            0x12: 0x20,
			            0x13: 0x800,
			            0x14: 0x8000800,
			            0x15: 0x8000020,
			            0x16: 0x8020020,
			            0x17: 0x20000,
			            0x18: 0x0,
			            0x19: 0x20020,
			            0x1a: 0x8020000,
			            0x1b: 0x8000820,
			            0x1c: 0x8020820,
			            0x1d: 0x20800,
			            0x1e: 0x820,
			            0x1f: 0x8000000,
			            0x80000010: 0x20000,
			            0x80000011: 0x800,
			            0x80000012: 0x8020020,
			            0x80000013: 0x20820,
			            0x80000014: 0x20,
			            0x80000015: 0x8020000,
			            0x80000016: 0x8000000,
			            0x80000017: 0x8000820,
			            0x80000018: 0x8020820,
			            0x80000019: 0x8000020,
			            0x8000001a: 0x8000800,
			            0x8000001b: 0x0,
			            0x8000001c: 0x20800,
			            0x8000001d: 0x820,
			            0x8000001e: 0x20020,
			            0x8000001f: 0x8020800
			        }
			    ];

			    // Masks that select the SBOX input
			    var SBOX_MASK = [
			        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
			        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
			    ];

			    /**
			     * DES block cipher algorithm.
			     */
			    var DES = C_algo.DES = BlockCipher.extend({
			        _doReset: function () {
			            // Shortcuts
			            var key = this._key;
			            var keyWords = key.words;

			            // Select 56 bits according to PC1
			            var keyBits = [];
			            for (var i = 0; i < 56; i++) {
			                var keyBitPos = PC1[i] - 1;
			                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
			            }

			            // Assemble 16 subkeys
			            var subKeys = this._subKeys = [];
			            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
			                // Create subkey
			                var subKey = subKeys[nSubKey] = [];

			                // Shortcut
			                var bitShift = BIT_SHIFTS[nSubKey];

			                // Select 48 bits according to PC2
			                for (var i = 0; i < 24; i++) {
			                    // Select from the left 28 key bits
			                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

			                    // Select from the right 28 key bits
			                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
			                }

			                // Since each subkey is applied to an expanded 32-bit input,
			                // the subkey can be broken into 8 values scaled to 32-bits,
			                // which allows the key to be used without expansion
			                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
			                for (var i = 1; i < 7; i++) {
			                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
			                }
			                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
			            }

			            // Compute inverse subkeys
			            var invSubKeys = this._invSubKeys = [];
			            for (var i = 0; i < 16; i++) {
			                invSubKeys[i] = subKeys[15 - i];
			            }
			        },

			        encryptBlock: function (M, offset) {
			            this._doCryptBlock(M, offset, this._subKeys);
			        },

			        decryptBlock: function (M, offset) {
			            this._doCryptBlock(M, offset, this._invSubKeys);
			        },

			        _doCryptBlock: function (M, offset, subKeys) {
			            // Get input
			            this._lBlock = M[offset];
			            this._rBlock = M[offset + 1];

			            // Initial permutation
			            exchangeLR.call(this, 4,  0x0f0f0f0f);
			            exchangeLR.call(this, 16, 0x0000ffff);
			            exchangeRL.call(this, 2,  0x33333333);
			            exchangeRL.call(this, 8,  0x00ff00ff);
			            exchangeLR.call(this, 1,  0x55555555);

			            // Rounds
			            for (var round = 0; round < 16; round++) {
			                // Shortcuts
			                var subKey = subKeys[round];
			                var lBlock = this._lBlock;
			                var rBlock = this._rBlock;

			                // Feistel function
			                var f = 0;
			                for (var i = 0; i < 8; i++) {
			                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
			                }
			                this._lBlock = rBlock;
			                this._rBlock = lBlock ^ f;
			            }

			            // Undo swap from last round
			            var t = this._lBlock;
			            this._lBlock = this._rBlock;
			            this._rBlock = t;

			            // Final permutation
			            exchangeLR.call(this, 1,  0x55555555);
			            exchangeRL.call(this, 8,  0x00ff00ff);
			            exchangeRL.call(this, 2,  0x33333333);
			            exchangeLR.call(this, 16, 0x0000ffff);
			            exchangeLR.call(this, 4,  0x0f0f0f0f);

			            // Set output
			            M[offset] = this._lBlock;
			            M[offset + 1] = this._rBlock;
			        },

			        keySize: 64/32,

			        ivSize: 64/32,

			        blockSize: 64/32
			    });

			    // Swap bits across the left and right words
			    function exchangeLR(offset, mask) {
			        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
			        this._rBlock ^= t;
			        this._lBlock ^= t << offset;
			    }

			    function exchangeRL(offset, mask) {
			        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
			        this._lBlock ^= t;
			        this._rBlock ^= t << offset;
			    }

			    /**
			     * Shortcut functions to the cipher's object interface.
			     *
			     * @example
			     *
			     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
			     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
			     */
			    C.DES = BlockCipher._createHelper(DES);

			    /**
			     * Triple-DES block cipher algorithm.
			     */
			    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
			        _doReset: function () {
			            // Shortcuts
			            var key = this._key;
			            var keyWords = key.words;
			            // Make sure the key length is valid (64, 128 or >= 192 bit)
			            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
			                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
			            }

			            // Extend the key according to the keying options defined in 3DES standard
			            var key1 = keyWords.slice(0, 2);
			            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
			            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

			            // Create DES instances
			            this._des1 = DES.createEncryptor(WordArray.create(key1));
			            this._des2 = DES.createEncryptor(WordArray.create(key2));
			            this._des3 = DES.createEncryptor(WordArray.create(key3));
			        },

			        encryptBlock: function (M, offset) {
			            this._des1.encryptBlock(M, offset);
			            this._des2.decryptBlock(M, offset);
			            this._des3.encryptBlock(M, offset);
			        },

			        decryptBlock: function (M, offset) {
			            this._des3.decryptBlock(M, offset);
			            this._des2.encryptBlock(M, offset);
			            this._des1.decryptBlock(M, offset);
			        },

			        keySize: 192/32,

			        ivSize: 64/32,

			        blockSize: 64/32
			    });

			    /**
			     * Shortcut functions to the cipher's object interface.
			     *
			     * @example
			     *
			     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
			     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
			     */
			    C.TripleDES = BlockCipher._createHelper(TripleDES);
			}());


			return CryptoJS.TripleDES;

		})); 
	} (tripledes$1));
	return tripledes$1.exports;
}

var rc4$1 = {exports: {}};

var rc4 = rc4$1.exports;

var hasRequiredRc4;

function requireRc4 () {
	if (hasRequiredRc4) return rc4$1.exports;
	hasRequiredRc4 = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
			}
		}(rc4, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var StreamCipher = C_lib.StreamCipher;
			    var C_algo = C.algo;

			    /**
			     * RC4 stream cipher algorithm.
			     */
			    var RC4 = C_algo.RC4 = StreamCipher.extend({
			        _doReset: function () {
			            // Shortcuts
			            var key = this._key;
			            var keyWords = key.words;
			            var keySigBytes = key.sigBytes;

			            // Init sbox
			            var S = this._S = [];
			            for (var i = 0; i < 256; i++) {
			                S[i] = i;
			            }

			            // Key setup
			            for (var i = 0, j = 0; i < 256; i++) {
			                var keyByteIndex = i % keySigBytes;
			                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

			                j = (j + S[i] + keyByte) % 256;

			                // Swap
			                var t = S[i];
			                S[i] = S[j];
			                S[j] = t;
			            }

			            // Counters
			            this._i = this._j = 0;
			        },

			        _doProcessBlock: function (M, offset) {
			            M[offset] ^= generateKeystreamWord.call(this);
			        },

			        keySize: 256/32,

			        ivSize: 0
			    });

			    function generateKeystreamWord() {
			        // Shortcuts
			        var S = this._S;
			        var i = this._i;
			        var j = this._j;

			        // Generate keystream word
			        var keystreamWord = 0;
			        for (var n = 0; n < 4; n++) {
			            i = (i + 1) % 256;
			            j = (j + S[i]) % 256;

			            // Swap
			            var t = S[i];
			            S[i] = S[j];
			            S[j] = t;

			            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
			        }

			        // Update counters
			        this._i = i;
			        this._j = j;

			        return keystreamWord;
			    }

			    /**
			     * Shortcut functions to the cipher's object interface.
			     *
			     * @example
			     *
			     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
			     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
			     */
			    C.RC4 = StreamCipher._createHelper(RC4);

			    /**
			     * Modified RC4 stream cipher algorithm.
			     */
			    var RC4Drop = C_algo.RC4Drop = RC4.extend({
			        /**
			         * Configuration options.
			         *
			         * @property {number} drop The number of keystream words to drop. Default 192
			         */
			        cfg: RC4.cfg.extend({
			            drop: 192
			        }),

			        _doReset: function () {
			            RC4._doReset.call(this);

			            // Drop
			            for (var i = this.cfg.drop; i > 0; i--) {
			                generateKeystreamWord.call(this);
			            }
			        }
			    });

			    /**
			     * Shortcut functions to the cipher's object interface.
			     *
			     * @example
			     *
			     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
			     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
			     */
			    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
			}());


			return CryptoJS.RC4;

		})); 
	} (rc4$1));
	return rc4$1.exports;
}

var rabbit$1 = {exports: {}};

var rabbit = rabbit$1.exports;

var hasRequiredRabbit;

function requireRabbit () {
	if (hasRequiredRabbit) return rabbit$1.exports;
	hasRequiredRabbit = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
			}
		}(rabbit, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var StreamCipher = C_lib.StreamCipher;
			    var C_algo = C.algo;

			    // Reusable objects
			    var S  = [];
			    var C_ = [];
			    var G  = [];

			    /**
			     * Rabbit stream cipher algorithm
			     */
			    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
			        _doReset: function () {
			            // Shortcuts
			            var K = this._key.words;
			            var iv = this.cfg.iv;

			            // Swap endian
			            for (var i = 0; i < 4; i++) {
			                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
			                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
			            }

			            // Generate initial state values
			            var X = this._X = [
			                K[0], (K[3] << 16) | (K[2] >>> 16),
			                K[1], (K[0] << 16) | (K[3] >>> 16),
			                K[2], (K[1] << 16) | (K[0] >>> 16),
			                K[3], (K[2] << 16) | (K[1] >>> 16)
			            ];

			            // Generate initial counter values
			            var C = this._C = [
			                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
			                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
			                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
			                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
			            ];

			            // Carry bit
			            this._b = 0;

			            // Iterate the system four times
			            for (var i = 0; i < 4; i++) {
			                nextState.call(this);
			            }

			            // Modify the counters
			            for (var i = 0; i < 8; i++) {
			                C[i] ^= X[(i + 4) & 7];
			            }

			            // IV setup
			            if (iv) {
			                // Shortcuts
			                var IV = iv.words;
			                var IV_0 = IV[0];
			                var IV_1 = IV[1];

			                // Generate four subvectors
			                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
			                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
			                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
			                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

			                // Modify counter values
			                C[0] ^= i0;
			                C[1] ^= i1;
			                C[2] ^= i2;
			                C[3] ^= i3;
			                C[4] ^= i0;
			                C[5] ^= i1;
			                C[6] ^= i2;
			                C[7] ^= i3;

			                // Iterate the system four times
			                for (var i = 0; i < 4; i++) {
			                    nextState.call(this);
			                }
			            }
			        },

			        _doProcessBlock: function (M, offset) {
			            // Shortcut
			            var X = this._X;

			            // Iterate the system
			            nextState.call(this);

			            // Generate four keystream words
			            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
			            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
			            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
			            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

			            for (var i = 0; i < 4; i++) {
			                // Swap endian
			                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
			                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

			                // Encrypt
			                M[offset + i] ^= S[i];
			            }
			        },

			        blockSize: 128/32,

			        ivSize: 64/32
			    });

			    function nextState() {
			        // Shortcuts
			        var X = this._X;
			        var C = this._C;

			        // Save old counter values
			        for (var i = 0; i < 8; i++) {
			            C_[i] = C[i];
			        }

			        // Calculate new counter values
			        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
			        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
			        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
			        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
			        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
			        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
			        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
			        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
			        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

			        // Calculate the g-values
			        for (var i = 0; i < 8; i++) {
			            var gx = X[i] + C[i];

			            // Construct high and low argument for squaring
			            var ga = gx & 0xffff;
			            var gb = gx >>> 16;

			            // Calculate high and low result of squaring
			            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
			            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

			            // High XOR low
			            G[i] = gh ^ gl;
			        }

			        // Calculate new state values
			        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
			        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
			        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
			        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
			        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
			        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
			        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
			        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
			    }

			    /**
			     * Shortcut functions to the cipher's object interface.
			     *
			     * @example
			     *
			     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
			     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
			     */
			    C.Rabbit = StreamCipher._createHelper(Rabbit);
			}());


			return CryptoJS.Rabbit;

		})); 
	} (rabbit$1));
	return rabbit$1.exports;
}

var rabbitLegacy$1 = {exports: {}};

var rabbitLegacy = rabbitLegacy$1.exports;

var hasRequiredRabbitLegacy;

function requireRabbitLegacy () {
	if (hasRequiredRabbitLegacy) return rabbitLegacy$1.exports;
	hasRequiredRabbitLegacy = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
			}
		}(rabbitLegacy, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var StreamCipher = C_lib.StreamCipher;
			    var C_algo = C.algo;

			    // Reusable objects
			    var S  = [];
			    var C_ = [];
			    var G  = [];

			    /**
			     * Rabbit stream cipher algorithm.
			     *
			     * This is a legacy version that neglected to convert the key to little-endian.
			     * This error doesn't affect the cipher's security,
			     * but it does affect its compatibility with other implementations.
			     */
			    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
			        _doReset: function () {
			            // Shortcuts
			            var K = this._key.words;
			            var iv = this.cfg.iv;

			            // Generate initial state values
			            var X = this._X = [
			                K[0], (K[3] << 16) | (K[2] >>> 16),
			                K[1], (K[0] << 16) | (K[3] >>> 16),
			                K[2], (K[1] << 16) | (K[0] >>> 16),
			                K[3], (K[2] << 16) | (K[1] >>> 16)
			            ];

			            // Generate initial counter values
			            var C = this._C = [
			                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
			                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
			                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
			                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
			            ];

			            // Carry bit
			            this._b = 0;

			            // Iterate the system four times
			            for (var i = 0; i < 4; i++) {
			                nextState.call(this);
			            }

			            // Modify the counters
			            for (var i = 0; i < 8; i++) {
			                C[i] ^= X[(i + 4) & 7];
			            }

			            // IV setup
			            if (iv) {
			                // Shortcuts
			                var IV = iv.words;
			                var IV_0 = IV[0];
			                var IV_1 = IV[1];

			                // Generate four subvectors
			                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
			                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
			                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
			                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

			                // Modify counter values
			                C[0] ^= i0;
			                C[1] ^= i1;
			                C[2] ^= i2;
			                C[3] ^= i3;
			                C[4] ^= i0;
			                C[5] ^= i1;
			                C[6] ^= i2;
			                C[7] ^= i3;

			                // Iterate the system four times
			                for (var i = 0; i < 4; i++) {
			                    nextState.call(this);
			                }
			            }
			        },

			        _doProcessBlock: function (M, offset) {
			            // Shortcut
			            var X = this._X;

			            // Iterate the system
			            nextState.call(this);

			            // Generate four keystream words
			            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
			            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
			            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
			            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

			            for (var i = 0; i < 4; i++) {
			                // Swap endian
			                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
			                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

			                // Encrypt
			                M[offset + i] ^= S[i];
			            }
			        },

			        blockSize: 128/32,

			        ivSize: 64/32
			    });

			    function nextState() {
			        // Shortcuts
			        var X = this._X;
			        var C = this._C;

			        // Save old counter values
			        for (var i = 0; i < 8; i++) {
			            C_[i] = C[i];
			        }

			        // Calculate new counter values
			        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
			        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
			        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
			        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
			        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
			        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
			        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
			        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
			        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

			        // Calculate the g-values
			        for (var i = 0; i < 8; i++) {
			            var gx = X[i] + C[i];

			            // Construct high and low argument for squaring
			            var ga = gx & 0xffff;
			            var gb = gx >>> 16;

			            // Calculate high and low result of squaring
			            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
			            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

			            // High XOR low
			            G[i] = gh ^ gl;
			        }

			        // Calculate new state values
			        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
			        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
			        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
			        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
			        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
			        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
			        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
			        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
			    }

			    /**
			     * Shortcut functions to the cipher's object interface.
			     *
			     * @example
			     *
			     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
			     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
			     */
			    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
			}());


			return CryptoJS.RabbitLegacy;

		})); 
	} (rabbitLegacy$1));
	return rabbitLegacy$1.exports;
}

var blowfish$1 = {exports: {}};

var blowfish = blowfish$1.exports;

var hasRequiredBlowfish;

function requireBlowfish () {
	if (hasRequiredBlowfish) return blowfish$1.exports;
	hasRequiredBlowfish = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
			}
		}(blowfish, function (CryptoJS) {

			(function () {
			    // Shortcuts
			    var C = CryptoJS;
			    var C_lib = C.lib;
			    var BlockCipher = C_lib.BlockCipher;
			    var C_algo = C.algo;

			    const N = 16;

			    //Origin pbox and sbox, derived from PI
			    const ORIG_P = [
			        0x243F6A88, 0x85A308D3, 0x13198A2E, 0x03707344,
			        0xA4093822, 0x299F31D0, 0x082EFA98, 0xEC4E6C89,
			        0x452821E6, 0x38D01377, 0xBE5466CF, 0x34E90C6C,
			        0xC0AC29B7, 0xC97C50DD, 0x3F84D5B5, 0xB5470917,
			        0x9216D5D9, 0x8979FB1B
			    ];

			    const ORIG_S = [
			        [   0xD1310BA6, 0x98DFB5AC, 0x2FFD72DB, 0xD01ADFB7,
			            0xB8E1AFED, 0x6A267E96, 0xBA7C9045, 0xF12C7F99,
			            0x24A19947, 0xB3916CF7, 0x0801F2E2, 0x858EFC16,
			            0x636920D8, 0x71574E69, 0xA458FEA3, 0xF4933D7E,
			            0x0D95748F, 0x728EB658, 0x718BCD58, 0x82154AEE,
			            0x7B54A41D, 0xC25A59B5, 0x9C30D539, 0x2AF26013,
			            0xC5D1B023, 0x286085F0, 0xCA417918, 0xB8DB38EF,
			            0x8E79DCB0, 0x603A180E, 0x6C9E0E8B, 0xB01E8A3E,
			            0xD71577C1, 0xBD314B27, 0x78AF2FDA, 0x55605C60,
			            0xE65525F3, 0xAA55AB94, 0x57489862, 0x63E81440,
			            0x55CA396A, 0x2AAB10B6, 0xB4CC5C34, 0x1141E8CE,
			            0xA15486AF, 0x7C72E993, 0xB3EE1411, 0x636FBC2A,
			            0x2BA9C55D, 0x741831F6, 0xCE5C3E16, 0x9B87931E,
			            0xAFD6BA33, 0x6C24CF5C, 0x7A325381, 0x28958677,
			            0x3B8F4898, 0x6B4BB9AF, 0xC4BFE81B, 0x66282193,
			            0x61D809CC, 0xFB21A991, 0x487CAC60, 0x5DEC8032,
			            0xEF845D5D, 0xE98575B1, 0xDC262302, 0xEB651B88,
			            0x23893E81, 0xD396ACC5, 0x0F6D6FF3, 0x83F44239,
			            0x2E0B4482, 0xA4842004, 0x69C8F04A, 0x9E1F9B5E,
			            0x21C66842, 0xF6E96C9A, 0x670C9C61, 0xABD388F0,
			            0x6A51A0D2, 0xD8542F68, 0x960FA728, 0xAB5133A3,
			            0x6EEF0B6C, 0x137A3BE4, 0xBA3BF050, 0x7EFB2A98,
			            0xA1F1651D, 0x39AF0176, 0x66CA593E, 0x82430E88,
			            0x8CEE8619, 0x456F9FB4, 0x7D84A5C3, 0x3B8B5EBE,
			            0xE06F75D8, 0x85C12073, 0x401A449F, 0x56C16AA6,
			            0x4ED3AA62, 0x363F7706, 0x1BFEDF72, 0x429B023D,
			            0x37D0D724, 0xD00A1248, 0xDB0FEAD3, 0x49F1C09B,
			            0x075372C9, 0x80991B7B, 0x25D479D8, 0xF6E8DEF7,
			            0xE3FE501A, 0xB6794C3B, 0x976CE0BD, 0x04C006BA,
			            0xC1A94FB6, 0x409F60C4, 0x5E5C9EC2, 0x196A2463,
			            0x68FB6FAF, 0x3E6C53B5, 0x1339B2EB, 0x3B52EC6F,
			            0x6DFC511F, 0x9B30952C, 0xCC814544, 0xAF5EBD09,
			            0xBEE3D004, 0xDE334AFD, 0x660F2807, 0x192E4BB3,
			            0xC0CBA857, 0x45C8740F, 0xD20B5F39, 0xB9D3FBDB,
			            0x5579C0BD, 0x1A60320A, 0xD6A100C6, 0x402C7279,
			            0x679F25FE, 0xFB1FA3CC, 0x8EA5E9F8, 0xDB3222F8,
			            0x3C7516DF, 0xFD616B15, 0x2F501EC8, 0xAD0552AB,
			            0x323DB5FA, 0xFD238760, 0x53317B48, 0x3E00DF82,
			            0x9E5C57BB, 0xCA6F8CA0, 0x1A87562E, 0xDF1769DB,
			            0xD542A8F6, 0x287EFFC3, 0xAC6732C6, 0x8C4F5573,
			            0x695B27B0, 0xBBCA58C8, 0xE1FFA35D, 0xB8F011A0,
			            0x10FA3D98, 0xFD2183B8, 0x4AFCB56C, 0x2DD1D35B,
			            0x9A53E479, 0xB6F84565, 0xD28E49BC, 0x4BFB9790,
			            0xE1DDF2DA, 0xA4CB7E33, 0x62FB1341, 0xCEE4C6E8,
			            0xEF20CADA, 0x36774C01, 0xD07E9EFE, 0x2BF11FB4,
			            0x95DBDA4D, 0xAE909198, 0xEAAD8E71, 0x6B93D5A0,
			            0xD08ED1D0, 0xAFC725E0, 0x8E3C5B2F, 0x8E7594B7,
			            0x8FF6E2FB, 0xF2122B64, 0x8888B812, 0x900DF01C,
			            0x4FAD5EA0, 0x688FC31C, 0xD1CFF191, 0xB3A8C1AD,
			            0x2F2F2218, 0xBE0E1777, 0xEA752DFE, 0x8B021FA1,
			            0xE5A0CC0F, 0xB56F74E8, 0x18ACF3D6, 0xCE89E299,
			            0xB4A84FE0, 0xFD13E0B7, 0x7CC43B81, 0xD2ADA8D9,
			            0x165FA266, 0x80957705, 0x93CC7314, 0x211A1477,
			            0xE6AD2065, 0x77B5FA86, 0xC75442F5, 0xFB9D35CF,
			            0xEBCDAF0C, 0x7B3E89A0, 0xD6411BD3, 0xAE1E7E49,
			            0x00250E2D, 0x2071B35E, 0x226800BB, 0x57B8E0AF,
			            0x2464369B, 0xF009B91E, 0x5563911D, 0x59DFA6AA,
			            0x78C14389, 0xD95A537F, 0x207D5BA2, 0x02E5B9C5,
			            0x83260376, 0x6295CFA9, 0x11C81968, 0x4E734A41,
			            0xB3472DCA, 0x7B14A94A, 0x1B510052, 0x9A532915,
			            0xD60F573F, 0xBC9BC6E4, 0x2B60A476, 0x81E67400,
			            0x08BA6FB5, 0x571BE91F, 0xF296EC6B, 0x2A0DD915,
			            0xB6636521, 0xE7B9F9B6, 0xFF34052E, 0xC5855664,
			            0x53B02D5D, 0xA99F8FA1, 0x08BA4799, 0x6E85076A   ],
			        [   0x4B7A70E9, 0xB5B32944, 0xDB75092E, 0xC4192623,
			            0xAD6EA6B0, 0x49A7DF7D, 0x9CEE60B8, 0x8FEDB266,
			            0xECAA8C71, 0x699A17FF, 0x5664526C, 0xC2B19EE1,
			            0x193602A5, 0x75094C29, 0xA0591340, 0xE4183A3E,
			            0x3F54989A, 0x5B429D65, 0x6B8FE4D6, 0x99F73FD6,
			            0xA1D29C07, 0xEFE830F5, 0x4D2D38E6, 0xF0255DC1,
			            0x4CDD2086, 0x8470EB26, 0x6382E9C6, 0x021ECC5E,
			            0x09686B3F, 0x3EBAEFC9, 0x3C971814, 0x6B6A70A1,
			            0x687F3584, 0x52A0E286, 0xB79C5305, 0xAA500737,
			            0x3E07841C, 0x7FDEAE5C, 0x8E7D44EC, 0x5716F2B8,
			            0xB03ADA37, 0xF0500C0D, 0xF01C1F04, 0x0200B3FF,
			            0xAE0CF51A, 0x3CB574B2, 0x25837A58, 0xDC0921BD,
			            0xD19113F9, 0x7CA92FF6, 0x94324773, 0x22F54701,
			            0x3AE5E581, 0x37C2DADC, 0xC8B57634, 0x9AF3DDA7,
			            0xA9446146, 0x0FD0030E, 0xECC8C73E, 0xA4751E41,
			            0xE238CD99, 0x3BEA0E2F, 0x3280BBA1, 0x183EB331,
			            0x4E548B38, 0x4F6DB908, 0x6F420D03, 0xF60A04BF,
			            0x2CB81290, 0x24977C79, 0x5679B072, 0xBCAF89AF,
			            0xDE9A771F, 0xD9930810, 0xB38BAE12, 0xDCCF3F2E,
			            0x5512721F, 0x2E6B7124, 0x501ADDE6, 0x9F84CD87,
			            0x7A584718, 0x7408DA17, 0xBC9F9ABC, 0xE94B7D8C,
			            0xEC7AEC3A, 0xDB851DFA, 0x63094366, 0xC464C3D2,
			            0xEF1C1847, 0x3215D908, 0xDD433B37, 0x24C2BA16,
			            0x12A14D43, 0x2A65C451, 0x50940002, 0x133AE4DD,
			            0x71DFF89E, 0x10314E55, 0x81AC77D6, 0x5F11199B,
			            0x043556F1, 0xD7A3C76B, 0x3C11183B, 0x5924A509,
			            0xF28FE6ED, 0x97F1FBFA, 0x9EBABF2C, 0x1E153C6E,
			            0x86E34570, 0xEAE96FB1, 0x860E5E0A, 0x5A3E2AB3,
			            0x771FE71C, 0x4E3D06FA, 0x2965DCB9, 0x99E71D0F,
			            0x803E89D6, 0x5266C825, 0x2E4CC978, 0x9C10B36A,
			            0xC6150EBA, 0x94E2EA78, 0xA5FC3C53, 0x1E0A2DF4,
			            0xF2F74EA7, 0x361D2B3D, 0x1939260F, 0x19C27960,
			            0x5223A708, 0xF71312B6, 0xEBADFE6E, 0xEAC31F66,
			            0xE3BC4595, 0xA67BC883, 0xB17F37D1, 0x018CFF28,
			            0xC332DDEF, 0xBE6C5AA5, 0x65582185, 0x68AB9802,
			            0xEECEA50F, 0xDB2F953B, 0x2AEF7DAD, 0x5B6E2F84,
			            0x1521B628, 0x29076170, 0xECDD4775, 0x619F1510,
			            0x13CCA830, 0xEB61BD96, 0x0334FE1E, 0xAA0363CF,
			            0xB5735C90, 0x4C70A239, 0xD59E9E0B, 0xCBAADE14,
			            0xEECC86BC, 0x60622CA7, 0x9CAB5CAB, 0xB2F3846E,
			            0x648B1EAF, 0x19BDF0CA, 0xA02369B9, 0x655ABB50,
			            0x40685A32, 0x3C2AB4B3, 0x319EE9D5, 0xC021B8F7,
			            0x9B540B19, 0x875FA099, 0x95F7997E, 0x623D7DA8,
			            0xF837889A, 0x97E32D77, 0x11ED935F, 0x16681281,
			            0x0E358829, 0xC7E61FD6, 0x96DEDFA1, 0x7858BA99,
			            0x57F584A5, 0x1B227263, 0x9B83C3FF, 0x1AC24696,
			            0xCDB30AEB, 0x532E3054, 0x8FD948E4, 0x6DBC3128,
			            0x58EBF2EF, 0x34C6FFEA, 0xFE28ED61, 0xEE7C3C73,
			            0x5D4A14D9, 0xE864B7E3, 0x42105D14, 0x203E13E0,
			            0x45EEE2B6, 0xA3AAABEA, 0xDB6C4F15, 0xFACB4FD0,
			            0xC742F442, 0xEF6ABBB5, 0x654F3B1D, 0x41CD2105,
			            0xD81E799E, 0x86854DC7, 0xE44B476A, 0x3D816250,
			            0xCF62A1F2, 0x5B8D2646, 0xFC8883A0, 0xC1C7B6A3,
			            0x7F1524C3, 0x69CB7492, 0x47848A0B, 0x5692B285,
			            0x095BBF00, 0xAD19489D, 0x1462B174, 0x23820E00,
			            0x58428D2A, 0x0C55F5EA, 0x1DADF43E, 0x233F7061,
			            0x3372F092, 0x8D937E41, 0xD65FECF1, 0x6C223BDB,
			            0x7CDE3759, 0xCBEE7460, 0x4085F2A7, 0xCE77326E,
			            0xA6078084, 0x19F8509E, 0xE8EFD855, 0x61D99735,
			            0xA969A7AA, 0xC50C06C2, 0x5A04ABFC, 0x800BCADC,
			            0x9E447A2E, 0xC3453484, 0xFDD56705, 0x0E1E9EC9,
			            0xDB73DBD3, 0x105588CD, 0x675FDA79, 0xE3674340,
			            0xC5C43465, 0x713E38D8, 0x3D28F89E, 0xF16DFF20,
			            0x153E21E7, 0x8FB03D4A, 0xE6E39F2B, 0xDB83ADF7   ],
			        [   0xE93D5A68, 0x948140F7, 0xF64C261C, 0x94692934,
			            0x411520F7, 0x7602D4F7, 0xBCF46B2E, 0xD4A20068,
			            0xD4082471, 0x3320F46A, 0x43B7D4B7, 0x500061AF,
			            0x1E39F62E, 0x97244546, 0x14214F74, 0xBF8B8840,
			            0x4D95FC1D, 0x96B591AF, 0x70F4DDD3, 0x66A02F45,
			            0xBFBC09EC, 0x03BD9785, 0x7FAC6DD0, 0x31CB8504,
			            0x96EB27B3, 0x55FD3941, 0xDA2547E6, 0xABCA0A9A,
			            0x28507825, 0x530429F4, 0x0A2C86DA, 0xE9B66DFB,
			            0x68DC1462, 0xD7486900, 0x680EC0A4, 0x27A18DEE,
			            0x4F3FFEA2, 0xE887AD8C, 0xB58CE006, 0x7AF4D6B6,
			            0xAACE1E7C, 0xD3375FEC, 0xCE78A399, 0x406B2A42,
			            0x20FE9E35, 0xD9F385B9, 0xEE39D7AB, 0x3B124E8B,
			            0x1DC9FAF7, 0x4B6D1856, 0x26A36631, 0xEAE397B2,
			            0x3A6EFA74, 0xDD5B4332, 0x6841E7F7, 0xCA7820FB,
			            0xFB0AF54E, 0xD8FEB397, 0x454056AC, 0xBA489527,
			            0x55533A3A, 0x20838D87, 0xFE6BA9B7, 0xD096954B,
			            0x55A867BC, 0xA1159A58, 0xCCA92963, 0x99E1DB33,
			            0xA62A4A56, 0x3F3125F9, 0x5EF47E1C, 0x9029317C,
			            0xFDF8E802, 0x04272F70, 0x80BB155C, 0x05282CE3,
			            0x95C11548, 0xE4C66D22, 0x48C1133F, 0xC70F86DC,
			            0x07F9C9EE, 0x41041F0F, 0x404779A4, 0x5D886E17,
			            0x325F51EB, 0xD59BC0D1, 0xF2BCC18F, 0x41113564,
			            0x257B7834, 0x602A9C60, 0xDFF8E8A3, 0x1F636C1B,
			            0x0E12B4C2, 0x02E1329E, 0xAF664FD1, 0xCAD18115,
			            0x6B2395E0, 0x333E92E1, 0x3B240B62, 0xEEBEB922,
			            0x85B2A20E, 0xE6BA0D99, 0xDE720C8C, 0x2DA2F728,
			            0xD0127845, 0x95B794FD, 0x647D0862, 0xE7CCF5F0,
			            0x5449A36F, 0x877D48FA, 0xC39DFD27, 0xF33E8D1E,
			            0x0A476341, 0x992EFF74, 0x3A6F6EAB, 0xF4F8FD37,
			            0xA812DC60, 0xA1EBDDF8, 0x991BE14C, 0xDB6E6B0D,
			            0xC67B5510, 0x6D672C37, 0x2765D43B, 0xDCD0E804,
			            0xF1290DC7, 0xCC00FFA3, 0xB5390F92, 0x690FED0B,
			            0x667B9FFB, 0xCEDB7D9C, 0xA091CF0B, 0xD9155EA3,
			            0xBB132F88, 0x515BAD24, 0x7B9479BF, 0x763BD6EB,
			            0x37392EB3, 0xCC115979, 0x8026E297, 0xF42E312D,
			            0x6842ADA7, 0xC66A2B3B, 0x12754CCC, 0x782EF11C,
			            0x6A124237, 0xB79251E7, 0x06A1BBE6, 0x4BFB6350,
			            0x1A6B1018, 0x11CAEDFA, 0x3D25BDD8, 0xE2E1C3C9,
			            0x44421659, 0x0A121386, 0xD90CEC6E, 0xD5ABEA2A,
			            0x64AF674E, 0xDA86A85F, 0xBEBFE988, 0x64E4C3FE,
			            0x9DBC8057, 0xF0F7C086, 0x60787BF8, 0x6003604D,
			            0xD1FD8346, 0xF6381FB0, 0x7745AE04, 0xD736FCCC,
			            0x83426B33, 0xF01EAB71, 0xB0804187, 0x3C005E5F,
			            0x77A057BE, 0xBDE8AE24, 0x55464299, 0xBF582E61,
			            0x4E58F48F, 0xF2DDFDA2, 0xF474EF38, 0x8789BDC2,
			            0x5366F9C3, 0xC8B38E74, 0xB475F255, 0x46FCD9B9,
			            0x7AEB2661, 0x8B1DDF84, 0x846A0E79, 0x915F95E2,
			            0x466E598E, 0x20B45770, 0x8CD55591, 0xC902DE4C,
			            0xB90BACE1, 0xBB8205D0, 0x11A86248, 0x7574A99E,
			            0xB77F19B6, 0xE0A9DC09, 0x662D09A1, 0xC4324633,
			            0xE85A1F02, 0x09F0BE8C, 0x4A99A025, 0x1D6EFE10,
			            0x1AB93D1D, 0x0BA5A4DF, 0xA186F20F, 0x2868F169,
			            0xDCB7DA83, 0x573906FE, 0xA1E2CE9B, 0x4FCD7F52,
			            0x50115E01, 0xA70683FA, 0xA002B5C4, 0x0DE6D027,
			            0x9AF88C27, 0x773F8641, 0xC3604C06, 0x61A806B5,
			            0xF0177A28, 0xC0F586E0, 0x006058AA, 0x30DC7D62,
			            0x11E69ED7, 0x2338EA63, 0x53C2DD94, 0xC2C21634,
			            0xBBCBEE56, 0x90BCB6DE, 0xEBFC7DA1, 0xCE591D76,
			            0x6F05E409, 0x4B7C0188, 0x39720A3D, 0x7C927C24,
			            0x86E3725F, 0x724D9DB9, 0x1AC15BB4, 0xD39EB8FC,
			            0xED545578, 0x08FCA5B5, 0xD83D7CD3, 0x4DAD0FC4,
			            0x1E50EF5E, 0xB161E6F8, 0xA28514D9, 0x6C51133C,
			            0x6FD5C7E7, 0x56E14EC4, 0x362ABFCE, 0xDDC6C837,
			            0xD79A3234, 0x92638212, 0x670EFA8E, 0x406000E0  ],
			        [   0x3A39CE37, 0xD3FAF5CF, 0xABC27737, 0x5AC52D1B,
			            0x5CB0679E, 0x4FA33742, 0xD3822740, 0x99BC9BBE,
			            0xD5118E9D, 0xBF0F7315, 0xD62D1C7E, 0xC700C47B,
			            0xB78C1B6B, 0x21A19045, 0xB26EB1BE, 0x6A366EB4,
			            0x5748AB2F, 0xBC946E79, 0xC6A376D2, 0x6549C2C8,
			            0x530FF8EE, 0x468DDE7D, 0xD5730A1D, 0x4CD04DC6,
			            0x2939BBDB, 0xA9BA4650, 0xAC9526E8, 0xBE5EE304,
			            0xA1FAD5F0, 0x6A2D519A, 0x63EF8CE2, 0x9A86EE22,
			            0xC089C2B8, 0x43242EF6, 0xA51E03AA, 0x9CF2D0A4,
			            0x83C061BA, 0x9BE96A4D, 0x8FE51550, 0xBA645BD6,
			            0x2826A2F9, 0xA73A3AE1, 0x4BA99586, 0xEF5562E9,
			            0xC72FEFD3, 0xF752F7DA, 0x3F046F69, 0x77FA0A59,
			            0x80E4A915, 0x87B08601, 0x9B09E6AD, 0x3B3EE593,
			            0xE990FD5A, 0x9E34D797, 0x2CF0B7D9, 0x022B8B51,
			            0x96D5AC3A, 0x017DA67D, 0xD1CF3ED6, 0x7C7D2D28,
			            0x1F9F25CF, 0xADF2B89B, 0x5AD6B472, 0x5A88F54C,
			            0xE029AC71, 0xE019A5E6, 0x47B0ACFD, 0xED93FA9B,
			            0xE8D3C48D, 0x283B57CC, 0xF8D56629, 0x79132E28,
			            0x785F0191, 0xED756055, 0xF7960E44, 0xE3D35E8C,
			            0x15056DD4, 0x88F46DBA, 0x03A16125, 0x0564F0BD,
			            0xC3EB9E15, 0x3C9057A2, 0x97271AEC, 0xA93A072A,
			            0x1B3F6D9B, 0x1E6321F5, 0xF59C66FB, 0x26DCF319,
			            0x7533D928, 0xB155FDF5, 0x03563482, 0x8ABA3CBB,
			            0x28517711, 0xC20AD9F8, 0xABCC5167, 0xCCAD925F,
			            0x4DE81751, 0x3830DC8E, 0x379D5862, 0x9320F991,
			            0xEA7A90C2, 0xFB3E7BCE, 0x5121CE64, 0x774FBE32,
			            0xA8B6E37E, 0xC3293D46, 0x48DE5369, 0x6413E680,
			            0xA2AE0810, 0xDD6DB224, 0x69852DFD, 0x09072166,
			            0xB39A460A, 0x6445C0DD, 0x586CDECF, 0x1C20C8AE,
			            0x5BBEF7DD, 0x1B588D40, 0xCCD2017F, 0x6BB4E3BB,
			            0xDDA26A7E, 0x3A59FF45, 0x3E350A44, 0xBCB4CDD5,
			            0x72EACEA8, 0xFA6484BB, 0x8D6612AE, 0xBF3C6F47,
			            0xD29BE463, 0x542F5D9E, 0xAEC2771B, 0xF64E6370,
			            0x740E0D8D, 0xE75B1357, 0xF8721671, 0xAF537D5D,
			            0x4040CB08, 0x4EB4E2CC, 0x34D2466A, 0x0115AF84,
			            0xE1B00428, 0x95983A1D, 0x06B89FB4, 0xCE6EA048,
			            0x6F3F3B82, 0x3520AB82, 0x011A1D4B, 0x277227F8,
			            0x611560B1, 0xE7933FDC, 0xBB3A792B, 0x344525BD,
			            0xA08839E1, 0x51CE794B, 0x2F32C9B7, 0xA01FBAC9,
			            0xE01CC87E, 0xBCC7D1F6, 0xCF0111C3, 0xA1E8AAC7,
			            0x1A908749, 0xD44FBD9A, 0xD0DADECB, 0xD50ADA38,
			            0x0339C32A, 0xC6913667, 0x8DF9317C, 0xE0B12B4F,
			            0xF79E59B7, 0x43F5BB3A, 0xF2D519FF, 0x27D9459C,
			            0xBF97222C, 0x15E6FC2A, 0x0F91FC71, 0x9B941525,
			            0xFAE59361, 0xCEB69CEB, 0xC2A86459, 0x12BAA8D1,
			            0xB6C1075E, 0xE3056A0C, 0x10D25065, 0xCB03A442,
			            0xE0EC6E0E, 0x1698DB3B, 0x4C98A0BE, 0x3278E964,
			            0x9F1F9532, 0xE0D392DF, 0xD3A0342B, 0x8971F21E,
			            0x1B0A7441, 0x4BA3348C, 0xC5BE7120, 0xC37632D8,
			            0xDF359F8D, 0x9B992F2E, 0xE60B6F47, 0x0FE3F11D,
			            0xE54CDA54, 0x1EDAD891, 0xCE6279CF, 0xCD3E7E6F,
			            0x1618B166, 0xFD2C1D05, 0x848FD2C5, 0xF6FB2299,
			            0xF523F357, 0xA6327623, 0x93A83531, 0x56CCCD02,
			            0xACF08162, 0x5A75EBB5, 0x6E163697, 0x88D273CC,
			            0xDE966292, 0x81B949D0, 0x4C50901B, 0x71C65614,
			            0xE6C6C7BD, 0x327A140A, 0x45E1D006, 0xC3F27B9A,
			            0xC9AA53FD, 0x62A80F00, 0xBB25BFE2, 0x35BDD2F6,
			            0x71126905, 0xB2040222, 0xB6CBCF7C, 0xCD769C2B,
			            0x53113EC0, 0x1640E3D3, 0x38ABBD60, 0x2547ADF0,
			            0xBA38209C, 0xF746CE76, 0x77AFA1C5, 0x20756060,
			            0x85CBFE4E, 0x8AE88DD8, 0x7AAAF9B0, 0x4CF9AA7E,
			            0x1948C25C, 0x02FB8A8C, 0x01C36AE4, 0xD6EBE1F9,
			            0x90D4F869, 0xA65CDEA0, 0x3F09252D, 0xC208E69F,
			            0xB74E6132, 0xCE77E25B, 0x578FDFE3, 0x3AC372E6  ]
			    ];

			    var BLOWFISH_CTX = {
			        pbox: [],
			        sbox: []
			    };

			    function F(ctx, x){
			        let a = (x >> 24) & 0xFF;
			        let b = (x >> 16) & 0xFF;
			        let c = (x >> 8) & 0xFF;
			        let d = x & 0xFF;

			        let y = ctx.sbox[0][a] + ctx.sbox[1][b];
			        y = y ^ ctx.sbox[2][c];
			        y = y + ctx.sbox[3][d];

			        return y;
			    }

			    function BlowFish_Encrypt(ctx, left, right){
			        let Xl = left;
			        let Xr = right;
			        let temp;

			        for(let i = 0; i < N; ++i){
			            Xl = Xl ^ ctx.pbox[i];
			            Xr = F(ctx, Xl) ^ Xr;

			            temp = Xl;
			            Xl = Xr;
			            Xr = temp;
			        }

			        temp = Xl;
			        Xl = Xr;
			        Xr = temp;

			        Xr = Xr ^ ctx.pbox[N];
			        Xl = Xl ^ ctx.pbox[N + 1];

			        return {left: Xl, right: Xr};
			    }

			    function BlowFish_Decrypt(ctx, left, right){
			        let Xl = left;
			        let Xr = right;
			        let temp;

			        for(let i = N + 1; i > 1; --i){
			            Xl = Xl ^ ctx.pbox[i];
			            Xr = F(ctx, Xl) ^ Xr;

			            temp = Xl;
			            Xl = Xr;
			            Xr = temp;
			        }

			        temp = Xl;
			        Xl = Xr;
			        Xr = temp;

			        Xr = Xr ^ ctx.pbox[1];
			        Xl = Xl ^ ctx.pbox[0];

			        return {left: Xl, right: Xr};
			    }

			    /**
			     * Initialization ctx's pbox and sbox.
			     *
			     * @param {Object} ctx The object has pbox and sbox.
			     * @param {Array} key An array of 32-bit words.
			     * @param {int} keysize The length of the key.
			     *
			     * @example
			     *
			     *     BlowFishInit(BLOWFISH_CTX, key, 128/32);
			     */
			    function BlowFishInit(ctx, key, keysize)
			    {
			        for(let Row = 0; Row < 4; Row++)
			        {
			            ctx.sbox[Row] = [];
			            for(let Col = 0; Col < 256; Col++)
			            {
			                ctx.sbox[Row][Col] = ORIG_S[Row][Col];
			            }
			        }

			        let keyIndex = 0;
			        for(let index = 0; index < N + 2; index++)
			        {
			            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
			            keyIndex++;
			            if(keyIndex >= keysize)
			            {
			                keyIndex = 0;
			            }
			        }

			        let Data1 = 0;
			        let Data2 = 0;
			        let res = 0;
			        for(let i = 0; i < N + 2; i += 2)
			        {
			            res = BlowFish_Encrypt(ctx, Data1, Data2);
			            Data1 = res.left;
			            Data2 = res.right;
			            ctx.pbox[i] = Data1;
			            ctx.pbox[i + 1] = Data2;
			        }

			        for(let i = 0; i < 4; i++)
			        {
			            for(let j = 0; j < 256; j += 2)
			            {
			                res = BlowFish_Encrypt(ctx, Data1, Data2);
			                Data1 = res.left;
			                Data2 = res.right;
			                ctx.sbox[i][j] = Data1;
			                ctx.sbox[i][j + 1] = Data2;
			            }
			        }

			        return true;
			    }

			    /**
			     * Blowfish block cipher algorithm.
			     */
			    var Blowfish = C_algo.Blowfish = BlockCipher.extend({
			        _doReset: function () {
			            // Skip reset of nRounds has been set before and key did not change
			            if (this._keyPriorReset === this._key) {
			                return;
			            }

			            // Shortcuts
			            var key = this._keyPriorReset = this._key;
			            var keyWords = key.words;
			            var keySize = key.sigBytes / 4;

			            //Initialization pbox and sbox
			            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
			        },

			        encryptBlock: function (M, offset) {
			            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
			            M[offset] = res.left;
			            M[offset + 1] = res.right;
			        },

			        decryptBlock: function (M, offset) {
			            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
			            M[offset] = res.left;
			            M[offset + 1] = res.right;
			        },

			        blockSize: 64/32,

			        keySize: 128/32,

			        ivSize: 64/32
			    });

			    /**
			     * Shortcut functions to the cipher's object interface.
			     *
			     * @example
			     *
			     *     var ciphertext = CryptoJS.Blowfish.encrypt(message, key, cfg);
			     *     var plaintext  = CryptoJS.Blowfish.decrypt(ciphertext, key, cfg);
			     */
			    C.Blowfish = BlockCipher._createHelper(Blowfish);
			}());


			return CryptoJS.Blowfish;

		})); 
	} (blowfish$1));
	return blowfish$1.exports;
}

var cryptoJs = cryptoJs$1.exports;

var hasRequiredCryptoJs;

function requireCryptoJs () {
	if (hasRequiredCryptoJs) return cryptoJs$1.exports;
	hasRequiredCryptoJs = 1;
	(function (module, exports) {
(function (root, factory, undef) {
			{
				// CommonJS
				module.exports = factory(requireCore(), requireX64Core(), requireLibTypedarrays(), requireEncUtf16(), requireEncBase64(), requireEncBase64url(), requireMd5(), requireSha1(), requireSha256(), requireSha224(), requireSha512(), requireSha384(), requireSha3(), requireRipemd160(), requireHmac(), requirePbkdf2(), requireEvpkdf(), requireCipherCore(), requireModeCfb(), requireModeCtr(), requireModeCtrGladman(), requireModeOfb(), requireModeEcb(), requirePadAnsix923(), requirePadIso10126(), requirePadIso97971(), requirePadZeropadding(), requirePadNopadding(), requireFormatHex(), requireAes(), requireTripledes(), requireRc4(), requireRabbit(), requireRabbitLegacy(), requireBlowfish());
			}
		}(cryptoJs, function (CryptoJS) {

			return CryptoJS;

		})); 
	} (cryptoJs$1));
	return cryptoJs$1.exports;
}

var cryptoJsExports = requireCryptoJs();
var CryptoJS = /*@__PURE__*/getDefaultExportFromCjs(cryptoJsExports);

// Listado de cadenas y sus traducciones
const messages = {
  "Missing session parameters": "Faltan parámetros de sesión",
  "Missing order identifier": "Falta el identificador de pedido",
  "Order details not found": "Detalles del pedido no encontrados",
  "Missing required parameter (orderId)": "Falta el parámetro requerido (orderId)",
  "There was an error processing the payment": "Hubo un error al procesar el pago",
  "orderId is required": "orderId es requerido",
  "There was an error creating the invoice": "Hubo un error al crear la factura",
  "No products found": "No se encontraron productos",
  "OptionGroup not found": "No se encontró el grupo de opciones",
  "Option name already exists": "El nombre de la opción ya existe",
  "Failed to create Option": "Error al crear la opción",
  "OptionGroup name already exists": "El nombre del grupo de opciones ya existe",
  "Failed to create OptionGroup": "Error al crear el grupo de opciones",
  "Missing params": "Faltan parámetros",
  "User not found": "Usuario no encontrado",
  "Order payment processed successfully": "Pago de pedido procesado con éxito",
  "Invoice created successfully": "Factura creada con éxito",
  "Catalogs deleted successfully": "Catálogos eliminados con éxito",
  "User created successfully": "Usuario creado con éxito",
  "Category created successfully": "Categoría creada con éxito",
  "Category updated successfully": "Categoría actualizada con éxito",
  "Categories retrieved successfully": "Categorías recuperadas con éxito",
  "Filtered orders fetched successfully": "Órdenes filtradas obtenidas con éxito",
  "Statistics not found": "Estadísticas no encontradas",
  "Bad request": "Solicitud incorrecta",
  "Failed to create category": "Error al crear la categoría",
  "Category does not exist": "La categoría no existe",
  "Failed to update category": "Error al actualizar la categoría",
  "Internal server error": "Error interno del servidor",
  "Categories added to discount successfully": "Categorías añadidas al descuento con éxito",
  "Categories removed from discount successfully": "Categorías eliminadas del descuento con éxito",
  "Discount status toggled successfully": "Estado del descuento cambiado con éxito",
  "Discount deleted successfully": "Descuento eliminado con éxito",
  "Discount created successfully": "Descuento creado con éxito",
  "Printer not found or failed to update": "Impresora no encontrada o falló al actualizar",
  "Printer not found or failed to delete": "Impresora no encontrada o falló al eliminar",
  "Printer not found or failed to print": "Impresora no encontrada o falló al imprimir",
  "Missing identifier": "Falta identificador",
  "Invalid email": "Correo electrónico inválido",
  "Invalid phone number": "Número de teléfono inválido",
  "Error updating the sales channel": "Error al actualizar el canal de ventas",
  "Login successful (Customer)": "Inicio de sesión exitoso (Cliente)",
  "Login successful": "Inicio de sesión exitoso",
  "Logged out": "Sesión cerrada",
  "Business hours deleted successfully": "Horas de negocio eliminadas con éxito",
  "Catalog created successfully": "Catálogo creado con éxito",
  "Catalog fetched successfully": "Catálogo recuperado con éxito",
  "Catalogs fetched successfully": "Catálogos recuperados con éxito",
  "Catalog updated successfully": "Catálogo actualizado con éxito",
  "Catalog deleted successfully": "Catálogo eliminado con éxito",
  "Catalogs deleted successfully": "Catálogos eliminados con éxito",
  "Products added successfully to catalog": "Productos añadidos con éxito al catálogo",
  "Catalog products updated successfully": "Productos del catálogo actualizados con éxito",
  "Products status toggled successfully": "Estado de los productos cambiado con éxito",
  "Products fetched successfully": "Productos recuperados con éxito",
  "Category retrieved successfully": "Categoría recuperada con éxito",
  "Category deleted successfully": "Categoría eliminada con éxito",
  "Products added to category successfully": "Productos añadidos a la categoría con éxito",
  "Products removed from category successfully": "Productos eliminados de la categoría con éxito",
  "Category products updated successfully": "Productos de la categoría actualizados con éxito",
  "Categories deleted successfully": "Categorías eliminadas con éxito",
  "Corporation created successfully": "Corporación creada con éxito",
  "Corporation updated successfully": "Corporación actualizada con éxito",
  "Corporation deleted successfully": "Corporación eliminada con éxito",
  "Maintenance message updated successfully": "Mensaje de mantenimiento actualizado con éxito",
  "Active invoicing status toggled successfully": "Estado de facturación activado con éxito",
  "Invoices prefixes updated successfully": "Prefijos de factura actualizados con éxito",
  "Invoices number formats updated successfully": "Formatos de números de factura actualizados con éxito",
  "Corporation data deleted successfully": "Datos de la corporación eliminados con éxito",
  "Abandon shopping cart time updated successfully": "Tiempo de abandono del carrito de compras actualizado con éxito",
  "Design configuration updated successfully": "Configuración de diseño actualizada con éxito",
  "Customer created successfully": "Cliente creado con éxito",
  "Customer retrieved successfully": "Cliente recuperado con éxito",
  "Customers retrieved successfully": "Clientes recuperados con éxito",
  "Customer updated successfully": "Cliente actualizado con éxito",
  "Customer deleted successfully": "Cliente eliminado con éxito",
  "Customers fetched successfully": "Clientes recuperados con éxito",
  "Password changed successfully": "Contraseña cambiada con éxito",
  "Shipping address added successfully": "Dirección de envío añadida con éxito",
  "Billing address added successfully": "Dirección de facturación añadida con éxito",
  "Verification message sent successfully": "Mensaje de verificación enviado con éxito",
  "User verified successfully": "Usuario verificado con éxito",
  "Data not found or an error occurred": "Datos no encontrados o ocurrió un error",
  "Customer information": "Información del cliente",
  "Discount updated successfully": "Descuento actualizado con éxito",
  "Discount deleted successfully": "Descuento eliminado con éxito",
  "Discount retrieved successfully": "Descuento recuperado con éxito",
  "Discounts retrieved successfully": "Descuentos recuperados con éxito",
  "Categories added to discount successfully": "Categorías añadidas al descuento con éxito",
  "Categories removed from discount successfully": "Categorías eliminadas del descuento con éxito",
  "Orders added to discount successfully": "Órdenes añadidas al descuento con éxito",
  "Discounts deleted successfully": "Descuentos eliminados con éxito",
  "Discounts filtered successfully": "Descuentos filtrados con éxito",
  "Invoice created successfully": "Factura creada con éxito",
  "Item group created successfully": "Grupo de artículos creado con éxito",
  "No item groups found for this product": "No se encontraron grupos de artículos para este producto",
  "Item groups by product": "Grupos de artículos por producto",
  "Item group updated successfully": "Grupo de artículos actualizado con éxito",
  "Item group deleted successfully": "Grupo de artículos eliminado con éxito",
  "Item groups deleted successfully": "Grupos de artículos eliminados con éxito",
  "Items deleted from group successfully": "Artículos eliminados del grupo con éxito",
  "Item updated successfully": "Artículo actualizado con éxito",
  "Item deleted successfully": "Artículo eliminado con éxito",
  "Items found": "Artículos encontrados",
  "Corporation items": "Artículos de la corporación",
  "ItemGroup items": "Artículos del grupo de artículos",
  "LegalPolicies deleted successfully": "Políticas legales eliminadas con éxito",
  "Code found": "Código encontrado",
  "Valid code. Login successful.": "Código válido. Inicio de sesión exitoso.",
  "Option created successfully": "Opción creada con éxito",
  "Get Options": "Obtener opciones",
  "Option updated successfully": "Opción actualizada con éxito",
  "Order error reported successfully": "Error de pedido reportado con éxito",
  "Configurations retrieved successfully": "Configuraciones recuperadas con éxito",
  "Order manager configuration deleted successfully": "Configuración del gestor de pedidos eliminada con éxito",
  "Order manager configuration selected successfully": "Configuración del gestor de pedidos seleccionada con éxito",
  "No categories found": "No se encontraron categorías",
  "No sales channels found": "No se encontraron canales de ventas",
  "Sales channels fetched successfully": "Canales de ventas recuperados con éxito",
  "Customer orders fetched successfully": "Órdenes de clientes recuperadas con éxito",
  "Order logs fetched successfully": "Registros de órdenes recuperados con éxito",
  "Orders not found": "Órdenes no encontradas",
  "Filtered orders fetched successfully": "Órdenes filtradas recuperadas con éxito",
  "Order details fetched successfully": "Detalles de la orden recuperados con éxito",
  "Orders statistics fetched successfully": "Estadísticas de órdenes recuperadas con éxito",
  "Order made successfully": "Orden realizada con éxito",
  "Assigned orders": "Órdenes asignadas",
  "Orders ready for delivery": "Órdenes listas para entrega",
  "Order put in delivery successfully": "Orden puesta en entrega con éxito",
  "Order delivery finalized successfully": "Entrega de orden finalizada con éxito",
  "KDS Orders": "Órdenes KDS",
  "Note added to the order successfully": "Nota añadida a la orden con éxito",
  "Order updated successfully": "Orden actualizada con éxito",
  "Order payment process initiated successfully": "Proceso de pago de la orden iniciado con éxito",
  "Order status updated successfully": "Estado de la orden actualizado con éxito",
  "Payment method deleted successfully": "Método de pago eliminado con éxito",
  "Platform retrieved successfully": "Plataforma recuperada con éxito",
  "Platform updated successfully": "Plataforma actualizada con éxito",
  "Access granted": "Acceso concedido",
  "Point of Sale configuration deleted successfully": "Configuración del punto de venta eliminada con éxito",
  "User removed successfully from configuration": "Usuario eliminado con éxito de la configuración",
  "User assigned successfully to configuration": "Usuario asignado con éxito a la configuración",
  "Point of sale configuration selected successfully": "Configuración del punto de venta seleccionada con éxito",
  "Point of sale configurations deleted successfully": "Configuraciones del punto de venta eliminadas con éxito",
  "Printer created successfully": "Impresora creada con éxito",
  "Printers retrieved successfully": "Impresoras recuperadas con éxito",
  "Printer retrieved successfully": "Impresora recuperada con éxito",
  "Printer updated successfully": "Impresora actualizada con éxito",
  "Printer deleted successfully": "Impresora eliminada con éxito",
  "Order printed successfully": "Orden impresa con éxito",
  "New order printed successfully": "Nueva orden impresa con éxito",
  "Products not found for the corporation": "Productos no encontrados para la corporación",
  "Product information fetched successfully": "Información del producto obtenida con éxito",
  "Product data fetched successfully": "Datos del producto obtenidos con éxito",
  "Product created successfully": "Producto creado con éxito",
  "Product deleted successfully": "Producto eliminado con éxito",
  "Product updated successfully": "Producto actualizado con éxito",
  "Corporation products fetched successfully": "Productos de la corporación obtenidos con éxito",
  "Catalogs added to the product successfully": "Catálogos añadidos al producto con éxito",
  "Catalogs set to the product successfully": "Catálogos asignados al producto con éxito",
  "Categories added to the product successfully": "Categorías añadidas al producto con éxito",
  "Categories set to the product successfully": "Categorías asignadas al producto con éxito",
  "Allergens fetched successfully": "Alérgenos obtenidos con éxito",
  "Option group added to the product successfully": "Grupo de opciones añadido al producto con éxito",
  "Items groups added to the product successfully": "Grupos de artículos añadidos al producto con éxito",
  "Products imported successfully": "Productos importados con éxito",
  "Item group added to the product successfully": "Grupo de artículos añadido al producto con éxito",
  "Allergens added to the product successfully": "Alérgenos añadidos al producto con éxito",
  "Allergens removed from the product successfully": "Alérgenos eliminados del producto con éxito",
  "Product variants": "Variantes de producto",
  "Product variants deleted successfully": "Variantes de producto eliminadas con éxito",
  "Sales channel updated successfully": "Canal de ventas actualizado con éxito",
  "Active status toggled successfully": "Estado activo cambiado con éxito",
  "Sales channel created successfully": "Canal de ventas creado con éxito",
  "Sales channel deleted successfully": "Canal de ventas eliminado con éxito",
  "Sales channels deleted successfully": "Canales de ventas eliminados con éxito",
  "Catalog added to sales channel successfully": "Catálogo añadido al canal de ventas con éxito",
  "Shipping method deleted successfully": "Método de envío eliminado con éxito",
  "Customer shopping cart": "Carrito de compras del cliente",
  "All products removed from the cart": "Todos los productos eliminados del carrito",
  "Abandoned shopping cart": "Carrito de compras abandonado",
  "Abandoned shopping carts deleted successfully": "Carritos de compras abandonados eliminados con éxito",
  "Reminder sent successfully": "Recordatorio enviado con éxito",
  "Product quantity in cart updated successfully": "Cantidad de producto en el carrito actualizada con éxito",
  "Note added to the cart successfully": "Nota añadida al carrito con éxito",
  "Special closed day deleted successfully": "Día cerrado especial eliminado con éxito",
  "Statistics fetched successfully": "Estadísticas obtenidas con éxito",
  "Code sent successfully": "Código enviado con éxito",
  "Email sent successfully": "Correo electrónico enviado con éxito",
  "Password reset successfully": "Contraseña restablecida con éxito",
  "User created successfully": "Usuario creado con éxito",
  "User retrieved successfully": "Usuario recuperado con éxito",
  "User updated successfully": "Usuario actualizado con éxito",
  "User deleted successfully": "Usuario eliminado con éxito",
  "All users suspended successfully": "Todos los usuarios suspendidos con éxito",
  "Customers fetched successfully": "Clientes obtenidos con éxito",
  "Password successfully reset": "Contraseña restablecida con éxito",
  "Password reset email sent successfully": "Correo electrónico de restablecimiento de contraseña enviado con éxito",
  "Owner information updated successfully": "Información del propietario actualizada con éxito",
  "Corporation owner info fetched successfully": "Información del propietario de la corporación obtenida con éxito",
  "Corporation users fetched successfully": "Usuarios de la corporación obtenidos con éxito",
  "Login successful": "Inicio de sesión exitoso",
  "Permissions added to user successfully": "Permisos añadidos al usuario con éxito",
  "Permissions removed from user successfully": "Permisos eliminados del usuario con éxito",
  "Users with delivery access": "Usuarios con acceso a la entrega",
  "Variant status toggled successfully": "Estado de la variante cambiado con éxito",
  "Variant retrieved successfully": "Variante recuperada con éxito",
  "Variant updated successfully": "Variante actualizada con éxito",
  "Payment captured": "Pago capturado",
  "Logged out successfully": "Cierre de sesión exitoso",
  "Missing required data (email or password)": "Faltan datos requeridos (correo electrónico o contraseña)",
  "Invalid customer password": "Contraseña de cliente inválida",
  "Invalid email or password": "Correo electrónico o contraseña inválidos",
  "Missing required data (userId or pin)": "Faltan datos requeridos (userId o pin)",
  "The user doesn't exist": "El usuario no existe",
  "PIN is not active": "El PIN no está activo",
  "The pin isn't correct": "El PIN no es correcto",
  "Missing session data (corporationId)": "Faltan datos de sesión (corporationId)",
  "There was an error encoding the password": "Hubo un error al codificar la contraseña",
  "There was an error in the registering process": "Hubo un error en el proceso de registro",
  "Error while logging out": "Error al cerrar sesión",
  "Missing session data": "Faltan datos de sesión",
  "Failed to create business hours": "No se pudo crear el horario de atención",
  "Sales channel not found": "Canal de ventas no encontrado",
  "Business hours not found": "Horario de atención no encontrado",
  "Missing session data": "Faltan datos de sesión",
  "Missing params": "Faltan parámetros",
  "Business hours not found or failed to update": "Horario de atención no encontrado o falló al actualizar",
  "Sales channel not found": "Canal de ventas no encontrado",
  "Business hours not found or failed to delete": "Horario de atención no encontrado o falló al eliminar",
  "Missing session parameters (corporationId)": "Faltan parámetros de sesión (corporationId)",
  "Missing required params (name)": "Faltan parámetros requeridos (nombre)",
  "Error creating catalog": "Error al crear el catálogo",
  "Missing catalog ID": "Falta el ID del catálogo",
  "Catalog not found": "Catálogo no encontrado",
  "No catalogs found": "No se encontraron catálogos",
  "Missing required parameter (catalogId)": "Falta el parámetro requerido (catalogId)",
  "Error updating catalog": "Error al actualizar el catálogo",
  "Error deleting catalog": "Error al eliminar el catálogo",
  "Missing session parameters": "Faltan parámetros de sesión",
  "Missing required catalog ids": "Faltan IDs de catálogo requeridos",
  "Error deleting the catalogs": "Error al eliminar los catálogos",
  "Error adding products to catalog": "Error al añadir productos al catálogo",
  "Missing or invalid parameters": "Faltan o parámetros inválidos",
  "Error updating catalog products": "Error al actualizar productos del catálogo",
  "Error toggling products status": "Error al cambiar el estado de los productos",
  "Error removing products from catalog": "Error al eliminar productos del catálogo",
  "No catalogs found for this corporation": "No se encontraron catálogos para esta corporación",
  "Error toggling catalog active status": "Error al cambiar el estado activo del catálogo",
  "No products found": "No se encontraron productos",
  "Failed to create category": "No se pudo crear la categoría",
  "Missing params (categoryId)": "Faltan parámetros (categoryId)",
  "Category not found": "Categoría no encontrada",
  "Category does not exist": "La categoría no existe",
  "Failed to update category": "No se pudo actualizar la categoría",
  "Failed to delete category": "No se pudo eliminar la categoría",
  "No categories found": "No se encontraron categorías",
  "Category does not exist": "La categoría no existe",
  "Error updating category products": "Error al actualizar los productos de la categoría",
  "No categories were deleted": "No se eliminaron categorías",
  "No categories found": "No se encontraron categorías",
  "Error toggling category active status": "Error al cambiar el estado activo de la categoría",
  "Missing params (productId, categoryId)": "Faltan parámetros (productId, categoryId)",
  "Failed to toggle category active status": "No se pudo cambiar el estado activo de la categoría",
  "Failed to create Corporation": "No se pudo crear la corporación",
  "Corporation not found": "Corporación no encontrada",
  "Failed to update Corporation": "No se pudo actualizar la corporación",
  "Failed to delete Corporation": "No se pudo eliminar la corporación",
  "Missing corporation identifier": "Falta el identificador de la corporación",
  "Active shop status toggled successfully": "Estado activo de la tienda cambiado con éxito",
  "Missing session parameter (corporationId)": "Falta el parámetro de sesión (corporationId)",
  "Missing required parameter (message)": "Falta el parámetro requerido (mensaje)",
  "Prefixes cannot be equal": "Los prefijos no pueden ser iguales",
  "Error updating invoices prefixes": "Error al actualizar los prefijos de las facturas",
  "Missing session parameter (corporationId)": "Falta el parámetro de sesión (corporationId)",
  "Missing parameter (corporationId)": "Falta el parámetro (corporationId)",
  "Error deleting corporation data": "Error al eliminar los datos de la corporación",
  "Missing session data (corporationId)": "Faltan datos de sesión (corporationId)",
  "Missing params (email)": "Faltan parámetros (correo electrónico)",
  "Failed to create customer": "No se pudo crear el cliente",
  "Missing customer identifier": "Falta el identificador del cliente",
  "Customer not found": "Cliente no encontrado",
  "Customers not found": "No se encontraron clientes",
  "Customer not exist": "El cliente no existe",
  "Failed to update customer": "No se pudo actualizar el cliente",
  "Failed to delete customer": "No se pudo eliminar el cliente",
  "Invalid pagination parameters": "Parámetros de paginación inválidos",
  "There was an error fetching the customers": "Hubo un error al obtener los clientes",
  "Missing passwords": "Faltan contraseñas",
  "Error changing the password": "Error al cambiar la contraseña",
  "Customer not found (addresses, billingAddresses)": "Cliente no encontrado (direcciones, direcciones de facturación)",
  "Failed to add shipping address": "No se pudo añadir la dirección de envío",
  "Failed to delete shipping address": "No se pudo eliminar la dirección de envío",
  "Failed to update shipping address": "No se pudo actualizar la dirección de envío",
  "Failed to add billing address": "No se pudo añadir la dirección de facturación",
  "Failed to delete billing address": "No se pudo eliminar la dirección de facturación",
  "Failed to update billing address": "No se pudo actualizar la dirección de facturación",
  "User not found": "Usuario no encontrado",
  "Error sending the message": "Error al enviar el mensaje",
  "Missing code": "Falta el código",
  "The code is not valid": "El código no es válido",
  "Error verifying the customer": "Error al verificar al cliente",
  "Filter data is required": "Se requieren datos de filtro",
  "Missing session corporationId": "Falta el corporationId en la sesión",
  "Missing required data (phone)": "Faltan datos requeridos (teléfono)",
  "Failed to create discount": "No se pudo crear el descuento",
  "Missing identifier (discountId)": "Falta el identificador (discountId)",
  "Failed to update discount": "No se pudo actualizar el descuento",
  "Failed to delete discount": "No se pudo eliminar el descuento",
  "Discount not found": "Descuento no encontrado",
  "No discounts found": "No se encontraron descuentos",
  "Failed to add categories to discount": "No se pudieron añadir categorías al descuento",
  "Failed to remove categories from discount": "No se pudieron eliminar categorías del descuento",
  "Failed to add orders to discount": "No se pudieron añadir pedidos al descuento",
  "No discounts were deleted": "No se eliminaron descuentos",
  "Missing discount ID": "Falta el ID del descuento",
  "Failed to toggle discount status": "No se pudo cambiar el estado del descuento",
  "Missing session corporationId": "Falta el corporationId en la sesión",
  "No discounts found": "No se encontraron descuentos",
  "Missing orderId": "Falta el orderId",
  "There was an error creating the invoice": "Hubo un error al crear la factura",
  "Missing required or session fields": "Faltan campos requeridos o de sesión",
  "ItemGroup name already exists": "El nombre del ItemGroup ya existe",
  "Failed to create ItemGroup": "No se pudo crear el ItemGroup",
  "Failed to add Items to ItemGroup": "No se pudieron añadir artículos al ItemGroup",
  "Missing required session fields": "Faltan campos de sesión requeridos",
  "Product not found": "Producto no encontrado",
  "Failed to update Items in ItemGroup": "No se pudieron actualizar los artículos en el ItemGroup",
  "You cannot add more items than the maxItems": "No puedes añadir más artículos que los maxItems",
  "Missing required fields": "Faltan campos requeridos",
  "ItemGroup not found": "ItemGroup no encontrado",
  "Failed to delete ItemGroup": "No se pudo eliminar el ItemGroup",
  "Failed to delete ItemGroups": "Falló al eliminar los grupos de artículos",
  "Missing required or session fields": "Faltan campos requeridos o de sesión",
  "ItemGroup not found": "Grupo de artículos no encontrado",
  "Item name already exists": "El nombre del artículo ya existe",
  "Failed to create Item": "Falló al crear el artículo",
  "Failed to delete all Items": "Falló al eliminar todos los artículos",
  "Failed to update Item": "Falló al actualizar el artículo",
  "Failed to delete Item": "Falló al eliminar el artículo",
  "Missing session fields": "Faltan campos de sesión",
  "Missing required fields": "Faltan campos requeridos",
  "Product not found": "Producto no encontrado",
  "No Items found": "No se encontraron artículos",
  "Missing params": "Faltan parámetros",
  "Failed to create LegalPolicies": "Falló al crear las políticas legales",
  "LegalPolicies not found": "Políticas legales no encontradas",
  "LegalPolicies not exist": "Las políticas legales no existen",
  "Failed to update LegalPolicies": "Falló al actualizar las políticas legales",
  "No LegalPolicies found for this corporation": "No se encontraron políticas legales para esta corporación",
  "Code not found": "Código no encontrado",
  "Missing data: req.body.code": "Faltan datos: req.body.code",
  "Invalid code": "Código inválido",
  "Invalid email": "Correo electrónico inválido",
  "OptionGroup name already exists": "El nombre del grupo de opciones ya existe",
  "Failed to create OptionGroup": "Falló al crear el grupo de opciones",
  "OptionGroup not found": "Grupo de opciones no encontrado",
  "Failed to update OptionGroup": "Falló al actualizar el grupo de opciones",
  "Option name already exists": "El nombre de la opción ya existe",
  "Failed to create Option": "Falló al crear la opción",
  "Option not found": "Opción no encontrada",
  "OptionGroup not found": "Grupo de opciones no encontrado",
  "Option name already exists in this group": "El nombre de la opción ya existe en este grupo",
  "Failed to update Option": "Falló al actualizar la opción",
  "Missing required fields: note or orderId": "Faltan campos requeridos: nota o orderId",
  "Failed to create order manager configuration": "Falló al crear la configuración del gestor de pedidos",
  "Order manager configuration not found": "Configuración del gestor de pedidos no encontrada",
  "No configurations found for this corporation": "No se encontraron configuraciones para esta corporación",
  "User not found or already assigned": "Usuario no encontrado o ya asignado",
  "User not found or failed to remove": "Usuario no encontrado o falló al eliminar",
  "Order manager configuration not found": "Configuración del gestor de pedidos no encontrada",
  "Missing customer identifier": "Falta el identificador del cliente",
  "User orders not found": "Pedidos del usuario no encontrados",
  "Missing order identifier": "Falta el identificador del pedido",
  "Order logs not found": "Registros de pedidos no encontrados",
  "Invalid pagination parameters": "Parámetros de paginación inválidos",
  "Order details not found": "Detalles del pedido no encontrados",
  "Statistics not found": "Estadísticas no encontradas",
  "Missing required data shippingMethod": "Faltan datos requeridos: shippingMethod",
  "Shipping method not found": "Método de envío no encontrado",
  "Address is required": "La dirección es requerida",
  "Missing session parameter customerId": "Falta el parámetro de sesión customerId",
  "Missing session parameter userId": "Falta el parámetro de sesión userId",
  "Default sales channel not found": "Canal de ventas predeterminado no encontrado",
  "Customer not found": "Cliente no encontrado",
  "Missing shopping cart ID": "Falta el ID del carrito de compras",
  "There was an error making the order": "Hubo un error al realizar el pedido",
  "There was an error sending the PDF": "Hubo un error al enviar el PDF",
  "No orders assigned for the user": "No hay pedidos asignados para el usuario",
  "There aren't orders ready for deliver": "No hay pedidos listos para entregar",
  "Missing required data (orderId)": "Faltan datos requeridos (orderId)",
  "Failed to finalize the order delivery": "Falló al finalizar la entrega del pedido",
  "Orders not found": "Pedidos no encontrados",
  "Missing required data (note)": "Faltan datos requeridos (nota)",
  "There was an error updating the order": "Hubo un error al actualizar el pedido",
  "Corporation not found": "Corporación no encontrada",
  "Payment method not found": "Método de pago no encontrado",
  "Failed to update order payment status": "Falló al actualizar el estado de pago del pedido",
  "Missing required info (orderId or status)": "Falta información requerida (orderId o status)",
  "Failed to update order status": "Falló al actualizar el estado del pedido",
  "Invalid status": "Estado inválido",
  "Missing params": "Faltan parámetros",
  "Payment method not found or failed to update": "Método de pago no encontrado o falló al actualizar",
  "Payment method not found or failed to delete": "Método de pago no encontrado o falló al eliminar",
  "Could not change payment method status": "No se pudo cambiar el estado del método de pago",
  "Platform not found": "Plataforma no encontrada",
  "Missing platform ID": "Falta el ID de la plataforma",
  "Missing subdomain": "Falta el subdominio",
  "Subdomain already exists": "El subdominio ya existe",
  "No data to update or deactivate": "No hay datos para actualizar o desactivar",
  "Failed to update platform": "Falló al actualizar la plataforma",
  "Incorrect password": "Contraseña incorrecta",
  "Failed to create Point of Sale configuration": "Falló al crear la configuración del punto de venta",
  "Point of sale configuration not found": "Configuración del punto de venta no encontrada",
  "Failed to delete point of sale configurations": "Falló al eliminar las configuraciones del punto de venta",
  "Name, IP and port are required": "Nombre, IP y puerto son requeridos",
  "Failed to create printer": "Falló al crear la impresora",
  "No printers found": "No se encontraron impresoras",
  "Printer not found": "Impresora no encontrada",
  "No printers found for this corporation": "No se encontraron impresoras para esta corporación",
  "Printer not found or failed to update": "Impresora no encontrada o falló al actualizar",
  "Printer not found or failed to delete": "Impresora no encontrada o falló al eliminar",
  "Printer not found or failed to print": "Impresora no encontrada o falló al imprimir",
  "Missing required data (printerId)": "Faltan datos requeridos (printerId)",
  "Missing required data (orderId)": "Faltan datos requeridos (orderId)",
  "No shopping cart found for the user": "No se encontró el carrito de compras para el usuario",
  "itemIds must be an array of item identifiers": "itemIds debe ser un arreglo de identificadores de artículos",
  "No products removed from the cart": "No se eliminaron productos del carrito",
  "No shopping cart updated": "No se actualizó el carrito de compras",
  "No abandoned shopping carts deleted": "No se eliminaron carritos de compras abandonados",
  "Missing required data (shoppingCartId)": "Faltan datos requeridos (shoppingCartId)",
  "No abandoned shopping cart found": "No se encontró el carrito de compras abandonado",
  "There was an error sending the reminder": "Hubo un error al enviar el recordatorio",
  "Shopping cart not found or inactive": "Carrito de compras no encontrado o inactivo",
  "Failed to update cart address": "Falló al actualizar la dirección del carrito",
  "Missing required parameter (shoppingCartId)": "Falta el parámetro requerido (shoppingCartId)",
  "Special closed day not found": "Día especial cerrado no encontrado",
  "Invalid email or password": "Correo electrónico o contraseña inválidos",
  "Error sending code": "Error al enviar el código",
  "Missing data: req.body.email": "Faltan datos: req.body.email",
  "Email not found": "Correo electrónico no encontrado",
  "Error sending email": "Error al enviar el correo electrónico",
  "Invalid code": "Código inválido",
  "Error updating password": "Error al actualizar la contraseña",
  "User already exists": "El usuario ya existe",
  "Platform already exists": "La plataforma ya existe",
  "Error generating password": "Error al generar la contraseña",
  "There was an error creating the platform": "Hubo un error al crear la plataforma",
  "Corporation legal name already exists": "El nombre legal de la corporación ya existe",
  "There was an error creating the corporation": "Hubo un error al crear la corporación",
  "Error creating user": "Error al crear el usuario",
  "Internal Server Error": "Error interno del servidor",
  "User not found": "Usuario no encontrado",
  "A corporation owner can not be deleted": "No se puede eliminar al propietario de la corporación",
  "Failed to delete user": "Falló al eliminar el usuario",
  "Item created successfully": "Item creado correctamente"
};

const SECRET = process.env.REACT_APP_JWT_SECRET;
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
function addIdKeyIfMissing(array, key = null) {
  if (!Array.isArray(array) || array.length === 0) return [];
  return array?.map(item => {
    if (!item.id) {
      const idKey = ["categoryId", "productId", "catalogId", "discountId", "itemId", "itemGroupId", "optionId", "optionGroupId", "orderId", "salesChannelId", "customerId"].find(key => item[key]);
      if (idKey) {
        item.id = item[idKey];
      }
      if (key !== null) item.id = item[key];
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

// Función para cifrar con AES
function cifrarAES(texto) {
  return CryptoJS.AES.encrypt(texto, SECRET).toString();
}

// Función para descifrar con AES
function descifrarAES(textoCifrado) {
  const bytes = CryptoJS.AES.decrypt(textoCifrado, SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
}

// Función para guardar datos de login en localStorage con cifrado AES
const keyLoginData = "ls_";
function saveLoginLS(datos, platform = "") {
  if (typeof datos === "object" && datos !== null) {
    const datosCifrados = cifrarAES(JSON.stringify(datos));
    localStorage.setItem(keyLoginData + "" + platform, datosCifrados);
  } else {
    console.error("El argumento debe ser un objeto válido.");
  }
}

// Función para leer datos de login desde localStorage con descifrado AES
function readLoginLS(platform = "") {
  const datosCifrados = localStorage.getItem(keyLoginData + "" + platform);
  if (!datosCifrados) return null;
  try {
    return JSON.parse(descifrarAES(datosCifrados));
  } catch (error) {
    console.error("Error al descifrar los datos:", error);
    return null;
  }
}

//Función para borrar el login
function removeLoginLS(platform = "") {
  localStorage.removeItem(keyLoginData + "" + platform);
}

// TRADUCTOR
function translateMessage(cadena) {
  // Verificar si la entrada es un string
  if (typeof cadena !== "string") {
    return ""; // Si no es un string, devolver un string vacío
  }

  // Verificar si la cadena está en el listado de messages
  if (messages.hasOwnProperty(cadena)) {
    cadena = messages[cadena]; // Usamos la traducción al español
  }

  // Condiciones para decidir el tipo y el título
  if (/successfully/i.test(cadena)) {
    return {
      called: true,
      title: "Correcto",
      message: cadena,
      type: "success"
    };
  } else if (/required|already/i.test(cadena)) {
    return {
      called: true,
      title: "Aviso",
      message: cadena,
      type: "warning"
    };
  } else if (/missing|not|error|failed|bad|invalid/i.test(cadena)) {
    return {
      called: true,
      title: "Error",
      message: cadena,
      type: "error"
    };
  } else {
    return {
      called: true,
      title: "Notificación",
      message: cadena,
      type: "normal"
    };
  }
}

var css_248z$c = ".state-label {\r\n    padding: 2px 10px;\r\n    font-size: 0.75rem;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    width: 125px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.state-pending {\r\n    color: var(--color-pending);\r\n    background-color: var(--color-pending-background);\r\n}\r\n\r\n\r\n.state-prepared {\r\n    color: var(--color-success);\r\n    background-color: var(--color-success-background);\r\n}\r\n\r\n.state-pending {\r\n    color: var(--color-pending);\r\n    background-color: var(--color-pending-background);\r\n}\r\n\r\n.state-canceled{\r\n    color: var(--color-error);\r\n    background-color: var(--color-error-background);\r\n}\r\n\r\n.state-process{\r\n    color: var(--color-process);\r\n    background-color: var(--color-process-background);\r\n}";
styleInject(css_248z$c);

const StateLabel = ({
  state,
  text = null
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
        }, text || "Pendiente");
      case "prepared":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-prepared"
        }, text || "Preparado");
      case "paid":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-prepared"
        }, text || "Pagado");
      case "active":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-prepared"
        }, text || "Activo");
      case "delivered":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-delivered"
        }, text || "Entregado");
      case "inPreparation":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-process"
        }, text || "En preparación");
      case "inDelivery":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-process"
        }, text || "Enviando");
      case "cancelled":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-canceled"
        }, text || "Cancelado");
      case "inactive":
        return /*#__PURE__*/React.createElement("div", {
          className: "state-label state-canceled"
        }, text || "Inactivo");
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

var css_248z$b = ".selectContainer{\r\n  gap: 3px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  & .customSelect{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.customSelect{\r\n  height: 30px;\r\n  width: fit-content;\r\n  font-size: 0.7rem!important;\r\n  padding: 0 5px;\r\n  background-color: white;\r\n  border: 1px var(--color-terciary-2) solid;\r\n  border-radius: 5px;\r\n  & fieldset{\r\n    display: none;\r\n  }\r\n}\r\n\r\n.customSelectName{\r\n  margin-right: 10px;\r\n}\r\n\r\n.customSelectNameDropdown{\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: white;\r\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n}\r\n\r\n.dropdownSelect{\r\n    position: absolute;\r\n    background-color: white;\r\n    padding: 5px;\r\n    width: 141px;\r\n    border: 1px rgb(233 233 233) solid;\r\n    border-radius: 5px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.selectOption{\r\n    cursor:pointer;\r\n}\r\n\r\n.slide-bottom {\r\n\t-webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n\t        animation: slide-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\n @-webkit-keyframes slide-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(5px);\r\n              transform: translateY(5px);\r\n    }\r\n  }\r\n  @keyframes slide-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(5px);\r\n              transform: translateY(5px);\r\n    }\r\n  }\r\n  \r\n  ";
styleInject(css_248z$b);

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

var css_248z$a = ".customButton {\r\n  background-color: var(--color-secondary);\r\n  border: 1px var(--color-terciary-2) solid;\r\n  font-size: 0.7rem;\r\n  padding: 0 12px;\r\n  border: 1px var(--color-terciary-2) solid;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  box-shadow: none;\r\n  text-transform: none;\r\n  align-items: center;\r\n  & svg {\r\n    padding-right: 5px;\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n\r\n.customButtonColor1 {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  & svg {\r\n    color: var(--color-primary);\r\n  }\r\n}\r\n\r\n.customButtonColor2 {\r\n  background-color: var(--color-primary);\r\n  & .customButtonText {\r\n    color: var(--color-secondary);\r\n  }\r\n  & svg {\r\n    color: var(--color-secondary);\r\n  }\r\n}\r\n\r\n.customButtonText {\r\n  margin-top: 1px;\r\n  color: var(--color-primary);\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n}\r\n\r\n.customButtonDisabled {\r\n  background-color: var(--color-terciary-2);\r\n  height: 25px;\r\n  & .customButtonText {\r\n    color: var(--color-terciary-3);\r\n    padding: 5px 20px;\r\n  }\r\n}\r\n\r\n.customButtonSuccess {\r\n  background-color: var(--color-success);\r\n  height: 25px;\r\n\r\n  & .customButtonText {\r\n    color: var(--color-secondary);\r\n    padding: 5px 20px;\r\n  }\r\n}\r\n\r\n.customButtonDanger {\r\n  background-color: var(--color-error);\r\n  & .customButtonText {\r\n    color: var(--color-secondary);\r\n  }\r\n}\r\n\r\n.justify-center {\r\n  justify-content: center;\r\n}\r\n";
styleInject(css_248z$a);

const Button = ({
  text,
  icon = null,
  customClass = "customButtonColor1",
  action = () => null,
  disabled
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: `customButton ${customClass} ${!icon && "justify-center"} ${disabled && "customButtonDisabled"}`,
    onClick: action,
    disabled: disabled
  }, icon && icon, /*#__PURE__*/React.createElement("div", {
    className: "customButtonText"
  }, text));
};

var css_248z$9 = ".input-container{\r\n    display: flex;\r\n    align-items: center;\r\n    & input{\r\n        height: 30px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.inputType2Container{\r\n    gap: 3px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.inputLabel{\r\n    font-size: 0.7rem;\r\n    height: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.inputDescription{\r\n    font-size: 0.6rem;\r\n    color: grey;\r\n}\r\n\r\n.inputType2{\r\n    background-color: white;\r\n    border: 1px lightgrey solid;\r\n    border-radius: 5px;\r\n    height: 25px;\r\n}\r\n\r\ninput[type=\"date\"] {\r\n    background-color: white;\r\n    border: 1px lightgrey solid;\r\n    border-radius: 5px;\r\n    height: 30px;\r\n}\r\n\r\n.validationFail{\r\n    border: 1px darkred solid;\r\n}\r\n\r\n.validationFailMessage{\r\n    font-size: 0.6rem;\r\n    color: darkred;\r\n}\r\n\r\n.inputRight{\r\n    margin-left: -20px;\r\n    color: var(--color-terciary-3);\r\n}\r\n\r\n\r\n/*   SUGGESTIONS   */\r\n.suggestContainer{\r\n    background-color: white;\r\n    margin-top: 3px;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    position: absolute;\r\n    width: 200px;\r\n    border: 1px lightgrey solid;\r\n}\r\n\r\n.suggest{\r\n    cursor: pointer;\r\n    padding: 5px;\r\n}\r\n\r\n.suggest:hover {\r\n    background-color: rgb(239, 239, 239);\r\n}\r\n\r\n.suggest-name{\r\n    font-weight: bold;\r\n}\r\n\r\n.suggest-info{\r\n    font-size: 0.7rem;\r\n}";
styleInject(css_248z$9);

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
    onChange: e => onWritting(e.target.value),
    autocomplete: "off"
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

var css_248z$8 = ".inputType2Container{\r\n    gap: 3px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.inputLabel{\r\n    font-size: 0.7rem;\r\n    height: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.inputDescription{\r\n    font-size: 0.6rem;\r\n    color: grey;\r\n}\r\n\r\n.customTextarea{\r\n    background-color: white;\r\n    border: 1px lightgrey solid;\r\n    border-radius: 5px;\r\n    height: 50px;\r\n}";
styleInject(css_248z$8);

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

var css_248z$7 = ".noImage{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--color-primary-background);\r\n    color: var(--color-terciary-3);\r\n    height: 100%;\r\n    font-size: 1.5rem;\r\n}";
styleInject(css_248z$7);

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

var css_248z$6 = "\r\n.pinList{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    margin-top: 20px;\r\n    gap: 15px;\r\n}\r\n\r\n.cardPin{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-basis: calc(33.333% - 20px);\r\n    background-color: white;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    & .pinDigit{\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n.areaPin{\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.inputPwd{\r\n  margin-top: 10px;\r\n  width: 370px;\r\n  height: 36px;\r\n  font-size: 1.5rem;\r\n  text-align: center;\r\n  background: #ffffff;\r\n  border-radius: 5px;\r\n  margin: 0px;\r\n}\r\n\r\n.pinNumberButton{\r\n  background-color:black;\r\n  color: white;\r\n}\r\n\r\n.pinNotNumberButton .pinDigit{\r\n  font-size: 2.3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: -5px;\r\n}\r\n\r\n.pinLabel{\r\n  margin: 10px 0px 15px 0px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n /* 600px or less */\r\n @media (max-width: 600px) {\r\n  .areaPin{\r\n    width: 80vw;\r\n  }\r\n  .inputPwd{\r\n    width: 72vw;\r\n  }\r\n}";
styleInject(css_248z$6);

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

var css_248z$5 = ".cardLabel{\r\n    margin: 10px 0px 15px 0px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n  }\r\n\r\n.cardList{\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.cardUser{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap:5px;\r\n    align-items: center;\r\n    background-color: white;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    width: 75px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    & svg{\r\n        font-size: 2rem;\r\n    }\r\n    & .username{\r\n        font-size: 0.7rem;\r\n    }\r\n}\r\n\r\n.cardUser:hover{\r\n    box-shadow: 0px 0px 4px 0px var(--color-terciary);\r\n}";
styleInject(css_248z$5);

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

var css_248z$4 = ".inputImage{\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    display: block;\r\n}";
styleInject(css_248z$4);

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

var css_248z$3 = ".loader-overlay {\r\n    position: absolute;\r\n    background: var(--color-primary-shadow);\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 1000;\r\n  }\r\n  \r\n  .loader-spinner {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: 4px solid rgba(255, 255, 255, 0.3);\r\n    border-top: 4px solid #fff;\r\n    border-radius: 50%;\r\n    animation: spin 1s linear infinite;\r\n  }\r\n  \r\n  @keyframes spin {\r\n    from { transform: rotate(0deg); }\r\n    to { transform: rotate(360deg); }\r\n  }\r\n  ";
styleInject(css_248z$3);

const Loader = ({
  state = true
}) => {
  if (!state) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "loader-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-spinner"
  }));
};

var css_248z$2 = ".toggle-button-cover {\r\n  display: table-cell;\r\n  position: relative;\r\n  width: 200px;\r\n  /*height: 140px;*/\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.button-cover {\r\n /* height: 100px;\r\n  margin: 20px;\r\n  background-color: #fff;\r\n  box-shadow: 0 10px 20px -8px #c5d6d6;\r\n  border-radius: 4px;*/\r\n}\r\n\r\n.button-cover:before {\r\n  counter-increment: button-counter;\r\n  content: counter(button-counter);\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  color: #d7e3e3;\r\n  font-size: 1px;\r\n  line-height: 1;\r\n  padding: 0px;\r\n}\r\n\r\n.button-cover,\r\n.knobs,\r\n.layer {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.button {\r\n  position: relative;\r\n  top: 50%;\r\n  width: 100px;\r\n  height: 30px;\r\n  margin: -17px auto 0 auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.button.r,\r\n.button.r .layer {\r\n  border-radius: 10px;\r\n}\r\n\r\n.button.b2 {\r\n  border-radius: 2px;\r\n}\r\n\r\n.checkbox {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  z-index: 3;\r\n}\r\n\r\n.knobs {\r\n  z-index: 2;\r\n}\r\n\r\n.layer {\r\n  width: 100%;\r\n  transition: 0.3s ease all;\r\n  z-index: 1;\r\n  border: 1px solid var(--color-primary-background);\r\n  background-color: var(--color-secondary);\r\n}\r\n\r\n/* Button 3 */\r\n#button-3 .knobs:before {\r\n    content: \"ACTIVO\";\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    width: auto;\r\n    height: 22px;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    line-height: 1;\r\n    padding: 7px 5px;\r\n    background-color: var(--color-process);\r\n    border-radius: 10px;\r\n    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);\r\n  }\r\n  \r\n  #button-3 .checkbox:active + .knobs:before {\r\n    width: 46px;\r\n    border-radius: 100px;\r\n  }\r\n  \r\n  #button-3 .checkbox:checked:active + .knobs:before {\r\n    margin-left: -26px;\r\n  }\r\n  \r\n  #button-3 .checkbox:checked + .knobs:before {\r\n    content: \"INACTIVO\";\r\n    left: 42px;\r\n    background-color: var(--color-error);\r\n  }\r\n  \r\n  #button-3 .checkbox:checked ~ .layer {\r\n    background-color: var(--color-terciary-2);\r\n  }\r\n  ";
styleInject(css_248z$2);

const SwitchText = ({
  defaultChecked,
  onChange,
  id
}) => {
  return /*#__PURE__*/React.createElement("div", {
    class: "toggle-button-cover"
  }, /*#__PURE__*/React.createElement("div", {
    class: "button-cover"
  }, /*#__PURE__*/React.createElement("div", {
    class: "button r",
    id: "button-3"
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    class: "checkbox",
    defaultChecked: !defaultChecked,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("div", {
    class: "knobs"
  }), /*#__PURE__*/React.createElement("div", {
    class: "layer"
  }))));
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

var css_248z$1 = "/* HEADER */\r\n\r\n.order-header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 0.7rem;\r\n    height: 25px;\r\n}\r\n\r\n.order-header-status{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.order-number{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.order-header-time{\r\n    text-align: end;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.order-header-2{\r\n    margin-top: 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.order-value{\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* PRODUCTS */\r\n\r\n.order-products {\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    margin-top: 15px;\r\n    height: calc(100vh - 485px); /* FIX TPV 23-03-2025 */\r\n    overflow-y: auto;  /* FIX TPV 11-03-2025 */\r\n\r\n    & .order-products-item {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 5px 10px 5px 5px;\r\n        border: var(--color-terciary-2) 1px solid;\r\n        border-radius: 8px;\r\n        height: 88px;\r\n\r\n\r\n        & .order-product-left {\r\n            display: flex;\r\n            flex-direction: row;\r\n            align-items: center;\r\n            gap: 15px;\r\n\r\n            & .order-product-image {\r\n                width: 70px;\r\n                height: 70px;\r\n                border-radius: 10px;\r\n                background-size: cover;\r\n                background-position: center; \r\n                background-repeat: no-repeat;\r\n            }\r\n\r\n            & .order-product-info {\r\n                & .order-product-name {\r\n                    color: var(--color-process);\r\n                    font-weight: 700;\r\n                    font-size: 14px;\r\n                    margin: 0;\r\n                }\r\n\r\n                & .order-product-ingredients {\r\n                    color: var(--color-terciary);\r\n                    font-size: 12px;\r\n                    font-weight: 500;\r\n                    margin: 0;\r\n                }\r\n\r\n                & .order-product-attributes {\r\n                    color: var(--color-terciary);\r\n                    font-size: 12px;\r\n                    font-weight: 500;\r\n                    margin: 0;\r\n                    font-style: italic;\r\n                }\r\n            }\r\n        }\r\n        & .order-product-total{\r\n            display: flex;\r\n            justify-content: space-between;\r\n            gap: 20px;\r\n        }\r\n\r\n        & .order-product-quantity{\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 5px;\r\n            color: var(--color-terciary);\r\n            font-size: 0.8rem;\r\n        }\r\n\r\n        & .order-product-price-container{\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 5px;\r\n            font-size: 0.8rem;\r\n            font-weight: bold;\r\n            text-align: end;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n/* CLIENT DETAILS */\r\n\r\n.client-details{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n\r\n    & .client-details-container{\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 5px;\r\n    }\r\n\r\n    & .client-details-header{\r\n        font-weight: bold;\r\n    }\r\n    \r\n    & .client-details-sub{\r\n        color: var(--color-process);\r\n    }\r\n\r\n    & .client-details-address{\r\n        display: flex;\r\n        gap: 5px;\r\n        border: 1px var(--color-terciary-2) solid;\r\n        border-radius: 5px;\r\n        padding: 5px;\r\n        height: 110px;\r\n    }\r\n\r\n    & .client-details-address-container{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/*   ORDER SHOPPING CART  */\r\n.product-cart{\r\n    border: 1px lightgrey solid;\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    height: auto;\r\n   \r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n\r\n    & .product-image{\r\n        width: 30%;\r\n        height: 100%;\r\n        flex-shrink: 0;\r\n        border-radius: 10px 0 0 10px;\r\n    }\r\n\r\n    & .background-image{\r\n        background-color: #f1f1f1;\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n    }\r\n\r\n    & .product-cart-info{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        gap: 10px;\r\n        flex-grow: 1;\r\n        padding: 10px;\r\n        width: 90%;\r\n    }\r\n\r\n    & .product-details{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-start;\r\n        gap: 0px;\r\n        line-height: 1rem;\r\n    }\r\n    \r\n    & .product-name {\r\n        font-weight: bold;\r\n        font-size: 0.9rem;\r\n        /*white-space: nowrap;*/ /* Evita que el texto ocupe varias líneas */\r\n        overflow: hidden; /* Oculta el texto que exceda los límites */\r\n        text-overflow: ellipsis; /* Muestra puntos suspensivos (...) si el texto es demasiado largo */\r\n    }\r\n    \r\n    & .product-description {\r\n        color: grey;\r\n        font-size: 0.75rem;\r\n        /*white-space: nowrap;*/ /* Evita saltos de línea */\r\n        overflow: hidden; /* Oculta el texto excedente */\r\n        text-overflow: ellipsis; /* Agrega puntos suspensivos para indicar truncamiento */\r\n    }\r\n    \r\n    & .product-details-bottom {\r\n        display: flex;\r\n        justify-content: space-between; /* Espaciado uniforme entre los elementos */\r\n        align-items: center;\r\n        gap: 5px; /* Espaciado entre el precio y las acciones */\r\n    }\r\n    \r\n    & .product-actions{\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        align-items: center;\r\n        gap: 10px;\r\n    \r\n        & svg{\r\n            cursor: pointer;\r\n            min-width: 1.5rem; /* Limita el tamaño de los íconos */\r\n            min-height: 1.5rem;\r\n            padding: 5px;\r\n            border-radius: 5px;\r\n            background-color: lightgrey;\r\n        }\r\n    }\r\n}\r\n";
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
  callbackPrintInvoice = () => null,
  canCreateInvoice = true
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
  })), /*#__PURE__*/React.createElement("div", null, canCreateInvoice && /*#__PURE__*/React.createElement(Button, {
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
        backgroundImage: data && data.Product && data.Product.images.length > 0 && data?.Product.images?.[0] ? `url('${data.Product.images[0]}')` : "no"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "product-cart-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-details"
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-name"
    }, data && data.Product && data.Product.name ? data.Product.name : ""), /*#__PURE__*/React.createElement("div", {
      className: "product-description"
    }, data?.Product?.description || "")), /*#__PURE__*/React.createElement("div", {
      className: "product-details-bottom"
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-name"
    }, data?.Product?.price ? data.Product.price.toFixed(2) : "0.00", "\u20AC"), /*#__PURE__*/React.createElement("div", {
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

var css_248z = ".datatable{\r\n    height: fit-content;\r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 20px;\r\n    & .adminPanel{\r\n        width: auto;\r\n        flex-grow: 1;\r\n        align-self: stretch;\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-start;\r\n        align-items: center;\r\n    }\r\n}\r\n\r\n\r\n.headerDatatable{\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.sectionsDatatable{\r\n    width: 100%;\r\n    justify-content: flex-start;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    & div{\r\n        padding: 5px;\r\n    }\r\n}\r\n\r\n.selectedHorizontalMenu{\r\n  color: var(--color-primary);\r\n  font-weight: 700;\r\n  border-bottom: 2px var(--color-primary) solid;\r\n}\r\n\r\n.actionsDatatable{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: end;\r\n    gap: 5px;\r\n    padding: 10px;\r\n}\r\n\r\n.pagination{\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 30px;\r\n}\r\n\r\n.paginationDropdown{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    width: 100%;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\n\r\n.paginationText{\r\n    margin-top: 3px;\r\n}\r\n\r\n.paginationPages{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    gap: 10px;\r\n    align-items: center;\r\n    padding-right: 5px;\r\n}\r\n\r\n.pageBtn{\r\n    padding: 4px 9px;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    margin-left: 3px; \r\n    cursor: pointer;\r\n}\r\n\r\n.pageBtnActive{\r\n    border: 1px #0057FF solid;\r\n}\r\n\r\n.selectMaxRows{\r\n    margin: 0px 10px;\r\n}\r\n\r\n\r\n.rowTableMobile {\r\n    padding: 5px 10px;\r\n    line-height: 1.8;\r\n}\r\n\r\n.table-image{\r\n    width: 80px;\r\n    height: 50px;\r\n}\r\n\r\n.desktopDatatable {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    align-self: stretch;\r\n    height: 100%; /* Ensures the div fills the available height */\r\n  }\r\n  \r\n  .table-container {\r\n    display: flex;\r\n    height: 100%; /* Ensures the container takes up the full height of the parent */\r\n  }\r\n  \r\n  table {\r\n    color: rgba(32, 32, 32, 1);\r\n    width: 100%;\r\n    height: fit-content;\r\n    margin: 10px;\r\n    border-radius: 10px;\r\n    border: 1px #ebebeb solid;\r\n    border-collapse: unset!important;\r\n  }\r\n\r\n  thead{\r\n    display: flex;\r\n    height: 40px;\r\n    align-items: center;\r\n    border-bottom: 1px #ebebeb solid!important;\r\n  }\r\n\r\n  tbody{\r\n    display: block;\r\n    height: 100%; /* Ensures tbody takes up the full height of the table */\r\n  }\r\n\r\n  tbody td{\r\n    cursor: pointer;\r\n    height: 42px;\r\n  }\r\n  tbody td.checkboxtd {\r\n    cursor: default;\r\n}\r\n  \r\n  thead th, tbody td {\r\n    padding: 5px;\r\n    text-align: left;\r\n  }\r\n  \r\n  \r\n  tbody tr:nth-child(odd) {\r\n    background-color: #F5F5F5;\r\n  }\r\n  \r\n  thead tr, tbody tr {\r\n    display: table; /* Ensures tr display as table-row within tbody */\r\n    width: 100%;\r\n    table-layout: fixed; /* Ensures each row respects the table's fixed layout */\r\n  }\r\n\r\n  .rowSelected{\r\n    background-color: #e8e8e8!important;\r\n  }\r\n\r\n  .toggleColumnPanel{\r\n    width: auto;\r\n    border: 1px var(--color-terciary-2) solid;\r\n    border-radius: 5px;\r\n    position: absolute;\r\n    margin-top: 40px;\r\n    right: 25px;\r\n    height: auto;\r\n    padding: 10px 20px 10px 10px;\r\n    background-color: var(--color-secondary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    z-index: 5;\r\n    & .toggleColumnPanelItem{\r\n      display: flex;\r\n      gap: 5px;\r\n      align-items: center;\r\n    }\r\n  }\r\n\r\n\r\n/****** MEDIA QUERIES *******/\r\n\r\n\r\n\r\n/* 1300px or less */\r\n@media (max-width: 1300px) {\r\n  .headerDatatable{\r\n        flex-wrap: wrap;\r\n  }\r\n}\r\n\r\n/* 992px or less */\r\n@media (max-width: 992px) {\r\n\r\n  \r\n}\r\n\r\n/* 750px or less */\r\n@media (max-width: 750px) {\r\n  .sectionsDatatable{\r\n    overflow-x: auto;\r\n    & div{\r\n      white-space: nowrap;\r\n    }\r\n    & .selectedHorizontalMenu{\r\n      border-bottom: 0px;\r\n    }\r\n  }\r\n  .datatable{\r\n    margin-left: -10px;\r\n    margin-right: -10px;\r\n    width: calc(100% + 20px);\r\n    & .adminPanel{\r\n      padding: 10px;\r\n    }\r\n  }\r\n\r\n  .desktopDatatable{\r\n    margin-left: -10px;\r\n    margin-right: -10px;\r\n  }\r\n\r\n  .table-container {\r\n    overflow-x: auto;\r\n  }\r\n\r\n  table {\r\n    /*min-width: 500px;*/\r\n    width: max-content;\r\n    margin: 10px 0;\r\n    border: 0px;\r\n  }\r\n\r\n  thead {\r\n    height: 30px;\r\n  }\r\n\r\n  thead, tbody {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n  }\r\n\r\n  td, th {\r\n   /* max-width: 100px;*/\r\n   /* width: auto;*/              /* Se adapta al contenido */\r\n    white-space: nowrap;      /* No permite saltos de línea */\r\n    text-overflow: ellipsis;  /* Muestra los puntos suspensivos si se desborda */\r\n    overflow: hidden;         /* Oculta el contenido que se pasa */\r\n  }\r\n  \r\n}\r\n\r\n/* 600px or less */\r\n@media (max-width: 600px) {\r\n\r\n}";
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
  handleSelectAllRow = () => {},
  visibleColumns
}) => {
  console.log("DatatableComponent > data: ", data);
  console.log("DatatableComponent > rows: ", rows);
  const [maxLengthValues, setMaxLengthValues] = useState({});
  function getMaxLengthsByKey() {
    const maxLengths = {};
    const dataArray = rows;
    dataArray.forEach(item => {
      Object.entries(item).forEach(([key, value]) => {
        let strLength;
        if (typeof value === "number" || typeof value === "string") {
          strLength = String(value).length;
          if (strLength < 10) maxLengths[key] = 110;else if (strLength > 9 && strLength < 50) maxLengths[key] = strLength * 8;else maxLengths[key] = strLength * 4;
        } else {
          maxLengths[key] = 110;
        }
      });
    });
    setMaxLengthValues(maxLengths);
  }
  useEffect(() => {
    getMaxLengthsByKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);
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
  }), data.length > 0 ? Object.keys(sortArrayByCustomOrder(customHeaders, data[0])).filter(field => field in customHeaders && visibleColumns.includes(field)).map((field, index) => /*#__PURE__*/React.createElement("th", {
    key: index,
    className: "text-align-center",
    style: {
      width: `${maxLengthValues[field] || 100}px`
    }
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
  })), Object.keys(sortArrayByCustomOrder(customHeaders, d)).filter(field => field in customHeaders && visibleColumns.includes(field)).map((field, index) => /*#__PURE__*/React.createElement("td", {
    key: index,
    className: "text-align-center",
    style: {
      width: `${maxLengthValues[field] || 100}px`
    },
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

// THIS FILE IS AUTO GENERATED
function PiColumnsPlusLeftLight (props) {
  return GenIcon({"attr":{"viewBox":"0 0 256 256","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M128,34H104A14,14,0,0,0,90,48V208a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V48A14,14,0,0,0,128,34Zm2,174a2,2,0,0,1-2,2H104a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2ZM200,34H176a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2ZM70,128a6,6,0,0,1-6,6H46v18a6,6,0,0,1-12,0V134H16a6,6,0,0,1,0-12H34V104a6,6,0,0,1,12,0v18H64A6,6,0,0,1,70,128Z"},"child":[]}]})(props);
}

const Actions = ({
  checkColumn = false,
  activeSection = "",
  sections = {},
  handleCheckColumn = () => {},
  selectedRows = [],
  cloneCallback = () => {},
  deleteCallback = () => {},
  setSearch,
  customHeaders,
  handleVisibleColumns,
  visibleColumns,
  toggleColumnPanel,
  showToggleColumnPanel
}) => {
  console.log(customHeaders);
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
  const ToggleColumn = () => {
    const handleToggleColumnPanel = () => {
      showToggleColumnPanel(!toggleColumnPanel);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        cursor: "pointer"
      },
      onClick: handleToggleColumnPanel
    }, /*#__PURE__*/React.createElement(PiColumnsPlusLeftLight, {
      size: "2rem"
    })), toggleColumnPanel && /*#__PURE__*/React.createElement("div", {
      className: "toggleColumnPanel"
    }, Object.entries(customHeaders).map(([clave, valor]) => /*#__PURE__*/React.createElement("div", {
      key: clave,
      className: "toggleColumnPanelItem"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      className: "custom-checkbox",
      onChange: () => handleVisibleColumns(clave),
      checked: visibleColumns.includes(clave)
    }), `${valor}`))));
  };
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
  }, checkColumn ? availableActionsWithSelected().map((a, i) => /*#__PURE__*/React.createElement(Button, {
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
  })), availableActions().some(obj => obj.id === "search") && /*#__PURE__*/React.createElement("div", {
    className: "flex-start",
    style: {
      width: "250px",
      gap: "15px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
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
  }), /*#__PURE__*/React.createElement(ToggleColumn, null)));
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
  const [visibleColumns, setVisibleColumns] = useState([]);
  const [toggleColumnPanel, showToggleColumnPanel] = useState(false);
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
  /*const handleSearch = (data) => {
    console.log("Datatable > handleSearch > data, search ", data, search);
    let dataUpdated = data;
    if (search !== "") {
      const searchLower = search.toLowerCase();
      dataUpdated = data.filter(
        (item) =>
          item.name?.toLowerCase().includes(searchLower) ||
          item.number?.toString().toLowerCase().includes(searchLower) ||
          item.Customer?.fullname?.toLowerCase().includes(searchLower)
      );
    }
    return dataUpdated;
  };*/

  const handleSearch = data => {
    let dataUpdated = data;
    if (search !== "") {
      const searchLower = search.toLowerCase();

      // Obtener las claves de customHeaders
      const keys = Object.keys(customHeaders);
      dataUpdated = data && data.length > 0 && data.filter(item => keys.some(key => {
        const value = key.includes(".") ? key.split(".").reduce((acc, curr) => acc?.[curr], item) : item[key];
        return value?.toString().toLowerCase().includes(searchLower);
      }));
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
    if (data && data.length > 0) {
      const maxRowsInteger = parseInt(configuration.maxRows);
      let dataUpdated = handleSearch(data);
      dataUpdated && updateDatatableConfiguration({
        ...configuration,
        pages: Array.from(Array(parseInt(data.length / maxRowsInteger) + 1).keys())
      });
      dataUpdated && setRows(data?.filter((f, index) => index > configuration.indexStart && index < configuration.indexStart + maxRowsInteger));
    } else {
      setRows([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  useEffect(() => {
    if (data && data.length > 0) {
      let dataUpdated = handleSearch(data);
      setRows(dataUpdated);
    } else {
      setRows([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  const handleVisibleColumns = column => {
    setVisibleColumns(prevColumns => {
      if (prevColumns.includes(column)) {
        // Si ya existe, la quitamos
        return prevColumns.filter(col => col !== column);
      } else {
        // Si no existe, la añadimos
        return [...prevColumns, column];
      }
    });
  };
  const rowCallbackHandler = e => {
    showToggleColumnPanel(false);
    rowCallback(e);
  };
  useEffect(() => {
    setVisibleColumns(Object.entries(customHeaders).map(([clave, valor]) => clave));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    setSearch: setSearch,
    customHeaders: customHeaders,
    handleVisibleColumns: handleVisibleColumns,
    visibleColumns: visibleColumns,
    toggleColumnPanel: toggleColumnPanel,
    showToggleColumnPanel: showToggleColumnPanel
  })), /*#__PURE__*/React.createElement(DatatableComponent, {
    checkColumn: checkColumn,
    data: data,
    customHeaders: customHeaders,
    rows: rows,
    selectedRows: selectedRows,
    customData: customData,
    rowCallback: rowCallbackHandler,
    handleSelectRow: handleSelectRow,
    visibleColumns: visibleColumns
  })), /*#__PURE__*/React.createElement(Pagination, {
    configuration: configuration,
    maxRowsAvailable: false,
    handleMaxRows: handleMaxRows,
    handlePage: handlePage
  }));
};

export { Button, CardList, Checkbox, ClientDetails, Datatable, Input, InputImage, Loader, MAPS_API_KEY, MapLocation, NoImage, OrderInfo, OrderNotes, OrderProducts, OrderResume, OrderShoppingCart, OrderTimeline, PinPad, Select, StateLabel, SwitchText, TextEditor, Textarea, addIdKeyIfMissing, checkUserAgent, generateCode, getFullAddress, getRequiredKeys, getTodayDate, handleImage, parseDate, parseDateAndHourToISO, readLoginLS, removeLoginLS, saveLoginLS, sortArrayByCustomOrder, stylesheet, translateMessage };
