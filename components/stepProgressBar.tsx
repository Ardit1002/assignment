'use client';
import React ,{useState, useRef ,forwardRef, useImperativeHandle}from 'react'

interface StepProgressBarProps {}

export interface StepProgressBarRef {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

const StepProgressBar: React.ForwardRefRenderFunction<
StepProgressBarRef,
  StepProgressBarProps
> = (_, ref) => {
  const [currentStep, setCurrentStep] = useState(0);

  useImperativeHandle(ref, () => ({
    handleNextStep,
    handlePreviousStep
  }));
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };




  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div className='flex items-center justify-center'>
        <div
          key={index}
          className={`flex items-center justify-center w-8 h-8 rounded-full b0rder-2  ${index <= currentStep  ? 'bg-primaryColor1 text-neutral-100 font-medium border-primaryColor1' : 'bg-neutral-300 text-neutral-600 font-normal border-neutral-500'}`}
          >
          {index + 1}
        </div>
        <hr className={`hr_bg_full ${index < currentStep ? "hr_bg_half_to_full" : ""}  ${index === currentStep ?  "hr_bg_half" : ""} ${index === steps.length -1 ? "hidden" : ""}`}></hr>
        </div>
      ))}
    </div>
  );
};

export default forwardRef(StepProgressBar);