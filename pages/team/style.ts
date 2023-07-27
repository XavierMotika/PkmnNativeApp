import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: '#fff',

      justifyContent: 'center',
      
    },
    titleContainer : {
        flex: 1,
        borderStyle: 'solid',
        backgroundColor: '#DF0101',
        borderColor : '#000',
        padding : 10,
        borderWidth : 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    optionsRow: {
        flex: 1.2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10
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