import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding : 10,
        justifyContent:"space-between"
    },
    top:{

    },
    image : {
        height: 300,
        width: 300,
        alignSelf: "center",
        marginVertical: 10
    },
    title :{
        alignSelf: "center",
        fontSize: 25,
    },
    dataTitle : {
        fontSize: 20,
    },
    list : {
        marginBottom:10,
        alignSelf:"center",
        width: 300
    },
    bottom :{
        flexDirection: "row",
        justifyContent:"space-evenly",
    }
    
  });

export default styles;