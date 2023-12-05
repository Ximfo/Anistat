import React from 'react';
import { Bar } from 'react-chartjs-2';
import {fetchAniDB} from "./Stats";
import {calcBars} from "./calcBars";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
export function Years() {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels:{
                    font:{
                        size: 20
                    }
                }
            },
            title: {
                display: false,
                text: 'Years',
            },

        },
    };

    const yearsfilter=fetchAniDB.map(e=>e.year);
    console.log(yearsfilter)

    const labels = calcBars(yearsfilter).labels;

    const data = {
        labels,
        datasets: [
            {
                label: 'Years',
                data: calcBars(yearsfilter).QtyResult.map(e=>e.length),
                backgroundColor: 'black',
                borderColor: 'white',
                barPercentage: 0.5,
                //barThickness: 20,
                //maxBarThickness: 150,
                minBarLength: 2,
                borderWidth:2
            },
        ],
    };
    return (
        <Bar options={options} data={data} />
    );
}