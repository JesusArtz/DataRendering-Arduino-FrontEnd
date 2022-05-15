//import GraficaHumedad from './components/Humedad';
import GraficaTemperatura from './components/Temperatura';
import './App.css';
import GraficaHumedad from './components/Humedad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Humedad: {}%</h1>
          <h1>Temperatura: {}°C</h1>
        </div>
        <div>
          <GraficaTemperatura/>
          <GraficaHumedad/>
        </div>    
      </header>
      
    </div>
  );
}

export default App;
