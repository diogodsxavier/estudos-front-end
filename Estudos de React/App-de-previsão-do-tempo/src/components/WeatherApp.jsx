import { useCallback, useEffect, useState } from "react"
import { ssrImportMetaKey } from "vite/runtime";

function WeatherApp() {
     // Estados para termo de busca, dados do clima atual, previsão, loading e erro
     const [searchTerm, setSearchTerm] = useState('Guarulhos');
     const [currentWeather, setCurrentWeather] = useState(null);
     const [forecastData, setForecastData] = useState(null);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

     const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

     // Função para buscar dados do clima e da previsão
     const fetchWeather = useCallback(async () => {
          if (!searchTerm) return;
          setLoading(true);
          setError(null);

          try {
               // Chamada para o Clima atual
               const currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=metric&lang=pt`);

               if (!currentResponse.ok) throw new Error('Erro ao buscar dados do clima atual.');

               const currentData = await currentResponse.json();
               setCurrentWeather(currentData);

               // Chamada para a previsão (5 Day/3 Hour Forecast)
               const forecastResponse = await fetch(`api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${API_KEY}&units=metric&lang=pt`);

               if (!forecastResponse.ok) throw new Error('Erro ao buscar dados da previsão.');

               const forecastData = await forecastResponse.json();
               setForecastData(forecastData);
          } catch (error) {
               setError(error.message);
          } finally {
               setLoading(false);
          }
     }, [searchTerm, API_KEY]);

     // Buscar os dados assim que o componente monta ou quando o termo de busca mudar
     useEffect(() => {
          fetchWeather();
     }, [fetchWeather]);

     return (
          <div className="p-8 font-sans">
               <h1 className="text-3x1 font-bold mb-4">Previsão do Tempo</h1>

               {/* Campo de busca responsivo */}
               <div className="mb-4 flex flex-col sm:flex-row">
                    <input
                         type="text"
                         value={searchTerm}
                         onChange={e => setSearchTerm(e.target.value)}
                         placeholder="Digite o nome da cidade"
                         className="p-2 border border-gray-300 rounded-t sm:rounded-1 sm:rounded-t-none mb-2 sm:mb-0 flex-1"
                    />

                    <button
                         onClick={fetchWeather}
                         className="bg-blue-500 text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none hover:bg-blue-600"
                    >
                         Buscar
                    </button>
               </div>

               {/* Exibição de loading e erro */}
          </div>
     );

};

export default WeatherApp
