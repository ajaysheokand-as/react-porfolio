import React, { useState } from "react";
import "../ToolStyles.css";
import data from "../../../data/PinCodes/Pincode30052019.json";
import { ALLSTATES } from "../../../Constants";
import { Link } from "react-router-dom";

// For Table
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

export const PinCode = () => {
  const [currentState, setCurrentState] = useState("All");
  const [currentStatePin, setCurrentStatePin] = useState(data);

  // Filter According to State
  function statePin(selectedState){
     setCurrentState(selectedState);
     if(selectedState == "All" ){
      setCurrentStatePin(data) ;
     }else{
      let statePinCode = data.filter( (value) => {
        return value.StateName == selectedState;
      });
      setCurrentStatePin(statePinCode) ;
     }
    
  }
 
  const columns = [
    { dataField: "Office", text: "Office (Area)", sort: true },
    { dataField: "Pincode", text: "Pin Code" },
    // { dataField: "OfficeType", text: "Office Type" },
    { dataField: "Division", text: "Division" },
    { dataField: "District", text: "District" },
    { dataField: "StateName", text: "State" },
    { dataField: "Circle", text: "Circle" },
  ];

  const defaultSorted = [
    {
      dataField: "Pincode",
      order: "desc",
    },
  ];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
    //   console.log("page", page);
    //   console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
    //   console.log("page", page);
    //   console.log("sizePerPage", sizePerPage);
    },
  });

  const { SearchBar, ClearSearchButton } = Search;

  return (
    <div className="main-container">
       <div className="title">{currentState} Pin Codes (Zip Code)</div>
        <hr/>
      <div className="row">
     
        <div className="container col-sm-12 col-lg-8">
       
          <div style={{minWidth: "800px"}}>
            <ToolkitProvider
              bootstrap4
              keyField="id"
              data={currentStatePin}
              columns={columns}
              search
            >
              {(props) => (
                <div >
                    <div className="pin-code-table">
                  <h6>Search Here:</h6>
                  <SearchBar {...props.searchProps} />
                  <ClearSearchButton {...props.searchProps} />
                    </div>
                  <hr />
                  <BootstrapTable
                    defaultSorted={defaultSorted}
                    pagination={pagination}
                    {...props.baseProps}
                  />
                </div>
              )}
            </ToolkitProvider>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div className="title container mt-3">States Wise</div>
          <div className="d-flex flex-row flex-wrap">
            {ALLSTATES.map((value, index) => {
              return (
                <Link
                  to={"/PinCode?state=" + value}
                  key={index}
                  className="state-container"
                  onClick={()=> statePin(value)}
                >
                  {value}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h2>Total Number of PinCode {data.length}</h2>{" "}
      </div>

    </div>
  );
};
