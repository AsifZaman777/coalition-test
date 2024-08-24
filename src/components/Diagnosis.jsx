import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { usePatients } from '../hooks/API_data'; // Adjust the path as needed

const Diagnosis = () => {
  const [timeRange, setTimeRange] = useState('All Time');
  const { loading, bloodPressureData } = usePatients(timeRange);

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  if (loading) return <p>Loading...</p>;

  const data = {
    labels: bloodPressureData.labels,
    datasets: [
      {
        label: 'Systolic',
        data: bloodPressureData.systolic,
        borderColor: '#EC4899',
        backgroundColor: 'rgba(236, 72, 153, 0.3)',
        tension: 0.4,
      },
      {
        label: 'Diastolic',
        data: bloodPressureData.diastolic,
        borderColor: '#7C3AED',
        backgroundColor: 'rgba(124, 58, 237, 0.3)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-[100%] mt-10">
      <h2 className="text-xl font-semibold mb-4">Diagnosis History</h2>
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Blood Pressure</h3>
          <select 
            className="text-sm border-gray-300 rounded" 
            value={timeRange} 
            onChange={handleTimeRangeChange}
          >
            <option value="Last 6 Months">Last 6 months</option>
            <option value="All Year">Last Year</option>
            <option value="All Time">All Time</option>
          </select>
        </div>
        <Line data={data} options={options} />
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-pink-500 font-bold text-2xl">{bloodPressureData.systolic[bloodPressureData.systolic.length - 1]}</p>
            <p className="text-gray-600">Higher than Average</p>
          </div>
          <div>
            <p className="text-purple-500 font-bold text-2xl">{bloodPressureData.diastolic[bloodPressureData.diastolic.length - 1]}</p>
            <p className="text-gray-600">Lower than Average</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col items-center bg-blue-50 rounded-lg p-4 shadow-sm">
          <img src="/icons/respiratory-rate.svg" alt="Respiratory Rate" className="w-12 h-12 mb-2" />
          <p className="text-xl font-semibold">72 bpm</p>
          <p className="text-gray-600">Normal</p>
        </div>
        <div className="flex flex-col items-center bg-pink-50 rounded-lg p-4 shadow-sm">
          <img src="/icons/temperature.svg" alt="Temperature" className="w-12 h-12 mb-2" />
          <p className="text-xl font-semibold">98.6°F</p>
          <p className="text-gray-600">Normal</p>
        </div>
        <div className="flex flex-col items-center bg-red-50 rounded-lg p-4 shadow-sm">
          <img src="/icons/heart-rate.svg" alt="Heart Rate" className="w-12 h-12 mb-2" />
          <p className="text-xl font-semibold">80 bpm</p>
          <p className="text-gray-600">Lower than Average</p>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
