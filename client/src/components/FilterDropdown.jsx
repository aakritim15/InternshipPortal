import React, { useState } from 'react';

const FilterDropdown = ({ filterCriteria, options, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (criteriaKey, value) => {
    const updatedValues = filterCriteria[criteriaKey].includes(value)
      ? filterCriteria[criteriaKey].filter((selected) => selected !== value)
      : [...filterCriteria[criteriaKey], value];

    onChange({ ...filterCriteria, [criteriaKey]: updatedValues });
  };

  return (
    <div className="filter-dropdown relative z-10">
      <button
        className="filter-button px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Filter
      </button>

      {isDropdownOpen && (
        <div className="dropdown-options absolute top-full right-0 mt-2 bg-white border border-gray-300 p-2 rounded shadow-md z-20 flex gap-2">
          {Object.keys(options).map((criteriaKey) => (
            <div key={criteriaKey}>
              <strong>{criteriaKey}</strong>
              {options[criteriaKey].map((option) => (
                <label key={option} className="flex flex-col gap-2">
                  <input
                    type="checkbox"
                    value={option}
                    checked={filterCriteria[criteriaKey].includes(option)}
                    onChange={() => handleCheckboxChange(criteriaKey, option)}
                  />
                  {/* {criteriaKey === 'startDate' ? formattedStartDate : option} */}
                  {option}
                </label>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
