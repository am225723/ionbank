import React from 'react';
import { motion } from 'framer-motion';
import { Download, Printer, ArrowLeft, Calendar, MapPin, User, Building2, DollarSign, TrendingUp, Shield, FileText, CheckCircle, Clock, FileCheck } from 'lucide-react';
import type { SOPData } from '../types';

interface SOPPreviewProps {
  data: SOPData;
  onBack: () => void;
  onExport: () => void;
}

const SOPPreview: React.FC<SOPPreviewProps> = ({ data, onBack, onExport }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="premium-card mb-8"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="icon-wrapper mr-4">{icon}</div>
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        </div>
        <div className="space-y-4">{children}</div>
      </div>
    </motion.div>
  );

  const InfoCard = ({ label, value, icon }: { label: string; value: string | number; icon?: React.ReactNode }) => (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 rounded-xl border border-slate-200">
      <div className="flex items-center text-slate-600 mb-1">
        {icon && <span className="mr-2">{icon}</span>}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="text-lg font-semibold text-slate-800">{value}</p>
    </div>
  );

  const RiskBadge = ({ rating }: { rating: string }) => {
    const colors = {
      'Low': 'bg-green-100 text-green-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'High': 'bg-orange-100 text-orange-800',
      'Very High': 'bg-red-100 text-red-800',
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[rating as keyof typeof colors] || colors['Medium']}`}>
        {rating} Risk
      </span>
    );
  };

  const DecisionBadge = ({ decision }: { decision: string }) => {
    const colors = {
      'Approved': 'bg-green-100 text-green-800',
      'Denied': 'bg-red-100 text-red-800',
      'Conditional': 'bg-yellow-100 text-yellow-800',
      'Counter Offer': 'bg-blue-100 text-blue-800',
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[decision as keyof typeof colors] || colors['Conditional']}`}>
        {decision}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="floating-card p-8 mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-slate-800">Standard Operating Procedure</h1>
                <p className="text-slate-600">Loan Documentation & Analysis Report</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={onBack}
              className="px-6 py-3 text-slate-700 bg-white border border-slate-300 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Form
            </button>
            <button
              onClick={onExport}
              className="submit-button text-lg px-8 py-4 flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Export PDF
            </button>
            <button
              onClick={() => window.print()}
              className="px-6 py-3 text-slate-700 bg-white border border-slate-300 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 flex items-center"
            >
              <Printer className="w-5 h-5 mr-2" />
              Print
            </button>
          </div>
        </motion.div>

        {/* Document Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Document Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Loan Details</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    <span>Loan #{data.loanInformation.loanNumber}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    <span>{data.loanInformation.borrowerName}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{data.loanInformation.propertyAddress}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <span>{formatCurrency(data.loanInformation.loanAmount)}</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Summary</h2>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Decision:</span>
                    <DecisionBadge decision={data.underwritingDecision.decision} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Risk Level:</span>
                    <RiskBadge rating={data.riskAssessment.riskRating} />
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{formatDate(data.signatures.approvalDate)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Loan Information */}
            <Section title="Loan Information" icon={<Building2 className="w-6 h-6 text-blue-600" />}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InfoCard label="Loan Number" value={data.loanInformation.loanNumber} />
                <InfoCard label="Borrower Name" value={data.loanInformation.borrowerName} />
                <InfoCard label="Property Address" value={data.loanInformation.propertyAddress} />
                <InfoCard label="Loan Amount" value={formatCurrency(data.loanInformation.loanAmount)} />
                <InfoCard label="Loan Type" value={data.loanInformation.loanType} />
              </div>
            </Section>

            {/* Property Information */}
            <Section title="Property Information" icon={<FileCheck className="w-6 h-6 text-green-600" />}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InfoCard label="Property Type" value={data.propertyInformation.propertyType} />
                <InfoCard label="Estimated Value" value={formatCurrency(data.propertyInformation.estimatedValue)} />
                <InfoCard label="Purchase Date" value={formatDate(data.propertyInformation.purchaseDate)} />
                <InfoCard label="Square Footage" value={`${data.propertyInformation.squareFootage} sq ft`} />
                <InfoCard label="Bedrooms" value={data.propertyInformation.bedrooms} />
                <InfoCard label="Bathrooms" value={data.propertyInformation.bathrooms} />
                <InfoCard label="Year Built" value={data.propertyInformation.yearBuilt} />
              </div>
            </Section>

            {/* Market Analysis */}
            <Section title="Market Analysis" icon={<TrendingUp className="w-6 h-6 text-purple-600" />}>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Market Trends</h3>
                  <p className="text-slate-600 leading-relaxed">{data.marketAnalysis.marketTrends}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Neighborhood Analysis</h3>
                  <p className="text-slate-600 leading-relaxed">{data.marketAnalysis.neighborhoodAnalysis}</p>
                </div>
              </div>
            </Section>

            {/* Financial Analysis */}
            <Section title="Financial Analysis" icon={<DollarSign className="w-6 h-6 text-emerald-600" />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Income Verification</h3>
                  <p className="text-slate-600">{data.financialAnalysis.incomeVerification}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Credit Analysis</h3>
                  <p className="text-slate-600">{data.financialAnalysis.creditAnalysis}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Debt-to-Income Ratio</h3>
                  <p className="text-2xl font-bold text-blue-600">{data.financialAnalysis.debtToIncomeRatio}%</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Cash Flow Analysis</h3>
                  <p className="text-slate-600">{data.financialAnalysis.cashFlowAnalysis}</p>
                </div>
              </div>
            </Section>

            {/* Risk Assessment */}
            <Section title="Risk Assessment" icon={<Shield className="w-6 h-6 text-orange-600" />}>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="font-semibold text-slate-800">Overall Risk Rating</span>
                  <RiskBadge rating={data.riskAssessment.riskRating} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Risk Factors</h3>
                  <p className="text-slate-600">{data.riskAssessment.riskFactors}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Mitigation Strategies</h3>
                  <p className="text-slate-600">{data.riskAssessment.mitigationStrategies}</p>
                </div>
              </div>
            </Section>

            {/* Underwriting Decision */}
            <Section title="Underwriting Decision" icon={<CheckCircle className="w-6 h-6 text-blue-600" />}>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="font-semibold text-slate-800">Final Decision</span>
                  <DecisionBadge decision={data.underwritingDecision.decision} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Decision Rationale</h3>
                  <p className="text-slate-600 leading-relaxed">{data.underwritingDecision.rationale}</p>
                </div>
              </div>
            </Section>

            {/* Loan Terms */}
            <Section title="Loan Terms" icon={<DollarSign className="w-6 h-6 text-green-600" />}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InfoCard label="Interest Rate" value={`${data.loanTerms.interestRate}%`} />
                <InfoCard label="Loan Term" value={`${data.loanTerms.loanTerm} months`} />
                <InfoCard label="Payment Schedule" value={data.loanTerms.paymentSchedule} />
              </div>
            </Section>

            {/* Approval Conditions */}
            <Section title="Approval Conditions" icon={<Clock className="w-6 h-6 text-purple-600" />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Pre-Closing Conditions</h3>
                  <p className="text-slate-600">{data.approvalConditions.preClosingConditions}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Post-Closing Conditions</h3>
                  <p className="text-slate-600">{data.approvalConditions.postClosingConditions}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Monitoring Requirements</h3>
                  <p className="text-slate-600">{data.approvalConditions.monitoringRequirements}</p>
                </div>
              </div>
            </Section>

            {/* Signatures */}
            <Section title="Signatures & Approvals" icon={<User className="w-6 h-6 text-indigo-600" />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Underwriter</h3>
                  <p className="text-slate-600 mb-1">{data.signatures.underwriterName}</p>
                  <p className="text-slate-600 mb-1">Signature: {data.signatures.underwriterSignature}</p>
                  <p className="text-slate-600">Date: {formatDate(data.signatures.approvalDate)}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Manager</h3>
                  <p className="text-slate-600 mb-1">{data.signatures.managerName}</p>
                  <p className="text-slate-600">Signature: {data.signatures.managerSignature}</p>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <div className="text-center text-slate-500 text-sm mt-8 pt-8 border-t border-slate-200">
              <p>Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
              <p>Standard Operating Procedure Document - Confidential</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOPPreview;