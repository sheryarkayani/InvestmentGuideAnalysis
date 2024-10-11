import React from 'react';
import { DollarSign, CreditCard, FileText } from 'lucide-react'; // Icons for inputs

const Step2 = ({ formData, handleInputChange }) => (
  <div className="space-y-8 bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    {/* Form Title */}
    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      💸 Budget Planner
    </h2>

    {/* Monthly Income Input */}
    <div className="relative">
      <label htmlFor="monthlyIncome" className="block text-sm font-semibold text-gray-600">Monthly Income</label>
      <div className="flex items-center mt-2">
        <DollarSign className="text-gray-400 mr-2" />
        <input
          type="number"
          id="monthlyIncome"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={handleInputChange}
          placeholder="Enter your monthly income"
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">📈 Enter the amount you earn every month.</span>
    </div>

    {/* Monthly Expenses Input */}
    <div className="relative">
      <label htmlFor="monthlyExpenses" className="block text-sm font-semibold text-gray-600">Monthly Expenses</label>
      <div className="flex items-center mt-2">
        <CreditCard className="text-gray-400 mr-2" />
        <input
          type="number"
          id="monthlyExpenses"
          name="monthlyExpenses"
          value={formData.monthlyExpenses}
          onChange={handleInputChange}
          placeholder="Enter your monthly expenses"
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">💳 List all of your monthly expenses here.</span>
    </div>

    {/* Debts and Loans Textarea */}
    <div className="relative">
      <label htmlFor="debts" className="block text-sm font-semibold text-gray-600">Debts and Loans</label>
      <div className="flex items-center mt-2">
        <FileText className="text-gray-400 mr-2" />
        <textarea
          id="debts"
          name="debts"
          value={formData.debts}
          onChange={handleInputChange}
          placeholder="List any debts or loans you have"
          className="transition-all duration-300 ease-in-out bg-gray-50 focus:bg-white w-full rounded-lg border border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 px-3 py-2 outline-none hover:shadow-md"
          rows={3}
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 inline-block">📝 Include details of any loans or debts you are managing.</span>
    </div>

    {/* Optional: Budget Summary */}
    <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400 text-purple-800">
      <p className="font-bold">Budget Overview:</p>
      <p className="text-sm">Monthly Income: ${formData.monthlyIncome}</p>
      <p className="text-sm">Monthly Expenses: ${formData.monthlyExpenses}</p>
      {formData.debts && <p className="text-sm">Debts and Loans: {formData.debts}</p>}
    </div>
  </div>
);

export default Step2;
