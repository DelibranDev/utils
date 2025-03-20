## INSTALACIÓN

Última versión

```
npm install @delibrandev/utils@latest
```

## ESTILOS

**Uso en index.js del proyecto :** import "@delibrandev/utils/src/styles.css";

```
 --color-primary: #000;
 --color-primary-background: #ece9e4;
 --color-primary-shadow: rgba(182, 182, 182, 0.2);
 --color-secondary: #fff;
 --color-secondary-background: #fefcfa;
 --color-terciary: #979796;
 --color-terciary-2: lightgrey;
 --color-terciary-3: grey;
 --color-success: #00C76C;
 --color-success-background: rgb(0, 199, 108, 0.2);
 --color-pending: #EB9E1A;
 --color-pending-background: rgb(235, 158, 26, 0.2);
 --color-error: #FF5757;
 --color-error-background: rgb(255, 87, 87, 0.2);
 --color-process: #0057FF;
 --color-process-background: rgb(0, 87, 255, 0.2);
```

## COMPONENTS

**Uso:** import { Componente } from "@delibrandev/utils";

**StateLabel**

> Recibe un valor de estado y devuelve un label con un color y fondo
> **Valores posibles:** "pending", "prepared", "paid", "delivered", "inPreparation", "inDelivery", "cancelled".

```
<StateLabel state={state}/>
```

**TextEditor**

> Recibe un valor en HTML

Obtienes el valor: document.getElementById(editorId).innerHTML;

```
<TextEditor initialValue={policy.text} id={editorId}/>
```

**TextArea**

> Textarea personalizado con título y descripción

```
<Textarea id={""} placeholder={""} classname={""} label={""} description={""} onChange={callback}/>
```

**Input**

> Input personalizado con título, descripción y control de errores
> **Valores posibles de validation:** "email", "dni", "nif", "telefono", "url", "number".

> Revisar suggestions y suggestionsCallback como se usa en TPV > commander > order > header

```
<Input id={""} type={""} placeholder={""} classname={""} icon={null} iconType={null} iconPositionRight={true} label={""} description={""} defaultValue={""} disabled={false} validation={null} onChange={callback} suggestions={suggestions} suggestionsCallback={handleSuggestion}/>
```

**Input Image**

> Input que maneja imágenes con un fondo personalizado

```
<InputImage uniqueId={"logo-ticket"} className={"product-image-featured"} image={null} />
```

**Button**

> **Clases posibles:** customButtonColor1, customButtonColor2, customButtonDisabled, customButtonSuccess, customButtonDanger

```
{<Button text={"Guardar"} icon={null} customClass={""} action={callback} />}
```

**Select**

> Select personalizado con título, descripción
> **Formato esperado:** [{ id: 0, name: "8:00" }].

```
<Select value={""} values={[]} callback={callback} id={""} label={""} description={""} classname={""} />
```

**Checkbox**

> Checkbox personalizado con descripción

```
<Checkbox text={text} clickEvent={()=>null} checked={false} className={""} />
```

**NoImage**

> Si no existe la imagen (null, undefined o cualquier otro problema), debe cargarse el siguiente componente sustituyendo a la etiqueta img.

```
<NoImage />
```

**Order components**

> import { ClientDetails, OrderInfo, OrderNotes, OrderProducts, OrderResume, OrderTimeline, OrderShoppingCart } from "@delibrandev/utils";

> CartActions debe pasarse desde los componentes del propio proyecto por ahora.

```
<OrderInfo data={data} />
<OrderProducts data={data} />
<OrderResume data={data} />
<OrderNotes data={data} />
<ClientDetails data={data} />
<OrderTimeline data={data} />
<OrderShoppingCart data={data} CartActions={CartActions} />
```

**PinPad**

> Teclado numérico

```
<PinPad callback={() => null} inputText="Ingrese su pin" />
```

**CardList**

> Listado de tarjetas (usado en usuarios, equipos.. en login), se espera en el array el campo "fullname" o "name".

```
<CardList callback={() => null} data={userList} title={"Seleccione el usuario"} icon={<LuUser />}/>
```

**Datatable**

> import { Datatable } from "@delibrandev/utils";

```
<Datatable
            identificator={identificator}
            title={""}
            subtitle={""}
            data={addIdKeyIfMissing(data)}
            customHeaders={customHeaders}
            customData={customData}
            sections={sections}
            checkColumn={checkColumn}
            checkedRows={checkedRows}
            handleCheckColumn={handleCheckColumn}
            handleSelectedRows={handleSelectedRows}
          />
```

Requiere:

```
const identificator = "unique-name-identificator";

const checkColumn = useSelector((state) => state.aplicationConfig.userConfig.datatable.tables[identificator]?.checkColumn);

const checkedRows = useSelector((state) => state.aplicationConfig.userConfig.datatable.tables[identificator]?.selectedRows);

const handleCheckColumn = () => {
    dispatch(updateDatatableCheckColumn({ table: identificator }));
};

const handleSelectedRows = (updatedSelectedRows = null) => {
    dispatch(updateDatatableSelectedRows({ selectedRows: updatedSelectedRows, table: identificator }));
};

const sections = [
    {text: null, callback: () => null, actions: ["search"], actionsWithSelect: []},
];

const customHeaders = {
    name: "Nombre",
};

const customData = {
    status: (data) => (data === "PUBLISHED" ? <Switch defaultChecked /> : <Switch />),
};
```

## FUNCIONES

**Uso:** import { funcion } from "@delibrandev/utils/src/function.js";

**getRequiredKeys**

> Recibe un objeto para evaluar sus valores.
> Si el valor de la clave es "required" significa que debía contener un valor y no lo tiene.
> Devolverá todos los que cumplen esa condición.

```
const obj = {
    identifier: document.getElementById("identifier").value || "required",
    name: document.getElementById("name").value || "required"
}
getRequiredKeys(obj)
```

**addIdKeyIfMissing**

> Recibe un array con ids customs en sus objetos y genera la clave id en cada uno para normalizarlo.
> Claves gestionadas: "categoryId", "productId", "catalogId", "discountId", "itemId", "itemGroupId", "optionId", "optionGroupId", "salesChannelId"

```
const arr = [{
    categoryId: "0001",
    name: "example"
}]
addIdKeyIfMissing(arr)
```
