import { createContext, useEffect, useState } from "react";
import "./App.css";
import { CryptoList } from "./CryptoList";
import { BrowserRouter, Route, Routes } from "react-router";
import CryptoDetail from "./CryptoDetail";

//Create a React application that consumes the following API:
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false.
// The program should display a list of the top 5 cryptocurrencies on a dashboard, showing their name, symbol, and current price.
// When a user clicks on a cryptocurrency's name, a details page should open, providing additional information such as market cap, 24-hour volume, and price change percentage.
// The data should be managed using component state, ensuring that the API is only called once to fetch the data when the component is first mounted, and the fetched data is used across the application without re-fetching.
export const Context = createContext(null);
function App() {
  const [listOfCrypto, setListOfCrytoc] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    )
      .then((res) => res?.json())
      .then((data) => {
        setListOfCrytoc(data);
      });
  }, []);

  return (
    <>
      <Context.Provider value={listOfCrypto}>
        <BrowserRouter>
          <Routes>
            <Route index element={<CryptoList listOfCrypto={listOfCrypto} />} />
            <Route path=":Id" element={<CryptoDetail />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
