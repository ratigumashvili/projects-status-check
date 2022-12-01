import CreateGroups from "../components/steps/CreateGroups";
import CreateStudents from "../components/steps/CreateStudents";
import CreateTasks from "../components/steps/CreateTasks";
import FormControll from "../components/FormControll";
import CustomProgress from "../components/CustomProgress";

import { useState } from "react";

import useLocalstorage from "../hooks/useLocalstorage";

const STEPS = ["Add Group", "Add Students", "Add Tasks"];

const AddGroups = ({ groups, setGroups }) => {
  const [currentStep, setCurrentStep] = useState(0);
  // const [choosedGroup, setChoosedGroup] = useState("");

  const [choosedGroup, setChoosedGroup] = useLocalstorage("choosed", "");

  return (
    <div>
      <h2>{STEPS[currentStep]}</h2>

      <CustomProgress STEPS={STEPS} currentStep={currentStep} />

      <>
        {STEPS[currentStep] === "Add Group" && (
          <CreateGroups groups={groups} setGroups={setGroups} />
        )}
        {STEPS[currentStep] === "Add Students" && (
          <CreateStudents
            groups={groups}
            setGroups={setGroups}
            choosedGroup={choosedGroup}
            setChoosedGroup={setChoosedGroup}
          />
        )}
        {STEPS[currentStep] === "Add Tasks" && (
          <CreateTasks setGroups={setGroups} choosedGroup={choosedGroup} />
        )}

        <FormControll
          STEPS={STEPS}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          groups={groups}
          choosedGroup={choosedGroup}
        />
      </>
    </div>
  );
};

export default AddGroups;
