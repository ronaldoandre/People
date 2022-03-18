import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native'
import PeoplePage from './src/pages/PeoplePage';
import PeopleDatailPage from './src/pages/PeopleDetailPage';

 const Stack = createNativeStackNavigator();

 
 const Routes = () =>{
    return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='PeoplePage' 
      screenOptions={{
      headerStyle:  style.container,
      headerTitleAlign: 'center',
      headerTintColor: 'white',
      headerTitleStyle: style.title}} >

      <Stack.Screen name="PeoplePage"
      component={PeoplePage}
      options={{ title: 'Pessoas'}} />


       <Stack.Screen name="PeopleDatail"
      component={PeopleDatailPage}
      options={({route}) => {
        const peopleName = route.params.people.name.first;
        return{
          title: peopleName
        }
      }}
      />

    </Stack.Navigator>
  </NavigationContainer>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#6ca2f7',
        
    },
  
    title: {
        fontSize: 40,
        color: '#fff'
    }
  })

  export default Routes;