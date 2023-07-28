import {Image, Text, View, FlatList, Button } from "react-native";
import styles from "./style";
import ChipType from "components/ChipType";

const Details = ({route , navigation}: any) => {
const { picture ,id, name,hp,cp,types} = route.params;

function addZeroes (id : number) {
    if (id < 10) {
        return "000"
    } else if (id < 100) {
        return "00"
    } else return "0"
}
    function setColorCP(cp: number): import("react-native").ColorValue | undefined {
        const test : number = cp/4500*300;
        if (test < 75){
            return "#DF0101"
        } else if (test > 75 && test < 150){
            return "#D7DF01"
        } else if (test > 150 && test < 225) {
            return "#01DF01"
        } else if (test > 225){
            return "#01DFD7"
        } 
    }

    function setColorHP(hp: number): import("react-native").ColorValue | undefined {
        const test : number = hp/400*300;
        if (test < 75){
            return "#DF0101"
        } else if (test > 75 && test < 150){
            return "#D7DF01"
        } else if (test > 150 && test < 225) {
            return "#01DF01"
        } else if (test > 225){
            return "#01DFD7"
        } 
    }

  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text  style={styles.title}>
                Numéro #{addZeroes(id)}{id} : {name}
            </Text>
            <Image source={{uri : picture}} style={styles.image}/>
            <FlatList style={styles.list} data={types} numColumns={4} columnWrapperStyle={{justifyContent : "space-around"}}
            renderItem={(type) => <ChipType typeId={type.item}/>}/>
            <View style={{flexDirection:"column", paddingHorizontal:20, paddingVertical:10}}>
                <Text style={styles.dataTitle}>
                    Points de vie : 
                </Text>
                <View style={{alignSelf:"flex-start", width:(hp/400*300),minWidth: 50, borderWidth: 1, borderRadius: 20, backgroundColor:(setColorHP(hp))}}>
                    <Text style={{alignSelf: "center",fontSize: 20,  maxHeight: 30, }}>
                        {hp}
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:"column", paddingHorizontal:20, paddingVertical:10}}>
                <Text style={styles.dataTitle}>
                    Puissance de combat :
                </Text>
                <View style={{alignSelf:"flex-start", width:(cp/4500*300),minWidth: 50, borderWidth: 1, borderRadius: 20, backgroundColor:(setColorCP(cp))}}>
                    <Text style={{alignSelf: "center",fontSize: 20,  maxHeight: 30, }}>
                        {cp}
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.bottom}>
                <Button title="Ajouter à l'équipe"  color="#DF0101"/>
                <Button title="Editer le pokémon" color="#DF0101"/>
        </View>
    </View>
  );
};

export default Details;
