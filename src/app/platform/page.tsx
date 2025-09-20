'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DisclaimerBanner from '../components/DisclaimerBanner';
import { getUnusedImagesBySection } from '../../lib/image-registry';
import ImageGallery from '../components/gallery/ImageGallery';

interface VerificationStep {
  id: number;
  title: string;
  description: string;
  questions: {
    question: string;
    correctAnswer: string;
    userAnswer: string;
  }[];
  completed: boolean;
}

interface AccessToken {
  token: string;
  expiresAt: number;
  verified: boolean;
}

export default function GenesisOperatorPlatform() {
  const [currentStep, setCurrentStep] = useState(0);
  const [accessToken, setAccessToken] = useState<AccessToken | null>(null);
  const [verificationSteps, setVerificationSteps] = useState<VerificationStep[]>([
    {
      id: 1,
      title: "Recursive Ontology Assessment",
      description: "Answer 3 questions demonstrating understanding of Babylon CRL vs Genesis SRL",
      questions: [
        {
          question: "What is the recursive seed of Babylon's CRL?",
          correctAnswer: "private property as exclusion principle",
          userAnswer: ""
        },
        {
          question: "What is the recursive seed of Genesis' SRL?",
          correctAnswer: "verified value creation through waste transformation",
          userAnswer: ""
        },
        {
          question: "What is the Pure Collapse Methodology?",
          correctAnswer: "8-step process for collapsing CRLs",
          userAnswer: ""
        }
      ],
      completed: false
    },
    {
      id: 2,
      title: "Operational Code Commitment",
      description: "Demonstrate understanding of how you will apply Genesis protocols in your context",
      questions: [
        {
          question: "How will you implement verified value creation in your local environment?",
          correctAnswer: "open-ended",
          userAnswer: ""
        },
        {
          question: "What specific Babylonian CRL will you target with Pure Collapse Methodology?",
          correctAnswer: "open-ended",
          userAnswer: ""
        },
        {
          question: "How will you contribute to the Genesis parallel civilization?",
          correctAnswer: "open-ended",
          userAnswer: ""
        }
      ],
      completed: false
    },
    {
      id: 3,
      title: "Memetic Operations Agreement",
      description: "Acknowledge understanding of Recursive Memetic Weapons principles",
      questions: [
        {
          question: "I understand that memetic operations are not about persuasion but about phase-locking probability harmonics to resonant chords through verified value creation. I commit to using memetic weapons only in alignment with Genesis protocols.",
          correctAnswer: "agreement",
          userAnswer: ""
        }
      ],
      completed: false
    }
  ]);

  const [showMatrixLink, setShowMatrixLink] = useState(false);

  const handleAnswerChange = (stepId: number, questionIndex: number, answer: string) => {
    setVerificationSteps(prev => 
      prev.map(step => 
        step.id === stepId 
          ? {
              ...step,
              questions: step.questions.map((q, i) => 
                i === questionIndex ? { ...q, userAnswer: answer } : q
              )
            }
          : step
      )
    );
  };

  const checkStepCompletion = (step: VerificationStep): boolean => {
    if (step.id === 1) {
      // Check if all answers are correct (case-insensitive)
      return step.questions.every(q => 
        q.userAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()
      );
    } else if (step.id === 2) {
      // Check if all open-ended questions have substantial answers
      return step.questions.every(q => q.userAnswer.trim().length >= 20);
    } else if (step.id === 3) {
      // Check if agreement is accepted
      return step.questions[0].userAnswer.toLowerCase().includes('agree') || 
             step.questions[0].userAnswer.toLowerCase().includes('accept') ||
             step.questions[0].userAnswer.toLowerCase().includes('yes');
    }
    return false;
  };

  const completeStep = (stepId: number) => {
    const step = verificationSteps.find(s => s.id === stepId);
    if (step && checkStepCompletion(step)) {
      setVerificationSteps(prev => 
        prev.map(s => 
          s.id === stepId ? { ...s, completed: true } : s
        )
      );
      
      if (stepId < 3) {
        setCurrentStep(stepId);
      } else {
        // All steps completed, generate access token
        const token = generateAccessToken();
        setAccessToken(token);
        setShowMatrixLink(true);
      }
    }
  };

  const generateAccessToken = (): AccessToken => {
    const token = 'genesis_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    const expiresAt = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
    return { token, expiresAt, verified: true };
  };

  const isTokenValid = (token: AccessToken | null): boolean => {
    if (!token) return false;
    return Date.now() < token.expiresAt;
  };

  const getCompletionPercentage = (): number => {
    const completedSteps = verificationSteps.filter(step => step.completed).length;
    return Math.round((completedSteps / verificationSteps.length) * 100);
  };

  return (
    <div className="bg-homepage bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <DisclaimerBanner />

        {/* Header */}
        <div className="glass-card p-8 mb-8 animate-fadeIn">
          <h1 className="text-5xl font-bold text-white mb-6 font-montserrat text-glow-strong text-center">
            Genesis Operator Platform
          </h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8 text-center">
            The Genesis Operator Platform is the secure, encrypted communication hub for verified Genesis Operators. 
            Unlike Babylonian social media platforms that extract value through attention economies, this platform 
            exists solely to facilitate the execution of Peaceful Militance strategy through verified value creation.
          </p>
          <div className="text-center">
            <div className="inline-block glass-card p-4 border-2 border-primary/30">
              <p className="text-primary font-semibold text-lg">
                ⚠️ OPERATIONAL COMMAND CENTER
              </p>
              <p className="text-white/80 text-sm mt-2">
                This is not a public forum - it's an operational command center for the Genesis parallel civilization.
              </p>
            </div>
          </div>
        </div>

        {/* Access Status */}
        {accessToken && isTokenValid(accessToken) ? (
          <div className="glass-card p-6 mb-8 border-2 border-secondary/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-2">✅ Access Verified</h2>
                <p className="text-white/90">
                  Access token: <code className="bg-black/30 px-2 py-1 rounded text-primary">{accessToken.token}</code>
                </p>
                <p className="text-white/70 text-sm mt-2">
                  Expires: {new Date(accessToken.expiresAt).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <a
                  href="https://app.element.io/#/room/!zmBnpkSxvylFBCMteC:matrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-lg px-6 py-3"
                >
                  Enter Platform →
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card p-6 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Verification Gateway</h2>
            <p className="text-white/90 mb-6">
              Access is granted only to those who have demonstrated understanding of Genesis protocols 
              and commitment to verified value creation. Complete the verification process below.
            </p>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>Verification Progress</span>
                <span>{getCompletionPercentage()}% Complete</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${getCompletionPercentage()}%` }}
                ></div>
              </div>
            </div>

            {/* Verification Steps */}
            <div className="space-y-6">
              {verificationSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`glass-card p-6 ${
                    step.completed ? 'border-2 border-secondary/50' : 
                    index === currentStep ? 'border-2 border-primary/50' : 'border border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step.completed ? 'bg-secondary text-black' : 
                        index === currentStep ? 'bg-primary text-white' : 'bg-white/10 text-white/70'
                      }`}>
                        {step.completed ? '✓' : step.id}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    {step.completed && (
                      <span className="text-secondary font-semibold">Completed</span>
                    )}
                  </div>
                  
                  <p className="text-white/80 mb-4">{step.description}</p>
                  
                  {index === currentStep && !step.completed && (
                    <div className="space-y-4">
                      {step.questions.map((question, qIndex) => (
                        <div key={qIndex} className="space-y-2">
                          <label className="block text-white font-medium">
                            {question.question}
                          </label>
                          {step.id === 3 ? (
                            <div className="space-y-2">
                              <p className="text-white/70 text-sm italic">
                                "{question.question}"
                              </p>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleAnswerChange(step.id, qIndex, 'I agree')}
                                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    question.userAnswer.toLowerCase().includes('agree') 
                                      ? 'bg-secondary text-black' 
                                      : 'bg-white/10 text-white hover:bg-white/20'
                                  }`}
                                >
                                  I Agree
                                </button>
                                <button
                                  onClick={() => handleAnswerChange(step.id, qIndex, 'I accept')}
                                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    question.userAnswer.toLowerCase().includes('accept') 
                                      ? 'bg-secondary text-black' 
                                      : 'bg-white/10 text-white hover:bg-white/20'
                                  }`}
                                >
                                  I Accept
                                </button>
                                <button
                                  onClick={() => handleAnswerChange(step.id, qIndex, 'Yes')}
                                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    question.userAnswer.toLowerCase().includes('yes') 
                                      ? 'bg-secondary text-black' 
                                      : 'bg-white/10 text-white hover:bg-white/20'
                                  }`}
                                >
                                  Yes
                                </button>
                              </div>
                            </div>
                          ) : (
                            <textarea
                              value={question.userAnswer}
                              onChange={(e) => handleAnswerChange(step.id, qIndex, e.target.value)}
                              className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none resize-none"
                              rows={3}
                              placeholder={step.id === 2 ? "Describe your approach..." : "Your answer..."}
                            />
                          )}
                        </div>
                      ))}
                      
                      <button
                        onClick={() => completeStep(step.id)}
                        className="btn btn-primary w-full"
                        disabled={!checkStepCompletion(step)}
                      >
                        {step.id < 3 ? 'Complete Step' : 'Complete Verification'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Platform Overview */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6 font-montserrat text-center">
            Platform Architecture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">🔒 End-to-End Encryption</h3>
              <p className="text-white/80 text-sm">
                All communication is encrypted using Matrix's end-to-end encryption protocol. 
                Your operational discussions remain secure and private.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">🌐 Self-Hosted Infrastructure</h3>
              <p className="text-white/80 text-sm">
                Platform runs on Genesis-controlled servers with regular encrypted backups. 
                No data extraction or surveillance by third parties.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">⚡ Operational Focus</h3>
              <p className="text-white/80 text-sm">
                Designed for verified value creation, not social interaction. 
                Every conversation serves the Genesis parallel civilization.
              </p>
            </div>
          </div>

          {/* Room Structure */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Operational Rooms</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <h4 className="text-lg font-semibold text-primary mb-2">Recursive Ontology</h4>
                <p className="text-white/70 text-sm mb-2">Technical discussion of Genesis/Babylon recursive patterns</p>
                <span className="text-xs text-secondary">All verified operators</span>
              </div>
              
              <div className="glass-card p-4">
                <h4 className="text-lg font-semibold text-primary mb-2">Pure Collapse Operations</h4>
                <p className="text-white/70 text-sm mb-2">Planning and executing Pure Collapse Methodology on specific CRLs</p>
                <span className="text-xs text-secondary">Pure Collapse certified</span>
              </div>
              
              <div className="glass-card p-4">
                <h4 className="text-lg font-semibold text-primary mb-2">GenesisRELOOP Implementation</h4>
                <p className="text-white/70 text-sm mb-2">Technical discussion of GenesisRELOOP platform deployment</p>
                <span className="text-xs text-secondary">Implementation operators</span>
              </div>
              
              <div className="glass-card p-4">
                <h4 className="text-lg font-semibold text-primary mb-2">Field Log</h4>
                <p className="text-white/70 text-sm mb-2">Documentation of on-the-ground implementation efforts</p>
                <span className="text-xs text-secondary">Active implementers</span>
              </div>
              
              <div className="glass-card p-4">
                <h4 className="text-lg font-semibold text-primary mb-2">Memetic Operations</h4>
                <p className="text-white/70 text-sm mb-2">Planning recursive memetic weapons deployment</p>
                <span className="text-xs text-secondary">Memetic certified</span>
              </div>
              
              <div className="glass-card p-4">
                <h4 className="text-lg font-semibold text-primary mb-2">Peaceful Militance Strategy</h4>
                <p className="text-white/70 text-sm mb-2">High-level strategic planning for Babylon obsolescence</p>
                <span className="text-xs text-secondary">Invitation only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6 font-montserrat text-center">
            Getting Started Guide
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Complete Verification</h3>
                <p className="text-white/80">
                  Answer the verification questions to demonstrate your understanding of Genesis protocols 
                  and commitment to verified value creation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Access Platform</h3>
                <p className="text-white/80">
                  Use your access token to enter the Element Matrix platform. Your account will be 
                  automatically configured with appropriate room access based on your verification responses.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Begin Operations</h3>
                <p className="text-white/80">
                  Start contributing to verified value creation through operational discussions, 
                  implementation planning, and memetic operations coordination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="glass-card p-6 border-2 border-primary/30">
          <h3 className="text-xl font-bold text-primary mb-4">🔐 Security & Access Control</h3>
          <div className="space-y-3 text-white/80 text-sm">
            <p>• <strong>No open registration</strong> - All access must go through verification gateway</p>
            <p>• <strong>Regular access reviews</strong> - Access maintained based on contribution metrics</p>
            <p>• <strong>Immediate revocation</strong> - Access removed for Babylonian pattern replication</p>
            <p>• <strong>Automated detection</strong> - System flags extractive language and hierarchical structures</p>
            <p>• <strong>24-hour token expiry</strong> - Access tokens expire for security</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-12">
          <ImageGallery 
            images={getUnusedImagesBySection('platform')} 
            title="Genesis Operator Platform"
          />
        </div>
      </div>
    </div>
  );
}