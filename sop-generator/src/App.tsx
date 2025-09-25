import { useState, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, Sparkles, ArrowRight, CheckCircle, Building2, DollarSign, Users, FileCheck, TrendingUp, Shield } from 'lucide-react';
import SOPForm from './components/SOPForm';
import SOPPreview from './components/SOPPreview';
import AnimatedBackground from './components/AnimatedBackground';
import type { SOPData } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  const methods = useForm<SOPData>({
    defaultValues: {
      loanInformation: {
        loanNumber: '',
        borrowerName: '',
        propertyAddress: '',
        loanAmount: 0,
        loanType: '',
      },
      propertyInformation: {
        propertyType: '',
        estimatedValue: 0,
        purchaseDate: '',
        squareFootage: 0,
        bedrooms: 0,
        bathrooms: 0,
        yearBuilt: 0,
      },
      marketAnalysis: {
        comparableSales: [],
        marketTrends: '',
        neighborhoodAnalysis: '',
      },
      financialAnalysis: {
        incomeVerification: '',
        creditAnalysis: '',
        debtToIncomeRatio: 0,
        cashFlowAnalysis: '',
      },
      riskAssessment: {
        riskFactors: [],
        mitigationStrategies: '',
        riskRating: '',
      },
      regulatoryCompliance: {
        documentation: [],
        complianceChecklist: [],
        regulatoryNotes: '',
      },
      underwritingDecision: {
        decision: '',
        conditions: [],
        rationale: '',
      },
      loanTerms: {
        interestRate: 0,
        loanTerm: 0,
        paymentSchedule: '',
        fees: [],
      },
      approvalConditions: {
        preClosingConditions: [],
        postClosingConditions: [],
        monitoringRequirements: [],
      },
      signatures: {
        underwriterName: '',
        underwriterSignature: '',
        approvalDate: '',
        managerName: '',
        managerSignature: '',
      },
    },
  });

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleStartProcess = () => {
    setCurrentStep(1);
  };

  const steps = [
    { id: 0, name: 'Welcome', icon: Sparkles },
    { id: 1, name: 'Loan Info', icon: Building2 },
    { id: 2, name: 'Property', icon: FileCheck },
    { id: 3, name: 'Market', icon: TrendingUp },
    { id: 4, name: 'Financial', icon: DollarSign },
    { id: 5, name: 'Risk', icon: Shield },
    { id: 6, name: 'Compliance', icon: FileText },
    { id: 7, name: 'Decision', icon: CheckCircle },
    { id: 8, name: 'Terms', icon: Users },
    { id: 9, name: 'Conditions', icon: Upload },
    { id: 10, name: 'Signatures', icon: FileText },
  ];

  const HeroSection = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="floating-shapes">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="floating-shape"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional SOP Generator
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Create Stunning</span>
              <br />
              <span className="text-slate-800">SOP Documents</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Generate professional, visually appealing Standard Operating Procedure documents
              with our cutting-edge lending management platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleStartProcess}
              className="premium-button text-lg px-8 py-4"
            >
              Start Creating SOP
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => setShowPreview(true)}
              className="px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-xl shadow-soft hover:shadow-medium hover:border-slate-400 transition-all duration-300"
            >
              Preview Template
            </button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: <FileCheck className="w-8 h-8 text-blue-600" />,
                title: "Professional Templates",
                description: "Beautiful, customizable SOP templates"
              },
              {
                icon: <Upload className="w-8 h-8 text-purple-600" />,
                title: "Easy Photo Upload",
                description: "Drag & drop support for all documents"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                title: "Instant Export",
                description: "Generate PDFs in seconds"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="floating-card p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  const ProgressIndicator = () => (
    <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">SOP Generator</span>
            </div>
            
            <div className="flex items-center space-x-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`step-indicator ${
                      currentStep === step.id
                        ? 'active'
                        : currentStep > step.id
                        ? 'completed'
                        : ''
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 h-1 mx-1 rounded-full ${
                        currentStep > step.id ? 'bg-green-500' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm text-slate-600 mb-1">
              <span>Step {currentStep} of {steps.length - 1}</span>
              <span>{Math.round((currentStep / (steps.length - 1)) * 100)}% Complete</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MainContent = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <FormProvider {...methods}>
                <SOPForm
                  onPreview={() => setShowPreview(true)}
                />
              </FormProvider>
            </motion.div>
          )}
          
          {currentStep === 2 && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <SOPPreview
                data={methods.getValues()}
                onBack={() => setCurrentStep(1)}
                onExport={() => console.log('Export PDF')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <div className="App relative">
      <AnimatedBackground />
      
      {currentStep === 0 && <HeroSection />}
      {currentStep > 0 && (
        <>
          <ProgressIndicator />
          <MainContent />
        </>
      )}
      
      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">SOP Preview</h2>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    ✕
                  </button>
                </div>
                <SOPPreview
                  data={methods.getValues()}
                  onBack={() => setShowPreview(false)}
                  onExport={() => console.log('Export PDF')}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;