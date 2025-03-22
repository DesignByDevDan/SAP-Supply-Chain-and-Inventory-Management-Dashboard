// src/components/FilterBarPanel.js
import React, { useState } from "react";
import { FilterBar, FilterItem, Input, Button } from "@ui5/webcomponents-react";

export default function FilterBarPanel({ onSearchInventory }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearchInventory(searchTerm);
  };

  return (
    <FilterBar onSearch={handleSearch} filterContainerWidth="15rem">
      <FilterItem label="Search Inventory">
        <Input
          value={searchTerm}
          placeholder="Enter product name"
          onInput={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            // Allow 'Enter' key to trigger search
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </FilterItem>
      <Button onClick={handleSearch}>Search</Button>
    </FilterBar>
  );
}
