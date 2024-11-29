import React, { useState, useEffect } from 'react';

const FilterData = () => {
  const [dataList, makeDataList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const sampleData = [
      "Myktybek", "Sultan", "Kana", "Numu", "Beka",
      "Ulan", "Isko", "Adyl", "Nurbek", "Eldos"
    ];
    
    makeDataList(sampleData);
    setFilteredData(sampleData);
  }, []);

  useEffect(() => {
    const filtered = dataList.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, dataList]);

  return (
    <div>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Searching..." 
        style={{ padding: '10px', width: '200px', marginBottom: '20px', fontSize: '16px' }}
      />
      
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index} style={{ padding: '5px 0', fontSize: '18px' }}>
              {item}
            </li>
          ))
        ) : (
          <li style={{ padding: '5px 0', color: 'gray' }}>There are no coincidence</li>
        )}
      </ul>
    </div>
  );
};

export default FilterData;