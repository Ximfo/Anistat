import React from 'react';
import {fetchdb} from "./Stats";
import { Line } from 'react-chartjs-2';
import {calcBars} from "./calcBars";


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export function Raitings() {

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
            text: 'Chart.js Line Chart',
        },
    },
};


const raitingfilter=fetchdb.map(e=>e.raiting);

const labels = calcBars(raitingfilter).labels;

const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Raitings',
            data: calcBars(raitingfilter).QtyResult.map(e=>e.length),
            borderColor: 'darkmagenta',
            backgroundColor: 'transparent',
        },
    ],
};

    return (
        <Line options={options} data={data} />
    )
}