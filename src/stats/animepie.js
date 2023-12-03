import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Pie} from "react-chartjs-2";
import {moviesQty} from "./Stats";
import {TVshowsQty} from "./Stats";

ChartJS.register(ArcElement,Tooltip,Legend);
export function Round(){

const data={
    labels:['Serials', 'Movies'],
    datasets:[
        {
            label: `Serials: ${(TVshowsQty/(TVshowsQty+moviesQty))*100}% | Movies: ${(moviesQty/(TVshowsQty+moviesQty))*100}%`,
            data: [TVshowsQty,moviesQty],
            backgroundColor:[
                'rgba(0, 0, 0, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth:1,
        }
    ]
}
    return(
        <Pie data={data}/>
    )
}
