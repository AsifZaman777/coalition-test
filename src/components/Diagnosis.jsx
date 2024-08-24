import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { usePatients } from '../hooks/API_data'; // Adjust the path as needed

import heart from '../assets/images/heart.png';
import thermo from '../assets/images/thermo.png';
import lungs from '../assets/images/lungh.png';

const Diagnosis = () => {
  const [timeRange, setTimeRange] = useState('All Time');
  const { loading, bloodPressureData, patients } = usePatients(timeRange);

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  if (loading) return <p>Loading...</p>;

  //jessica taylor data
  const latestDiagnosis = patients[3]?.diagnosis_history[0] || {};

  //values
  const respiratoryRate = latestDiagnosis.respiratory_rate?.value || 'N/A';
  const temperature = latestDiagnosis.temperature?.value || 'N/A';
  const heartRate = latestDiagnosis.heart_rate?.value || 'N/A';

  //status
  const respiratoryRateStatus = latestDiagnosis.respiratory_rate?.levels || 'N/A';
  const temperatureStatus = latestDiagnosis.temperature?.levels || 'N/A';
  const heartRateStatus = latestDiagnosis.heart_rate?.levels || 'N/A';

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
        <div className="flex flex-col bg-blue-50 rounded-lg p-4 shadow-sm">
          <img src={lungs} alt="Respiratory Rate" className="w-28 h-28 mb-2" />
          <p className="text-xl font-semibold">Respiratory rate</p>
          <p className="text-4xl font-bold">{respiratoryRate} bpm</p>
          <div className="h-10"></div>
          <p className={`text-gray-700 font-medium ${respiratoryRateStatus === 'Normal' ? 'text-green-500' : 'text-red-500'}`}>{respiratoryRateStatus}</p>
        </div>
        <div className="flex flex-col bg-pink-50 rounded-lg p-4 shadow-sm">
          <img src={thermo} alt="Temperature" className="w-28 h-28 mb-2" />
          <p className="text-xl font-semibold">Temperature</p>
          <p className="text-4xl font-bold">{temperature}°F</p>
          <div className="h-10"></div>
          <p className={`text-gray-700 font-medium ${temperatureStatus === 'Normal' ? 'text-green-500' : 'text-red-500'}`}>{temperatureStatus}</p>
        </div>
        <div className="flex flex-col bg-red-50 rounded-lg p-4 shadow-sm">
          <img src={heart} alt="Heart Rate" className="w-28 h-28 mb-2" />
          <p className="text-xl font-semibold">Heart Rate</p>
          <p className="text-4xl font-bold">{heartRate} bpm</p>
          <div className="h-10"></div>
          <p className={`text-gray-700 font-medium ${heartRateStatus === 'Normal' ? 'text-green-500' : 'text-red-500'}`}>{heartRateStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
