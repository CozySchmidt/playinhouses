import React from 'react'

export default function RevampedDropdown({
  isDropdownOpen,
  setIsDropdownOpen,
  selectedFormat,
  setSelectedFormat,
  format,
}) {
  
  return (
    <div className="relative">
      <button
        className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-10 rounded font-beaufortheavy"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedFormat.name}
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-15 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {
              setSelectedFormat(format[0]);
              setIsDropdownOpen(false);
            }}
          >
            4v4
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {
              setSelectedFormat(format[1]);
              setIsDropdownOpen(false);
            }}
          >
            5v5
          </button>
        </div>
      )}
    </div>
  );
}
