import NavBar from './components/NavBar';
import PatientList from './components/PatientList';
import Diagnosis from './components/Diagnosis';
import Details from './components/Details';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-12 gap-3 p-4">
        {/* First Column: Patient List */}
        <div className="col-span-3 bg-white rounded-lg p-4 bg-transparent">
          <PatientList />
        </div>
        
        {/* Second Column: Diagnosis */}
        <div className="col-span-6 bg-white rounded-lg p-4 bg-transparent">
          <Diagnosis />
        </div>
        
        {/* Third Column: Patient Details */}
        <div className="col-span-3 bg-white rounded-lg bg-transparent">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default App;
