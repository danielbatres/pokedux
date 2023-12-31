import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import "./PokemonList.css";

const PokemonCard = (props) => {
  return <Card
    title={props.name}
    cover={<img src="" alt={props.name} />}
    extra={<StarOutlined />}
  >
    <Meta description="fire, magic" />
  </Card>
}

export { PokemonCard };
