import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import "./PokemonList.css";
import { StarButton } from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map(item => item.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }

  return <Card
    title={name}
    cover={<img src={image} alt={name} />}
    extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
  >
    <Meta description={typesString} />
  </Card>
}

export { PokemonCard };
