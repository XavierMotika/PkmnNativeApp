import Pokemon from "../../models/pokemon";
import {FlatList} from 'react-native';

import styles from "./style";
import PokemonIcon from "components/PokeIcon";

interface Props {
  pokemons: Pokemon[] | undefined;
  navigate : any
}

const PokemonList = ({ pokemons, navigate }: Props) => {
  return (
      <FlatList style={styles.list} data={pokemons} numColumns={3} columnWrapperStyle={{justifyContent : "space-around"}} 
      maxToRenderPerBatch={30} renderItem={(index) => <PokemonIcon pokemon={index.item} navigate={navigate}/>}/>
  );
};

export default PokemonList;
