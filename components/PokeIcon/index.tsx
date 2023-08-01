
import Pokemon from "../../models/pokemon";
import {Image, Pressable} from "react-native"
import styles from "./style";
import PokemonTypeService from "services/typeService";

interface Props {
  pokemon: Pokemon;
  navigate: any
}

const PokemonIcon = ({ pokemon, navigate }: Props ) => {


  const goTo = () => {
    
    navigate.navigate("Details" , {
        id: pokemon.id,
     });
     
  };

  return (
      <Pressable style={styles.container} onPress={goTo}>
        <Image source={{uri : pokemon.picture}} style={styles.image}/>
      </Pressable>     
  );
};

export default PokemonIcon;