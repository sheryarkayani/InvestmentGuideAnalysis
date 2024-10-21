// types.ts

export interface FormData {
    // Step 1: KYC
    name: string;
    residentialStatus: string;
    
    // Step 2: Budget Planner
    monthlyIncome: number;
    monthlyExpenses: number;
    debts: string;
    
    // Step 3: Investment Performance Matrix
    propertyCount: number;
    propertyValues: string;
    propertyReturns: string;
    propertyExpectations: string;
    
    // Step 4: Investment Analysis
    investmentSecurity: string;
    expectedReturn: string;
    liquidationExpectation: string;
    
    // Step 5: Client Preferences
    investmentPreference: string;
    investmentTimeHorizon: string;
    liquidityPreference: string;
    downPaymentCapability: number;
  }
  
  export interface Unit {
    No: string;
    Project: string;
    Floor: string;
    Type: string;
    Status: string;
    'Down Payment 25%': number;
  }
  
  export interface PrintSummaryProps {
    formData: FormData;
    recommendedUnit: Unit | null;
    recommendationReason: string;
  }
  
  export interface StepProps {
    formData: FormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  }
  
  export interface Step7SummaryProps {
    formData: FormData;
    generatePDF: () => void;
  }