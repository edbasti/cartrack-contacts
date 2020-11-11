import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import './App.css';
import Parent from '../Parent/Parent'
import Dropdown from './Dropdown/Dropdown'

const StyledSearch = styled.input`
  margin-left: 10px;
  padding-left: 35px;
  color: $color-gray-one;
  box-shadow: 2px 3px 28px 1px rgba(0,0,0,0.1);
`

const StyledText = styled.span`
  margin: 10px 10px;
  padding-left: 35px;
  color: $color-gray-one;

`

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm("")
    setSearchTerm(event.target.value.toLowerCase());
  };
  const [ data, setData ]=useState([]);
  const [keyword, setKeyword] = useState("name")
  const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson);
      });
  }
  useEffect(()=>{
    getData()
    if (searchTerm !== '') {
      const results = data.filter(contact => {
        let criteria = contact.name.toLowerCase().includes(searchTerm)
        
        if (keyword === 'username') {
          criteria = contact.username.toLowerCase().includes(searchTerm)
        }
        
        return criteria 
      }
      );
      setSearchResults(results);
    } else {
      setSearchResults(data);
    }
  },[ data, searchTerm ])


  
  return (
      <div className="App">
        <h1 className="App-h1">Cartrack Contact List</h1>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "50%", margin: "auto" }}>
          <StyledText>Search by</StyledText>
          <Dropdown
            
            setKeyword={setKeyword}
            items={[
              {"label": "name", "value": "name"},
              {"label": "username", "value": "username"},
            ]}
            style={{ marginLeft: "10px" }}
          />
          <StyledSearch
            autoFocus
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>

        { searchResults.map((item, i) => (
          <Parent item={ item } key= { i } i={ i } />
        ) ) }
      </div>
  );
}
export default App;