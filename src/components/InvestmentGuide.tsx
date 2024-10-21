import React, { useState } from 'react';

import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import jsPDF from 'jspdf';

// Import the step components
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7Summary from './Step7Summary';

// Add this interface definition
interface CustomFormData {
  name: string;
  residentialStatus: string;
  homeValue: string;
  monthlyIncome: string;
  monthlyExpenses: string;
  debts: string;
  propertyCount: string;
  propertyValues: string;
  propertyReturns: string;
  propertyExpectations: string;
  investmentSecurity: string;
  expectedReturn: string;
  liquidationExpectation: string;
  investmentPreference: string;
  investmentTimeHorizon: string;
  liquidityPreference: string;
}

export default function InvestmentGuideForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CustomFormData>({
    name: '',
    residentialStatus: '',
    homeValue: '',
    monthlyIncome: '',
    monthlyExpenses: '',
    debts: '',
    propertyCount: '',
    propertyValues: '',
    propertyReturns: '',
    propertyExpectations: '',
    investmentSecurity: '',
    expectedReturn: '',
    liquidationExpectation: '',
    investmentPreference: '',
    investmentTimeHorizon: '',
    liquidityPreference: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: CustomFormData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 7));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(7);
    alert('Form submitted successfully! You can now print the form.');
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Investment Guide Form', 10, 10);

    Object.entries(formData).forEach(([key, value], index) => {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').toUpperCase();
      doc.text(`${formattedKey}: ${value}`, 10, 20 + index * 10);
    });

    doc.save('Investment_Guide_Form.pdf');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <Step2 formData={formData} handleInputChange={handleInputChange} />;
      case 3:
        return <Step3 formData={formData} handleInputChange={handleInputChange} />;
      case 4:
        return <Step4 formData={formData} handleInputChange={handleInputChange} />;
      case 5:
        return <Step5 formData={formData} handleInputChange={handleInputChange} />;
      case 6:
        return <Step6 />;
      case 7:
        return <Step7Summary formData={formData} generatePDF={generatePDF} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Investment Guide Form</h1>
        </div>

        <div className="p-6">
        <div className="mb-8">
  <div className="flex items-center">
    {[1, 2, 3, 4, 5, 6, 7].map((s) => (
      <React.Fragment key={s}>
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all duration-500 ease-in-out ${
            step >= s
              ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg transform scale-110'
              : 'bg-gray-300 text-gray-600'
          }`}
        >
          {step > s ? (
            <Check className="w-6 h-6 animate-check" />
          ) : (
            s
          )}
        </div>
        {s < 7 && (
          <div
            className={`h-2 w-full transition-all duration-500 ease-in-out ${
              step > s ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gray-300'
            }`}
          />
        )}
      </React.Fragment>
    ))}
  </div>
</div>


          <form onSubmit={handleSubmit}>
            {renderStep()}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Previous
                </button>
              )}
              {step < 7 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Next
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                  <Check className="ml-2 h-5 w-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
