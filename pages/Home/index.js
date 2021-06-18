// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Usuarios from '../Cadastro/index';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Sair() {
  return (null)
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'User':
              iconName = 'people';
              break;
            case 'Off':
              iconName = 'exit';
              break;
            default:
              iconName = 'ellipsis-horizontal-circle';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1E90FF',
        inactiveTintColor: '#777',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>

      <Tab.Screen name="User" component={Usuarios}/>

      <Tab.Screen name="Off" component={Sair}/>
    </Tab.Navigator>
  );
}
