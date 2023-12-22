import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import "./PokemonList.css";

const PokemonCard = () => {
  return <Card
    title="Ditto"
    cover={<img src="" alt="Ditto" />}
    extra={<StarOutlined />}
  >
    <Meta description="fire, magic" />
  </Card>
}

export { PokemonCard };