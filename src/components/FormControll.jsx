import React from "react";

const FormControll = ({ STEPS, currentStep, setCurrentStep }) => {
  return (
    <div className="form-control">
      <button
        type="button"
        disabled={currentStep === 0}
        onClick={() => setCurrentStep((prev) => prev - 1)}
      >
        Prev
      </button>
      <button
        type="button"
        disabled={currentStep === STEPS.length - 1}
        onClick={() => setCurrentStep((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default FormControll;
