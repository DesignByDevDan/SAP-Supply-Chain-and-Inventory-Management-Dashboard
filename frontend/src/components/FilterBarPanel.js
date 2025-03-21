// src/components/FilterBarPanel.js
import React, { useState } from "react";
import {
  FilterBar,
  FilterItem,
  Input,
  Select,
  Option,
} from "@ui5/webcomponents-react";

export default function FilterBarPanel() {
  const [productFilter, setProductFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const onProductFilterChange = (e) => {
    setProductFilter(e.target.value);
    // Here you could call an API or dispatch an action with the new filter
  };

  const onStatusFilterChange = (e) => {
    const selectedText = e.detail.selectedOption?.textContent || "";
    setStatusFilter(selectedText);
    // Here you could call an API or dispatch an action with the new filter
  };

  const onSearch = () => {
    console.log("Applying filters:", { productFilter, statusFilter });
    // Implement your filter logic here
  };

  return (
    <FilterBar onSearch={onSearch} filterContainerWidth="15rem">
      <FilterItem label="Product" key="product">
        <Input value={productFilter} onInput={onProductFilterChange} />
      </FilterItem>

      <FilterItem label="Status" key="status">
        <Select onChange={onStatusFilterChange}>
          <Option key="all">All</Option>
          <Option key="Shipped">Shipped</Option>
          <Option key="Processing">Processing</Option>
          <Option key="Delivered">Delivered</Option>
        </Select>
      </FilterItem>
    </FilterBar>
  );
}
