import {Image, Text, View, FlatList } from "react-native";
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
  return (
    <View style={styles.container}>
        <Text  style={styles.title}>
               Numéro #{addZeroes(id)}{id} : {name}
        </Text>
        <Image source={{uri : picture}} style={styles.image}/>

        <FlatList style={styles.list} data={types} numColumns={4} columnWrapperStyle={{justifyContent : "space-around"}}
        renderItem={(type) => <ChipType typeId={type.item}/>}/>

        <View style={styles.rowData}>
            <View style={styles.rowBloc}>
                <Text style={styles.dataTitle}>
                    Points de vie
                </Text>
                <Text style={styles.data}>
                    {hp}
                </Text>
            </View> 
            <View style={styles.rowBloc}>
                <Text style={styles.dataTitle}>
                    Puissance de combat
                </Text>
                <Text style={styles.data}>
                    {cp}
                </Text>
            </View>
        </View>
    </View>
  );
};

export default Details;
