import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 70 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"0.8rem"}
      paddingX="0.8rem"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
