import {Image, Text, View, FlatList, Button, GestureResponderEvent} from "react-native";
import styles from "./style";
import ChipType from "components/ChipType";
import PokemonService from "services/pokemonService";
import Pokemon from "models/pokemon";
import {useEffect, useState} from "react";
import {useIsFocused } from "@react-navigation/native";
import LocalStorage from "data/LocalStorage";

const Details = ({route , navigation}: any) => {
const {id} = route.params;
const isFocused = useIsFocused()
const [pokemon,setPokemon] = useState<Pokemon>();
useEffect(()=>{PokemonService.getOne(id).then((pokemon)=>setPokemon(pokemon))},[isFocused]);

function addZeroes (id : number) {
    return String(id).padStart(4,"0");
}
    function setColor(cp: number, testNumber : number): import("react-native").ColorValue | undefined {
        const test : number = cp/testNumber*9;
        const colors : string [] = ["#FA0000","#FA7F00","#FAFA00","#7FFA00","#00FA00","#00FA7F","#00FAFA","#007FFA","#7F00FA"];
        return colors[(Math.floor(test))];
    }

    function addOrRemove(pId : number): void {
        if(LocalStorage.getTeam().includes(pId)){
            PokemonService.removeFromTeam(id)
          }else (
            PokemonService.addToTeam(id)
            );
            navigation.navigate("Team")
    }

    function goToEdit(): void {
        navigation.navigate("Edit", ({picture : pokemon?.picture, pokemonId: pokemon?.id, pokemonName: pokemon?.name, pokemonHp: pokemon?.hp, pokemonCp: pokemon?.cp, pokemonTypes : pokemon?.types }));
    }
  function isInTeam(pId : number): string {
      if(LocalStorage.getTeam().includes(pId)){
        return "Retirer de l'équipe";
      }else return "Ajouter à l'équipe";
  }

if (pokemon!== undefined) {
    if (isFocused) return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text  style={styles.title}>
                Numéro #{addZeroes(pokemon.id)} : {pokemon.name}
            </Text>
            <Image source={{uri : pokemon.picture}} style={styles.image}/>
            <FlatList style={styles.list} data={pokemon.types} numColumns={2} columnWrapperStyle={{justifyContent : "space-around"}}
            renderItem={(type) => <ChipType typeId={type.item}/>}/>
            <View style={{flexDirection:"column", paddingHorizontal:20, paddingVertical:10}}>
                <Text style={styles.dataTitle}>
                    Points de vie : 
                </Text>
                <View style={{alignSelf:"flex-start", width:(pokemon.hp/400*300),minWidth: 50, borderWidth: 1, borderRadius: 20, backgroundColor:(setColor(pokemon.hp,350))}}>
                    <Text style={{alignSelf: "center",fontSize: 20,  maxHeight: 30, }}>
                        {pokemon.hp}
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:"column", paddingHorizontal:20, paddingVertical:10}}>
                <Text style={styles.dataTitle}>
                    Puissance de combat :
                </Text>
                <View style={{alignSelf:"flex-start", width:(pokemon.cp/4500*300),minWidth: 50, borderWidth: 1, borderRadius: 20, backgroundColor:(setColor(pokemon.cp,4500))}}>
                    <Text style={{alignSelf: "center",fontSize: 20,  maxHeight: 30, }}>
                        {pokemon.cp}
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.bottom}>
                <Button title={isInTeam(id)}  color="#DF0101" onPress={()=>addOrRemove(id)}/>
                <Button title="Editer le pokémon" color="#DF0101" onPress={goToEdit}/>
        </View>
    </View>
  );
}
};

export default Details;
