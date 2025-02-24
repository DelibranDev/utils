## Instalación

Instalar la última versión

```sh
npm install @delibrandev/utils@latest
```

## Estilos globales

> --color-primary: #000;
> --color-primary-background: #ece9e4;
> --color-primary-shadow: rgba(182, 182, 182, 0.2);
> --color-secondary: #fff;
> --color-secondary-background: #fefcfa;
> --color-terciary: #979796;
> --color-terciary-2: lightgrey;
> --color-terciary-3: grey;
> --color-success: #00C76C;
> --color-success-background: rgb(0, 199, 108, 0.2);
> --color-pending: #EB9E1A;
> --color-pending-background: rgb(235, 158, 26, 0.2);
> --color-error: #FF5757;
> --color-error-background: rgb(255, 87, 87, 0.2);
> --color-process: #0057FF;
> --color-process-background: rgb(0, 87, 255, 0.2);

## Componentes

Uso: import { Componente } from "@delibrandev/utils";

**StateLabel**
Recibe un valor de estado y devuelve un label con un color y fondo

- **Valores posibles:** "pending", "prepared", "paid", "delivered", "inPreparation", "inDelivery", "cancelled".

> <StateLabel state={state}/>

## Funciones

Uso: import { funcion } from "@delibrandev/utils/src/function.js";

**getRequiredKeys**
Recibe un objeto para evaluar antes de enviarlo sus valores.
Si el valor de la clave es "required" significa que no fué completado y lo devolverá dentro de un array.

> const obj = {
> identifier: document.getElementById("identifier").value || "required",
> name: document.getElementById("name").value || "required"
> }
> getRequiredKeys(obj)
