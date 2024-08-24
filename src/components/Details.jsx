import React from 'react';

const Details = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto ml-5 mt-3">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          className="rounded-full w-24 h-24"
          src="https://via.placeholder.com/150" // Replace with actual image URL
          alt="Jessica Taylor"
        />
      </div>

      {/* Patient Name */}
      <h2 className="text-center text-2xl font-semibold mb-4">Jessica Taylor</h2>

      {/* Patient Details */}
      <div className="text-gray-600 space-y-2">
        <div className="flex items-center">
          <span className="material-icons mr-2">calendar_today</span>
          <span>Date Of Birth</span>
          <span className="ml-auto">August 23, 1996</span>
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2">female</span>
          <span>Gender</span>
          <span className="ml-auto">Female</span>
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2">phone</span>
          <span>Contact Info.</span>
          <span className="ml-auto">(415) 555-1234</span>
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2">contact_phone</span>
          <span>Emergency Contacts</span>
          <span className="ml-auto">(415) 555-5678</span>
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2">local_hospital</span>
          <span>Insurance Provider</span>
          <span className="ml-auto">Sunrise Health Assurance</span>
        </div>
      </div>

      {/* Show All Information Button */}
      <button className="bg-teal-500 text-white rounded-full w-full mt-6 py-2 hover:bg-teal-600 transition duration-300">
        Show All Information
      </button>
    </div>
  );
};

export default Details;
