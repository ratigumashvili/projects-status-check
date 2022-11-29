import CreateGroups from "../components/steps/CreateGroups";
import CreateStudents from "../components/steps/CreateStudents";
import CreateTasks from "../components/steps/CreateTasks";
import FormControll from "../components/FormControll";

import { useState } from "react";

const STEPS = ["Add Group", "Add Students", "Add Tasks"];

const AddGroups = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div>
      <h2>Add Groups</h2>
      <h5>
        {STEPS[currentStep]} {currentStep}
      </h5>
      <form>
        {STEPS[currentStep] === "Add Group" && <CreateGroups />}
        {STEPS[currentStep] === "Add Students" && <CreateStudents />}
        {STEPS[currentStep] === "Add Tasks" && <CreateTasks />}

        <FormControll
          STEPS={STEPS}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </form>
    </div>
  );
};

export default AddGroups;
