import { LineWithIcon, Pill } from "potfisch-ui";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import "./LandingScreen.css";
export const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="landingScreen">
      <Pill
        center={
          <div>
            <h1>
              Pokemon:
              <br /> Legends Mew
            </h1>
            <div onClick={() => navigate("/intro")}>
              <LineWithIcon icon={<FaArrowRight />} text="New Game" />
            </div>
          </div>
        }
      />
    </div>
  );
};
