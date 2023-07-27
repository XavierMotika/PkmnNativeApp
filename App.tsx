
import { NavigationContainer } from '@react-navigation/native';
import Login from 'pages/login';
import MainPage from 'pages/mainPage';
import Pokedex from 'pages/pokedex';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthenticationService from 'services/Authentication';
import Team from 'pages/team';




export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(AuthenticationService.isAuthenticated);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {
        isAuthenticated? (
          <Stack.Navigator initialRouteName="MainPage" screenOptions={{headerStyle:{ backgroundColor : '#DF0101'}, 
          headerTintColor: "#fff", headerTitleStyle: {fontWeight: 'bold'} , }}>
            <Stack.Screen name="MainPage" component={MainPage} options={{ title: 'Page Principale'}}/>
            <Stack.Screen name="Pokedex" component={Pokedex} options={{ title: 'Pokédex'}}/>
            <Stack.Screen name="Team" component={Team} options={{ title: 'Equipe'}}/>
          </Stack.Navigator>
          ):(
          <Login setIsAuthenticated={setIsAuthenticated} />
          )
      } 
    </NavigationContainer>

    )
}


