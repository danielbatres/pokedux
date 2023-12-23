import { Col } from "antd";
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import logo from "./assets/logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getPokemons } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemons();

      setPokemons(response);
    };

    fetchPokemons()
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
