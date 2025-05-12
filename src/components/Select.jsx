// React/Next.js example
import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
import Navbar from "./navbar/Navbar";

export default function ProductSelectorForm() {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products/displayProduct").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/products/selectProduct", { productId: selectedId, quantity });
    alert("Product selected successfully");
  };

  return (
    <div>
        <Navbar/>
        <div className="layout-body">
        <form onSubmit={handleSubmit} className="signup-form">
      <select onChange={(e) => setSelectedId(e.target.value)} required>
        <option value="">Select Product</option>
        {products.map((prod) => (
          <option key={prod.id} value={prod.id}>
            {prod.productName} (Available: {prod.productQuantity})
          </option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        max={
          products.find((p) => p.id === selectedId)?.productQuantity 
        }
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
        </div>
    </div>
  );
}
