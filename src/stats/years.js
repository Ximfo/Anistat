import React from 'react';
import {fetchdb} from "./Stats";
import { Bar } from 'react-chartjs-2';
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

    const yearsfilter=fetchdb.map(e=>e.year);
    console.log(yearsfilter)

    const labels = calcBars(yearsfilter).labels;

    const data = {
        labels,
        datasets: [
            {
                label: 'Years',
                data: calcBars(yearsfilter).QtyResult.map(e=>e.length),
                backgroundColor: 'black',
                borderColor: 'orange',
                //barPercentage: 0.5,
                barThickness: 20,
                //maxBarThickness: 150,
                //minBarLength: 2,
                borderWidth:4,
            },
        ],
    };
    return (
        <Bar options={options} data={data} />
    );
}