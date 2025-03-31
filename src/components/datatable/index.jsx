import React, { useState, useEffect } from "react";
//Components
import { Pagination } from "./pagination";
import { DatatableComponent } from "./datatable";
import { Sections } from "./sections";
import { Actions } from "./actions";
import "./style.css";

export const Datatable = ({
  title = "",
  subtitle = "",
  data,
  customHeaders = {
    name: "Nombre",
    description: "Descripción",
  },
  customData,
  sections = [
    {
      text: null,
      callback: () => null,
      actions: ["search"],
      actionsWithSelect: [],
    },
  ],
  identificator = "default",
  rowCallback = () => null,
  deleteCallback = () => null,
  cloneCallback = () => null,
  handleCheckColumn = () => null,
  handleSelectedRows = () => null,
  checkColumn,
  checkedRows,
}) => {
  console.log("Datatable > data: ", data);
  const [selectedRows, setSelectedRows] = useState(checkedRows && checkedRows.length > 0 ? checkedRows : []);
  const [rows, setRows] = useState([]);
  const [activeSection, setActiveSection] = useState(0);
  const [configuration, updateConfiguration] = useState({ maxRows: 12, indexStart: 0, pages: [0], filterBy: { section: "", filter: [] } });
  const [search, setSearch] = useState("");

  const handleMaxRows = (value) => {
    updateDatatableConfiguration({ ...configuration, maxRows: value });
  };

  const handlePage = (page) => {
    updateDatatableConfiguration({ ...configuration, indexStart: page * configuration.maxRows });
  };

  const updateDatatableConfiguration = (config) => {
    updateConfiguration(config);
  };

  const handleSectionData = (section, callback) => {
    setActiveSection(section);
    callback();
  };

  const handleSelectRow = (id, isChecked) => {
    let updatedSelectedRows;
    setSelectedRows((prevSelectedRows) => {
      if (isChecked) {
        // Añadir el id a la lista si está marcado
        updatedSelectedRows = [...prevSelectedRows, id];
      } else {
        // Eliminar el id de la lista si está desmarcado
        updatedSelectedRows = prevSelectedRows?.filter((rowId) => rowId !== id);
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

  const handleSearch = (data) => {
    let dataUpdated = data;
    if (search !== "") {
      const searchLower = search.toLowerCase();

      // Obtener las claves de customHeaders
      const keys = Object.keys(customHeaders);

      dataUpdated = data.filter((item) =>
        keys.some((key) => {
          const value = key.includes(".") ? key.split(".").reduce((acc, curr) => acc?.[curr], item) : item[key];
          return value?.toString().toLowerCase().includes(searchLower);
        })
      );
    }
    return dataUpdated;
  };

  useEffect(() => {
    const maxRowsInteger = parseInt(configuration.maxRows);
    let dataUpdated = handleSearch(data);
    //Filter
    const filtersActive = configuration?.filterBy?.filter?.filter((f) => f.value !== "");
    if (filtersActive && filtersActive.length > 0) {
      filtersActive?.map((filter) => {
        dataUpdated = dataUpdated?.filter((f) => f[filter.columns] === filter.value);
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
    dataUpdated && updateDatatableConfiguration({ ...configuration, pages: Array.from(Array(parseInt(data.length / maxRowsInteger) + 1).keys()) });
    dataUpdated && setRows(data?.filter((f, index) => index > configuration.indexStart && index < configuration.indexStart + maxRowsInteger));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    let dataUpdated = handleSearch(data);
    setRows(dataUpdated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="datatable">
      {title !== "" && (
        <div>
          <div className="inputLabel">{title}</div>
          <div className="inputDescription">{subtitle}</div>
        </div>
      )}
      <div className={"adminPanel"}>
        <div className="headerDatatable">
          <Sections sections={sections} activeSection={activeSection} handleSectionData={handleSectionData} />
          <Actions
            checkColumn={checkColumn}
            activeSection={activeSection}
            sections={sections}
            handleCheckColumn={handleCheckColumn}
            selectedRows={selectedRows}
            cloneCallback={cloneCallback}
            deleteCallback={deleteCallback}
            setSearch={setSearch}
          />
        </div>
        <DatatableComponent
          checkColumn={checkColumn}
          data={data}
          customHeaders={customHeaders}
          rows={rows}
          selectedRows={selectedRows}
          customData={customData}
          rowCallback={rowCallback}
          handleSelectRow={handleSelectRow}
        />
      </div>
      {<Pagination configuration={configuration} maxRowsAvailable={false} handleMaxRows={handleMaxRows} handlePage={handlePage} />}
    </div>
  );
};
