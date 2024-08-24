import { usePatients } from '../hooks/API_data';
import calendar from '../assets/images/calendar_icon.png';
import female from '../assets/images/female.png';
import phone from '../assets/images/phone.png';
import insurance from '../assets/images/insurance.png';

const Details = () => {
    const { patients, loading } = usePatients();
    
    // Show loading text while data is fetching
    if (loading) return <p>Loading...</p>;

    const jessica = patients[3] || {};
    const {
        name,
        date_of_birth,
        gender,
        phone_number,
        emergency_contact,
        insurance_type,
        profile_picture
    } = jessica;

    // Format date_of_birth
    const formattedDateOfBirth = date_of_birth
        ? new Date(date_of_birth).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : 'N/A';

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto ml-5 mt-3">
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
                <img
                    className="rounded-full w-48 h-48"
                    src={profile_picture}  
                    alt={name || 'Patient'}
                />
            </div>

            {/* Patient Name */}
            <h2 className="text-center text-2xl font-bold mb-10">{name || 'Patient Name'}</h2>

            {/* Patient Details */}
            <div className="text-gray-600 space-y-7">
                <div className="flex flex-row items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mr-4">
                        <img src={calendar} alt="Calendar" className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Date Of Birth</span>
                        <span className="text-gray-700 font-semibold">{formattedDateOfBirth}</span>
                    </div>
                </div>
                <div className="flex flex-row items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mr-4">
                        <img src={female} alt="Gender" className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Gender</span>
                        <span className="text-gray-700 font-semibold">{gender || 'N/A'}</span>
                    </div>
                </div>
                <div className="flex flex-row items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mr-4">
                        <img src={phone} alt="Phone" className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Contact Info.</span>
                        <span className="text-gray-700 font-semibold">{phone_number || 'N/A'}</span>
                    </div>
                </div>
                <div className="flex flex-row items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mr-4">
                        <img src={phone} alt="Emergency Contacts" className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Emergency Contacts</span>
                        <span className="text-gray-700 font-semibold">{emergency_contact || 'N/A'}</span>
                    </div>
                </div>
                <div className="flex flex-row items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mr-4">
                        <img src={insurance} alt="Insurance" className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Insurance Provider</span>
                        <span className="text-gray-700 font-semibold">{insurance_type || 'N/A'}</span>
                    </div>
                </div>
            </div>

            {/* Centered Show All Information Button */}
            <div className="flex justify-center mt-10">
                <button className="bg-green-300 text-black font-medium rounded-full w-2/3 py-2 hover:bg-green-400 transition duration-300">
                    Show All Information
                </button>
            </div>
        </div>
    );
};

export default Details;
