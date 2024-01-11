import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import "./PokemonList.css";

const PokemonCard = ({ name, image }) => {
  return <Card
    title={name}
    cover={<img src={image} alt={name} />}
    extra={<StarOutlined />}
  >
    <Meta description="fire, magic" />
  </Card>
}

export { PokemonCard };
