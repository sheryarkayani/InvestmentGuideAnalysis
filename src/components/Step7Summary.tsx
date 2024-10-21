import React, { useEffect, useState } from 'react';
import { loadInventoryData, recommendUnit, getFallbackRecommendation } from './recommendationEngine'; // Import the recommendation logic
import PrintSummary from './PrintSummary'; // Import the PrintSummary component

interface Step7SummaryProps {
  formData: any;
  generatePDF: () => void;
}

const Step7Summary: React.FC<Step7SummaryProps> = ({ formData, generatePDF }) => {
  const [inventoryData, setInventoryData] = useState<any[]>([]);
  const [recommendedUnit, setRecommendedUnit] = useState<any>(null);
  const [recommendationReason, setRecommendationReason] = useState(''); // Reason for recommendation
  const [isLoading, setIsLoading] = useState(true); // Loader state

  // Load the Excel data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const excelFilePath = '/assets/sheet/inv.xlsx'; // Path to your Excel file
        const data = await loadInventoryData(excelFilePath);
        setInventoryData(data as any[]);
      } catch (error) {
        console.error('Error loading Excel data:', error);
        // Use fallback recommendation if data loading fails
        const { recommendedUnit, recommendationReason } = getFallbackRecommendation();
        setRecommendedUnit(recommendedUnit);
        setRecommendationReason(recommendationReason);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Run recommendation logic after data is loaded
  useEffect(() => {
    if (!isLoading) {
      let recommendation;
      if (inventoryData.length > 0) {
        recommendation = recommendUnit(inventoryData, formData);
      } else {
        recommendation = getFallbackRecommendation();
      }
      setRecommendedUnit(recommendation.recommendedUnit);
      setRecommendationReason(recommendation.recommendationReason);
    }
  }, [isLoading, inventoryData, formData]);

  return (
    <div className="summary-container">
      <h2 className="summary-title">Step 7: Investment Summary</h2>
      {isLoading ? (
        <p>Loading investment recommendations...</p>
      ) : (
        <div className="recommendation">
          <h3>Recommended Investment: {recommendedUnit.name}</h3>
          <p>{recommendationReason}</p>
        </div>
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
