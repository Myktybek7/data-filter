import React, { useState, useEffect } from 'react';

const DataFilterComponent = () => {
  const [dataList, setDataList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setDataList(data);
      } catch (error) {
        console.error("Error data downloading", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Searching..." 
      />
      <ul>
        {dataList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFilterComponent;
