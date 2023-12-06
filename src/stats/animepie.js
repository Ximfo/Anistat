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
            label: `Serials: ${Math.round(TVshowsQty/(TVshowsQty+moviesQty)*100)}% | Movies: ${Math.round(moviesQty/(TVshowsQty+moviesQty)*100)}%`,
            data: [TVshowsQty,moviesQty],
            backgroundColor:[
                'royalblue',
                'red',
            ],
            borderColor: [
                'lightskyblue',
                'lightcoral',
            ],
            borderWidth:3,
        }
    ]
}
    return(
        <Pie height={1000} width={1000} data={data}/>
    )
}
