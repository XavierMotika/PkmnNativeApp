import {Image, Text, View, FlatList, Button, GestureResponderEvent} from "react-native";
import styles from "./style";
import ChipType from "components/ChipType";
import PokemonService from "services/pokemonService";

const Details = ({route , navigation}: any) => {
const { picture ,id, name,hp,cp,types} = route.params;

function addZeroes (id : number) {
    if (id < 10) {
        return "000"
    } else if (id < 100) {
        return "00"
    } else return "0"
}
    function setColor(cp: number, testNumber : number): import("react-native").ColorValue | undefined {
        const test : number = cp/testNumber*100;
        const colors : string [] = ["#FA0000","#FA7F00","#FAFA00","#7FFA00","#00FA00","#00FA7F","#00FAFA","#007FFA","#7F00FA"];
        let interation : number = 9;
        for (let i = 100; i > 0 ; i=i-10 ){
            if (i < test) {
                return colors[interation];
            }
            interation--;
        }
        return colors[0];
    }

    function addToTeam(): void {
        PokemonService.addToTeam(id);
    }

    function goToEdit(): void {
        navigation.navigate("Edit", ({picture : picture, id: id, name: name, hp: hp, cp: cp, types : types }));
    }

  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text  style={styles.title}>
                Numéro #{addZeroes(id)}{id} : {name}
            </Text>
            <Image source={{uri : picture}} style={styles.image}/>
            <FlatList style={styles.list} data={types} numColumns={2} columnWrapperStyle={{justifyContent : "space-around"}}
            renderItem={(type) => <ChipType typeId={type.item}/>}/>
            <View style={{flexDirection:"column", paddingHorizontal:20, paddingVertical:10}}>
                <Text style={styles.dataTitle}>
                    Points de vie : 
                </Text>
                <View style={{alignSelf:"flex-start", width:(hp/400*300),minWidth: 50, borderWidth: 1, borderRadius: 20, backgroundColor:(setColor(hp,350))}}>
                    <Text style={{alignSelf: "center",fontSize: 20,  maxHeight: 30, }}>
                        {hp}
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:"column", paddingHorizontal:20, paddingVertical:10}}>
                <Text style={styles.dataTitle}>
                    Puissance de combat :
                </Text>
                <View style={{alignSelf:"flex-start", width:(cp/4500*300),minWidth: 50, borderWidth: 1, borderRadius: 20, backgroundColor:(setColor(cp,4500))}}>
                    <Text style={{alignSelf: "center",fontSize: 20,  maxHeight: 30, }}>
                        {cp}
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.bottom}>
                <Button title="Ajouter à l'équipe"  color="#DF0101" onPress={addToTeam}/>
                <Button title="Editer le pokémon" color="#DF0101" onPress={goToEdit}/>
        </View>
    </View>
  );
};

export default Details;
