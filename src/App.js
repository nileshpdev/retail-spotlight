import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/ui/Header'
import EconomicIndicatorTable from './components/Tables/EconomicIndicatorTable'
import IbmStockChart from './components/Tables/IbmStockChart'


import './App.css'


const App = () => {

  const [economicIndicators, setEconomicIndicators] = useState([])
  const [ibmStock, setIbmStock] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  // const dataLimit = 20;

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)

      const fetchEconomicIndicatorData = await axios(
        `https://www.alphavantage.co/query?function=REAL_GDP&interval=annual&apikey=demo`
      )

      const fetchIbmStock = await axios(
        `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo`
      )

      // set economic data

      const EcoData = fetchEconomicIndicatorData.data.data.reverse()

      setEconomicIndicators(EcoData)

      // get and format IBM Data

      const IbmStockData = (fetchIbmStock.data['Weekly Time Series'])
      const data = Object.keys(IbmStockData).map(key => {
        let r = key.split("-")
        let dateData = new Date(parseInt(r[0]), parseInt(r[1])-1, parseInt(r[2]))
        let dateUtc = dateData.toLocaleString('en-GB', { timeZone: 'UTC' })
          return {
            date: dateUtc,
            open: Number(IbmStockData[key]["1. open"]),
            high: Number(IbmStockData[key]["2. high"]),
            low: Number(IbmStockData[key]["3. low"]),
            close: Number(IbmStockData[key]["4. close"]),
            volume: Number(IbmStockData[key]["5. volume"]),
    }
  })

  setIbmStock(data.reverse())

      setIsLoading(false)

    }

    fetchItems()
  }, [])
  
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
        <Route exact path="/" element={<IbmStockChart isLoading={isLoading} ibmStock={ibmStock} />}></Route>
        <Route path="/economicindicator" element={<EconomicIndicatorTable isLoading={isLoading} economicIndicators={economicIndicators}/>}></Route>
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App