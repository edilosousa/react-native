import React, {useEffect, useMemo, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from './contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Filmes from './pages/Filmes';

const Stack = createStackNavigator();

export default function routes() {
  const [token,setToken] = useState(null);
  const authContext = useMemo(() =>{
    return{
      signIn: async () => {
        const valToken = AsyncStorage.getItem('@token');
        setToken(valToken);
      },
      signOut:() => {
        AsyncStorage.removeItem('@token');
        setToken(null);
      }
    }
  },[]);

  const getToken = async () => {
    try{
      const valToken = await AsyncStorage.getItem('@token');
      console.log(valToken);
      if(valToken !== null){
        setToken(valToken);
      }else{

      }
    }catch(erro){
      setToken(null);
    }
  }
  useEffect(() => {
    getToken();
  }, [])
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {token ? (
            <Stack.Screen name="Filmes" component={Filmes} />
            // <Stack.Screen name="Dashboard" component={Dashboard} />
          ) : (
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
