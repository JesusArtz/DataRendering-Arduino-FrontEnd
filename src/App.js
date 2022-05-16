//import GraficaHumedad from './components/Humedad';
import GraficaTemperatura from './components/Temperatura';
import './App.css';
import GraficaHumedad from './components/Humedad';
import NivTemperatura from './components/TemperaturaIt';
import NivHumedad from './components/HumedadIt';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NivHumedad/>
          <NivTemperatura/>
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
