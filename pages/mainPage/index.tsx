import { Image, Text, View } from 'react-native';
import CircleButton from 'components/CircleButton';
import Title from 'components/Title';
import { StatusBar } from 'expo-status-bar';

import styles from 'pages/mainPage/style';
import LocalStorage from 'data/LocalStorage';
import Login from 'pages/login';

const PlaceholderImage : {uri : string} = require('D:/Env/workspace/front/PkmnNativeApp/assets/images/Kanto.png');

const MainPage = () => {

    function goToTeam ()  {
        null
      }
    
    function goToDex() {
        null
      }

    function exitApp() {
      LocalStorage.resetStorage();
    }

    return(

    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title/>
      </View>
      
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      <View style={styles.optionsText}>
        <Text >Click on the icons below to navigate the app</Text>
      </View>
      
      <View style={styles.optionsRow}>
          <CircleButton buttonLabel='Equipe' onPress={goToTeam} />
          <CircleButton buttonLabel='Pokédex' onPress={goToDex} />
          <CircleButton buttonLabel='Quitter' onPress={exitApp} />
      </View>
      <StatusBar style="light" />
    </View> 
    )

}

export default MainPage;

