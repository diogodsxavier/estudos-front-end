/* eslint-disable no-undef */
import { useCallback, useState } from "react"

function WeatherApp() {
     // Estados para termo de busca, dados do clima atual, previsão, loading e erro
     const [searchTerm, setSearchTerm] = useState('Guarulhos');
     const [currentWeather, setCurrentWeather] = useState(null);
     const [forecastData, setForecastData] = useState(null);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

     // const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

     // Função para buscar dados do clima e da previsão
     const fetchWeather = useCallback(async() => {
          if (!searchTerm) return;

          setLoading(true);
          setError(null);

          try {
               // Clima atual
               const currentResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid={API key}`
               );
          } catch (error) {
               setError(error.message);
          } finally {
               setLoading(false);
          }
     });

};

export default WeatherApp