import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    contestWinner: false,
    featured: false,
    testKitchenApproved: false,
  });

  const handleFilterChange = (filter, value) => {
    const updatedFilters = { ...filters, [filter]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filter-sidebar">
      <label>
        <input
          type="checkbox"
          checked={filters.contestWinner}
          onChange={(e) => handleFilterChange('contestWinner', e.target.checked)}
        />
        Contest Winner
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.featured}
          onChange={(e) => handleFilterChange('featured', e.target.checked)}
        />
        Featured
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.testKitchenApproved}
          onChange={(e) => handleFilterChange('testKitchenApproved', e.target.checked)}
        />
        Test Kitchen Approved
      </label>
    </div>
  );
};

export default FilterSidebar;
