import { FC } from 'react';
import jsPDF from 'jspdf';
import { PrintSummaryProps } from './type';

const PrintSummary: FC<PrintSummaryProps> = ({ formData, recommendedUnit, recommendationReason }) => {
  const handlePrint = () => {
    const doc = new jsPDF();
    let yOffset = 20; // Starting Y position
    const lineHeight = 10; // Height between lines
    const margin = 10; // Left margin
    
    // Helper function to add text and increment Y position
    const addLine = (text: string, fontSize: number = 12, isBold: boolean = false) => {
      if (isBold) {
        doc.setFont('helvetica', 'bold');
      } else {
        
        doc.setFont('helvetica', 'normal');
      }
      doc.setFontSize(fontSize);
      doc.text(text, margin, yOffset);
      yOffset += lineHeight;
    };

    // Title
    addLine('Investment Guide Summary', 18, true);
    yOffset += 10; // Add extra space after title

    // Step 1: KYC
    addLine('1. Know Your Client (KYC)', 14, true);
    addLine(`Name: ${formData.name}`);
    addLine(`Residential Status: ${formData.residentialStatus}`);
    yOffset += 5;

    // Step 2: Budget Planner
    addLine('2. Budget Analysis', 14, true);
    addLine(`Monthly Income: $${formData.monthlyIncome.toLocaleString()}`);
    addLine(`Monthly Expenses: $${formData.monthlyExpenses.toLocaleString()}`);
    addLine(`Available for Investment: $${(formData.monthlyIncome - formData.monthlyExpenses).toLocaleString()}`);
    if (formData.debts) {
      addLine(`Outstanding Debts/Loans: ${formData.debts}`);
    }
    yOffset += 5;

    // Step 3: Investment Performance Matrix
    addLine('3. Current Investment Portfolio', 14, true);
    addLine(`Number of Properties Owned: ${formData.propertyCount}`);
    addLine(`Current Property Values: ${formData.propertyValues}`);
    addLine(`Historical Returns (2-5 years): ${formData.propertyReturns}`);
    yOffset += 5;

    // Step 4: Investment Analysis
    addLine('4. Risk Analysis & Investment Strategy', 14, true);
    addLine(`Security Level: ${formData.investmentSecurity}`);
    addLine(`Expected Return: ${formData.expectedReturn}`);
    addLine(`Liquidity Preference: ${formData.liquidationExpectation}`);
    yOffset += 5;

    // Step 5: Client Preferences
    addLine('5. Investment Preferences', 14, true);
    addLine(`Investment Type Preference: ${formData.investmentPreference}`);
    addLine(`Investment Time Horizon: ${formData.investmentTimeHorizon}`);
    addLine(`Liquidity Requirement: ${formData.liquidityPreference}`);
    yOffset += 5;

    // Recommended Unit Section
    if (recommendedUnit) {
      addLine('Recommended Property', 14, true);
      addLine(`Unit Number: ${recommendedUnit.No}`);
      addLine(`Project: ${recommendedUnit.Project}`);
      addLine(`Floor: ${recommendedUnit.Floor}`);
      addLine(`Type: ${recommendedUnit.Type}`);
      addLine(`Down Payment Required: $${recommendedUnit['Down Payment 25%'].toLocaleString()}`);
      yOffset += 5;
    }

    // Recommendation Reasoning
    if (recommendationReason) {
      addLine('Recommendation Rationale', 14, true);
      // Split long recommendation text into multiple lines if needed
      const words = recommendationReason.split(' ');
      let line = '';
      words.forEach((word: string) => {
        if ((line + word).length > 50) {
          addLine(line);
          line = word + ' ';
        } else {
          line += word + ' ';
        }
      });
      if (line) {
        addLine(line);
      }
    }

    // Add footer
    // const pageCount = doc.internal.getNumberOfPages();
    doc.setFontSize(10);
    doc.text(
      `Generated on ${new Date().toLocaleDateString()}`,
      margin,
      doc.internal.pageSize.height - 10
    );

    // Save the PDF
    doc.save('Investment_Guide_Summary.pdf');
  };

  return (
    <button
      onClick={handlePrint}
      className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 
                 transition-colors duration-200 ease-in-out mr-2 text-base 
                 cursor-pointer shadow-md hover:shadow-lg font-medium"
      aria-label="Print investment summary"
    >
      Print Summary
    </button>
  );
};

export default PrintSummary;
