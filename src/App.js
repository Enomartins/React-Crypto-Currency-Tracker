import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CoinComponent from './components/coinData'
import './App.css';


// 

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(()=> {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
        setCoins(res.data)
        console.log(res.data)
    })
    .catch(err =>{
        alert('There was an error while fetching data from the API')
    })
  }, [])

  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>{
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Cryptocurrency Dashboard</h1>

        <form>
          <input 
            type="text" 
            placeholder="Search a coin"
            className="coin-input"
            onChange={handleSearch}
          />
        </form>
      </div>

      {filteredCoins.map(coin => {
        return (
          <CoinComponent key="coin.id " {...coin} />
        )
      })}

    </div>
  );
}

export default App;
