import style from './style.module.css'

const WeatherSearch = (props) => {
    return (
        <div className={style.current_weather}>
            <form className={style.weather_search_form} onSubmit={props.handleForm}>
                <label htmlFor="search-country" className={style.search_form_label}>Search a location</label>
                <input type="text" placeholder='Choose country and press enter' className={style.search_form_input} onChange={(e) => props.handleCountryValueInput(e.target.value)} />
            </form>
        </div>
    )
}

export default WeatherSearch