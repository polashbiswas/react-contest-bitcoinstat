import React, { useEffect, useState } from "react";
import TableRow from "./Components/TableRow";
import "./Components/style.css";

const App = () => {

  let [api, setApi] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[])

  function fetchData(){
  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then((res) => res.json())
    .then((data) => {
      console.log("Data", data);
      setApi(data);
    })
  }


  return (
    <div>
      <table className="table-container">
        <thead>
          <tr className="heading">
            <th>Name</th>
            <th>ID</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {api.map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;