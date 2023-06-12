import React from 'react';
// For Table
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";


export const Table = (prop) => {
    console.log("This is props", prop);
    
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
        },
        onSizePerPageChange: function (page, sizePerPage) {
        },
      });
    
      const { SearchBar, ClearSearchButton } = Search;
  return (
    <div className="row">
     
        <div className="container">
       
          <div>
            <ToolkitProvider
              bootstrap4
            //   keyField="description"
              data={prop.data}
              columns={prop.columns}
              search
            >
              {(props) => (
                <div >
                    <div className="">
                  <h6>Search Here:</h6>
                  <SearchBar {...props.searchProps} />
                  <ClearSearchButton {...props.searchProps} />
                    </div>
                  <hr />
                  <BootstrapTable
                    defaultSorted={props.defaultSorted}
                    pagination={pagination}
                    {...props.baseProps}
                  />
                </div>
              )}
            </ToolkitProvider>
          </div>
        </div>
      </div>
  )
}
