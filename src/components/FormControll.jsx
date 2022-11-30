import { useState } from "react";

import { useNavigate } from "react-router-dom";

const FormControll = ({
  STEPS,
  currentStep,
  setCurrentStep,
  groups,
  choosedGroup,
}) => {
  const [error, setError] = useState(null);
  const selected = groups.filter(({ title }) => title === choosedGroup);

  console.log(selected);

  const navigate = useNavigate();

  const handleNavigateToGroups = () => {
    setError(null);

    if (selected[0].students.length === 0) {
      setError("Students array is empty");
      return;
    }
    if (selected[0].students.some((item) => item.tasks.length === 0)) {
      setError("Tasks array is empty");
      return;
    }
    navigate("/groups");
  };
  return (
    <div className="form-control">
      <button
        type="button"
        disabled={currentStep === 0 || selected[0]?.students?.length !== 0}
        onClick={() => {
          setCurrentStep((prev) => prev - 1);
          setError(null);
        }}
      >
        Prev
      </button>
      <button
        type="button"
        disabled={currentStep === STEPS.length - 1 || groups.length === 0}
        onClick={() => {
          setCurrentStep((prev) => prev + 1);
          setError(null);
        }}
      >
        Next
      </button>
      {currentStep === STEPS.length - 1 && (
        <button type="button" onClick={handleNavigateToGroups}>
          Generate
        </button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormControll;
