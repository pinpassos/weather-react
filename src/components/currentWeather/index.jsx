import WeatherTemperatureInfo from '../weatherTemperatureInfo'
import WeatherSearch from '../weatherSearch'
import { useState } from 'react'

const CurrentWeather = () => {
    const [country, setCountry] = useState('')
    const [temperature, setTemperature] = useState('')
    const [imageWeather, setImageWeather] = useState('')
    const [countryValueInput, setCountryValueInput] = useState('')

    const searchCountryWheater = async (e) => {
        e.preventDefault()

        if (!countryValueInput) {
            alert("Please select a valid country")
        } else {
            const weather_request = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${countryValueInput}&key=${process.env.REACT_APP_WEATHER_API_SECRET_KEY}`)
            const weather_response = await weather_request.json()
            setCountry(weather_response.location.name)
            setTemperature(weather_response.current.temp_c)
            setImageWeather(weather_response.current.condition.icon)
        }
    }

    return (
        <>
            <WeatherSearch
                handleForm={searchCountryWheater}
                handleCountryValueInput={setCountryValueInput}
            />
            <WeatherTemperatureInfo
                country={country}
                temperature={temperature}
                imageWeather={imageWeather}
            />
        </>

    )
}

export default CurrentWeather