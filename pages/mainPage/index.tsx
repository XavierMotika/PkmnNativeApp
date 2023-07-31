import { Button, Image, Text, View,BackHandler, Alert } from 'react-native'; 

import { StatusBar } from 'expo-status-bar';

import styles from 'pages/mainPage/style';
import LocalStorage from 'data/LocalStorage';

const PlaceholderImage : {uri : string} = require('../../assets/images/Kanto.png'); //à changer avec un API dans le futur

const MainPage = ({navigation} : any ) => {

    function goToTeam () {
        navigation.navigate("Team")
      }
    
    function goToDex() {
        navigation.navigate("Pokedex")
      }

    function exitApp() {
      Alert.alert("Quitter l'application", 'Etes-vous sûr ?', [
        {
          text: 'Non',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Oui', onPress: () => ( 
          LocalStorage.resetStorage(),
          navigation.navigate("Login"),
          BackHandler.exitApp())},
      ]);
      return true;
    }

    return(

    <View style={styles.container}>

      
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.optionsText}>
        <Text >Click on the icons below to navigate the app</Text>
      </View> 
      <View style={styles.optionsRow}>
        <View style={styles.button}>
          <Button title='Equipe' onPress={goToTeam} color='#DF0101'/>
        </View>
        <View style={styles.button}>
          <Button title='Pokédex' onPress={goToDex} color='#DF0101'/>
        </View>
        <View style={styles.button}>
          <Button title='Quitter' onPress={exitApp} color='#DF0101'/>
        </View>
      </View>
      <StatusBar style="light" />
    </View> 
    )

}

export default MainPage;

