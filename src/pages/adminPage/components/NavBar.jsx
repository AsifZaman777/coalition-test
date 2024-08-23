import React, { useState } from 'react';
import { FiHome, FiUsers, FiCalendar, FiMessageSquare, FiCreditCard, FiSettings, FiMoreVertical } from 'react-icons/fi';
import { FaUserMd } from 'react-icons/fa'; // For the doctor avatar
import doctorImage from '../../../assets/images/doctor.jpg'; // Update the path to your doctor image

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-100 shadow-md max-w-[90%] mx-auto rounded-3xl mt-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Navigation Links */}
      
        <div className="flex space-x-8 items-center">
          {/* Logo */}
        
          <div className="text-4xl font-bold text-neutral-800 -ml-20 mr-4">TechCare</div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="flex items-center space-x-2  btn btn-ghost text-base-content hover:bg-green-300 ">
              <FiHome className="text-xl" />
              <span>Overview</span>
            </a>
            <a href="#" className="flex items-center space-x-2  btn btn-ghost  text-base-content hover:bg-green-300">
              <FiUsers className="text-xl" />
              <span>Patients</span>
            </a>
            <a href="#" className="flex items-center space-x-2  btn btn-ghost  text-base-content hover:bg-green-300">
              <FiCalendar className="text-xl" />
              <span>Schedule</span>
            </a>
            <a href="#" className="flex items-center space-x-2  btn btn-ghost  text-base-content hover:bg-green-300">
              <FiMessageSquare className="text-xl" />
              <span>Message</span>
            </a>
            <a href="#" className="flex items-center space-x-2  btn btn-ghost  text-base-content hover:bg-green-300">
              <FiCreditCard className="text-xl" />
              <span>Transaction</span>
            </a>
          </div>
        </div>

        {/* Avatar and Settings */}
        <div className="flex items-center space-x-8">
          {/* Doctor Info */}
          <div className="flex items-center space-x-4">
            <img src={doctorImage} alt="Doctor Avatar" className="w-10 h-10 rounded-full" />
            <div className="leading-tight">
              <span className="block font-medium text-base">Dr. John Doe</span>
              <span className="block text-sm text-gray-400">Cardiologist</span>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="border-l border-gray-300 h-10"></div>

          {/* Settings and More */}
          <div className="flex items-center space-x-4">
            <FiSettings className="text-xl cursor-pointer" />
            <FiMoreVertical className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-base-200 space-y-2 py-4">
          {/* Add your mobile links here if needed */}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
