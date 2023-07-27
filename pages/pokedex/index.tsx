import { Image, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import styles from 'pages/pokedex/style';
import PokemonSearch from 'components/PokemonSearch';
import { useEffect, useState } from 'react';
import PokemonService from 'services/pokemonService';
import Pokemon from 'models/pokemon';
import PokemonList from 'components/PokeList';

const Pokedex = () => {
    
    const [searchText, setSearchText] = useState<string>("");
    const [pokeList, setPokeList] = useState<Pokemon[]>();

    useEffect(()=>{
        PokemonService.getAll().then((pokeList)=> setPokeList(pokeList));
    }, []);

    useEffect(() => {
        PokemonService.getStartWith(searchText).then((pokeList)=>setPokeList(pokeList));
    }, [searchText]);

    return(

    <View style={styles.container}>
        <PokemonSearch searchUpdate={setSearchText}/>
        <View style={styles.list}>
            <PokemonList pokemons={pokeList} />
        </View>
        <StatusBar style="light" />
    </View> 
    )

}

export default Pokedex;

