import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    titleContainer : {
        flex: 1,
        borderStyle: 'solid',
        backgroundColor: '#aaa',
        borderColor : '#000',
        padding : 10,
        borderWidth : 1,
        
    },
    optionsRow: {
        flex: 1.2,
        alignItems: 'center',
        flexDirection: 'row',
      },
    optionsText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageContainer: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });

  export default styles;