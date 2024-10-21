import React from 'react';
import { User, Home, Info } from 'lucide-react'; // Example icon imports from a library like lucide-react

interface StepProps {
  formData: any;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Step1: React.FC<StepProps> = ({ formData, handleInputChange }) => (
  <div className="space-y-8 bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    {/* Form Title */}
    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600">🚀 KYC (Know Your Client)</h2>

    {/* Name Input */}
    <div className="relative">
      <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name</label>
      <div className="flex items-center mt-2">
        <User className="text-gray-400 mr-2" />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">👤 Please enter your full legal name</span>
    </div>

    {/* Residential Status Dropdown */}
    <div className="relative">
      <label htmlFor="residentialStatus" className="block text-sm font-semibold text-gray-600">Residential Status</label>
      <div className="flex items-center mt-2">
        <Home className="text-gray-400 mr-2" />
        <select
          id="residentialStatus"
          name="residentialStatus"
          value={formData.residentialStatus}
          onChange={handleInputChange}
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        >
          <option value="">🏡 Select your status...</option>
          <option value="own">🏠 Own</option>
          <option value="rent">🏢 Rent</option>
        </select>
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">🏠 Please select whether you own or rent your residence.</span>
    </div>

    {/* Conditional Home Value Input */}
    {formData.residentialStatus === 'own' && (
      <div className="relative">
        <label htmlFor="homeValue" className="block text-sm font-semibold text-gray-600">Home Value</label>
        <div className="flex items-center mt-2">
          <Info className="text-gray-400 mr-2" />
          <input
            type="number"
            id="homeValue"
            name="homeValue"
            value={formData.homeValue}
            onChange={handleInputChange}
            placeholder="Enter home value"
            className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
          />
        </div>
        <span className="text-xs text-gray-500 mt-1 inline-block">💰 Only required if you own a home.</span>
      </div>
    )}
  </div>
);

export default Step1;
