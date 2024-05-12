import { Pill } from "potfisch-ui";
import { useCallback, useState } from "react";
import "./DialogueScreen.css";

export interface DialogueStep {
  text: string;
  url: string;
}

export const DialogueScreen = ({
  steps,
  afterLastStep,
}: {
  steps: DialogueStep[];
  afterLastStep: () => void;
}) => {
  const [stepIndex, setStepIndex] = useState<number>(0);

  const handleStepIncrease = useCallback(() => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
      return;
    }
    afterLastStep();
  }, [stepIndex, steps]);
  return (
    <div className="dialogueScreen" onClick={() => handleStepIncrease()}>
      <img
        style={{ borderRadius: "9000px", border: "2px solid" }}
        height={200}
        width={200}
        src={steps[stepIndex].url}
      />
      <Pill center={<h2>{steps[stepIndex].text}</h2>} />
    </div>
  );
};
