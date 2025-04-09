import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const[location, setLocation] = useState("")
    const API_URL = "https://2hx4ndw6u0.execute-api.us-east-1.amazonaws.com/v1/weather/"
    function getWeather(city: string, method: string){

        const url = `${API_URL}${method}?&q=${city}`
        console.log(url)
    }


  return (
    <>
        <body>
            <header>
                <h1>WeatherSphere</h1>
                <h2>Your personal weather companion</h2>
            </header>
            <main>
                <div id={"searchBar"}>
                    <input type="text" placeholder="Enter a city" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    <button onClick={() => getWeather(location, "current")}>Get Weather</button>
                </div>
                <div className={"flex grid-col-2 background-red"}>
                    <div className={"card"}>
                        <h3>Current Weather</h3>
                        <p id="current-temp">-- °C</p>
                        <p id="current-condition">--</p>
                        <p id="current-city">--</p>
                    </div>

                    <div className={"card"}>
                        <h3>Forecast</h3>
                        <p id="forecast-temp">-- °C</p>
                        <p id="forecast-condition">--</p>
                        <p id="forecast-city">--</p>
                    </div>
                </div>

            </main>
        </body>
    </>
  )
}

export default App
