import React, { useEffect } from 'react';
import Chart from "chart.js/auto";

export default function Grafica(props) {

    useEffect(
        () => {
            var myChart = new Chart(document.getElementById(props.label), {

                type: 'line',
                data: {
                    labels: props.data,

                    datasets: [
                        {
                            label: props.label[0].toUpperCase() + props.label.substring(1),
                            borderColor: props.color,
                            data: props.data,
                            radius: 0,
                            tension: 0.5
                        }
                    ]
                },
                options: {
                    responsive: false,
                    animation: false,
                }
            });

            return () => myChart.destroy();

        }, []
    );


    return (
        <div>
            <h1>{props.label[0].toUpperCase() + props.label.substring(1)}: {props.data[0]}°C</h1>
            <canvas id={props.label} width='800' height='300'></canvas>
        </div>

    );
};

