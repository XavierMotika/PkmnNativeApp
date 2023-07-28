import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        padding: 10,
        borderWidth: 1,
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
    rowData : {
        flexDirection: "row",
        justifyContent:"space-evenly"
    },
    rowBloc : {
        flex:1,
        flexDirection: "column",
        justifyContent:"space-evenly"
    },
    dataTitle : {
        alignSelf: "center",
        fontSize: 15,
    },
    data : {
        alignSelf: "center",
        fontSize: 30,
    },
    list : {
        marginBottom:10,
        alignSelf:"center",
        width: 300
    },
    
  });

export default styles;