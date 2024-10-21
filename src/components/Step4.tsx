import React from 'react';
import { Shield, TrendingUp, Clock } from 'lucide-react'; // Import some icons for the fields

interface Step4Props {
  formData: any;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Step4: React.FC<Step4Props> = ({ formData, handleInputChange }) => (
  <div className="space-y-8 bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    {/* Form Title */}
    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
      🔍 Investment Analysis (SRA)
    </h2>

    {/* How secure do you feel about your investments */}
    <div className="relative">
      <label htmlFor="investmentSecurity" className="block text-sm font-semibold text-gray-600">
        How secure do you feel about your current investments?
      </label>
      <div className="flex items-center mt-2">
        <Shield className="text-gray-400 mr-2" />
        <select
          id="investmentSecurity"
          name="investmentSecurity"
          value={formData.investmentSecurity}
          onChange={handleInputChange}
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        >
          <option value="">Select...</option>
          <option value="very secure">Very Secure</option>
          <option value="somewhat secure">Somewhat Secure</option>
          <option value="neutral">Neutral</option>
          <option value="somewhat insecure">Somewhat Insecure</option>
          <option value="very insecure">Very Insecure</option>
        </select>
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">🛡️ Please assess how safe you feel with your investments.</span>
    </div>

    {/* Expected Return in Next 2-4 Years */}
    <div className="relative">
      <label htmlFor="expectedReturn" className="block text-sm font-semibold text-gray-600">
        Expected Return in Next 2-4 Years
      </label>
      <div className="flex items-center mt-2">
        <TrendingUp className="text-gray-400 mr-2" />
        <input
          type="text"
          id="expectedReturn"
          name="expectedReturn"
          value={formData.expectedReturn}
          onChange={handleInputChange}
          placeholder="Enter expected return"
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">💰 Estimate the returns from your investments over the next few years.</span>
    </div>

    {/* How quickly do you expect to liquidate assets */}
    <div className="relative">
      <label htmlFor="liquidationExpectation" className="block text-sm font-semibold text-gray-600">
        How quickly do you expect to liquidate these assets if needed?
      </label>
      <div className="flex items-center mt-2">
        <Clock className="text-gray-400 mr-2" />
        <select
          id="liquidationExpectation"
          name="liquidationExpectation"
          value={formData.liquidationExpectation}
          onChange={handleInputChange}
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        >
          <option value="">Select...</option>
          <option value="very quickly">Very Quickly (Within a month)</option>
          <option value="quickly">Quickly (1-3 months)</option>
          <option value="moderate">Moderate (3-6 months)</option>
          <option value="slowly">Slowly (6-12 months)</option>
          <option value="very slowly">Very Slowly (Over a year)</option>
        </select>
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">⏳ Indicate how fast you can liquidate your assets if required.</span>
    </div>

    {/* Optional: Investment Overview */}
    <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-400 text-indigo-800">
      <p className="font-bold">Investment Overview:</p>
      <p className="text-sm">Security Level: {formData.investmentSecurity || 'Not specified'}</p>
      <p className="text-sm">Expected Return: {formData.expectedReturn || 'Not specified'}</p>
      <p className="text-sm">Liquidation Time: {formData.liquidationExpectation || 'Not specified'}</p>
    </div>
  </div>
);

export default Step4;
