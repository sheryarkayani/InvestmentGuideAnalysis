import React, { useEffect, useState } from 'react';
import { loadInventoryData, recommendUnit, getFallbackRecommendation } from './recommendationEngine'; // Import the recommendation logic
import PrintSummary, { Recommendation, PrintSummaryProps } from './PrintSummary'; // Import the PrintSummary component

interface Step7SummaryProps {
  formData: any;
  generatePDF: () => void;
}

const Step7Summary: React.FC<Step7SummaryProps> = ({ formData, generatePDF }) => {
  const [inventoryData, setInventoryData] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
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
        setRecommendations([getFallbackRecommendation() as Recommendation]);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Run recommendation logic after data is loaded
  useEffect(() => {
    if (!isLoading) {
      const recommendationResults = recommendUnit(inventoryData, formData) as Recommendation[];
      setRecommendations(recommendationResults);
    }
  }, [isLoading, inventoryData, formData]);

  const printSummaryProps: PrintSummaryProps = {
    formData,
    recommendations,
  };

  return (
    <div className="summary-container">
      <h2 className="summary-title">Step 7: Investment Summary</h2>
      {isLoading ? (
        <p>Loading investment recommendations...</p>
      ) : (
        <div className="recommendations">
          {recommendations.map((rec, index) => (
            <div key={index} className="recommendation">
              <h3>Recommended Investment {index + 1}: {rec.recommendedUnit.name}</h3>
              <p>{rec.recommendationReason}</p>
            </div>
          ))}
        </div>
      )}

      <PrintSummary {...printSummaryProps} />

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
