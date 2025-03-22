// src/hooks/useInventory.js
import { useState, useEffect } from "react";
import axios from "axios";

export function useInventory() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/inventory")
      .then((response) => setInventory(response.data))
      .catch((error) =>
        console.error("Error fetching inventory from API:", error)
      );
  }, []);

  return inventory;
}
