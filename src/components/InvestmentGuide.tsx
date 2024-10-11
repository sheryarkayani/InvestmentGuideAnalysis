import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, Check } from 'lucide-react'
import jsPDF from 'jspdf'

// Modular components for each step
const Step1 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">KYC (Know Your Client)</h2>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
    <div>
      <label htmlFor="residentialStatus" className="block text-sm font-medium text-gray-700">Residential Status</label>
      <select
        id="residentialStatus"
        name="residentialStatus"
        value={formData.residentialStatus}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Select...</option>
        <option value="own">Own</option>
        <option value="rent">Rent</option>
      </select>
    </div>
    {formData.residentialStatus === 'own' && (
      <div>
        <label htmlFor="homeValue" className="block text-sm font-medium text-gray-700">Home Value</label>
        <input
          type="number"
          id="homeValue"
          name="homeValue"
          value={formData.homeValue}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    )}
  </div>
)

const Step2 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Budget Planner</h2>
    <div>
      <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700">Monthly Income</label>
      <input
        type="number"
        id="monthlyIncome"
        name="monthlyIncome"
        value={formData.monthlyIncome}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
    <div>
      <label htmlFor="monthlyExpenses" className="block text-sm font-medium text-gray-700">Monthly Expenses</label>
      <input
        type="number"
        id="monthlyExpenses"
        name="monthlyExpenses"
        value={formData.monthlyExpenses}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
    <div>
      <label htmlFor="debts" className="block text-sm font-medium text-gray-700">Debts and Loans</label>
      <textarea
        id="debts"
        name="debts"
        value={formData.debts}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        rows={3}
      />
    </div>
  </div>
)

const Step3 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Investment Performance Matrix</h2>
    <div>
      <label htmlFor="propertyCount" className="block text-sm font-medium text-gray-700">Number of Properties Owned</label>
      <input
        type="number"
        id="propertyCount"
        name="propertyCount"
        value={formData.propertyCount}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
    <div>
      <label htmlFor="propertyValues" className="block text-sm font-medium text-gray-700">Current Property Values</label>
      <textarea
        id="propertyValues"
        name="propertyValues"
        value={formData.propertyValues}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        rows={3}
      />
    </div>
    <div>
      <label htmlFor="propertyReturns" className="block text-sm font-medium text-gray-700">Returns from Properties (Last 2-5 years)</label>
      <textarea
        id="propertyReturns"
        name="propertyReturns"
        value={formData.propertyReturns}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        rows={3}
      />
    </div>
    <div>
      <label htmlFor="propertyExpectations" className="block text-sm font-medium text-gray-700">Expectations for Next 2-5 Years</label>
      <textarea
        id="propertyExpectations"
        name="propertyExpectations"
        value={formData.propertyExpectations}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        rows={3}
      />
    </div>
  </div>
)

// Step 4 Component
const Step4 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Investment Analysis (SRA)</h2>
    <div>
      <label htmlFor="investmentSecurity" className="block text-sm font-medium text-gray-700">How secure do you feel about your current investments?</label>
      <select
        id="investmentSecurity"
        name="investmentSecurity"
        value={formData.investmentSecurity}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Select...</option>
        <option value="very secure">Very Secure</option>
        <option value="somewhat secure">Somewhat Secure</option>
        <option value="neutral">Neutral</option>
        <option value="somewhat insecure">Somewhat Insecure</option>
        <option value="very insecure">Very Insecure</option>
      </select>
    </div>
    <div>
      <label htmlFor="expectedReturn" className="block text-sm font-medium text-gray-700">Expected Return in Next 2-4 Years</label>
      <input
        type="text"
        id="expectedReturn"
        name="expectedReturn"
        value={formData.expectedReturn}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
    <div>
      <label htmlFor="liquidationExpectation" className="block text-sm font-medium text-gray-700">How quickly do you expect to liquidate these assets if needed?</label>
      <select
        id="liquidationExpectation"
        name="liquidationExpectation"
        value={formData.liquidationExpectation}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Select...</option>
        <option value="very quickly">Very Quickly (Within a month)</option>
        <option value="quickly">Quickly (1-3 months)</option>
        <option value="moderate">Moderate (3-6 months)</option>
        <option value="slowly">Slowly (6-12 months)</option>
        <option value="very slowly">Very Slowly (Over a year)</option>
      </select>
    </div>
  </div>
)

// Step 5 Component
const Step5 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Client Preferences</h2>
    <div>
      <label htmlFor="investmentPreference" className="block text-sm font-medium text-gray-700">Investment Preference</label>
      <select
        id="investmentPreference"
        name="investmentPreference"
        value={formData.investmentPreference}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Select...</option>
        <option value="regular income">Regular Monthly Rental Income</option>
        <option value="long-term appreciation">Long-term Appreciation</option>
      </select>
    </div>
    <div>
      <label htmlFor="investmentTimeHorizon" className="block text-sm font-medium text-gray-700">Investment Time Horizon</label>
      <select
        id="investmentTimeHorizon"
        name="investmentTimeHorizon"
        value={formData.investmentTimeHorizon}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Select...</option>
        <option value="short-term">Short-term (0-2 years)</option>
        <option value="medium-term">Medium-term (2-5 years)</option>
        <option value="long-term">Long-term (5+ years)</option>
      </select>
    </div>
    <div>
      <label htmlFor="liquidityPreference" className="block text-sm font-medium text-gray-700">Liquidity Preference</label>
      <select
        id="liquidityPreference"
        name="liquidityPreference"
        value={formData.liquidityPreference}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Select...</option>
        <option value="high liquidity">High Liquidity (Easy to sell)</option>
        <option value="moderate liquidity">Moderate Liquidity</option>
        <option value="low liquidity">Low Liquidity (Harder to sell)</option>
      </select>
    </div>
  </div>
)

// Step 6 Component
const Step6 = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Product and Recommendation</h2>
    <p className="text-gray-600">Based on your inputs, we will assess available investment products and provide tailored recommendations to meet your goals.</p>
    <p className="text-gray-600">This may include suggestions for better returns or increased security compared to your current real estate holdings.</p>
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
      <p className="font-bold">Recommendations will be generated here</p>
      <p>Our team will analyze your responses and provide personalized investment recommendations.</p>
    </div>
  </div>
)

const Step7Summary = ({ formData, generatePDF }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Summary</h2>
    <p className="text-gray-600">Please review your inputs before submitting:</p>
    {Object.entries(formData).map(([key, value]) => (
      <div key={key} className="bg-gray-100 p-2 rounded">
        <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}: </span>
        <span>{value}</span>
      </div>
    ))}
    <button
      type="button"
      onClick={generatePDF}
      className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      Download PDF
    </button>
  </div>
)

export default function InvestmentGuideForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
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
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const nextStep = () => setStep(prevStep => Math.min(prevStep + 1, 7))
  const prevStep = () => setStep(prevStep => Math.max(prevStep - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(7)
    alert('Form submitted successfully! You can now print the form.')
  }

  const generatePDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text('Investment Guide Form', 10, 10)

    Object.entries(formData).forEach(([key, value], index) => {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').toUpperCase()
      doc.text(`${formattedKey}: ${value}`, 10, 20 + (index * 10))
    })

    doc.save('Investment_Guide_Form.pdf')
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleInputChange={handleInputChange} />
      case 2:
        return <Step2 formData={formData} handleInputChange={handleInputChange} />
      case 3:
        return <Step3 formData={formData} handleInputChange={handleInputChange} />
      case 4:
        return <Step4 formData={formData} handleInputChange={handleInputChange} />
      case 5:
        return <Step5 formData={formData} handleInputChange={handleInputChange} />
      case 6:
        return <Step6 />
      case 7:
        return <Step7Summary formData={formData} generatePDF={generatePDF} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Investment Guide Form</h1>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5, 6, 7].map((s) => (
                <React.Fragment key={s}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= s ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                    {step > s ? <Check className="w-5 h-5" /> : s}
                  </div>
                  {s < 7 && (
                    <div className={`h-1 w-full ${step > s ? 'bg-indigo-600' : 'bg-gray-300'}`} />
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
  )
}
