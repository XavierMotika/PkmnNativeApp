import Pokemon from "../../models/pokemon";
import {View, FlatList} from 'react-native';

import styles from "./style";
import PokemonIcon from "components/PokeIcon";

interface Props {
  pokemons: Pokemon[] | undefined;
}

const PokemonList = ({ pokemons }: Props) => {
  return (
      <View style={styles.container}>
        <FlatList style={styles.list} data={pokemons} renderItem={(index) => <PokemonIcon pokemon={index.item}/>}/>
      </View>
  );
};

export default PokemonList;
