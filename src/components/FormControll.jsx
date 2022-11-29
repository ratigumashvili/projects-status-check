import React from "react";

const FormControll = ({ STEPS, currentStep, setCurrentStep }) => {
  return (
    <>
      <button
        type="button"
        disabled={currentStep === 0}
        onClick={() => setCurrentStep((prev) => prev - 1)}
      >
        Prev
      </button>
      <br />
      <button
        type="button"
        disabled={currentStep === STEPS.length - 1}
        onClick={() => setCurrentStep((prev) => prev + 1)}
      >
        Next
      </button>
    </>
  );
};

export default FormControll;
