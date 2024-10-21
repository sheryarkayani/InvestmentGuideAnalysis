import React from 'react';
import { FormData } from './FormData';
import { Home, BarChart, TrendingUp, Calendar } from 'lucide-react'; // Icons for fields

interface Step3Props {
  formData: CustomFormData;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Step3: React.FC<Step3Props> = ({ formData, handleInputChange }) => (
  <div className="space-y-8 bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    {/* Form Title */}
    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
      🏘️ Investment Performance Matrix
    </h2>

    {/* Number of Properties Owned */}
    <div className="relative">
      <label htmlFor="propertyCount" className="block text-sm font-semibold text-gray-600">Number of Properties Owned</label>
      <div className="flex items-center mt-2">
        <Home className="text-gray-400 mr-2" />
        <input
          type="number"
          id="propertyCount"
          name="propertyCount"
          value={formData.propertyCount}
          onChange={handleInputChange}
          placeholder="Enter the number of properties"
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">🏘️ How many properties do you own?</span>
    </div>

    {/* Current Property Values */}
    <div className="relative">
      <label htmlFor="propertyValues" className="block text-sm font-semibold text-gray-600">Current Property Values</label>
      <div className="flex items-center mt-2">
        <BarChart className="text-gray-400 mr-2" />
        <textarea
          id="propertyValues"
          name="propertyValues"
          value={formData.propertyValues}
          onChange={handleInputChange}
          placeholder="Enter the value of each property"
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
          rows={3}
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">💰 Enter the current value of each property you own.</span>
    </div>

    {/* Returns from Properties (Last 2-5 years) */}
    <div className="relative">
      <label htmlFor="propertyReturns" className="block text-sm font-semibold text-gray-600">Returns from Properties (Last 2-5 years)</label>
      <div className="flex items-center mt-2">
        <TrendingUp className="text-gray-400 mr-2" />
        <textarea
          id="propertyReturns"
          name="propertyReturns"
          value={formData.propertyReturns}
          onChange={handleInputChange}
          placeholder="Enter returns on your properties"
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
          rows={3}
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">📈 Provide the returns you’ve received from your properties in the past 2-5 years.</span>
    </div>

    {/* Expectations for Next 2-5 Years */}
    <div className="relative">
      <label htmlFor="propertyExpectations" className="block text-sm font-semibold text-gray-600">Expectations for Next 2-5 Years</label>
      <div className="flex items-center mt-2">
        <Calendar className="text-gray-400 mr-2" />
        <textarea
          id="propertyExpectations"
          name="propertyExpectations"
          value={formData.propertyExpectations}
          onChange={handleInputChange}
          placeholder="Enter your expectations for property performance"
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
          rows={3}
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">🗓️ Share your expectations for your property returns in the coming 2-5 years.</span>
    </div>

    {/* Optional: Investment Performance Overview */}
    <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800">
      <p className="font-bold">Performance Overview:</p>
      <p className="text-sm">Properties Owned: {formData.propertyCount}</p>
      <p className="text-sm">Property Values: {formData.propertyValues}</p>
      <p className="text-sm">Returns (Last 2-5 years): {formData.propertyReturns}</p>
      {formData.propertyExpectations && (
        <p className="text-sm">Future Expectations: {formData.propertyExpectations}</p>
      )}
    </div>
  </div>
);

export default Step3;
