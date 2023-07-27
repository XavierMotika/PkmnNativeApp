import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    button:{
      flex: 1,
      padding: 5,
    },
    container:{
        flex: 1,
        borderColor: "#DF0101",
        shadowColor: "#000",
        borderWidth: 1,
        margin: 5,
        height: 80,
        width: 80,
        borderRadius: 5,

    },
    image:{
        flex: 1,
        height: 70,
        width: 70, 
        alignSelf: "center"
    }
  });

export default styles;