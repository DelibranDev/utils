export const parseDate = (value) => {
  // Convertir la cadena de fecha en un objeto de fecha
  var fecha = new Date(value);

  // Obtener el día, mes y hora de la fecha
  var dia = fecha.getDate();
  var mes = fecha.toLocaleDateString("es-ES", { month: "long" }); // Obtener el nombre del mes en español
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();

  // Formatear la cadena de fecha en el formato deseado
  var fechaFormateada = `${dia} de ${mes} a las ${hora}:${minutos < 10 ? "0" : ""}${minutos}`;

  return fechaFormateada;
};

export const getTodayDate = (daysToAdd = 0) => {
  const today = new Date();
  today.setDate(today.getDate() + daysToAdd); // Sumar o restar días
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // Mes con dos dígitos
  const dd = String(today.getDate()).padStart(2, "0"); // Día con dos dígitos
  return `${yyyy}-${mm}-${dd}`;
};

export const generateCode = (length = 10) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    code += chars[randomIndex];
  }

  return code;
};

export const checkUserAgent = () => {
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

export const parseDateAndHourToISO = (idDate, idHour) => {
  const day = document.getElementById(idDate).value;
  const hour = document.getElementById(idHour + "-hour").value;
  const minute = document.getElementById(idHour + "-minute").value;
  return `${day}T${hour}:${minute}:00.000Z`;
};

export function addIdKeyIfMissing(array) {
  if (!Array.isArray(array) || array.length === 0) return [];

  return array?.map((item) => {
    if (!item.id) {
      const idKey = [
        "categoryId",
        "productId",
        "catalogId",
        "discountId",
        "itemId",
        "itemGroupId",
        "optionId",
        "optionGroupId",
        "orderId",
        "salesChannelId",
        "customerId",
      ].find((key) => item[key]);

      if (idKey) {
        item.id = item[idKey];
      }
    }
    return item;
  });
}

export function sortArrayByCustomOrder(keysOrdered, array) {
  const orderedArray = {};
  // Ordenar las claves de array según keysOrdered
  Object.keys(keysOrdered).forEach((key) => {
    if (array.hasOwnProperty(key)) {
      orderedArray[key] = array[key];
    }
  });
  return orderedArray;
}

export function getRequiredKeys(obj) {
  const dictionary = {
    identifier: " identificador",
    name: " nombre",
    age: " edad",
    email: " email",
    phone: " teléfono",
    address: " dirección",
  };
  return Object.keys(obj)
    .filter((key) => obj[key] === "required")
    ?.map((key) => dictionary[key] || key);
}

export const handleImage = (e, uniqueClassLabel) => {
  const label = e.target.parentElement;
  const file = e.target.files[0];

  console.log("=== handleImage ===");
  console.log(e);
  console.log(label);
  console.log(uniqueClassLabel);

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
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

export const getFullAddress = (address) => {
  const { street, zipCode, city, country } = address;
  let fullAddress = "";

  if (street) fullAddress += street;
  if (zipCode) fullAddress += ` ${zipCode}`;
  if (city) fullAddress += `, ${city}`;
  if (country) fullAddress += `, ${country}`;

  return fullAddress.trim();
};
