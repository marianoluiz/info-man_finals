import { Bar, Pie, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const ChartComponent = ({ type, data, options }) => {
    switch (type) {
        case 'bar':
            return <Bar data={data} options={options} />;
        case 'pie':
            return <Pie data={data} options={options} />;
        case 'line':
            return <Line data={data} options={options} />;
        default:
            return null;
    }
};

export default ChartComponent;
