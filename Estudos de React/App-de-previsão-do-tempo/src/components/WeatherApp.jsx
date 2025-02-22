import { useCallback, useEffect, useState } from "react"

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
               const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${API_KEY}&units=metric&lang=pt`);

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
          <div className="p-8 font-sans text-center bg-sky-50">
               <h3 className="text-3xl font-bold mb-4">Previsão do Tempo</h3>

               {/* Campo de busca responsivo */}
               <div className="mb-4 flex flex-col sm:flex-row justify-center items-center mx-auto">
                    <input
                         type="text"
                         value={searchTerm}
                         onChange={e => setSearchTerm(e.target.value)}
                         placeholder="Digite o nome da cidade"
                         className="p-2 border border-gray-300 rounded-t sm:rounded-l sm:rounded-t-none mb-2 sm:mb-0 w-96 focus:outline-none"
                    />

                    <button
                         onClick={fetchWeather}
                         className="bg-blue-800 text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none hover:bg-blue-900 w-96"
                    >
                         Buscar
                    </button>
               </div>

               {/* Exibição de loading e erro */}
               {loading && <p className="text-gray-700">Carregando...</p>}
               {error && <p className="text-gray-500">{error}</p>}

               {/* Exibição de clima atual */}
               {currentWeather && (
                    <div className="mt-6">
                         <h2 className="text-2xl font-semibold">{currentWeather.name}</h2>
                         {/* <p>Temperatura: {currentWeather.main.temp.toFixed(0)}°C</p> */}
                         <p>máx: {currentWeather.main.temp_max.toFixed(0)}°C    min: {currentWeather.main.temp_min.toFixed(0)}°C</p>
                         {/* <p>Temp min: {currentWeather.main.temp_min.toFixed(0)}°C</p> */}
                         <p>Condição: {currentWeather.weather[0].description}</p>
                         <img
                              className="mx-auto"
                              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                              alt={currentWeather.weather[0].description}
                         />
                    </div>
               )}

               {/* Exibição da previsão para os próximos dias */}
               {forecastData?.list?.length > 0 && (
                    <div className="mt-6">
                         <h3 className="text-xl font-semibold mb-2">
                              Previsão para os próximos dias
                         </h3>
                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                              {/* Filtra para exibir somente as previsões de meio-dia (12:00:00) */}
                              {Object.values(
                                   forecastData.list.reduce((acc, item) => {
                                        const [date, time] = item.dt_txt.split(' ');
                                        const hour = parseInt(time.split(':')[0]);
                                        // Pega a data de hoje no mesmo formato (YYYY-MM-DD)
                                        const today = new Date().toISOString().slice(0, 10);
                                        // Se o item for do dia atual, pula-o
                                        if (date === today) return acc;
                                        if (
                                             !acc[date] ||
                                             Math.abs(hour - 12) < Math.abs(parseInt(acc[date].dt_txt.split(' ')[1].split(':')[0]) - 12)
                                        ) {
                                             acc[date] = item; // Mantém a previsão mais próxima de 12h
                                        }
                                        return acc;
                                   }, {})
                              ).map((item) => (
                                   currentWeather && (
                                        <div key={item.dt} className="p-4 border border-gray-200 rounded shadow">
                                             <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
                                             <p>{item.weather[0].description}</p>
                                             <img
                                                  className="mx-auto"
                                                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                                  alt={item.weather[0].description}
                                             />
                                             <p>Temp máx: {currentWeather.main.temp_max.toFixed(0)}°C</p>
                                             <p>Temp min: {currentWeather.main.temp_min.toFixed(0)}°C</p>
                                             {console.log(forecastData)}
                                        </div>
                                   )
                              ))}
                         </div>
                    </div>
               )}
          </div>
     );

};

export default WeatherApp
