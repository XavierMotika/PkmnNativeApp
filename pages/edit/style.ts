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
    data : {
        alignSelf:"flex-start", 
        flex: 1
    },

    list : {
        marginBottom:10,
        alignSelf:"center",
        width: 300
    },
    bottom :{
        flexDirection: "row",
        justifyContent:"space-evenly",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    
  });

export default styles;