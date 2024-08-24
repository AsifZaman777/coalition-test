import { useState, useEffect } from 'react';

const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const username = 'coalition';
const password = 'skills-test';
const credentials = btoa(`${username}:${password}`);

// Helper function to generate month labels based on time range
const generateMonthLabels = (timeRange) => {
  const referenceDate = new Date('2024-03-01'); // Use March 2024 as the current month reference
  let startDate;
  let endDate;

  switch (timeRange) {
    case 'Last 6 Months':
      startDate = new Date(referenceDate.getFullYear(), referenceDate.getMonth() - 5, 1);
      endDate = referenceDate;
      break;
    case 'All Year':
      // For the year prior to the reference date, set startDate to January 1st and endDate to December 31st
      startDate = new Date(referenceDate.getFullYear() - 1, 0, 1);
      endDate = new Date(referenceDate.getFullYear() - 1, 11, 31); // December 31st of the previous year
      break;
    case 'All Time':
      startDate = new Date('2023-01-01'); 
      endDate = referenceDate;
      break;
    default:
      return [];
  }

  const labels = [];
  while (startDate <= endDate) {
    labels.push(`${startDate.toLocaleString('default', { month: 'short' })}, ${startDate.getFullYear()}`);
    startDate.setMonth(startDate.getMonth() + 1);
  }

  return labels;
};


export const usePatients = (timeRange) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bloodPressureData, setBloodPressureData] = useState({
    systolic: [],
    diastolic: [],
    labels: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        const patientsData = data.map(
          ({ name, gender, age, profile_picture, diagnosis_history, diagnostic_list, lab_results, ...rest }) => ({
            name,
            gender,
            age,
            profile_picture,
            diagnosis_history,
            diagnostic_list,
            lab_results,
            ...rest,
          })
        );

        setPatients(patientsData);

        const allDiagnosisHistory = patientsData.flatMap(patient => patient.diagnosis_history);

        // Generate the month labels based on timeRange
        const labels = generateMonthLabels(timeRange);

        // Initialize data arrays with null values
        const systolicData = new Array(labels.length).fill(null);
        const diastolicData = new Array(labels.length).fill(null);

        allDiagnosisHistory.forEach(({ month, year, blood_pressure }) => {
          const date = new Date(`${month} ${year}`);
          const label = `${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`;
          const index = labels.indexOf(label);

          if (index !== -1) {
            systolicData[index] = blood_pressure.systolic.value;
            diastolicData[index] = blood_pressure.diastolic.value;
          }
        });

        setBloodPressureData({
          labels,
          systolic: systolicData,
          diastolic: diastolicData,
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeRange]);

  return { patients, loading, bloodPressureData };
};
