import React from 'react';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, Building2, DollarSign, Users, FileCheck, TrendingUp, Shield, FileText } from 'lucide-react';
import type { SOPData } from '../types';

interface SOPFormProps {
  onPreview: () => void;
}

const SOPForm: React.FC<SOPFormProps> = ({ onPreview }) => {
  const { register } = useFormContext<SOPData>();

  const FormSection = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="form-section"
    >
      <div className="section-header flex items-center mb-6">
        <div className="icon-wrapper mr-4">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          <p className="text-slate-600">Provide detailed information for this section</p>
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </motion.div>
  );

  const InputField = ({ name, label, type = "text", placeholder, required = false }: any) => (
    <div className="modern-input">
      <label>{label}{required && <span className="text-red-500">*</span>}</label>
      <input
        type={type}
        {...register(name, { required: required ? `${label} is required` : false })}
        placeholder={placeholder}
      />
    </div>
  );

  const SelectField = ({ name, label, options, required = false }: any) => (
    <div className="modern-input">
      <label>{label}{required && <span className="text-red-500">*</span>}</label>
      <select {...register(name, { required: required ? `${label} is required` : false })}>
        <option value="">Select {label}</option>
        {options.map((option: any) => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );

  const TextAreaField = ({ name, label, placeholder, rows = 4, required = false }: any) => (
    <div className="modern-input">
      <label>{label}{required && <span className="text-red-500">*</span>}</label>
      <textarea
        {...register(name, { required: required ? `${label} is required` : false })}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Loan Information */}
      <FormSection title="Loan Information" icon={<Building2 className="w-6 h-6" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField name="loanInformation.loanNumber" label="Loan Number" required />
          <InputField name="loanInformation.borrowerName" label="Borrower Name" required />
          <InputField name="loanInformation.propertyAddress" label="Property Address" required />
          <InputField name="loanInformation.loanAmount" label="Loan Amount" type="number" required />
          <SelectField 
            name="loanInformation.loanType" 
            label="Loan Type" 
            options={['Conventional', 'FHA', 'VA', 'USDA', 'Jumbo']} 
            required 
          />
        </div>
      </FormSection>

      {/* Property Information */}
      <FormSection title="Property Information" icon={<FileCheck className="w-6 h-6" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField 
            name="propertyInformation.propertyType" 
            label="Property Type" 
            options={['Single Family', 'Condo', 'Townhouse', 'Multi-Family', 'Commercial']} 
            required 
          />
          <InputField name="propertyInformation.estimatedValue" label="Estimated Value" type="number" required />
          <InputField name="propertyInformation.purchaseDate" label="Purchase Date" type="date" required />
          <InputField name="propertyInformation.squareFootage" label="Square Footage" type="number" required />
          <InputField name="propertyInformation.bedrooms" label="Bedrooms" type="number" />
          <InputField name="propertyInformation.bathrooms" label="Bathrooms" type="number" />
          <InputField name="propertyInformation.yearBuilt" label="Year Built" type="number" required />
        </div>
      </FormSection>

      {/* Market Analysis */}
      <FormSection title="Market Analysis" icon={<TrendingUp className="w-6 h-6" />}>
        <TextAreaField 
          name="marketAnalysis.marketTrends" 
          label="Market Trends" 
          placeholder="Describe current market conditions and trends..."
          required 
        />
        <TextAreaField 
          name="marketAnalysis.neighborhoodAnalysis" 
          label="Neighborhood Analysis" 
          placeholder="Analyze the neighborhood characteristics..."
          required 
        />
      </FormSection>

      {/* Financial Analysis */}
      <FormSection title="Financial Analysis" icon={<DollarSign className="w-6 h-6" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextAreaField 
            name="financialAnalysis.incomeVerification" 
            label="Income Verification" 
            placeholder="Details about income verification..."
            required 
          />
          <TextAreaField 
            name="financialAnalysis.creditAnalysis" 
            label="Credit Analysis" 
            placeholder="Credit score and history analysis..."
            required 
          />
          <InputField 
            name="financialAnalysis.debtToIncomeRatio" 
            label="Debt-to-Income Ratio" 
            type="number" 
            step="0.01"
            required 
          />
          <TextAreaField 
            name="financialAnalysis.cashFlowAnalysis" 
            label="Cash Flow Analysis" 
            placeholder="Cash flow projections and analysis..."
            required 
          />
        </div>
      </FormSection>

      {/* Risk Assessment */}
      <FormSection title="Risk Assessment" icon={<Shield className="w-6 h-6" />}>
        <TextAreaField 
          name="riskAssessment.riskFactors" 
          label="Risk Factors" 
          placeholder="Identify and describe risk factors..."
          required 
        />
        <TextAreaField 
          name="riskAssessment.mitigationStrategies" 
          label="Mitigation Strategies" 
          placeholder="Describe risk mitigation strategies..."
          required 
        />
        <SelectField 
          name="riskAssessment.riskRating" 
          label="Risk Rating" 
          options={['Low', 'Medium', 'High', 'Very High']} 
          required 
        />
      </FormSection>

      {/* Regulatory Compliance */}
      <FormSection title="Regulatory Compliance" icon={<FileText className="w-6 h-6" />}>
        <TextAreaField 
          name="regulatoryCompliance.regulatoryNotes" 
          label="Regulatory Notes" 
          placeholder="Compliance notes and requirements..."
          required 
        />
      </FormSection>

      {/* Underwriting Decision */}
      <FormSection title="Underwriting Decision" icon={<CheckCircle className="w-6 h-6" />}>
        <SelectField 
          name="underwritingDecision.decision" 
          label="Decision" 
          options={['Approved', 'Denied', 'Conditional', 'Counter Offer']} 
          required 
        />
        <TextAreaField 
          name="underwritingDecision.rationale" 
          label="Decision Rationale" 
          placeholder="Provide detailed rationale for the decision..."
          required 
        />
      </FormSection>

      {/* Loan Terms */}
      <FormSection title="Loan Terms" icon={<DollarSign className="w-6 h-6" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField 
            name="loanTerms.interestRate" 
            label="Interest Rate (%)" 
            type="number" 
            step="0.01"
            required 
          />
          <InputField 
            name="loanTerms.loanTerm" 
            label="Loan Term (months)" 
            type="number" 
            required 
          />
          <SelectField 
            name="loanTerms.paymentSchedule" 
            label="Payment Schedule" 
            options={['Monthly', 'Bi-weekly', 'Weekly']} 
            required 
          />
        </div>
      </FormSection>

      {/* Approval Conditions */}
      <FormSection title="Approval Conditions" icon={<Users className="w-6 h-6" />}>
        <TextAreaField 
          name="approvalConditions.preClosingConditions" 
          label="Pre-Closing Conditions" 
          placeholder="List all pre-closing conditions..."
        />
        <TextAreaField 
          name="approvalConditions.postClosingConditions" 
          label="Post-Closing Conditions" 
          placeholder="List all post-closing conditions..."
        />
        <TextAreaField 
          name="approvalConditions.monitoringRequirements" 
          label="Monitoring Requirements" 
          placeholder="Ongoing monitoring requirements..."
        />
      </FormSection>

      {/* Signatures */}
      <FormSection title="Signatures" icon={<FileText className="w-6 h-6" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField name="signatures.underwriterName" label="Underwriter Name" required />
          <InputField name="signatures.underwriterSignature" label="Underwriter Signature" required />
          <InputField name="signatures.approvalDate" label="Approval Date" type="date" required />
          <InputField name="signatures.managerName" label="Manager Name" required />
          <InputField name="signatures.managerSignature" label="Manager Signature" required />
        </div>
      </FormSection>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-between items-center pt-8"
      >
        <button
          type="button"
          onClick={onPreview}
          className="px-6 py-3 text-slate-700 bg-white border border-slate-300 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
        >
          Preview Document
        </button>
        <button
          type="submit"
          className="submit-button text-lg px-8 py-4"
        >
          Generate SOP Document
          <CheckCircle className="inline-block ml-2 w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};

export default SOPForm;