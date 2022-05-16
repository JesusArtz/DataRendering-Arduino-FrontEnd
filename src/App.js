import React, { useEffect, useState } from 'react';
import Grafica from './components/grafica';
import './App.css';


function App() {

    const [data, setData] = useState();

    const API = async () => {
        const request = await fetch("http://143.110.158.3:8000/getData");

        return await request.json();
    }

    useEffect(() => {

        const interval = setInterval(() => {
            API().then(res => setData(res));
        }, 500);

        return () => clearInterval(interval);

    }, [])

    return (

        <div className="App">
            <header className="App-header">
                <div>
                    { 
                        data ? [
                            <Grafica label="temperatura" data={data.temperatura} color="#33FFDD" key={1}/>,
                            <Grafica label="humedad" data={data.humedad} color="#00AAE0" key={2}/>
                        ] : null
                    }
                </div>
            </header>

        </div>
    );
};


export default App;