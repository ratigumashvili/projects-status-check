import { useNavigate } from "react-router-dom";

const FormControll = ({
  STEPS,
  currentStep,
  setCurrentStep,
  groups,
  choosedGroup,
}) => {
  const selected = groups?.filter(({ title }) => title === choosedGroup);

  const navigate = useNavigate();

  const handleNavigateToGroups = () => {
    navigate("/groups");
  };

  const checkNext = () => {
    if (STEPS[currentStep] === "Add Group" && groups.length === 0) {
      return true;
    }
    if (
      STEPS[currentStep] === "Add Students" &&
      selected[0]?.students?.length === 0
    ) {
      return true;
    }
    if (currentStep === STEPS.length - 1) {
      return true;
    }
  };
  return (
    <div className="form-control">
      <button
        className="btn btn-common"
        type="button"
        disabled={currentStep === 0}
        onClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
      >
        Prev
      </button>
      <button
        className="btn btn-common"
        type="button"
        disabled={checkNext()}
        onClick={() => {
          setCurrentStep((prev) => prev + 1);
        }}
      >
        Next
      </button>
      {currentStep === STEPS.length - 1 && (
        <button
          className="btn btn-cta"
          type="button"
          onClick={handleNavigateToGroups}
          disabled={selected[0].students.some(
            ({ tasks }) => tasks.length === 0
          )}
        >
          Generate
        </button>
      )}
    </div>
  );
};

export default FormControll;
