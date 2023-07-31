
import { NavigationContainer } from '@react-navigation/native';
import Login from 'pages/login';
import MainPage from 'pages/mainPage';
import Pokedex from 'pages/pokedex';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Team from 'pages/team';
import Details from 'pages/details';
import Edit from 'pages/edit';




export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerStyle:{ backgroundColor : '#DF0101'}, 
        headerTintColor: "#fff", headerTitleStyle: {fontWeight: 'bold'} , }}>   
            <Stack.Screen name="Login" component={Login} options={{ title: 'Connexion'}}/>
            <Stack.Screen name="MainPage" component={MainPage} options={{ title: 'Page Principale'}}/>
            <Stack.Screen name="Pokedex" component={Pokedex} options={{ title: 'Pokédex'}}/>
            <Stack.Screen name="Team" component={Team} options={{ title: 'Equipe'}}/>
            <Stack.Screen name="Details" component={Details} options={{ title : 'Fiche Pokémon'}}/>
            <Stack.Screen name="Edit" component={Edit} options={{ title : 'Editer le Pokémon'}}/>
          </Stack.Navigator>
      } 
    </NavigationContainer>
    )
}


