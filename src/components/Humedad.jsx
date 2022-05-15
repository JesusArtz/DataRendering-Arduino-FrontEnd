import React, {useEffect, useState} from 'react';
import Chart from "chart.js/auto";

export default function GraficaHumedad(){

    const [data, setData] = useState()

    const API = async () => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        };

        const request = await fetch("http://137.184.94.16:8000/getHum", {
            method: "GET",
            headers: headersList
        });

        return await request.json();
    
    }

    useEffect(
        () => {
            let response = API();

            
            response.then(res => setData(
                {
                    type: 'line',
                    data: {
                        labels: res ? Object.values(res).map(item => item.humedad) : [1],
    
                        datasets: [
                            {
                                label: 'humedad',
                                borderColor: '#00AAE0',
                                data: res ? Object.values(res).map(item => item.humedad) : [1],
                                radius: 0,
                                tension: 0.5
                            }
                        ]
                    },
                    options: {
                        responsive: false,
                    }
                }
            ))

        }, []
    )

    useEffect(
        () => {
            var myChart = new Chart(document.getElementById('humedad'), data)
            return () => {
                myChart.destroy()
            }
        }, [data]
    )

    
    

    return (
        <div>
            <canvas id='humedad' width='800' height='300'></canvas>
        </div>
    )
};

