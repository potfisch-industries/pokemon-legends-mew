import { Organizer } from "potfisch-ui";
import { PokemonSprite } from "../../components/PokemonSprite/PokemonSprite";

export const StarterSelectionScreen = () => {
  return (
    <Organizer
      nameOfOptions={"Starter Pokemon"}
      selectionMax={1}
      selectionMin={1}
      options={[
        {
          id: "teddiursa",
          content: <PokemonSprite dexId={24} size={80} />,
        },
        { id: "growlithe", content: <PokemonSprite dexId={624} size={80} /> },
        {
          id: "growlithedref",
          content: <PokemonSprite dexId={254} size={80} />,
        },
        {
          id: "growlithefrer",
          content: <PokemonSprite dexId={124} size={80} />,
        },
        {
          id: "growlithedfrefr",
          content: <PokemonSprite dexId={26} size={80} />,
        },
      ]}
      initialSelected={[]}
      onConfirm={() => {}}
    />
  );
};
