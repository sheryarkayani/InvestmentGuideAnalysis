// recommendationEngine.tsx
import * as XLSX from 'xlsx';

// Function to load the Excel inventory data
export const loadInventoryData = async (excelFilePath: string) => {
  const response = await fetch(excelFilePath);
  const data = await response.arrayBuffer();
  const workbook = XLSX.read(data, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: '' });
  return jsonData;
};

// Function to recommend a unit based on client data and inventory
export const recommendUnit = (inventoryData: any[], formData: any) => {
  if (!inventoryData.length) return { recommendedUnit: null, recommendationReason: '' };

  // Extract client data from formData
  const {
    investmentPreference,
    downPaymentCapability,
    liquidityPreference,
  } = formData;

  // Calculate disposable income and filter units based on affordability
  const affordableUnits = inventoryData.filter((unit: any) => {
    const downPayment = unit['Down Payment 25%'];
    return downPayment <= downPaymentCapability;
  });

  // Filter based on investment preferences
  const preferredUnits = affordableUnits.filter((unit: any) => {
    if (investmentPreference === 'Rental Income') {
      return unit.Type === 'Commercial Shop'; // Assume commercial units are better for rental income
    } else if (investmentPreference === 'Long-term Appreciation') {
      return unit.Type === 'Residential'; // Assume residential units are better for appreciation
    }
    return true;
  });

  // Filter based on liquidity preferences
  const filteredUnits = preferredUnits.filter((unit: any) => {
    if (liquidityPreference === 'High') {
      return unit.Status === 'Not Sold'; // High liquidity means not sold and in demand
    }
    return true;
  });

  // Select the first matching unit and create a recommendation reason
  const selectedUnit = filteredUnits[0];
  let recommendationReason = '';
  if (selectedUnit) {
    recommendationReason = `Recommended unit is ${selectedUnit.No} located at ${selectedUnit.Project} on ${selectedUnit.Floor} floor. `;
    if (investmentPreference === 'Rental Income') {
      recommendationReason += 'This unit is recommended for rental income due to its commercial nature and market demand.';
    } else if (investmentPreference === 'Long-term Appreciation') {
      recommendationReason += 'This unit is ideal for long-term appreciation due to its residential type and location.';
    }
  }

  return { recommendedUnit: selectedUnit, recommendationReason };
};
