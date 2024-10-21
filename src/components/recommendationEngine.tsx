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
  if (!inventoryData.length) return getFallbackRecommendation();

  // Extract client data from formData
  const {
    investmentPreference,
    downPaymentCapability,
    liquidityPreference,
  } = formData;

  // Filter units based on affordability
  const affordableUnits = inventoryData.filter((unit: any) => {
    const downPayment = unit['Down Payment 25%'];
    return downPayment <= downPaymentCapability;
  });

  // Create recommendations for each property type
  const recommendations = [
    getRecommendation(affordableUnits, 'Hotel Suite', formData),
    getRecommendation(affordableUnits, 'Commercial Shop', formData),
    getRecommendation(affordableUnits, 'Apartment', formData),
  ].filter(rec => rec !== null);

  // If we don't have 3 recommendations, add fallback recommendations
  while (recommendations.length < 3) {
    recommendations.push(getFallbackRecommendation());
  }

  return recommendations;
};

const getRecommendation = (units: any[], propertyType: string, formData: any) => {
  const { investmentPreference, liquidityPreference } = formData;
  
  const filteredUnits = units.filter(unit => unit.Type === propertyType);
  if (filteredUnits.length === 0) return null;

  const selectedUnit = filteredUnits[0];
  let reason = `This ${propertyType.toLowerCase()} is recommended based on your investment profile. `;

  if (investmentPreference === 'Rental Income') {
    reason += `It offers good potential for rental income in the current market. `;
  } else if (investmentPreference === 'Long-term Appreciation') {
    reason += `It has strong potential for long-term value appreciation. `;
  }

  if (liquidityPreference === 'High') {
    reason += `The unit's current status suggests it could be easily liquidated if needed. `;
  }

  return { recommendedUnit: selectedUnit, recommendationReason: reason.trim() };
};

// Update fallback recommendation function
export const getFallbackRecommendation = () => {
  const fallbackRecommendations = [
    {
      name: "Budget Hotel Suite",
      reason: "This budget hotel suite offers a balance of affordability and potential for steady rental income from short-term stays."
    },
    {
      name: "Prime Location Commercial Shop",
      reason: "A commercial shop in a prime location can provide strong rental income and potential for long-term appreciation as the area develops."
    },
    {
      name: "Modern City Apartment",
      reason: "This modern apartment in the city center offers potential for both rental income and long-term appreciation due to its desirable location."
    }
  ];

  const randomIndex = Math.floor(Math.random() * fallbackRecommendations.length);
  const fallbackRecommendation = fallbackRecommendations[randomIndex];

  return {
    recommendedUnit: { name: fallbackRecommendation.name, Type: fallbackRecommendation.name.split(' ')[1] },
    recommendationReason: fallbackRecommendation.reason
  };
};
