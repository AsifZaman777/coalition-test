
import { FiMoreHorizontal, FiSearch } from 'react-icons/fi';
import { usePatients } from '../hooks/API_data';


const PatientList = () => {
  const { patients, loading } = usePatients(); 

  //destructuring the patients and loading from the usePatients hook

  if (loading) {
    return  <div className="bg-slate-100 max-w-[100%] mx-auto h-[80vh] p-4 pt-4 shadow-xl rounded-xl mt-0 ml-20">
    {[...Array(10)].map((_, index) => (
      <div key={index} className="flex items-center space-x-4 animate-pulse">
        <div className="w-12 h-12 bg-gray-300 rounded-full mt-5"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>;
  }

  return (
    <div className="bg-slate-100 max-w-[90%] mx-auto h-[80vh] p-4 pt-4 shadow-xl rounded-xl mt-0 ml-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Patients</h2>
        <FiSearch className="text-2xl cursor-pointer" />
      </div>

      {/* Scrollable List */}
      <div className="max-h-[70vh] overflow-y-auto">
        {patients.map((patient, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-base-200 rounded-lg mb-4">
            <div className="flex items-center space-x-4">
              <img src={patient.profile_picture} alt={patient.name} className="w-12 h-12 rounded-full" />
              <div className="leading-tight">
                <span className="block font-medium">{patient.name}</span>
                <span className="block text-sm text-gray-500">{patient.gender}, {patient.age} years</span>
              </div>
            </div>
            <FiMoreHorizontal className="text-xl cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
