// import { useState } from 'react'
import './App.css'
import Routing from './components/Routing/Routing'
import Home from './pages/Home'
// import { CurrencyContext } from './context/CurrencyContext';
import Navbar from './components/Navbar/Navbar'

function App() {
  // const [count, setCount] = useState(0);
  // const [currency, setCurrency] = useState('usd');
  return (
    <>
      {/* <CurrencyContext.Provider value={ {currency, setCurrency} }> */}
        <Routing/>
      {/* </CurrencyContext.Provider> */}
    </>
  )
}

export default App
