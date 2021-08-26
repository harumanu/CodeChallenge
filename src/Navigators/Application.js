import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Jobs from '@/Containers/Jobs';
import Job from '@/Containers/Job';
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { SafeAreaView, StatusBar } from 'react-native'
import { Colors } from '../Theme/Colors';

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {

  return (
    <SafeAreaView style={{backgroundColor: Colors.background, flex: 1, }}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator>
          <Stack.Screen 
            name="Campaigns" 
            component={Jobs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Job" 
            component={Job} 
            options={{
              animationEnabled: false,
              headerTransparent: true,
              headerBackTitleStyle: {
                color: Colors.white,
              },
              headerTintColor: Colors.white,
              headerStyle: {
                backgroundColor: 'transparent',
                height: 80,
              },
              headerTitleStyle: {
                color: Colors.white,
              }
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
