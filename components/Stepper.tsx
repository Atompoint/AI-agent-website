import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  HTMLAttributes,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/components/Stepper.css";

interface StepData {
  label: string;
  description: string;
  icon: string;
}

interface HorizontalStepperProps extends HTMLAttributes<HTMLDivElement> {
  steps: StepData[];
  onComplete?: () => void;
  stepDuration?: number; // Duration in milliseconds between steps
}

export default function HorizontalStepper({
  steps,
  onComplete,
  stepDuration = 2000,
  className = "",
  ...rest
}: HorizontalStepperProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance steps
  useEffect(() => {
    if (activeStep < steps.length) {
      timeoutRef.current = setTimeout(() => {
        setActiveStep(prev => {
          const next = prev + 1;
          setCompletedSteps(prevCompleted => new Set([...prevCompleted, prev]));
          
          // If this is the last step, mark it as completed too and call onComplete
          if (next === steps.length) {
            setTimeout(() => {
              setCompletedSteps(prevCompleted => new Set([...prevCompleted, next - 1]));
              onComplete?.();
            }, 100);
          }
          
          return next;
        });
      }, stepDuration);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeStep, steps.length, onComplete, stepDuration]);

  // Restart animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(0);
            setCompletedSteps(new Set());
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const getStepStatus = (stepIndex: number) => {
    if (completedSteps.has(stepIndex)) return 'completed';
    if (stepIndex === activeStep) return 'active';
    return 'inactive';
  };

  return (
    <div 
      ref={containerRef} 
      className={`horizontal-stepper-container ${className}`}
      {...rest}
    >
      {/* Step indicators and connectors */}
      <div className="step-indicators-row">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Circle */}
            <div className="step-circle-wrapper">
              <motion.div
                className="step-circle"
                animate={{
                  borderColor: getStepStatus(index) === 'inactive' 
                    ? '#374151' 
                    : '#5227FF',
                  backgroundColor: getStepStatus(index) === 'inactive' 
                    ? '#1F2937' 
                    : '#5227FF'
                }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {getStepStatus(index) === 'completed' ? (
                    <CheckIcon key="check" />
                  ) : getStepStatus(index) === 'active' ? (
                    <ActiveDot key="dot" />
                  ) : (
                    <StepNumber key="number" number={index + 1} />
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Connector line (not after last step) */}
            {index < steps.length - 1 && (
              <StepConnector isActive={activeStep > index} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step content - each appears under its respective circle */}
      <div className="step-contents-row">
        {steps.map((step, index) => (
          <StepContent
            key={index}
            step={step}
            index={index}
            isVisible={activeStep > index || index === activeStep}
            isActive={index === activeStep}
          />
        ))}
      </div>
    </div>
  );
}

interface StepContentProps {
  step: StepData;
  index: number;
  isVisible: boolean;
  isActive: boolean;
}

function StepContent({ step, index, isVisible, isActive }: StepContentProps) {
  return (
    <motion.div
      className="step-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{
        duration: 0.5,
        delay: isActive ? 0.3 : 0
      }}
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{
          scale: isVisible ? 1 : 0,
          rotate: isVisible ? 0 : -90
        }}
        transition={{
          duration: 0.4,
          delay: isActive ? 0.5 : 0
        }}
        className="step-icon-wrapper"
      >
        <div className="step-icon">
          {/* Default emoji icons - replace with actual images in your implementation */}
          <span className="step-icon-emoji">
            {index === 0 ? '🌐' : index === 1 ? '⚡' : '📞'}
          </span>
        </div>
      </motion.div>

      {/* Label */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          delay: isActive ? 0.7 : 0
        }}
        className="step-label"
      >
        {step.label}
      </motion.span>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          delay: isActive ? 0.9 : 0
        }}
        className="step-description"
      >
        {step.description}
      </motion.p>
    </motion.div>
  );
}

interface StepConnectorProps {
  isActive: boolean;
}

function StepConnector({ isActive }: StepConnectorProps) {
  return (
    <div className="step-connector">
      <motion.div
        className="step-connector-fill"
        initial={{ width: '0%' }}
        animate={{
          width: isActive ? '100%' : '0%'
        }}
        transition={{ duration: 0.5, delay: isActive ? 0.2 : 0 }}
      />
    </div>
  );
}

function CheckIcon() {
  return (
    <motion.svg
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, rotate: 180 }}
      transition={{ duration: 0.3 }}
      className="check-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </motion.svg>
  );
}

function ActiveDot() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="active-dot"
      transition={{ duration: 0.2 }}
    />
  );
}

interface StepNumberProps {
  number: number;
}

function StepNumber({ number }: StepNumberProps) {
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="step-number"
      transition={{ duration: 0.2 }}
    >
      {number}
    </motion.span>
  );
}