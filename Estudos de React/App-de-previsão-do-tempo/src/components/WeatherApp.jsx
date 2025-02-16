/* eslint-disable no-undef */
import { useState } from "react"

function WeatherApp() {
     // Estados para termo de busca, dados do clima atual, previsão, loading e erro

     const [searchTerm, setSearchTerm] = useState('São Paulo');
     const [currentWeather, setCurrentWeather] = useState(null);
     const [forecastData, setForecastData] = useState(null);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

     const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
};

export default WeatherApp