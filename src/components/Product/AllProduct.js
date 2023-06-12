import React from 'react';
import { Table } from '../Table/Table';
import { products } from '../../data/DummyProduct/DummyLaptop';
export const AllProduct = () => {
    const columns = [
        { dataField: "brand", text: "Brand", sort: true },
        { dataField: "RAM", text: "RAM" },
        { dataField: "processor", text: "Processor" },
        { dataField: "hdd", text: "HDD" },
        { dataField: "ssd", text: "SSD" },
        { dataField: "generation", text: "Generation" },
        { dataField: "price", text: "Price" },
        { dataField: "discount", text: "Discount" },
        { dataField: "description", text: "Description" },
      ];

      const defaultSorted = [
        {
          dataField: "brand",
          order: "desc",
        },
      ];
    
  return (
    <div><Table columns={columns} defaultSorted={defaultSorted} data={products}/></div>
  )
}
