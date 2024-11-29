import React, { useState } from 'react';

const DataFilterComponent = () => {
  const [dataList, setDataList] = useState([
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      {}
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Searching..." 
      />
    </div>
  );
};

export default DataFilterComponent;
