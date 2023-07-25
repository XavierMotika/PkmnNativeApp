import { Image, Text, View } from 'react-native';
import CircleButton from 'components/CircleButton';
import Title from 'components/Title';
import { StatusBar } from 'expo-status-bar';

import styles from 'pages/mainPage/style';

const PlaceholderImage : {uri : string} = require('C:/Users/Stagiaire/Documents/workspace/front/PokemonNativeApp/assets/images/Kanto.png');

const MainPage = () => {

    function goToTeam() {
        throw new Error('Function not implemented.');
      }
    
      function goToDex() {
        throw new Error('Function not implemented.');
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
          <CircleButton buttonLabel='Equipe' onPress={null} />
          <CircleButton buttonLabel='Pokédex' onPress={null} />
          <CircleButton buttonLabel='Quitter' onPress={null} />
      </View>
      <StatusBar style="auto" />
    </View> 
    )

}

export default MainPage;

