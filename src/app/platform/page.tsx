'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import GlassCard from '../components/GlassCard';

interface VerificationStep {
  step: number;
  title: string;
  description: string;
  questions: string[];
  answers: string[];
  userAnswers: string[];
}

export default function GenesisOperatorPlatform() {
  const [currentStep, setCurrentStep] = useState(0);
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [showMatrixLink, setShowMatrixLink] = useState(false);

  const verificationSteps: VerificationStep[] = [
    {
      step: 1,
      title: "Recursive Ontology Assessment",
      description: "Answer 3 questions demonstrating understanding of Babylon CRL vs Genesis SRL",
      questions: [
        "What is the recursive seed of Babylon's CRL?",
        "What is the recursive seed of Genesis' SRL?", 
        "What is the Pure Collapse Methodology?"
      ],
      answers: [
        "private property as exclusion principle",
        "verified value creation through waste transformation",
        "8-step process for collapsing CRLs"
      ],
      userAnswers: []
    },
    {
      step: 2,
      title: "Operational Code Commitment",
      description: "Demonstrate understanding of how you will apply Genesis protocols in your context",
      questions: [
        "How will you implement verified value creation in your local environment?",
        "What specific Babylonian CRL will you target with Pure Collapse Methodology?",
        "How will you contribute to the Genesis parallel civilization?"
      ],
      answers: [
        "open-ended", // These are open-ended questions
        "open-ended",
        "open-ended"
      ],
      userAnswers: []
    },
    {
      step: 3,
      title: "Memetic Operations Agreement",
      description: "Acknowledge understanding of Recursive Memetic Weapons principles",
      questions: [
        "I understand that memetic operations are not about persuasion but about phase-locking probability harmonics to resonant chords through verified value creation.",
        "I commit to using memetic weapons only in alignment with Genesis protocols.",
        "I acknowledge that this platform is an operational command center, not a social platform."
      ],
      answers: [
        "agreement",
        "agreement", 
        "agreement"
      ],
      userAnswers: []
    }
  ];

  const [steps, setSteps] = useState(verificationSteps);

  const handleAnswerChange = (stepIndex: number, questionIndex: number, answer: string) => {
    const newSteps = [...steps];
    newSteps[stepIndex].userAnswers[questionIndex] = answer;
    setSteps(newSteps);
  };

  const checkStepCompletion = (stepIndex: number): boolean => {
    const step = steps[stepIndex];
    if (stepIndex === 0) {
      // For step 1, check if answers contain key terms
      return step.userAnswers.every((answer, index) => {
        const correctAnswer = step.answers[index].toLowerCase();
        return answer.toLowerCase().includes(correctAnswer.split(' ')[0]) || 
               answer.toLowerCase().includes(correctAnswer.split(' ')[1]);
      });
    } else if (stepIndex === 1) {
      // For step 2, check if answers are substantial (open-ended)
      return step.userAnswers.every(answer => answer.length > 20);
    } else {
      // For step 3, check if all agreements are acknowledged
      return step.userAnswers.every(answer => 
        answer.toLowerCase().includes('yes') || 
        answer.toLowerCase().includes('agree') ||
        answer.toLowerCase().includes('acknowledge')
      );
    }
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete verification
      const allStepsComplete = steps.every((_, index) => checkStepCompletion(index));
      if (allStepsComplete) {
        setVerificationComplete(true);
        generateAccessToken();
      }
    }
  };

  const generateAccessToken = () => {
    const token = `GOP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setAccessToken(token);
    localStorage.setItem('genesisAccessToken', token);
    localStorage.setItem('tokenExpiry', (Date.now() + 24 * 60 * 60 * 1000).toString());
  };

  const handleAccessMatrix = () => {
    setShowMatrixLink(true);
  };

  useEffect(() => {
    // Check for existing valid token
    const existingToken = localStorage.getItem('genesisAccessToken');
    const tokenExpiry = localStorage.getItem('tokenExpiry');
    
    if (existingToken && tokenExpiry && parseInt(tokenExpiry) > Date.now()) {
      setAccessToken(existingToken);
      setVerificationComplete(true);
    }
  }, []);

  if (verificationComplete && accessToken) {
    return (
      <div className="bg-platform bg-vignette min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <GlassCard className="mb-8">
              <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
                Genesis Operator Platform
              </h1>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-green-600/20 border border-green-400/30 rounded-lg mb-6">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-green-400 font-semibold">Verification Complete</span>
                </div>
                <p className="text-white/90 text-lg">
                  Access Token: <code className="bg-emerald-900/50 px-2 py-1 rounded text-emerald-300">{accessToken}</code>
                </p>
              </div>
            </GlassCard>

            <GlassCard className="mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Operational Command Center</h2>
              
              <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
                The Genesis Operator Platform is the secure, encrypted communication hub for verified Genesis Operators. 
                Unlike Babylonian social media platforms that extract value through attention economies, this platform 
                exists solely to facilitate the execution of Peaceful Militance strategy through verified value creation.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="glass-container rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-green-400 mb-4">Platform Features</h3>
                  <ul className="text-white/90 space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      End-to-end encryption for all communications
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verified operator access only
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Operational room structure aligned with Genesis protocols
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Video call capabilities for operational meetings
                    </li>
                  </ul>
                </div>

                <div className="glass-container rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-green-400 mb-4">Room Structure</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-green-300 mb-2">Main Operations</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Recursive Ontology</li>
                        <li>• Pure Collapse Operations</li>
                        <li>• GenesisRELOOP Implementation</li>
                        <li>• Field Log</li>
                        <li>• Memetic Operations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-300 mb-2">Specialized Rooms</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Peaceful Militance Strategy</li>
                        <li>• Fractal Fabrication Engine</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {!showMatrixLink ? (
                <div className="text-center">
                  <button
                    onClick={handleAccessMatrix}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Access Matrix Platform
                  </button>
                  <p className="text-white/70 text-sm mt-4">
                    Click to reveal the secure Matrix instance link
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="glass-container rounded-lg p-6 mb-6">
                    <h3 className="text-2xl font-semibold text-green-400 mb-4">Secure Matrix Instance</h3>
                    <p className="text-white/90 mb-4">
                      Use your access token to join the Genesis Operator Platform:
                    </p>
                    <div className="bg-emerald-900/50 border border-emerald-400/30 rounded-lg p-4 mb-4">
                      <code className="text-emerald-300 break-all">
                        https://app.element.io/#/room/!zmBnpkSxvylFBCMteC:matrix.org
                      </code>
                    </div>
                    <p className="text-white/70 text-sm">
                      Token expires in 24 hours. Save this link and token for future access.
                    </p>
                  </div>
                  
                  <a
                    href="https://app.element.io/#/room/!zmBnpkSxvylFBCMteC:matrix.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open Matrix Platform
                  </a>
                </div>
              )}
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-bold text-green-400 mb-6">Operational Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-3">Communication Protocols</h3>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Use recursive language (seed, tree, fruit, forest)</li>
                    <li>• Focus on operational code, not social interaction</li>
                    <li>• Document all implementation efforts in Field Log</li>
                    <li>• Maintain verified value creation focus</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-3">Security Requirements</h3>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• No screenshots or external sharing</li>
                    <li>• Report any Babylonian pattern replication</li>
                    <li>• Maintain operational security protocols</li>
                    <li>• Regular access reviews based on contribution</li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-platform bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Genesis Operator Platform
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Genesis Operator Platform is the secure, encrypted communication hub for verified Genesis Operators. 
              Unlike Babylonian social media platforms that extract value through attention economies, this platform 
              exists solely to facilitate the execution of Peaceful Militance strategy through verified value creation.
            </p>

            <div className="bg-red-600/20 border border-red-400/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Access Control Notice</h3>
              <p className="text-white/90">
                This is not a public forum - it's an operational command center for the Genesis parallel civilization. 
                Access is granted only to those who have demonstrated understanding of Genesis protocols and 
                commitment to verified value creation.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Verification Gateway
            </h2>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-green-300">
                  Step {currentStep + 1}: {steps[currentStep].title}
                </h3>
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index <= currentStep ? 'bg-green-400' : 'bg-emerald-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-white/90 mb-6">
                {steps[currentStep].description}
              </p>
            </div>

            <div className="space-y-6">
              {steps[currentStep].questions.map((question, questionIndex) => (
                <div key={questionIndex} className="glass-container rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">
                    Question {questionIndex + 1}
                  </h4>
                  <p className="text-white/90 mb-4">{question}</p>
                  
                  {currentStep === 2 ? (
                    // Agreement step - radio buttons
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`question-${questionIndex}`}
                          value="yes"
                          onChange={(e) => handleAnswerChange(currentStep, questionIndex, e.target.value)}
                          className="mr-3 text-green-400"
                        />
                        <span className="text-white/90">Yes, I agree</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`question-${questionIndex}`}
                          value="no"
                          onChange={(e) => handleAnswerChange(currentStep, questionIndex, e.target.value)}
                          className="mr-3 text-green-400"
                        />
                        <span className="text-white/90">No, I disagree</span>
                      </label>
                    </div>
                  ) : (
                    // Open-ended questions
                    <textarea
                      value={steps[currentStep].userAnswers[questionIndex] || ''}
                      onChange={(e) => handleAnswerChange(currentStep, questionIndex, e.target.value)}
                      className="w-full p-3 rounded-lg bg-emerald-800/50 text-white placeholder-emerald-300 border border-emerald-700 focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
                      rows={4}
                      placeholder="Enter your response..."
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 disabled:bg-emerald-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-300"
              >
                Previous
              </button>
              
              <button
                onClick={handleNextStep}
                disabled={!checkStepCompletion(currentStep)}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-emerald-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-300"
              >
                {currentStep === steps.length - 1 ? 'Complete Verification' : 'Next Step'}
              </button>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold text-green-400 mb-6">Platform Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-4">Security Features</h3>
                <ul className="text-white/80 space-y-2">
                  <li>• End-to-end encryption for all communications</li>
                  <li>• No open registration - verification required</li>
                  <li>• Automated detection of Babylonian patterns</li>
                  <li>• Regular access reviews based on contribution</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-4">Operational Focus</h3>
                <ul className="text-white/80 space-y-2">
                  <li>• Verified value creation through communication</li>
                  <li>• Peaceful Militance strategy execution</li>
                  <li>• Pure Collapse Methodology implementation</li>
                  <li>• Recursive memetic weapons deployment</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

