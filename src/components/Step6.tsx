import React from 'react';
import { Lightbulb, CheckCircle } from 'lucide-react'; // Import icons for added visuals

const Step6: React.FC = () => (
  <div className="space-y-8 bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    {/* Form Title */}
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      🚀 Product & Recommendation
    </h2>

    {/* Informational Text */}
    <p className="text-gray-600 text-lg flex items-center">
      <Lightbulb className="text-yellow-400 mr-2" /> Based on your inputs, we will assess available investment products and provide tailored recommendations to meet your goals.
    </p>
    <p className="text-gray-600 text-lg flex items-center">
      <CheckCircle className="text-blue-400 mr-2" /> This may include suggestions for better returns or increased security compared to your current real estate holdings.
    </p>

    {/* Recommendation Box */}
    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <p className="font-bold text-xl mb-2">📊 Recommendations will be generated here</p>
      <p className="text-gray-600">Our team will analyze your responses and provide personalized investment recommendations.</p>
    </div>
  </div>
);

export default Step6;
