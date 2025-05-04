import React, { useState } from 'react';
import '../Home.css';

const SideBar = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expiringThisMonth, setExpiringThisMonth] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({ searchTerm: value, expiringThisMonth });
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setExpiringThisMonth(checked);
    onFilterChange({ searchTerm, expiringThisMonth: checked });
  };

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      
      <div className="filter-group">
        <label htmlFor="search">Search by Name:</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter product name"
        />
      </div>

      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={expiringThisMonth}
            onChange={handleCheckboxChange}
          />
          Expiring This Month
        </label>
      </div>
    </div>
  );
};

export default SideBar;
