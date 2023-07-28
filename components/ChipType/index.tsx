
import {View, Text} from "react-native"
import styles from "./style";
import PokemonTypeService from "services/typeService";
import PokemonType from "models/pokemonType";
import {useEffect,useState} from "react";

interface Props {
  typeId : number;
}

const ChipType = ({ typeId }: Props ) => {

    const [type,findType] = useState<PokemonType>();
    useEffect(()=>{
        PokemonTypeService.getTypes().then((types)=> findType(types.find((type) => (type.id ===typeId))));
    },[])
   
    

    function getColor(type : PokemonType | undefined): import("react-native").ColorValue | undefined {
        if (type !== undefined){
            return "#"+type.color;
        } else return "lightgrey"
        
    }

    function getLabel(type : PokemonType | undefined): import("react").ReactNode {
        if (type !== undefined){
            return type.label;
        } else return "inconnu"
    }

    return <Text style={{backgroundColor: getColor(type), fontSize: 18 , borderRadius: 5, borderWidth:1,
    paddingVertical: 4,paddingHorizontal: 10, color:"#FFFFFFFF", }}> 
    
    {getLabel(type)}</Text>
    

};

export default ChipType;


