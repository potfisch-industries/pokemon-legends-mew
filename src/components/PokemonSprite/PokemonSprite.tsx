import { CSSProperties } from "react";

export const PokemonSprite = ({
  dexId,
  className,
  style,
  disabled,
  size = 40,
}: {
  dexId: number;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  size?: number;
}) => {
  return (
    <img
      className={className}
      height={size}
      width={size}
      style={{ filter: disabled ? "grayscale(100%)" : undefined, ...style }}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexId}.png`}
    />
  );
};
