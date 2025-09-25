export interface SOPData {
  loanInformation: {
    loanNumber: string;
    borrowerName: string;
    propertyAddress: string;
    loanAmount: number;
    loanType: string;
  };
  propertyInformation: {
    propertyType: string;
    estimatedValue: number;
    purchaseDate: string;
    squareFootage: number;
    bedrooms: number;
    bathrooms: number;
    yearBuilt: number;
  };
  marketAnalysis: {
    comparableSales: any[];
    marketTrends: string;
    neighborhoodAnalysis: string;
  };
  financialAnalysis: {
    incomeVerification: string;
    creditAnalysis: string;
    debtToIncomeRatio: number;
    cashFlowAnalysis: string;
  };
  riskAssessment: {
    riskFactors: any[];
    mitigationStrategies: string;
    riskRating: string;
  };
  regulatoryCompliance: {
    documentation: any[];
    complianceChecklist: any[];
    regulatoryNotes: string;
  };
  underwritingDecision: {
    decision: string;
    conditions: any[];
    rationale: string;
  };
  loanTerms: {
    interestRate: number;
    loanTerm: number;
    paymentSchedule: string;
    fees: any[];
  };
  approvalConditions: {
    preClosingConditions: any[];
    postClosingConditions: any[];
    monitoringRequirements: any[];
  };
  signatures: {
    underwriterName: string;
    underwriterSignature: string;
    approvalDate: string;
    managerName: string;
    managerSignature: string;
  };
}