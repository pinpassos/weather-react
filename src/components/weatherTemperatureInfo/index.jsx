import style from './style.module.css'

const WeatherTemperatureInfo = (props) => {
    return (
        <div className={style.current_weather_content}>
            {props.country ? (
                <div className={style.current_weather_info}>
                    <h1>{props.country}</h1>
                    <div className={style.current_weather_info_content_temperature}>
                        <img src={props.imageWeather} alt="Weather temperature" />
                        <p>{props.temperature}°c</p>
                    </div>
                </div>
            ) :
                <h2 className={style.empty_result_text}>Plase search for a country</h2>
            }
        </div>
    )
}

export default WeatherTemperatureInfo