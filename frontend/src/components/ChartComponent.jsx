import { Bar, Pie, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    LineElement,
    PointElement,
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
    PointElement,
    Title,
    Tooltip,
    Legend,
);

// Gender Chart Options
const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom', // Position the legend at the top
            labels: {
                padding: 10, // Adds space between the legend and chart
            },
        },
        tooltip: {
            enabled: true, // Enable tooltips
        },
        layout: {
            padding: {
                bottom: 30,
            },
        },
    },
};

// Age Line Options
const ageLineOptions = {
    maintainAspectRatio: false, // Disable aspect ratio to use custom height and width
    responsive: true,
    plugins: {
        legend: {
            position: 'top', // Position the legend at the top
            labels: {
                boxWidth: 0, // Set the width of the box
                padding: 15, // Padding around each legend item
            },
        },
        tooltip: {
            enabled: true, // Enable tooltips
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Age Groups', // Label for the X-axis
            },
        },
        y: {
            title: {
                display: true,
                text: 'Number of Students', // Label for the Y-axis
            },
        },
    },
};

// Bar Graph Options for Citizenship
const citizenshipBarOptions = {
    maintainAspectRatio: false, 
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                boxWidth: 0, // Set the width of the box
                padding: 15, // Padding around each legend item
            },
        },
        tooltip: {
            enabled: true, // Enable tooltips
        },
    },
    scales: {
        y: {
            title: {
                display: true,
                text: 'Number of Students', // Y-axis label
            },
            beginAtZero: true, // Start Y-axis from 0
        },
    },
};

// Horizontal Bar Graph Options for Civil Status
const civilStatusBarOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                boxWidth: 0, // Set the width of the box
                padding: 15, // Padding around each legend item
            },
        },
        tooltip: {
            enabled: true, // Enable tooltips
        },
    },
    indexAxis: 'y', // Makes the bars horizontal
    scales: {
        x: {
            title: {
                display: true,
                text: 'Number of Students', // X-axis label (now corresponds to the count of students)
            },
        },
    },
};

const ChartComponent = ({ type, data, options }) => {
    switch (type) {
        case 'bar':
            return <Bar data={data} options={options} />;
        case 'pie':
            return <Pie data={data} options={options} />;
        case 'line':
            return <Line data={data} options={options}/>;
        default:
            return null;
    }
};



export default ChartComponent;
export { chartOptions, ageLineOptions, citizenshipBarOptions, civilStatusBarOptions };