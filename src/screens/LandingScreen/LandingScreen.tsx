import { Pill } from "potfisch-ui";
import "./LandingScreen.css";
export const LandingScreen = () => {
  return (
    <div className="landingScreen">
      <Pill
        center={
          <div>
            <h1>
              Pokemon:
              <br /> Legends Mew
            </h1>
            <h3>New Game</h3>
          </div>
        }
      />
    </div>
  );
};
