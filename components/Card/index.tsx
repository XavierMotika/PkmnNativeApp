import PokemonIcon from 'components/PokeIcon';
import Pokemon from 'models/pokemon';
import {useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {useIsFocused } from "@react-navigation/native";
import PokemonService from "services/pokemonService";

import styles from './style';

interface Props {
    pokemonId : number;
    navigation : any
}

const Card = ({pokemonId , navigation}:Props) => {
    
    const [pokemon,setPokemon] = useState<Pokemon>();
    const isFocused = useIsFocused()
    useEffect(()=>{PokemonService.getOne(String(pokemonId)).then((pokemon)=> 
    setPokemon(pokemon)
    )},[isFocused])

    if (pokemon !== undefined) return (
        <View style={styles.list}>
            <PokemonIcon pokemon={pokemon} navigate={navigation}/>
            <View style={styles.dataBloc}>
                <Text style={styles.data}>
                    Pokémon : {pokemon.name}
                </Text>
                <Text style={styles.data}>
                    Points de vie : {pokemon.hp}
                </Text>
                <Text style={styles.data}>
                    Puissance de combat : {pokemon.cp}
                </Text>
            </View>
            
        </View>
    )
} 
export default Card;