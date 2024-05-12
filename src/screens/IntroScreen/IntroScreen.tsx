import { useNavigate } from "react-router";
import { DialogueScreen } from "../../components/DialogueScreen/DialogueScreen";
import { IntroSteps } from "../../constants/introSteps";

export const IntroScreen = () => {
  const navigate = useNavigate();
  return (
    <DialogueScreen
      steps={IntroSteps}
      afterLastStep={() => navigate("/starter-selection")}
    />
  );
};
