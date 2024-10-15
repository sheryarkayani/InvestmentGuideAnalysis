// PrintSummary.tsx
import React from 'react';
import jsPDF from 'jspdf';

const PrintSummary = ({ formData, recommendedUnit, recommendationReason }) => {
  
  // Function to generate the PDF
  const handlePrint = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text('Investment Guide Summary', 10, 10);

    // Add the answers from each step to the PDF
    let yOffset = 20; // Starting Y offset for content

    // Step 1: KYC
    doc.setFontSize(14);
    doc.text('Step 1: KYC (Know Your Client)', 10, yOffset);
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 10, yOffset + 10);
    doc.text(`Residential Status: ${formData.residentialStatus}`, 10, yOffset + 20);

    // Step 2: Budget Planner
    yOffset += 30;
    doc.setFontSize(14);
    doc.text('Step 2: Budget Planner', 10, yOffset);
    doc.setFontSize(12);
    doc.text(`Monthly Income: ${formData.monthlyIncome}`, 10, yOffset + 10);
    doc.text(`Monthly Expenses: ${formData.monthlyExpenses}`, 10, yOffset + 20);
    doc.text(`Debts and Loans: ${formData.debtsLoans}`, 10, yOffset + 30);

    // Step 3: Investment Performance Matrix
    yOffset += 40;
    doc.setFontSize(14);
    doc.text('Step 3: Investment Performance Matrix', 10, yOffset);
    doc.setFontSize(12);
    doc.text(`Number of Properties Owned: ${formData.propertyCount}`, 10, yOffset + 10);
    doc.text(`Current Property Values: ${formData.currentPropertyValues}`, 10, yOffset + 20);
    doc.text(`Returns from Properties (Last 2-5 Years): ${formData.returnsFromProperties}`, 10, yOffset + 30);

    // Step 4: Investment Analysis (SRA)
    yOffset += 40;
    doc.setFontSize(14);
    doc.text('Step 4: Investment Analysis (SRA)', 10, yOffset);
    doc.setFontSize(12);
    doc.text(`Security Level: ${formData.securityLevel}`, 10, yOffset + 10);
    doc.text(`Expected Return (Next 2-4 Years): ${formData.expectedReturn}`, 10, yOffset + 20);

    // Step 5: Client Preferences
    yOffset += 40;
    doc.setFontSize(14);
    doc.text('Step 5: Client Preferences', 10, yOffset);
    doc.setFontSize(12);
    doc.text(`Investment Preference: ${formData.investmentPreference}`, 10, yOffset + 10);
    doc.text(`Investment Time Horizon: ${formData.investmentTimeHorizon}`, 10, yOffset + 20);
    doc.text(`Liquidity Preference: ${formData.liquidityPreference}`, 10, yOffset + 30);

    // Add more steps as needed...

    // Finally, add the recommended unit
    if (recommendedUnit) {
      yOffset += 40;
      doc.setFontSize(14);
      doc.text('Recommended Unit', 10, yOffset);
      doc.setFontSize(12);
      doc.text(`Unit No: ${recommendedUnit.No}`, 10, yOffset + 10);
      doc.text(`Project: ${recommendedUnit.Project}`, 10, yOffset + 20);
      doc.text(`Floor: ${recommendedUnit.Floor}`, 10, yOffset + 30);
      doc.text(`Reason: ${recommendationReason}`, 10, yOffset + 40);
    }

    // Save the PDF
    doc.save('Investment_Guide_Summary.pdf');
  };

  return (
    <button
      onClick={handlePrint}
      style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginRight: '10px',
      }}
    >
      Print Summary
    </button>
  );
};

export default PrintSummary;
