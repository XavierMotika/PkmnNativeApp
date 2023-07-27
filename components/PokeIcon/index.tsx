import { useState } from "react";
import Pokemon from "../../models/pokemon";
import {View, Button, Image} from "react-native"
import styles from "./style";

interface Props {
  pokemon: Pokemon;
}

const PokemonIcon = ({ pokemon }: Props , navigation : any) => {
  const goTo = () => {
    navigation.navigate("Details" , {
        pokmonId: pokemon.id
     });
  };

  return (
    <View style={styles.container}>
        <Image source={{uri : pokemon.picture}} style={styles.image}/>
    </View>
        
  );
};

export default PokemonIcon;