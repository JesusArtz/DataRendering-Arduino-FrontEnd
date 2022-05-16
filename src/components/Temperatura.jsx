import React, {useEffect, useState} from 'react';
import Chart from "chart.js/auto";

export default function GraficaTemperatura(){

    const [data, setData] = useState()

    const API = async () => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        };

        const request = await fetch("http://137.184.94.16:8000/getTemp", {
            method: "GET",
            headers: headersList
        });

        return await request.json();
    
    }

    useEffect(
        () => {
            const interval = setInterval(() => {
                let response = API();

            
            response.then(res => setData(
                {
                    type: 'line',
                    data: {
                        labels: res ? Object.values(res).map(item => item.temperatura) : [1],
    
                        datasets: [
                            {
                                label: 'temperatura',
                                borderColor: '#33FFDD',
                                data: res ? Object.values(res).map(item => item.temperatura) : [1],
                                radius: 0,
                                tension: 0.5
                            }
                        ]
                    },
                    options: {
                        responsive: false,
                        animation: false,
                    }
                }
            ))
            }, 100);
            
            return () => clearInterval(interval);

        }, []
    )

    useEffect(
        () => {
            var myChart = new Chart(document.getElementById('temperatura'), data)
            return () => {
                myChart.destroy()
            }
        }, [data]
    )

    
    

    return (
        <div>
            <canvas id='temperatura' width='800' height='300'></canvas>
        </div>
    )
};

