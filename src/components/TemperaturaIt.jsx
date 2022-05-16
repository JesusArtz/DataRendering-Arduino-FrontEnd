import React, {useEffect, useState} from "react";

export default function NivTemperatura(){

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
                response.then(res => setData(res ? Object.values(res).map(item => item.temperatura) : ["Temperatura desconocida"]));
            }, 100);

            return () => clearInterval(interval);
        },[]
    )

    useEffect(
        () => {
            var myTemp = data;

            return () => myTemp;
        },[data]
    )

    return (
        data ? <h1>Temperatura: {data[0]}°C</h1> : null
    )
};