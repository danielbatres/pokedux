import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Spin } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading, setPokemons } from "./actions";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const response = await getPokemons();

      dispatch(getPokemonsWithDetails(response));
      dispatch(setLoading(false));
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
      {loading ? 
      <Col offset={12}>
        <Spin spinning size="large" />
      </Col> : 
      <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default App;
