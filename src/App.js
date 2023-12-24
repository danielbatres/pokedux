import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import { getPokemons } from "./api";
import logo from "./assets/logo.svg";
import "./App.css";
import { setPokemons as setPokemonsActions } from "./actions";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemons();

      setPokemons(response);
    };

    fetchPokemons();
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

const mapStateToProps = state => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = dispatch => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

export default App;
