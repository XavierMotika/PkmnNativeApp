
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

    const [color,setColor] = useState<string>(borderColor());

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
        setColor(borderColor)
        setPokemonTypes(pokemonTypes)
    }

    function borderColor(): string {
        if (pokemonTypes.includes(typeId)){
            return "#00CB00"
        } else return "#CB0000"
    }

    return (
        <Pressable style={{borderColor:color, borderWidth:4, margin:1, borderRadius:25}} onPress={() => addOrRemove(typeId)}>
            <ChipType typeId={typeId} />
        </Pressable>
    )
};

export default PressableChipType;