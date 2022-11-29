import CreateGroups from "../components/steps/CreateGroups";
import CreateStudents from "../components/steps/CreateStudents";
import CreateTasks from "../components/steps/CreateTasks";
import FormControll from "../components/FormControll";

import { useState } from "react";

const STEPS = ["Add Group", "Add Students", "Add Tasks"];

const AddGroups = ({ groups, setGroups }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [choosedGroup, setChoosedGroup] = useState("");
  return (
    <div>
      <h2>Add Groups</h2>
      <h5>
        {STEPS[currentStep]} {currentStep}
      </h5>
      <>
        {STEPS[currentStep] === "Add Group" && (
          <CreateGroups setGroups={setGroups} />
        )}
        {STEPS[currentStep] === "Add Students" && (
          <CreateStudents
            groups={groups}
            choosedGroup={choosedGroup}
            setChoosedGroup={setChoosedGroup}
          />
        )}
        {STEPS[currentStep] === "Add Tasks" && (
          <CreateTasks groups={groups} choosedGroup={choosedGroup} />
        )}

        <FormControll
          STEPS={STEPS}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </>
    </div>
  );
};

export default AddGroups;
