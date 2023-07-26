import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 10,
    },
    inputContainer: {
      flex: 1,  
      paddingLeft: 90,
      paddingRight: 90,
      paddingTop: 50,
    },
    bottomContainer:{
      flex: 1,
      paddingTop: 25,
    },
    input:{
      borderStyle: 'solid',
      padding: 5,
      margin: 1,
      borderColor : '#000000',
      borderWidth : 1,
      backgroundColor : '#FFFFFF'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',

    },
  });

export default styles;