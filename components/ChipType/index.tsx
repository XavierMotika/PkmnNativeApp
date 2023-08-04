
import {View, Text} from "react-native"
import PokemonTypeService from "services/typeService";
import PokemonType from "models/pokemonType";
import {useEffect,useState} from "react";
import { useIsFocused } from "@react-navigation/native";

interface Props {
  typeId : number;
}

const ChipType = ({ typeId }: Props ) => {
    const isFocused = useIsFocused();
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

    if (isFocused) return (
        <View style={[{backgroundColor: getColor(type)}, {borderRadius: 20, borderWidth:1, paddingVertical: 4,paddingHorizontal: 10, width: 102, shadowColor: '#000',
        shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 4,elevation: 5,}]}>
            <Text style={{fontSize: 18 , color:"#FFFFFFFF", alignSelf:"center" }}> {getLabel(type)} </Text>
        </View>
    )
    

};

export default ChipType;


