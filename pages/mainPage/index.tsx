import { Button, Image, Text, View,BackHandler, Alert } from 'react-native'; 

import { StatusBar } from 'expo-status-bar';

import styles from 'pages/mainPage/style';
import LocalStorage from 'data/LocalStorage';
import MapView from 'react-native-maps';
import GetLocation from 'react-native-get-location'
import { useState } from 'react';

const MainPage = ({navigation} : any ) => {

  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()

  useState(()=> {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    }).then(location => {
      setLatitude(location.latitude)
      setLongitude(location.longitude)
    }).catch(error => {
      console.log(error)
      setLatitude(50.633333)
      setLongitude(3.066667)
    })
  })
  

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
        <MapView style={styles.image} initialRegion={{
          latitude: latitude? latitude : 50.633333,
          longitude: longitude? longitude : 3.066667,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}/>
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

