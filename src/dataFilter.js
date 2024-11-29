import React, { useState, useEffect } from 'react';

const DataFilterComponent = () => {
  const [dataList, setDataList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setDataList(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error data downloading:", error);
      }
    };

    fetchData();
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
      />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>There are no coincidence</li>
        )}
      </ul>
    </div>
  );
};

export default DataFilterComponent;
