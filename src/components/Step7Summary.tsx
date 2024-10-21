import React, { useEffect, useState } from 'react';
import { loadInventoryData, recommendUnit } from './recommendationEngine'; // Import the recommendation logic
import PrintSummary from './PrintSummary'; // Import the PrintSummary component

interface Step7SummaryProps {
  formData: any;
  generatePDF: () => void;
}

const Step7Summary: React.FC<Step7SummaryProps> = ({ formData, generatePDF }) => {
  const [inventoryData, setInventoryData] = useState<any[]>([]);
  const [recommendedUnit, setRecommendedUnit] = useState(null);
  const [recommendationReason, setRecommendationReason] = useState(''); // Reason for recommendation
  const [isLoading, setIsLoading] = useState(true); // Loader state

  // Load the Excel data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const excelFilePath = '/assets/sheet/inv.xlsx'; // Path to your Excel file
        const data = await loadInventoryData(excelFilePath);
        setInventoryData(data as any[]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading Excel data:', error);
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Run recommendation logic after data is loaded
  useEffect(() => {
    if (!isLoading && inventoryData.length > 0) {
      const { recommendedUnit, recommendationReason } = recommendUnit(inventoryData, formData);
      setRecommendedUnit(recommendedUnit);
      setRecommendationReason(recommendationReason);
    }
  }, [isLoading, inventoryData]);

  return (
    <div className="summary-container">
      <h2 className="summary-title">Step 7: Investment Summary</h2>
      {isLoading ? (
        <p>Loading inventory data...</p>
      ) : recommendedUnit ? (
        <div className="recommendation">
          {recommendedUnit && (
            <h3>Recommended Unit: {(recommendedUnit as any).No}</h3>
          )}
          <p>{recommendationReason}</p>
        </div>
      ) : (
        <p>No suitable unit found based on your preferences.</p>
      )}

      {/* Render PrintSummary Component */}
      <PrintSummary
        formData={formData}
        recommendedUnit={recommendedUnit}
        recommendationReason={recommendationReason}
      />

      {/* Submit button */}
      <button
        onClick={generatePDF}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Step7Summary;
