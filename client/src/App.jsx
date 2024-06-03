import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [Data, setData] = useState("No data")

  const FetchData = async() => {
    console.log(`${import.meta.env.VITE_APP_API_URL}`)
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}`);
    console.log(response)
    setData(response.data)
  }

  useEffect(()=>{
    FetchData()
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>
        HELLOW HELLOW HWLLOE
        Data fetched from API : {Data}
      </h2>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
