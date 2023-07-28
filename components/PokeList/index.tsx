import Pokemon from "../../models/pokemon";
import {View, FlatList} from 'react-native';

import styles from "./style";
import PokemonIcon from "components/PokeIcon";

interface Props {
  pokemons: Pokemon[] | undefined;
  navigate : any
}

const PokemonList = ({ pokemons, navigate }: Props) => {
  return (
      <View style={styles.container}>
        <FlatList style={styles.list} data={pokemons} numColumns={3} renderItem={(index) => <PokemonIcon pokemon={index.item} navigate={navigate}/>}/>
      </View>
  );
};

export default PokemonList;
