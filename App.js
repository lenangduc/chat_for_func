// import React from 'react';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   DATABASE_URL,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUMENT_ID,
// } from 'react-native-dotenv';

const Stack = createStackNavigator();

class App extends React.Component {
  UNSAFE_componentWillMount() {
    // Initialize Firebase

    var config = {
      apiKey: "AIzaSyBVE804Ab6qMqJ1_nR3VfeY1BMlJp-LvNQ",
      authDomain: "chat-a3412.firebaseapp.com",
      databaseURL: "https://chat-a3412-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "chat-a3412",
      storageBucket: "chat-a3412.appspot.com",
      messagingSenderId: "941717047208",
      appId: "1:941717047208:web:0c1fffc5692a9313edff9d",
      measurementId: "G-25P9DMEYVW"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthLoading">
          <Stack.Screen
            name="AuthLoading"
            component={AuthLoadingScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={HomeScreen.navigationOptions}
          />
          <Stack.Screen
            name="Auth"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={ChatScreen.navigationOptions}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
