import React from 'react';

export interface Recommendation {
  recommendedUnit: {
    name: string;
    Type: string;
  };
  recommendationReason: string;
}

export interface PrintSummaryProps {
  formData: any;
  recommendations: Recommendation[];
}

const PrintSummary: React.FC<PrintSummaryProps> = ({ formData, recommendations }) => {
  return (
    <div className="print-summary">
      <h2>Investment Summary</h2>
      <div className="client-info">
        <h3>Client Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        {/* Add more client information as needed */}
      </div>
      <div className="recommendations">
        <h3>Recommended Investments</h3>
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation">
            <h4>{rec.recommendedUnit.name}</h4>
            <p>Type: {rec.recommendedUnit.Type}</p>
            <p>Reason: {rec.recommendationReason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintSummary;
