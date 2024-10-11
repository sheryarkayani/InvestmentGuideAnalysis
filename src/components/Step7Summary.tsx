import React, { useEffect, useState } from 'react';
import { FileText, Download } from 'lucide-react';

const Step7Summary = ({ formData, generatePDF }) => {
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const [recommendedUnit, setRecommendedUnit] = useState(null);

  // Function to hardcode the specific unit details
  const hardcodeSpecificUnit = () => {
    // Hardcoded unit details
    const specificUnit = {
      Project: 'Milton',
      No: '301',
      'Unit Price': '4,500,000',
      Type: 'hotel suite',
      'Down Payment 25%': '1,500,000',
    };

    setRecommendedUnit(specificUnit); // Set the hardcoded unit as the recommendation
    setIsLoading(false); // Stop loading once the hardcoded unit is set
  };

  // Use effect to set the hardcoded unit when the component mounts
  useEffect(() => {
    hardcodeSpecificUnit(); // Set hardcoded unit on mount
  }, []);

  // Loader component
  const LoaderComponent = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-400 border-solid"></div>
      <p className="ml-4 text-2xl font-bold text-blue-400">Loading...</p>
    </div>
  );

  return (
    <div className="space-y-8 bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {isLoading ? (
        <LoaderComponent /> // Display the loader while loading
      ) : (
        <>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            📋 Summary of Your Inputs
          </h2>

          <p className="text-gray-600 text-lg">Please review your inputs before submitting:</p>

          {/* Summary Display */}
          <div className="space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div
                key={key}
                className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-400 text-purple-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg capitalize">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                  <FileText className="text-purple-400" />
                </div>
                <p className="text-gray-700 mt-1">{value || 'Not provided'}</p>
              </div>
            ))}
          </div>

          {/* Hardcoded Product Recommendation */}
          {recommendedUnit ? (
            <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-blue-100 border-l-4 border-green-400 text-green-800 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">🏢 Recommended Unit</h3>
              <p className="text-lg">Project: {recommendedUnit.Project}</p>
              <p className="text-lg">Unit Number: {recommendedUnit.No}</p>
              <p className="text-lg">Unit Price: {recommendedUnit['Unit Price']}</p>
              <p className="text-lg">Unit Type: {recommendedUnit.Type}</p>
              <p className="text-lg">Down Payment: {recommendedUnit['Down Payment 25%']}</p>
            </div>
          ) : (
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded-lg">
              <p className="font-bold text-lg">The specific unit is not available.</p>
            </div>
          )}

          {/* Download PDF Button */}
          <button
            type="button"
            onClick={generatePDF}
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-green-400 to-blue-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
          >
            <Download className="w-6 h-6 mr-2" />
            Download PDF
          </button>
        </>
      )}
    </div>
  );
};

export default Step7Summary;
