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
export function Studios() {

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
                text: 'Studios',
            },

        },
    };

    const studiofilter=fetchdb.map(e=>e.studio);

    const labels = calcBars(studiofilter).labels;

    const data = {
        labels,
        datasets: [
            {
                label: 'Studio',
                data: calcBars(studiofilter).QtyResult.map(e=>e.length),
                backgroundColor: 'black',
                borderColor: 'mediumslateblue',
                //barPercentage: 0.5,
                barThickness: 20,
                //maxBarThickness: 150,
                minBarLength: 2,
                borderWidth:4,
            },
        ],
    };
    return (
        <Bar options={options} data={data} />
    );
}