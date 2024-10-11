import React from 'react';
import { TrendingUp, Clock, DollarSign } from 'lucide-react'; // Icons for the fields

const Step5 = ({ formData, handleInputChange }) => (
  <div className="space-y-8 bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    {/* Form Title */}
    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
      🎯 Client Preferences
    </h2>

    {/* Investment Preference */}
    <div className="relative">
      <label htmlFor="investmentPreference" className="block text-sm font-semibold text-gray-600">
        Investment Preference
      </label>
      <div className="flex items-center mt-2">
        <TrendingUp className="text-gray-400 mr-2" />
        <select
          id="investmentPreference"
          name="investmentPreference"
          value={formData.investmentPreference}
          onChange={handleInputChange}
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        >
          <option value="">Select...</option>
          <option value="regular income">Regular Monthly Rental Income</option>
          <option value="long-term appreciation">Long-term Appreciation</option>
        </select>
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">📊 Choose whether you prefer monthly income or long-term value growth.</span>
    </div>

    {/* Investment Time Horizon */}
    <div className="relative">
      <label htmlFor="investmentTimeHorizon" className="block text-sm font-semibold text-gray-600">
        Investment Time Horizon
      </label>
      <div className="flex items-center mt-2">
        <Clock className="text-gray-400 mr-2" />
        <select
          id="investmentTimeHorizon"
          name="investmentTimeHorizon"
          value={formData.investmentTimeHorizon}
          onChange={handleInputChange}
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        >
          <option value="">Select...</option>
          <option value="short-term">Short-term (0-2 years)</option>
          <option value="medium-term">Medium-term (2-5 years)</option>
          <option value="long-term">Long-term (5+ years)</option>
        </select>
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">⏳ How long are you planning to keep your investments?</span>
    </div>

    {/* Liquidity Preference */}
    <div className="relative">
      <label htmlFor="liquidityPreference" className="block text-sm font-semibold text-gray-600">
        Liquidity Preference
      </label>
      <div className="flex items-center mt-2">
        <DollarSign className="text-gray-400 mr-2" />
        <select
          id="liquidityPreference"
          name="liquidityPreference"
          value={formData.liquidityPreference}
          onChange={handleInputChange}
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        >
          <option value="">Select...</option>
          <option value="high liquidity">High Liquidity (Easy to sell)</option>
          <option value="moderate liquidity">Moderate Liquidity</option>
          <option value="low liquidity">Low Liquidity (Harder to sell)</option>
        </select>
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">💧 How easily do you want to be able to convert your assets into cash?</span>
    </div>

    {/* Optional: Client Preference Overview */}
    <div className="mt-6 p-4 bg-teal-50 border-l-4 border-teal-400 text-teal-800">
      <p className="font-bold">Preference Overview:</p>
      <p className="text-sm">Investment Preference: {formData.investmentPreference || 'Not specified'}</p>
      <p className="text-sm">Time Horizon: {formData.investmentTimeHorizon || 'Not specified'}</p>
      <p className="text-sm">Liquidity Preference: {formData.liquidityPreference || 'Not specified'}</p>
    </div>
  </div>
);

export default Step5;
