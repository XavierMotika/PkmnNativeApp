import { View , FlatList } from 'react-native';
import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';

import styles from 'pages/team/style';
import LocalStorage from 'data/LocalStorage';
import Card from 'components/Card';
import { useIsFocused } from '@react-navigation/native';

interface Props {
  navigation : any
}

const Team = ({navigation}: Props) => {

  const isFocused = useIsFocused()

  if (isFocused) return(
    <View style={styles.container}>
      <FlatList data={LocalStorage.getTeam()} renderItem={(id) =><Card pokemonId={id.item} navigation={navigation}/>}/>
      <StatusBar style="light" />
    </View> 
    )

}

export default Team;