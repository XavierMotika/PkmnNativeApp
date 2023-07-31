
import {Pressable, Text} from "react-native"
import ChipType from "components/ChipType";
import {useState} from "react";

interface Props {
    typeId : number;
    pokemonTypes : number [];
    setPokemonTypes : Function;
    error: Function;
}



const PressableChipType = ({ typeId ,pokemonTypes, setPokemonTypes, error} : Props) => {

    

    function addOrRemove(typeId: number) : void {
        if (pokemonTypes.length !== 3){
            if (pokemonTypes.includes(typeId)){
                pokemonTypes.splice((pokemonTypes.indexOf(typeId)),1)   
                console.log("removed type : "+typeId)
                error(false);
            } else {
                pokemonTypes.push(typeId);
                console.log("added type : "+typeId)
            }
        } else if (pokemonTypes.length >= 3){
            if (pokemonTypes.includes(typeId)){
                pokemonTypes.splice((pokemonTypes.indexOf(typeId)),1) 
                console.log("removed type : "+typeId)
                error(false);
            }  else {
                error(true);
            }
        }
        setPokemonTypes(pokemonTypes)
    }

    return (
        <Pressable style={{paddingVertical:5}} onPress={() => addOrRemove(typeId)}>
            <ChipType typeId={typeId} />
            
            
        </Pressable>
    )
};

export default PressableChipType;