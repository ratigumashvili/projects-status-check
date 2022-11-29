const CustomProgress = ({ STEPS, currentStep }) => {
  const progress = currentStep + 1;
  return (
    <div className="progress-wrapper">
      <span
        className="bar"
        style={{ width: `${((progress / STEPS.length) * 100).toFixed(2)}%` }}
      ></span>
    </div>
  );
};

export default CustomProgress;
