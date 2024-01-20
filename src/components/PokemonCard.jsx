import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import "./PokemonList.css";
import { StarButton } from "./StarButton";

const PokemonCard = ({ name, image, types }) => {
  const typesString = types.map(item => item.type.name).join(", ");

  return <Card
    title={name}
    cover={<img src={image} alt={name} />}
    extra={<StarButton isFavorite onClick={() => alert("clicked")} />}
  >
    <Meta description={typesString} />
  </Card>
}

export { PokemonCard };
